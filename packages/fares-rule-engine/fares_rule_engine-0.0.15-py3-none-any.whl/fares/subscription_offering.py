from dataclasses import dataclass
from datetime import datetime
from enum import Enum

from rule_engine.operator import In, Equals, AnyIn
from rule_engine.rule import RuleSet, Rule
from typing import List, Union


@dataclass(frozen=True)
class InterClusterApplicability:
    origin_cluster_id: str
    destination_cluster_id: str


@dataclass
class ZoneWideApplicability:
    zone_id: str


@dataclass
class Applicability:
    type: str
    rules: List[Union[InterClusterApplicability, ZoneWideApplicability]]


class SubscriptionType(Enum):
    TRIAL = "TRIAL"
    STANDARD = "STANDARD"
    HIDDEN = "HIDDEN"


@dataclass
class SubscriptionOffering:
    id: str
    name: str
    rides: int
    currency: str
    validity_in_days: int
    is_carry_forward: bool
    activation_date: datetime
    deactivation_date: datetime
    zone_id: str
    amount: int
    subscription_type: SubscriptionType
    applicability: Applicability
    created_at: datetime

    @property
    def applicability_type(self):
        return self.applicability.type

    @property
    def applicability_rules(self):
        return self.applicability.rules

    def usage_applicability_rules(self) -> RuleSet:
        rules = []
        if self.applicability_type == "ZONE_WIDE":
            rule = Rule(
                "slot.zone_id", In(), [a.zone_id for a in self.applicability_rules]
            )
            rules.append(rule)
        elif self.applicability_type == "INTER_CLUSTER":
            origin_clusters = {
                app.origin_cluster_id for app in self.applicability_rules
            }
            destination_clusters = {
                app.destination_cluster_id for app in self.applicability_rules
            }
            all_clusters = origin_clusters.union(destination_clusters)
            # Business rule currently states that the user can travel if booking origin or destination cluster,
            # matches the subscription origin or destination cluster
            od_match_rule = Rule("slot.od_cluster", AnyIn(), all_clusters)
            rules.append(od_match_rule)

        return RuleSet(rules)

    def purchase_applicability_rules(self) -> RuleSet:
        rules = []

        if SubscriptionType.TRIAL == self.subscription_type:
            rules.append(Rule("user.blacklisted", Equals(), False))
            rules.append(Rule("user.pass_purchase_count", Equals(), 0))
            rules.append(Rule("user.new_device", Equals(), True))

        return RuleSet(rules)

    def cluster_applicability_rules(self) -> RuleSet:
        rules = []
        if self.applicability_type == "ZONE_WIDE":
            rule = Rule(
                "clusters.zone_id", In(), [a.zone_id for a in self.applicability_rules]
            )
            rules.append(rule)
        elif self.applicability_type == "INTER_CLUSTER":
            od_list = [
                (app.origin_cluster_id, app.destination_cluster_id)
                for app in self.applicability_rules
            ]
            reverse_od_list = [
                (app.destination_cluster_id, app.origin_cluster_id)
                for app in self.applicability_rules
            ]
            valid_od_combinations = od_list + reverse_od_list
            # Business use case currently states that if a user can go from cluster A to B using a subscription, the
            # user shd be able to travel from cluster B to A
            od_match_rule = Rule("clusters.od_cluster", In(), valid_od_combinations)
            rules.append(od_match_rule)

        return RuleSet(rules)

    @classmethod
    def from_json(cls, dikt):
        def _inter_cluster(rules):
            applicability_rules = {
                (app["origin_cluster_id"], app["destination_cluster_id"])
                for app in rules
            }
            return [
                InterClusterApplicability(applicability_rule[0], applicability_rule[1])
                for applicability_rule in applicability_rules
            ]

        def _zone_wide(rules):
            return [ZoneWideApplicability(rule["zone_id"]) for rule in rules]

        def _applicability(dikt):
            type = dikt["type"]
            rules = dikt["rules"]
            if type == "ZONE_WIDE":
                return Applicability("ZONE_WIDE", _zone_wide(rules))
            elif type == "INTER_CLUSTER":
                return Applicability("INTER_CLUSTER", _inter_cluster(rules))

        return SubscriptionOffering(
            id=dikt["id"],
            name=dikt["name"],
            rides=dikt["rides"],
            currency=dikt["currency"],
            validity_in_days=dikt["validity_in_days"],
            is_carry_forward=dikt["is_carry_forward"],
            activation_date=dikt["activation_date"],
            deactivation_date=dikt["deactivation_date"],
            zone_id=dikt["zone_id"],
            amount=dikt["amount"],
            subscription_type=SubscriptionType(dikt["subscription_type"]),
            applicability=_applicability(dikt["applicability"]),
            created_at=datetime.fromisoformat(dikt["created_at"]),
        )
