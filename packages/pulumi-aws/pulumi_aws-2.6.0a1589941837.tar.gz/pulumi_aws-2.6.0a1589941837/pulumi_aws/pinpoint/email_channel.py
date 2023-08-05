# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from typing import Union
from .. import utilities, tables

class EmailChannel(pulumi.CustomResource):
    application_id: pulumi.Output[str]
    """
    The application ID.
    """
    enabled: pulumi.Output[bool]
    """
    Whether the channel is enabled or disabled. Defaults to `true`.
    """
    from_address: pulumi.Output[str]
    """
    The email address used to send emails from.
    """
    identity: pulumi.Output[str]
    """
    The ARN of an identity verified with SES.
    """
    messages_per_second: pulumi.Output[float]
    """
    Messages per second that can be sent.
    """
    role_arn: pulumi.Output[str]
    """
    The ARN of an IAM Role used to submit events to Mobile Analytics' event ingestion service.
    """
    def __init__(__self__, resource_name, opts=None, application_id=None, enabled=None, from_address=None, identity=None, role_arn=None, __props__=None, __name__=None, __opts__=None):
        """
        Provides a Pinpoint Email Channel resource.

        ## Example Usage



        ```python
        import pulumi
        import pulumi_aws as aws

        app = aws.pinpoint.App("app")
        identity = aws.ses.DomainIdentity("identity", domain="example.com")
        role = aws.iam.Role("role", assume_role_policy=\"\"\"{
          "Version": "2012-10-17",
          "Statement": [
            {
              "Action": "sts:AssumeRole",
              "Principal": {
                "Service": "pinpoint.amazonaws.com"
              },
              "Effect": "Allow",
              "Sid": ""
            }
          ]
        }

        \"\"\")
        email = aws.pinpoint.EmailChannel("email",
            application_id=app.application_id,
            from_address="user@example.com",
            identity=identity.arn,
            role_arn=role.arn)
        role_policy = aws.iam.RolePolicy("rolePolicy",
            policy=\"\"\"{
          "Version": "2012-10-17",
          "Statement": {
            "Action": [
              "mobileanalytics:PutEvents",
              "mobileanalytics:PutItems"
            ],
            "Effect": "Allow",
            "Resource": [
              "*"
            ]
          }
        }

        \"\"\",
            role=role.id)
        ```


        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] application_id: The application ID.
        :param pulumi.Input[bool] enabled: Whether the channel is enabled or disabled. Defaults to `true`.
        :param pulumi.Input[str] from_address: The email address used to send emails from.
        :param pulumi.Input[str] identity: The ARN of an identity verified with SES.
        :param pulumi.Input[str] role_arn: The ARN of an IAM Role used to submit events to Mobile Analytics' event ingestion service.
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

            if application_id is None:
                raise TypeError("Missing required property 'application_id'")
            __props__['application_id'] = application_id
            __props__['enabled'] = enabled
            if from_address is None:
                raise TypeError("Missing required property 'from_address'")
            __props__['from_address'] = from_address
            if identity is None:
                raise TypeError("Missing required property 'identity'")
            __props__['identity'] = identity
            if role_arn is None:
                raise TypeError("Missing required property 'role_arn'")
            __props__['role_arn'] = role_arn
            __props__['messages_per_second'] = None
        super(EmailChannel, __self__).__init__(
            'aws:pinpoint/emailChannel:EmailChannel',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name, id, opts=None, application_id=None, enabled=None, from_address=None, identity=None, messages_per_second=None, role_arn=None):
        """
        Get an existing EmailChannel resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.

        :param str resource_name: The unique name of the resulting resource.
        :param str id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] application_id: The application ID.
        :param pulumi.Input[bool] enabled: Whether the channel is enabled or disabled. Defaults to `true`.
        :param pulumi.Input[str] from_address: The email address used to send emails from.
        :param pulumi.Input[str] identity: The ARN of an identity verified with SES.
        :param pulumi.Input[float] messages_per_second: Messages per second that can be sent.
        :param pulumi.Input[str] role_arn: The ARN of an IAM Role used to submit events to Mobile Analytics' event ingestion service.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()

        __props__["application_id"] = application_id
        __props__["enabled"] = enabled
        __props__["from_address"] = from_address
        __props__["identity"] = identity
        __props__["messages_per_second"] = messages_per_second
        __props__["role_arn"] = role_arn
        return EmailChannel(resource_name, opts=opts, __props__=__props__)
    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

