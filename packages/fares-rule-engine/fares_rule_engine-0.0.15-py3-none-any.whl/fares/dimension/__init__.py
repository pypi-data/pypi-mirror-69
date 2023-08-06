from fares.dimension.dimension import SlotDimensions, UserDimensions, ClusterDimensions


def inter_cluster_resolver(slot):
    return {
        "slot.od_cluster": (
            slot[SlotDimensions.ORIGIN_CLUSTER_ID],
            slot[SlotDimensions.DESTINATION_CLUSTER_ID],
        ),
        "slot.origin_cluster_id": slot[SlotDimensions.ORIGIN_CLUSTER_ID],
        "slot.destination_cluster_id": slot[SlotDimensions.DESTINATION_CLUSTER_ID],
        "slot.route_id": slot[SlotDimensions.ROUTE_ID],
        "slot.start_time": slot[SlotDimensions.START_TIME],
    }


def zone_resolver(slot):
    return {
        "slot.route_id": slot[SlotDimensions.ROUTE_ID],
        "slot.start_time": slot[SlotDimensions.START_TIME],
        "slot.zone_id": slot.get(SlotDimensions.ZONE_ID),
    }


def resolve_user_dimensions(user):
    return {
        "user.blacklisted": user.get(UserDimensions.BLACKLISTED, False),
        "user.pass_purchase_count": user[UserDimensions.PASS_PURCHASE_COUNT],
        "user.id": user[UserDimensions.ID],
        "user.new_device": user[UserDimensions.NEW_DEVICE],
    }


def resolve_cluster_dimensions(clusters):
    return {
        "clusters.od_cluster": (
            clusters[ClusterDimensions.ORIGIN_CLUSTER_ID],
            clusters[ClusterDimensions.DESTINATION_CLUSTER_ID],
        ),
        "clusters.zone_id": clusters[ClusterDimensions.ZONE_ID],
    }
