"""
Main interface for sms service type definitions.

Usage::

    from mypy_boto3.sms.type_defs import LaunchDetailsTypeDef

    data: LaunchDetailsTypeDef = {...}
"""
from datetime import datetime
import sys
from typing import List

if sys.version_info >= (3, 8):
    from typing import Literal
else:
    from typing_extensions import Literal
if sys.version_info >= (3, 8):
    from typing import TypedDict
else:
    from typing_extensions import TypedDict


__all__ = (
    "LaunchDetailsTypeDef",
    "AppSummaryTypeDef",
    "VmServerAddressTypeDef",
    "VmServerTypeDef",
    "ServerTypeDef",
    "ServerGroupTypeDef",
    "TagTypeDef",
    "CreateAppResponseTypeDef",
    "CreateReplicationJobResponseTypeDef",
    "S3LocationTypeDef",
    "GenerateChangeSetResponseTypeDef",
    "GenerateTemplateResponseTypeDef",
    "UserDataTypeDef",
    "ServerLaunchConfigurationTypeDef",
    "ServerGroupLaunchConfigurationTypeDef",
    "GetAppLaunchConfigurationResponseTypeDef",
    "ServerReplicationParametersTypeDef",
    "ServerReplicationConfigurationTypeDef",
    "ServerGroupReplicationConfigurationTypeDef",
    "GetAppReplicationConfigurationResponseTypeDef",
    "GetAppResponseTypeDef",
    "ConnectorTypeDef",
    "GetConnectorsResponseTypeDef",
    "ReplicationRunStageDetailsTypeDef",
    "ReplicationRunTypeDef",
    "ReplicationJobTypeDef",
    "GetReplicationJobsResponseTypeDef",
    "GetReplicationRunsResponseTypeDef",
    "GetServersResponseTypeDef",
    "ListAppsResponseTypeDef",
    "PaginatorConfigTypeDef",
    "StartOnDemandReplicationRunResponseTypeDef",
    "UpdateAppResponseTypeDef",
)

LaunchDetailsTypeDef = TypedDict(
    "LaunchDetailsTypeDef",
    {"latestLaunchTime": datetime, "stackName": str, "stackId": str},
    total=False,
)

AppSummaryTypeDef = TypedDict(
    "AppSummaryTypeDef",
    {
        "appId": str,
        "name": str,
        "description": str,
        "status": Literal["CREATING", "ACTIVE", "UPDATING", "DELETING", "DELETED", "DELETE_FAILED"],
        "statusMessage": str,
        "replicationStatus": Literal[
            "READY_FOR_CONFIGURATION",
            "CONFIGURATION_IN_PROGRESS",
            "CONFIGURATION_INVALID",
            "READY_FOR_REPLICATION",
            "VALIDATION_IN_PROGRESS",
            "REPLICATION_PENDING",
            "REPLICATION_IN_PROGRESS",
            "REPLICATED",
            "DELTA_REPLICATION_IN_PROGRESS",
            "DELTA_REPLICATED",
            "DELTA_REPLICATION_FAILED",
            "REPLICATION_FAILED",
            "REPLICATION_STOPPING",
            "REPLICATION_STOP_FAILED",
            "REPLICATION_STOPPED",
        ],
        "replicationStatusMessage": str,
        "latestReplicationTime": datetime,
        "launchStatus": Literal[
            "READY_FOR_CONFIGURATION",
            "CONFIGURATION_IN_PROGRESS",
            "CONFIGURATION_INVALID",
            "READY_FOR_LAUNCH",
            "VALIDATION_IN_PROGRESS",
            "LAUNCH_PENDING",
            "LAUNCH_IN_PROGRESS",
            "LAUNCHED",
            "DELTA_LAUNCH_IN_PROGRESS",
            "DELTA_LAUNCH_FAILED",
            "LAUNCH_FAILED",
            "TERMINATE_IN_PROGRESS",
            "TERMINATE_FAILED",
            "TERMINATED",
        ],
        "launchStatusMessage": str,
        "launchDetails": LaunchDetailsTypeDef,
        "creationTime": datetime,
        "lastModified": datetime,
        "roleName": str,
        "totalServerGroups": int,
        "totalServers": int,
    },
    total=False,
)

VmServerAddressTypeDef = TypedDict(
    "VmServerAddressTypeDef", {"vmManagerId": str, "vmId": str}, total=False
)

