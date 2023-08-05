# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from typing import Union
from . import utilities, tables

class GetCatalogServiceResult:
    """
    A collection of values returned by getCatalogService.
    """
    def __init__(__self__, datacenter=None, id=None, name=None, query_options=None, services=None, tag=None):
        if datacenter and not isinstance(datacenter, str):
            raise TypeError("Expected argument 'datacenter' to be a str")
        __self__.datacenter = datacenter
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        __self__.id = id
        """
        The provider-assigned unique ID for this managed resource.
        """
        if name and not isinstance(name, str):
            raise TypeError("Expected argument 'name' to be a str")
        __self__.name = name
        if query_options and not isinstance(query_options, list):
            raise TypeError("Expected argument 'query_options' to be a list")
        __self__.query_options = query_options
        if services and not isinstance(services, list):
            raise TypeError("Expected argument 'services' to be a list")
        __self__.services = services
        if tag and not isinstance(tag, str):
            raise TypeError("Expected argument 'tag' to be a str")
        __self__.tag = tag
class AwaitableGetCatalogServiceResult(GetCatalogServiceResult):
    # pylint: disable=using-constant-test
    def __await__(self):
        if False:
            yield self
        return GetCatalogServiceResult(
            datacenter=self.datacenter,
            id=self.id,
            name=self.name,
            query_options=self.query_options,
            services=self.services,
            tag=self.tag)

def get_catalog_service(datacenter=None,name=None,query_options=None,tag=None,opts=None):
    """
    Use this data source to access information about an existing resource.


    The **query_options** object supports the following:

      * `allowStale` (`bool`)
      * `datacenter` (`str`)
      * `namespace` (`str`)
      * `near` (`str`)
      * `nodeMeta` (`dict`)
      * `requireConsistent` (`bool`)
      * `token` (`str`)
      * `waitIndex` (`float`)
      * `waitTime` (`str`)
    """
    __args__ = dict()


    __args__['datacenter'] = datacenter
    __args__['name'] = name
    __args__['queryOptions'] = query_options
    __args__['tag'] = tag
    if opts is None:
        opts = pulumi.InvokeOptions()
    if opts.version is None:
        opts.version = utilities.get_version()
    __ret__ = pulumi.runtime.invoke('consul:index/getCatalogService:getCatalogService', __args__, opts=opts).value

    return AwaitableGetCatalogServiceResult(
        datacenter=__ret__.get('datacenter'),
        id=__ret__.get('id'),
        name=__ret__.get('name'),
        query_options=__ret__.get('queryOptions'),
        services=__ret__.get('services'),
        tag=__ret__.get('tag'))
