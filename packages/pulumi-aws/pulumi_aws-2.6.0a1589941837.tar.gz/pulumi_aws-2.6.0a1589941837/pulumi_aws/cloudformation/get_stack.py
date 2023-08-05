# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from typing import Union
from .. import utilities, tables

class GetStackResult:
    """
    A collection of values returned by getStack.
    """
    def __init__(__self__, capabilities=None, description=None, disable_rollback=None, iam_role_arn=None, id=None, name=None, notification_arns=None, outputs=None, parameters=None, tags=None, template_body=None, timeout_in_minutes=None):
        if capabilities and not isinstance(capabilities, list):
            raise TypeError("Expected argument 'capabilities' to be a list")
        __self__.capabilities = capabilities
        """
        A list of capabilities
        """
        if description and not isinstance(description, str):
            raise TypeError("Expected argument 'description' to be a str")
        __self__.description = description
        """
        Description of the stack
        """
        if disable_rollback and not isinstance(disable_rollback, bool):
            raise TypeError("Expected argument 'disable_rollback' to be a bool")
        __self__.disable_rollback = disable_rollback
        """
        Whether the rollback of the stack is disabled when stack creation fails
        """
        if iam_role_arn and not isinstance(iam_role_arn, str):
            raise TypeError("Expected argument 'iam_role_arn' to be a str")
        __self__.iam_role_arn = iam_role_arn
        """
        The ARN of the IAM role used to create the stack.
        """
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        __self__.id = id
        """
        The provider-assigned unique ID for this managed resource.
        """
        if name and not isinstance(name, str):
            raise TypeError("Expected argument 'name' to be a str")
        __self__.name = name
        if notification_arns and not isinstance(notification_arns, list):
            raise TypeError("Expected argument 'notification_arns' to be a list")
        __self__.notification_arns = notification_arns
        """
        A list of SNS topic ARNs to publish stack related events
        """
        if outputs and not isinstance(outputs, dict):
            raise TypeError("Expected argument 'outputs' to be a dict")
        __self__.outputs = outputs
        """
        A map of outputs from the stack.
        """
        if parameters and not isinstance(parameters, dict):
            raise TypeError("Expected argument 'parameters' to be a dict")
        __self__.parameters = parameters
        """
        A map of parameters that specify input parameters for the stack.
        """
        if tags and not isinstance(tags, dict):
            raise TypeError("Expected argument 'tags' to be a dict")
        __self__.tags = tags
        """
        A map of tags associated with this stack.
        """
        if template_body and not isinstance(template_body, str):
            raise TypeError("Expected argument 'template_body' to be a str")
        __self__.template_body = template_body
        """
        Structure containing the template body.
        """
        if timeout_in_minutes and not isinstance(timeout_in_minutes, float):
            raise TypeError("Expected argument 'timeout_in_minutes' to be a float")
        __self__.timeout_in_minutes = timeout_in_minutes
        """
        The amount of time that can pass before the stack status becomes `CREATE_FAILED`
        """
class AwaitableGetStackResult(GetStackResult):
    # pylint: disable=using-constant-test
    def __await__(self):
        if False:
            yield self
        return GetStackResult(
            capabilities=self.capabilities,
            description=self.description,
            disable_rollback=self.disable_rollback,
            iam_role_arn=self.iam_role_arn,
            id=self.id,
            name=self.name,
            notification_arns=self.notification_arns,
            outputs=self.outputs,
            parameters=self.parameters,
            tags=self.tags,
            template_body=self.template_body,
            timeout_in_minutes=self.timeout_in_minutes)

def get_stack(name=None,tags=None,opts=None):
    """
    The CloudFormation Stack data source allows access to stack
    outputs and other useful data including the template body.

    ## Example Usage



    ```python
    import pulumi
    import pulumi_aws as aws

    network = aws.cloudformation.get_stack(name="my-network-stack")
    web = aws.ec2.Instance("web",
        ami="ami-abb07bcb",
        instance_type="t1.micro",
        subnet_id=network.outputs["SubnetId"],
        tags={
            "Name": "HelloWorld",
        })
    ```



    :param str name: The name of the stack
    :param dict tags: A map of tags associated with this stack.
    """
    __args__ = dict()


    __args__['name'] = name
    __args__['tags'] = tags
    if opts is None:
        opts = pulumi.InvokeOptions()
    if opts.version is None:
        opts.version = utilities.get_version()
    __ret__ = pulumi.runtime.invoke('aws:cloudformation/getStack:getStack', __args__, opts=opts).value

    return AwaitableGetStackResult(
        capabilities=__ret__.get('capabilities'),
        description=__ret__.get('description'),
        disable_rollback=__ret__.get('disableRollback'),
        iam_role_arn=__ret__.get('iamRoleArn'),
        id=__ret__.get('id'),
        name=__ret__.get('name'),
        notification_arns=__ret__.get('notificationArns'),
        outputs=__ret__.get('outputs'),
        parameters=__ret__.get('parameters'),
        tags=__ret__.get('tags'),
        template_body=__ret__.get('templateBody'),
        timeout_in_minutes=__ret__.get('timeoutInMinutes'))
