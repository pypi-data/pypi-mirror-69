# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from typing import Union
from . import utilities, tables

class GetNodesResult:
    """
    A collection of values returned by getNodes.
    """
    def __init__(__self__, datacenter=None, id=None, node_ids=None, node_names=None, nodes=None, query_options=None):
        if datacenter and not isinstance(datacenter, str):
            raise TypeError("Expected argument 'datacenter' to be a str")
        __self__.datacenter = datacenter
        """
        The datacenter the keys are being read from to.
        """
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        __self__.id = id
        """
        The provider-assigned unique ID for this managed resource.
        """
        if node_ids and not isinstance(node_ids, list):
            raise TypeError("Expected argument 'node_ids' to be a list")
        __self__.node_ids = node_ids
        """
        A list of the Consul node IDs.
        """
        if node_names and not isinstance(node_names, list):
            raise TypeError("Expected argument 'node_names' to be a list")
        __self__.node_names = node_names
        """
        A list of the Consul node names.
        """
        if nodes and not isinstance(nodes, list):
            raise TypeError("Expected argument 'nodes' to be a list")
        __self__.nodes = nodes
        """
        A list of nodes and details about each Consul agent.  The list of
        per-node attributes is detailed below.
        """
        if query_options and not isinstance(query_options, list):
            raise TypeError("Expected argument 'query_options' to be a list")
        __self__.query_options = query_options
class AwaitableGetNodesResult(GetNodesResult):
    # pylint: disable=using-constant-test
    def __await__(self):
        if False:
            yield self
        return GetNodesResult(
            datacenter=self.datacenter,
            id=self.id,
            node_ids=self.node_ids,
            node_names=self.node_names,
            nodes=self.nodes,
            query_options=self.query_options)

def get_nodes(query_options=None,opts=None):
    """
    The `.getNodes` data source returns a list of Consul nodes that have
    been registered with the Consul cluster in a given datacenter.  By specifying a
    different datacenter in the `query_options` it is possible to retrieve a list of
    nodes from a different WAN-attached Consul datacenter.




    :param list query_options: See below.

    The **query_options** object supports the following:

      * `allowStale` (`bool`) - When `true`, the default, allow responses from
        Consul servers that are followers.
      * `datacenter` (`str`) - The Consul datacenter to query.  Defaults to the
        same value found in `query_options` parameter specified below, or if that is
        empty, the `datacenter` value found in the Consul agent that this provider is
        configured to talk to then the datacenter in the provider setup.
      * `near` (`str`)
      * `nodeMeta` (`dict`)
      * `requireConsistent` (`bool`) - When `true` force the client to perform a
        read on at least quorum servers and verify the result is the same.  Defaults
        to `false`.
      * `token` (`str`) - Specify the Consul ACL token to use when performing the
        request.  This defaults to the same API token configured by the `consul`
        provider but may be overriden if necessary.
      * `waitIndex` (`float`) - Index number used to enable blocking quereis.
      * `waitTime` (`str`) - Max time the client should wait for a blocking query
        to return.
    """
    __args__ = dict()


    __args__['queryOptions'] = query_options
    if opts is None:
        opts = pulumi.InvokeOptions()
    if opts.version is None:
        opts.version = utilities.get_version()
    __ret__ = pulumi.runtime.invoke('consul:index/getNodes:getNodes', __args__, opts=opts).value

    return AwaitableGetNodesResult(
        datacenter=__ret__.get('datacenter'),
        id=__ret__.get('id'),
        node_ids=__ret__.get('nodeIds'),
        node_names=__ret__.get('nodeNames'),
        nodes=__ret__.get('nodes'),
        query_options=__ret__.get('queryOptions'))
