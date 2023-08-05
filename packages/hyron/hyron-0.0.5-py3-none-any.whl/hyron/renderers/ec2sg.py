import json
from ipaddress import ip_network

from .renderer import Renderer
from ..rules.rule_set import Rule
from ..prefixlists.prefix_list import PrefixList
from ..apps.application import Application, PortApplication
from ..constants import ACTION_PERMIT

__all__ = [
    "AwsEc2SecurityGroupRenderer"
]


def _handle_app(app: Application):
    return {
        "IpProtocol": str(app.protocol)
    }


def _handle_port_app(app: PortApplication):
    args = _handle_app(app)
    args.update({
        "FromPort": app.from_port,
        "ToPort": app.to_port
    })
    return args


_APP_HANDLERS = {
    Application.TCP: _handle_port_app,
    Application.UDP: _handle_port_app
}

_CIDR_NAMES = {
    4: "CidrIp",
    6: "CidrIpv6"
}

_LIST_NAMES = {
    4: "IpRanges",
    6: "Ipv6Ranges"
}


def _build_ranges(desc, pfxlist: PrefixList):
    ranges = {}
    for prefix in pfxlist.prefixes:
        ver = ip_network(prefix).version
        range_type = _LIST_NAMES[ver]

        if range_type not in ranges:
            ranges[range_type] = []

        ranges[range_type].append({
            _CIDR_NAMES[ver]: prefix,
            "Description": desc
        })
    return ranges


class AwsEc2SecurityGroupRenderer(Renderer, register="ec2sg"):
    NAMED_IP_PROTOCOLS = {
        "icmp": 1,
        "icmpv6": 53,
        "tcp": 6,
        "udp": 17
    }

    def __init__(self, **config):
        super().__init__(**config)
        self.egress = False
        self.preprocess_entities = True
        self.description = ""
        self.application_entries = {}

    def _initialise(self):
        self.permissions = []
        self.egress = self.config.get("direction", "ingress") == "egress"
        self.description = self.metadata.get(
            "description", self.config.get(
                "description", "autosec"))

    def _preprocess_prefix_list(self, prefixes):
        pass

    def _preprocess_app(self, app: Application):
        entry = {
            "IpRanges": [],
            "Ipv6Ranges": [],
            "PrefixListIds": [],
            "UserIdGroupPairs": [],
        }
        entry.update(_APP_HANDLERS.get(app.protocol_id, _handle_app)(app))
        self.application_entries[app.name] = entry

    def _process_rule(self, rule: Rule):
        if rule.action == ACTION_PERMIT:
            for app in rule.applications.apps:
                interesting_side = "source"
                direction = "from"

                if self.egress:
                    interesting_side = "destination"
                    direction = "to"

                pfxs = getattr(rule, interesting_side)
                desc = f"{self.description}_{app.name}_{direction}_{pfxs.name}"

                permission = self.application_entries[app.name]
                ranges = _build_ranges(desc, pfxs)

                for range_type in ("IpRanges", "Ipv6Ranges"):
                    permission[range_type] += ranges.get(range_type, [])

    def _build_artifacts(self):
        return json.dumps(list(self.application_entries.values()), indent=4)

    @classmethod
    def _format_protocol(cls, protocol):
        if protocol in cls.NAMED_IP_PROTOCOLS:
            return cls.NAMED_IP_PROTOCOLS[protocol]
        return int(protocol)
