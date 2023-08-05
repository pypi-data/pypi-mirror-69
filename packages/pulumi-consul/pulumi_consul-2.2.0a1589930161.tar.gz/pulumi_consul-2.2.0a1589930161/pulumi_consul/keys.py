# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from typing import Union
from . import utilities, tables

class Keys(pulumi.CustomResource):
    datacenter: pulumi.Output[str]
    """
    The datacenter to use. This overrides the
    agent's default datacenter and the datacenter in the provider setup.
    """
    keys: pulumi.Output[list]
    """
    Specifies a key in Consul to be written.
    Supported values documented below.

      * `default` (`str`)
      * `delete` (`bool`) - If true, then the key will be deleted when
        either its configuration block is removed from the configuration or
        the entire resource is destroyed. Otherwise, it will be left in Consul.
        Defaults to false.
      * `flags` (`float`) - An [unsigned integer value](https://www.consul.io/api/kv.html#flags-1)
        to attach to the key (defaults to 0).
      * `name` (`str`)
      * `path` (`str`) - This is the path in Consul that should be written to.
      * `value` (`str`) - The value to write to the given path.
    """
    namespace: pulumi.Output[str]
    """
    The namespace to create the keys within.
    """
    token: pulumi.Output[str]
    """
    The ACL token to use. This overrides the
    token that the agent provides by default.
    """
    var: pulumi.Output[dict]
    def __init__(__self__, resource_name, opts=None, datacenter=None, keys=None, namespace=None, token=None, __props__=None, __name__=None, __opts__=None):
        """
        Create a Keys resource with the given unique name, props, and options.
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] datacenter: The datacenter to use. This overrides the
               agent's default datacenter and the datacenter in the provider setup.
        :param pulumi.Input[list] keys: Specifies a key in Consul to be written.
               Supported values documented below.
        :param pulumi.Input[str] namespace: The namespace to create the keys within.
        :param pulumi.Input[str] token: The ACL token to use. This overrides the
               token that the agent provides by default.

        The **keys** object supports the following:

          * `default` (`pulumi.Input[str]`)
          * `delete` (`pulumi.Input[bool]`) - If true, then the key will be deleted when
            either its configuration block is removed from the configuration or
            the entire resource is destroyed. Otherwise, it will be left in Consul.
            Defaults to false.
          * `flags` (`pulumi.Input[float]`) - An [unsigned integer value](https://www.consul.io/api/kv.html#flags-1)
            to attach to the key (defaults to 0).
          * `name` (`pulumi.Input[str]`)
          * `path` (`pulumi.Input[str]`) - This is the path in Consul that should be written to.
          * `value` (`pulumi.Input[str]`) - The value to write to the given path.
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

            __props__['datacenter'] = datacenter
            __props__['keys'] = keys
            __props__['namespace'] = namespace
            __props__['token'] = token
            __props__['var'] = None
        super(Keys, __self__).__init__(
            'consul:index/keys:Keys',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name, id, opts=None, datacenter=None, keys=None, namespace=None, token=None, var=None):
        """
        Get an existing Keys resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.

        :param str resource_name: The unique name of the resulting resource.
        :param str id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] datacenter: The datacenter to use. This overrides the
               agent's default datacenter and the datacenter in the provider setup.
        :param pulumi.Input[list] keys: Specifies a key in Consul to be written.
               Supported values documented below.
        :param pulumi.Input[str] namespace: The namespace to create the keys within.
        :param pulumi.Input[str] token: The ACL token to use. This overrides the
               token that the agent provides by default.

        The **keys** object supports the following:

          * `default` (`pulumi.Input[str]`)
          * `delete` (`pulumi.Input[bool]`) - If true, then the key will be deleted when
            either its configuration block is removed from the configuration or
            the entire resource is destroyed. Otherwise, it will be left in Consul.
            Defaults to false.
          * `flags` (`pulumi.Input[float]`) - An [unsigned integer value](https://www.consul.io/api/kv.html#flags-1)
            to attach to the key (defaults to 0).
          * `name` (`pulumi.Input[str]`)
          * `path` (`pulumi.Input[str]`) - This is the path in Consul that should be written to.
          * `value` (`pulumi.Input[str]`) - The value to write to the given path.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()

        __props__["datacenter"] = datacenter
        __props__["keys"] = keys
        __props__["namespace"] = namespace
        __props__["token"] = token
        __props__["var"] = var
        return Keys(resource_name, opts=opts, __props__=__props__)
    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

