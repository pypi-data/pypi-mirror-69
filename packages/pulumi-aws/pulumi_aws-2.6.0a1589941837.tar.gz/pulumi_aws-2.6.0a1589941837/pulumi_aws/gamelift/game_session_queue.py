# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from typing import Union
from .. import utilities, tables

class GameSessionQueue(pulumi.CustomResource):
    arn: pulumi.Output[str]
    """
    Game Session Queue ARN.
    """
    destinations: pulumi.Output[list]
    """
    List of fleet/alias ARNs used by session queue for placing game sessions.
    """
    name: pulumi.Output[str]
    """
    Name of the session queue.
    """
    player_latency_policies: pulumi.Output[list]
    """
    One or more policies used to choose fleet based on player latency. See below.

      * `maximumIndividualPlayerLatencyMilliseconds` (`float`) - Maximum latency value that is allowed for any player.
      * `policyDurationSeconds` (`float`) - Length of time that the policy is enforced while placing a new game session. Absence of value for this attribute means that the policy is enforced until the queue times out.
    """
    tags: pulumi.Output[dict]
    """
    Key-value map of resource tags
    """
    timeout_in_seconds: pulumi.Output[float]
    """
    Maximum time a game session request can remain in the queue.
    """
    def __init__(__self__, resource_name, opts=None, destinations=None, name=None, player_latency_policies=None, tags=None, timeout_in_seconds=None, __props__=None, __name__=None, __opts__=None):
        """
        Provides an Gamelift Game Session Queue resource.

        ## Example Usage



        ```python
        import pulumi
        import pulumi_aws as aws

        test = aws.gamelift.GameSessionQueue("test",
            destinations=[
                aws_gamelift_fleet["us_west_2_fleet"]["arn"],
                aws_gamelift_fleet["eu_central_1_fleet"]["arn"],
            ],
            player_latency_policies=[
                {
                    "maximumIndividualPlayerLatencyMilliseconds": 100,
                    "policyDurationSeconds": 5,
                },
                {
                    "maximumIndividualPlayerLatencyMilliseconds": 200,
                },
            ],
            timeout_in_seconds=60)
        ```


        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[list] destinations: List of fleet/alias ARNs used by session queue for placing game sessions.
        :param pulumi.Input[str] name: Name of the session queue.
        :param pulumi.Input[list] player_latency_policies: One or more policies used to choose fleet based on player latency. See below.
        :param pulumi.Input[dict] tags: Key-value map of resource tags
        :param pulumi.Input[float] timeout_in_seconds: Maximum time a game session request can remain in the queue.

        The **player_latency_policies** object supports the following:

          * `maximumIndividualPlayerLatencyMilliseconds` (`pulumi.Input[float]`) - Maximum latency value that is allowed for any player.
          * `policyDurationSeconds` (`pulumi.Input[float]`) - Length of time that the policy is enforced while placing a new game session. Absence of value for this attribute means that the policy is enforced until the queue times out.
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

            __props__['destinations'] = destinations
            __props__['name'] = name
            __props__['player_latency_policies'] = player_latency_policies
            __props__['tags'] = tags
            __props__['timeout_in_seconds'] = timeout_in_seconds
            __props__['arn'] = None
        super(GameSessionQueue, __self__).__init__(
            'aws:gamelift/gameSessionQueue:GameSessionQueue',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name, id, opts=None, arn=None, destinations=None, name=None, player_latency_policies=None, tags=None, timeout_in_seconds=None):
        """
        Get an existing GameSessionQueue resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.

        :param str resource_name: The unique name of the resulting resource.
        :param str id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] arn: Game Session Queue ARN.
        :param pulumi.Input[list] destinations: List of fleet/alias ARNs used by session queue for placing game sessions.
        :param pulumi.Input[str] name: Name of the session queue.
        :param pulumi.Input[list] player_latency_policies: One or more policies used to choose fleet based on player latency. See below.
        :param pulumi.Input[dict] tags: Key-value map of resource tags
        :param pulumi.Input[float] timeout_in_seconds: Maximum time a game session request can remain in the queue.

        The **player_latency_policies** object supports the following:

          * `maximumIndividualPlayerLatencyMilliseconds` (`pulumi.Input[float]`) - Maximum latency value that is allowed for any player.
          * `policyDurationSeconds` (`pulumi.Input[float]`) - Length of time that the policy is enforced while placing a new game session. Absence of value for this attribute means that the policy is enforced until the queue times out.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()

        __props__["arn"] = arn
        __props__["destinations"] = destinations
        __props__["name"] = name
        __props__["player_latency_policies"] = player_latency_policies
        __props__["tags"] = tags
        __props__["timeout_in_seconds"] = timeout_in_seconds
        return GameSessionQueue(resource_name, opts=opts, __props__=__props__)
    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