VmServerTypeDef = TypedDict(
    "VmServerTypeDef",
    {
        "vmServerAddress": VmServerAddressTypeDef,
        "vmName": str,
        "vmManagerName": str,
        "vmManagerType": Literal["VSPHERE", "SCVMM", "HYPERV-MANAGER"],
        "vmPath": str,
    },
    total=False,
)

ServerTypeDef = TypedDict(
    "ServerTypeDef",
    {
        "serverId": str,
        "serverType": Literal["VIRTUAL_MACHINE"],
        "vmServer": VmServerTypeDef,
        "replicationJobId": str,
        "replicationJobTerminated": bool,
    },
    total=False,
)

ServerGroupTypeDef = TypedDict(
    "ServerGroupTypeDef",
    {"serverGroupId": str, "name": str, "serverList": List[ServerTypeDef]},
    total=False,
)

TagTypeDef = TypedDict("TagTypeDef", {"key": str, "value": str}, total=False)

CreateAppResponseTypeDef = TypedDict(
    "CreateAppResponseTypeDef",
    {
        "appSummary": AppSummaryTypeDef,
        "serverGroups": List[ServerGroupTypeDef],
        "tags": List[TagTypeDef],
    },
    total=False,
)

CreateReplicationJobResponseTypeDef = TypedDict(
    "CreateReplicationJobResponseTypeDef", {"replicationJobId": str}, total=False
)

S3LocationTypeDef = TypedDict("S3LocationTypeDef", {"bucket": str, "key": str}, total=False)

GenerateChangeSetResponseTypeDef = TypedDict(
    "GenerateChangeSetResponseTypeDef", {"s3Location": S3LocationTypeDef}, total=False
)

GenerateTemplateResponseTypeDef = TypedDict(
    "GenerateTemplateResponseTypeDef", {"s3Location": S3LocationTypeDef}, total=False
)

UserDataTypeDef = TypedDict("UserDataTypeDef", {"s3Location": S3LocationTypeDef}, total=False)

ServerLaunchConfigurationTypeDef = TypedDict(
    "ServerLaunchConfigurationTypeDef",
    {
        "server": ServerTypeDef,
        "logicalId": str,
        "vpc": str,
        "subnet": str,
        "securityGroup": str,
        "ec2KeyName": str,
        "userData": UserDataTypeDef,
        "instanceType": str,
        "associatePublicIpAddress": bool,
    },
    total=False,
)

ServerGroupLaunchConfigurationTypeDef = TypedDict(
    "ServerGroupLaunchConfigurationTypeDef",
    {
        "serverGroupId": str,
        "launchOrder": int,
        "serverLaunchConfigurations": List[ServerLaunchConfigurationTypeDef],
    },
    total=False,
)

GetAppLaunchConfigurationResponseTypeDef = TypedDict(
    "GetAppLaunchConfigurationResponseTypeDef",
    {
        "appId": str,
        "roleName": str,
        "serverGroupLaunchConfigurations": List[ServerGroupLaunchConfigurationTypeDef],
    },
    total=False,
)

ServerReplicationParametersTypeDef = TypedDict(
    "ServerReplicationParametersTypeDef",
    {
        "seedTime": datetime,
        "frequency": int,
        "runOnce": bool,
        "licenseType": Literal["AWS", "BYOL"],
        "numberOfRecentAmisToKeep": int,
        "encrypted": bool,
        "kmsKeyId": str,
    },
    total=False,
)

ServerReplicationConfigurationTypeDef = TypedDict(
    "ServerReplicationConfigurationTypeDef",
    {"server": ServerTypeDef, "serverReplicationParameters": ServerReplicationParametersTypeDef},
    total=False,
)

ServerGroupReplicationConfigurationTypeDef = TypedDict(
    "ServerGroupReplicationConfigurationTypeDef",
    {
        "serverGroupId": str,
        "serverReplicationConfigurations": List[ServerReplicationConfigurationTypeDef],
    },
    total=False,
)

GetAppReplicationConfigurationResponseTypeDef = TypedDict(
    "GetAppReplicationConfigurationResponseTypeDef",
    {"serverGroupReplicationConfigurations": List[ServerGroupReplicationConfigurationTypeDef]},
    total=False,
)

GetAppResponseTypeDef = TypedDict(
    "GetAppResponseTypeDef",
    {
        "appSummary": AppSummaryTypeDef,
        "serverGroups": List[ServerGroupTypeDef],
        "tags": List[TagTypeDef],
    },
    total=False,
)

