# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from typing import Union
from . import utilities, tables

class AclToken(pulumi.CustomResource):
    accessor_id: pulumi.Output[str]
    """
    The uuid of the token. If omitted, Consul will
    generate a random uuid.
    """
    description: pulumi.Output[str]
    """
    The description of the token.
    """
    local: pulumi.Output[bool]
    """
    The flag to set the token local to the current datacenter.
    """
    namespace: pulumi.Output[str]
    """
    The namespace to create the token within.
    """
    policies: pulumi.Output[list]
    """
    The list of policies attached to the token.
    """
    roles: pulumi.Output[list]
    """
    The list of roles attached to the token.
    """
    def __init__(__self__, resource_name, opts=None, accessor_id=None, description=None, local=None, namespace=None, policies=None, roles=None, __props__=None, __name__=None, __opts__=None):
        """
        The `.AclToken` resource writes an ACL token into Consul.

        ## Example Usage

        ### Basic usage

        ```python
        import pulumi
        import pulumi_consul as consul

        agent = consul.AclPolicy("agent", rules=\"\"\"node_prefix "" {
          policy = "read"
        }

        \"\"\")
        test = consul.AclToken("test",
            description="my test token",
            local=True,
            policies=[agent.name])
        ```


        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] accessor_id: The uuid of the token. If omitted, Consul will
               generate a random uuid.
        :param pulumi.Input[str] description: The description of the token.
        :param pulumi.Input[bool] local: The flag to set the token local to the current datacenter.
        :param pulumi.Input[str] namespace: The namespace to create the token within.
        :param pulumi.Input[list] policies: The list of policies attached to the token.
        :param pulumi.Input[list] roles: The list of roles attached to the token.
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

            __props__['accessor_id'] = accessor_id
            __props__['description'] = description
            __props__['local'] = local
            __props__['namespace'] = namespace
            __props__['policies'] = policies
            __props__['roles'] = roles
        super(AclToken, __self__).__init__(
            'consul:index/aclToken:AclToken',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name, id, opts=None, accessor_id=None, description=None, local=None, namespace=None, policies=None, roles=None):
        """
        Get an existing AclToken resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.

        :param str resource_name: The unique name of the resulting resource.
        :param str id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] accessor_id: The uuid of the token. If omitted, Consul will
               generate a random uuid.
        :param pulumi.Input[str] description: The description of the token.
        :param pulumi.Input[bool] local: The flag to set the token local to the current datacenter.
        :param pulumi.Input[str] namespace: The namespace to create the token within.
        :param pulumi.Input[list] policies: The list of policies attached to the token.
        :param pulumi.Input[list] roles: The list of roles attached to the token.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()

        __props__["accessor_id"] = accessor_id
        __props__["description"] = description
        __props__["local"] = local
        __props__["namespace"] = namespace
        __props__["policies"] = policies
        __props__["roles"] = roles
        return AclToken(resource_name, opts=opts, __props__=__props__)
    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

