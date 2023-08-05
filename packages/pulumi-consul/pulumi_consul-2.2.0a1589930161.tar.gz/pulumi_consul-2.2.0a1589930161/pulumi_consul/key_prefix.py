# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from typing import Union
from . import utilities, tables

class KeyPrefix(pulumi.CustomResource):
    datacenter: pulumi.Output[str]
    """
    The datacenter to use. This overrides the
    agent's default datacenter and the datacenter in the provider setup.
    """
    namespace: pulumi.Output[str]
    """
    The namespace to create the keys within.
    """
    path_prefix: pulumi.Output[str]
    """
    Specifies the common prefix shared by all keys
    that will be managed by this resource instance. In most cases this will
    end with a slash, to manage a "folder" of keys.
    """
    subkey_collection: pulumi.Output[list]
    """
    A subkey to add. Supported values documented below.
    Multiple blocks supported.

      * `flags` (`float`) - An [unsigned integer value](https://www.consul.io/api/kv.html#flags-1)
        to attach to the key (defaults to 0).
      * `path` (`str`) - This is the path (which will be appended to the given
        `path_prefix`) in Consul that should be written to.
      * `value` (`str`) - The value to write to the given path.
    """
    subkeys: pulumi.Output[dict]
    """
    A mapping from subkey name (which will be appended
    to the given `path_prefix`) to the value that should be stored at that key.
    Use slashes, as shown in the above example, to create "sub-folders" under
    the given path prefix.
    """
    token: pulumi.Output[str]
    """
    The ACL token to use. This overrides the
    token that the agent provides by default.
    """
    def __init__(__self__, resource_name, opts=None, datacenter=None, namespace=None, path_prefix=None, subkey_collection=None, subkeys=None, token=None, __props__=None, __name__=None, __opts__=None):
        """
        Create a KeyPrefix resource with the given unique name, props, and options.
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] datacenter: The datacenter to use. This overrides the
               agent's default datacenter and the datacenter in the provider setup.
        :param pulumi.Input[str] namespace: The namespace to create the keys within.
        :param pulumi.Input[str] path_prefix: Specifies the common prefix shared by all keys
               that will be managed by this resource instance. In most cases this will
               end with a slash, to manage a "folder" of keys.
        :param pulumi.Input[list] subkey_collection: A subkey to add. Supported values documented below.
               Multiple blocks supported.
        :param pulumi.Input[dict] subkeys: A mapping from subkey name (which will be appended
               to the given `path_prefix`) to the value that should be stored at that key.
               Use slashes, as shown in the above example, to create "sub-folders" under
               the given path prefix.
        :param pulumi.Input[str] token: The ACL token to use. This overrides the
               token that the agent provides by default.

        The **subkey_collection** object supports the following:

          * `flags` (`pulumi.Input[float]`) - An [unsigned integer value](https://www.consul.io/api/kv.html#flags-1)
            to attach to the key (defaults to 0).
          * `path` (`pulumi.Input[str]`) - This is the path (which will be appended to the given
            `path_prefix`) in Consul that should be written to.
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
            __props__['namespace'] = namespace
            if path_prefix is None:
                raise TypeError("Missing required property 'path_prefix'")
            __props__['path_prefix'] = path_prefix
            __props__['subkey_collection'] = subkey_collection
            __props__['subkeys'] = subkeys
            __props__['token'] = token
        super(KeyPrefix, __self__).__init__(
            'consul:index/keyPrefix:KeyPrefix',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name, id, opts=None, datacenter=None, namespace=None, path_prefix=None, subkey_collection=None, subkeys=None, token=None):
        """
        Get an existing KeyPrefix resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.

        :param str resource_name: The unique name of the resulting resource.
        :param str id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] datacenter: The datacenter to use. This overrides the
               agent's default datacenter and the datacenter in the provider setup.
        :param pulumi.Input[str] namespace: The namespace to create the keys within.
        :param pulumi.Input[str] path_prefix: Specifies the common prefix shared by all keys
               that will be managed by this resource instance. In most cases this will
               end with a slash, to manage a "folder" of keys.
        :param pulumi.Input[list] subkey_collection: A subkey to add. Supported values documented below.
               Multiple blocks supported.
        :param pulumi.Input[dict] subkeys: A mapping from subkey name (which will be appended
               to the given `path_prefix`) to the value that should be stored at that key.
               Use slashes, as shown in the above example, to create "sub-folders" under
               the given path prefix.
        :param pulumi.Input[str] token: The ACL token to use. This overrides the
               token that the agent provides by default.

        The **subkey_collection** object supports the following:

          * `flags` (`pulumi.Input[float]`) - An [unsigned integer value](https://www.consul.io/api/kv.html#flags-1)
            to attach to the key (defaults to 0).
          * `path` (`pulumi.Input[str]`) - This is the path (which will be appended to the given
            `path_prefix`) in Consul that should be written to.
          * `value` (`pulumi.Input[str]`) - The value to write to the given path.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()

        __props__["datacenter"] = datacenter
        __props__["namespace"] = namespace
        __props__["path_prefix"] = path_prefix
        __props__["subkey_collection"] = subkey_collection
        __props__["subkeys"] = subkeys
        __props__["token"] = token
        return KeyPrefix(resource_name, opts=opts, __props__=__props__)
    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