ConnectorTypeDef = TypedDict(
    "ConnectorTypeDef",
    {
        "connectorId": str,
        "version": str,
        "status": Literal["HEALTHY", "UNHEALTHY"],
        "capabilityList": List[Literal["VSPHERE", "SCVMM", "HYPERV-MANAGER", "SNAPSHOT_BATCHING"]],
        "vmManagerName": str,
        "vmManagerType": Literal["VSPHERE", "SCVMM", "HYPERV-MANAGER"],
        "vmManagerId": str,
        "ipAddress": str,
        "macAddress": str,
        "associatedOn": datetime,
    },
    total=False,
)

GetConnectorsResponseTypeDef = TypedDict(
    "GetConnectorsResponseTypeDef",
    {"connectorList": List[ConnectorTypeDef], "nextToken": str},
    total=False,
)

ReplicationRunStageDetailsTypeDef = TypedDict(
    "ReplicationRunStageDetailsTypeDef", {"stage": str, "stageProgress": str}, total=False
)

ReplicationRunTypeDef = TypedDict(
    "ReplicationRunTypeDef",
    {
        "replicationRunId": str,
        "state": Literal[
            "PENDING", "MISSED", "ACTIVE", "FAILED", "COMPLETED", "DELETING", "DELETED"
        ],
        "type": Literal["ON_DEMAND", "AUTOMATIC"],
        "stageDetails": ReplicationRunStageDetailsTypeDef,
        "statusMessage": str,
        "amiId": str,
        "scheduledStartTime": datetime,
        "completedTime": datetime,
        "description": str,
        "encrypted": bool,
        "kmsKeyId": str,
    },
    total=False,
)

ReplicationJobTypeDef = TypedDict(
    "ReplicationJobTypeDef",
    {
        "replicationJobId": str,
        "serverId": str,
        "serverType": Literal["VIRTUAL_MACHINE"],
        "vmServer": VmServerTypeDef,
        "seedReplicationTime": datetime,
        "frequency": int,
        "runOnce": bool,
        "nextReplicationRunStartTime": datetime,
        "licenseType": Literal["AWS", "BYOL"],
        "roleName": str,
        "latestAmiId": str,
        "state": Literal[
            "PENDING",
            "ACTIVE",
            "FAILED",
            "DELETING",
            "DELETED",
            "COMPLETED",
            "PAUSED_ON_FAILURE",
            "FAILING",
        ],
        "statusMessage": str,
        "description": str,
        "numberOfRecentAmisToKeep": int,
        "encrypted": bool,
        "kmsKeyId": str,
        "replicationRunList": List[ReplicationRunTypeDef],
    },
    total=False,
)

GetReplicationJobsResponseTypeDef = TypedDict(
    "GetReplicationJobsResponseTypeDef",
    {"replicationJobList": List[ReplicationJobTypeDef], "nextToken": str},
    total=False,
)

GetReplicationRunsResponseTypeDef = TypedDict(
    "GetReplicationRunsResponseTypeDef",
    {
        "replicationJob": ReplicationJobTypeDef,
        "replicationRunList": List[ReplicationRunTypeDef],
        "nextToken": str,
    },
    total=False,
)

GetServersResponseTypeDef = TypedDict(
    "GetServersResponseTypeDef",
    {
        "lastModifiedOn": datetime,
        "serverCatalogStatus": Literal[
            "NOT_IMPORTED", "IMPORTING", "AVAILABLE", "DELETED", "EXPIRED"
        ],
        "serverList": List[ServerTypeDef],
        "nextToken": str,
    },
    total=False,
)

ListAppsResponseTypeDef = TypedDict(
    "ListAppsResponseTypeDef", {"apps": List[AppSummaryTypeDef], "nextToken": str}, total=False
)

PaginatorConfigTypeDef = TypedDict(
    "PaginatorConfigTypeDef", {"MaxItems": int, "PageSize": int, "StartingToken": str}, total=False
)

StartOnDemandReplicationRunResponseTypeDef = TypedDict(
    "StartOnDemandReplicationRunResponseTypeDef", {"replicationRunId": str}, total=False
)

UpdateAppResponseTypeDef = TypedDict(
    "UpdateAppResponseTypeDef",
    {
        "appSummary": AppSummaryTypeDef,
        "serverGroups": List[ServerGroupTypeDef],
        "tags": List[TagTypeDef],
    },
    total=False,
)
