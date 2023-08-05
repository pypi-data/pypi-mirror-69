# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from typing import Union
from .. import utilities, tables

class StateMachine(pulumi.CustomResource):
    creation_date: pulumi.Output[str]
    """
    The date the state machine was created.
    """
    definition: pulumi.Output[str]
    """
    The Amazon States Language definition of the state machine.
    """
    name: pulumi.Output[str]
    """
    The name of the state machine.
    """
    role_arn: pulumi.Output[str]
    """
    The Amazon Resource Name (ARN) of the IAM role to use for this state machine.
    """
    status: pulumi.Output[str]
    """
    The current status of the state machine. Either "ACTIVE" or "DELETING".
    """
    tags: pulumi.Output[dict]
    """
    Key-value map of resource tags
    """
    def __init__(__self__, resource_name, opts=None, definition=None, name=None, role_arn=None, tags=None, __props__=None, __name__=None, __opts__=None):
        """
        Provides a Step Function State Machine resource

        ## Example Usage



        ```python
        import pulumi
        import pulumi_aws as aws

        sfn_state_machine = aws.sfn.StateMachine("sfnStateMachine",
            definition=f\"\"\"{{
          "Comment": "A Hello World example of the Amazon States Language using an AWS Lambda Function",
          "StartAt": "HelloWorld",
          "States": {{
            "HelloWorld": {{
              "Type": "Task",
              "Resource": "{aws_lambda_function["lambda"]["arn"]}",
              "End": true
            }}
          }}
        }}

        \"\"\",
            role_arn=aws_iam_role["iam_for_sfn"]["arn"])
        ```


        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] definition: The Amazon States Language definition of the state machine.
        :param pulumi.Input[str] name: The name of the state machine.
        :param pulumi.Input[str] role_arn: The Amazon Resource Name (ARN) of the IAM role to use for this state machine.
        :param pulumi.Input[dict] tags: Key-value map of resource tags
        """
        if __name__ is not None:
            warnings.warn("explicit use of __name__ is deprecated", DeprecationWarning)
            resource_name = __name__
        if __opts__ is not None:
            warnings.warn("explicit use of __opts__ is deprecated, use 'opts' instead", DeprecationWarning)
            opts = __opts__
        if opts is None:
            opts = pulumi.ResourceOptions()
        if not isinstance(opts, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')
        if opts.version is None:
            opts.version = utilities.get_version()
        if opts.id is None:
            if __props__ is not None:
                raise TypeError('__props__ is only valid when passed in combination with a valid opts.id to get an existing resource')
            __props__ = dict()

            if definition is None:
                raise TypeError("Missing required property 'definition'")
            __props__['definition'] = definition
            __props__['name'] = name
            if role_arn is None:
                raise TypeError("Missing required property 'role_arn'")
            __props__['role_arn'] = role_arn
            __props__['tags'] = tags
            __props__['creation_date'] = None
            __props__['status'] = None
        super(StateMachine, __self__).__init__(
            'aws:sfn/stateMachine:StateMachine',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name, id, opts=None, creation_date=None, definition=None, name=None, role_arn=None, status=None, tags=None):
        """
        Get an existing StateMachine resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.

        :param str resource_name: The unique name of the resulting resource.
        :param str id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] creation_date: The date the state machine was created.
        :param pulumi.Input[str] definition: The Amazon States Language definition of the state machine.
        :param pulumi.Input[str] name: The name of the state machine.
        :param pulumi.Input[str] role_arn: The Amazon Resource Name (ARN) of the IAM role to use for this state machine.
        :param pulumi.Input[str] status: The current status of the state machine. Either "ACTIVE" or "DELETING".
        :param pulumi.Input[dict] tags: Key-value map of resource tags
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()

        __props__["creation_date"] = creation_date
        __props__["definition"] = definition
        __props__["name"] = name
        __props__["role_arn"] = role_arn
        __props__["status"] = status
        __props__["tags"] = tags
        return StateMachine(resource_name, opts=opts, __props__=__props__)
    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

