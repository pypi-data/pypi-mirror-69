"""
Main interface for discovery service.

Usage::

    import boto3
    from mypy_boto3.discovery import (
        ApplicationDiscoveryServiceClient,
        Client,
        DescribeAgentsPaginator,
        DescribeContinuousExportsPaginator,
        DescribeExportConfigurationsPaginator,
        DescribeExportTasksPaginator,
        DescribeTagsPaginator,
        ListConfigurationsPaginator,
        )

    session = boto3.Session()

    client: ApplicationDiscoveryServiceClient = boto3.client("discovery")
    session_client: ApplicationDiscoveryServiceClient = session.client("discovery")

    describe_agents_paginator: DescribeAgentsPaginator = client.get_paginator("describe_agents")
    describe_continuous_exports_paginator: DescribeContinuousExportsPaginator = client.get_paginator("describe_continuous_exports")
    describe_export_configurations_paginator: DescribeExportConfigurationsPaginator = client.get_paginator("describe_export_configurations")
    describe_export_tasks_paginator: DescribeExportTasksPaginator = client.get_paginator("describe_export_tasks")
    describe_tags_paginator: DescribeTagsPaginator = client.get_paginator("describe_tags")
    list_configurations_paginator: ListConfigurationsPaginator = client.get_paginator("list_configurations")
"""
from mypy_boto3_discovery.client import (
    ApplicationDiscoveryServiceClient as Client,
    ApplicationDiscoveryServiceClient,
)
from mypy_boto3_discovery.paginator import (
    DescribeAgentsPaginator,
    DescribeContinuousExportsPaginator,
    DescribeExportConfigurationsPaginator,
    DescribeExportTasksPaginator,
    DescribeTagsPaginator,
    ListConfigurationsPaginator,
)


__all__ = (
    "ApplicationDiscoveryServiceClient",
    "Client",
    "DescribeAgentsPaginator",
    "DescribeContinuousExportsPaginator",
    "DescribeExportConfigurationsPaginator",
    "DescribeExportTasksPaginator",
    "DescribeTagsPaginator",
    "ListConfigurationsPaginator",
)
