"""
Main interface for guardduty service.

Usage::

    import boto3
    from mypy_boto3.guardduty import (
        Client,
        GuardDutyClient,
        ListDetectorsPaginator,
        ListFiltersPaginator,
        ListFindingsPaginator,
        ListIPSetsPaginator,
        ListInvitationsPaginator,
        ListMembersPaginator,
        ListOrganizationAdminAccountsPaginator,
        ListThreatIntelSetsPaginator,
        )

    session = boto3.Session()

    client: GuardDutyClient = boto3.client("guardduty")
    session_client: GuardDutyClient = session.client("guardduty")

    list_detectors_paginator: ListDetectorsPaginator = client.get_paginator("list_detectors")
    list_filters_paginator: ListFiltersPaginator = client.get_paginator("list_filters")
    list_findings_paginator: ListFindingsPaginator = client.get_paginator("list_findings")
    list_ip_sets_paginator: ListIPSetsPaginator = client.get_paginator("list_ip_sets")
    list_invitations_paginator: ListInvitationsPaginator = client.get_paginator("list_invitations")
    list_members_paginator: ListMembersPaginator = client.get_paginator("list_members")
    list_organization_admin_accounts_paginator: ListOrganizationAdminAccountsPaginator = client.get_paginator("list_organization_admin_accounts")
    list_threat_intel_sets_paginator: ListThreatIntelSetsPaginator = client.get_paginator("list_threat_intel_sets")
"""
from mypy_boto3_guardduty.client import GuardDutyClient, GuardDutyClient as Client
from mypy_boto3_guardduty.paginator import (
    ListDetectorsPaginator,
    ListFiltersPaginator,
    ListFindingsPaginator,
    ListIPSetsPaginator,
    ListInvitationsPaginator,
    ListMembersPaginator,
    ListOrganizationAdminAccountsPaginator,
    ListThreatIntelSetsPaginator,
)


__all__ = (
    "Client",
    "GuardDutyClient",
    "ListDetectorsPaginator",
    "ListFiltersPaginator",
    "ListFindingsPaginator",
    "ListIPSetsPaginator",
    "ListInvitationsPaginator",
    "ListMembersPaginator",
    "ListOrganizationAdminAccountsPaginator",
    "ListThreatIntelSetsPaginator",
)
