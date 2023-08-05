# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from typing import Union
from .. import utilities, tables

class GetTaskDefinitionResult:
    """
    A collection of values returned by getTaskDefinition.
    """
    def __init__(__self__, family=None, id=None, network_mode=None, revision=None, status=None, task_definition=None, task_role_arn=None):
        if family and not isinstance(family, str):
            raise TypeError("Expected argument 'family' to be a str")
        __self__.family = family
        """
        The family of this task definition
        """
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        __self__.id = id
        """
        The provider-assigned unique ID for this managed resource.
        """
        if network_mode and not isinstance(network_mode, str):
            raise TypeError("Expected argument 'network_mode' to be a str")
        __self__.network_mode = network_mode
        """
        The Docker networking mode to use for the containers in this task.
        """
        if revision and not isinstance(revision, float):
            raise TypeError("Expected argument 'revision' to be a float")
        __self__.revision = revision
        """
        The revision of this task definition
        """
        if status and not isinstance(status, str):
            raise TypeError("Expected argument 'status' to be a str")
        __self__.status = status
        """
        The status of this task definition
        """
        if task_definition and not isinstance(task_definition, str):
            raise TypeError("Expected argument 'task_definition' to be a str")
        __self__.task_definition = task_definition
        if task_role_arn and not isinstance(task_role_arn, str):
            raise TypeError("Expected argument 'task_role_arn' to be a str")
        __self__.task_role_arn = task_role_arn
        """
        The ARN of the IAM role that containers in this task can assume
        """
class AwaitableGetTaskDefinitionResult(GetTaskDefinitionResult):
    # pylint: disable=using-constant-test
    def __await__(self):
        if False:
            yield self
        return GetTaskDefinitionResult(
            family=self.family,
            id=self.id,
            network_mode=self.network_mode,
            revision=self.revision,
            status=self.status,
            task_definition=self.task_definition,
            task_role_arn=self.task_role_arn)

def get_task_definition(task_definition=None,opts=None):
    """
    The ECS task definition data source allows access to details of
    a specific AWS ECS task definition.





    :param str task_definition: The family for the latest ACTIVE revision, family and revision (family:revision) for a specific revision in the family, the ARN of the task definition to access to.
    """
    __args__ = dict()


    __args__['taskDefinition'] = task_definition
    if opts is None:
        opts = pulumi.InvokeOptions()
    if opts.version is None:
        opts.version = utilities.get_version()
    __ret__ = pulumi.runtime.invoke('aws:ecs/getTaskDefinition:getTaskDefinition', __args__, opts=opts).value

    return AwaitableGetTaskDefinitionResult(
        family=__ret__.get('family'),
        id=__ret__.get('id'),
        network_mode=__ret__.get('networkMode'),
        revision=__ret__.get('revision'),
        status=__ret__.get('status'),
        task_definition=__ret__.get('taskDefinition'),
        task_role_arn=__ret__.get('taskRoleArn'))
