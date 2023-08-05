# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from typing import Union
from . import utilities, tables

class GetDropletsResult:
    """
    A collection of values returned by getDroplets.
    """
    def __init__(__self__, droplets=None, filters=None, id=None, sorts=None):
        if droplets and not isinstance(droplets, list):
            raise TypeError("Expected argument 'droplets' to be a list")
        __self__.droplets = droplets
        """
        A list of Droplets satisfying any `filter` and `sort` criteria. Each Droplet has the following attributes:  
        """
        if filters and not isinstance(filters, list):
            raise TypeError("Expected argument 'filters' to be a list")
        __self__.filters = filters
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        __self__.id = id
        """
        The provider-assigned unique ID for this managed resource.
        """
        if sorts and not isinstance(sorts, list):
            raise TypeError("Expected argument 'sorts' to be a list")
        __self__.sorts = sorts
class AwaitableGetDropletsResult(GetDropletsResult):
    # pylint: disable=using-constant-test
    def __await__(self):
        if False:
            yield self
        return GetDropletsResult(
            droplets=self.droplets,
            filters=self.filters,
            id=self.id,
            sorts=self.sorts)

def get_droplets(filters=None,sorts=None,opts=None):
    """
    Use this data source to access information about an existing resource.

    :param list filters: Filter the results.
           The `filter` block is documented below.
    :param list sorts: Sort the results.
           The `sort` block is documented below.

    The **filters** object supports the following:

      * `key` (`str`) - Filter the Droplets by this key. This may be one of '`backups`, `created_at`, `disk`, `id`,
        `image`, `ipv4_address`, `ipv4_address_private`, `ipv6`, `ipv6_address`, `ipv6_address_private`, `locked`,
        `memory`, `monitoring`, `name`, `price_hourly`, `price_monthly`, `private_networking`, `region`, `size`,
        `status`, `tags`, `urn`, `vcpus`, `volume_ids`, or `vpc_uuid`'.
      * `values` (`list`) - A list of values to match against the `key` field. Only retrieves Droplets
        where the `key` field takes on one or more of the values provided here.

    The **sorts** object supports the following:

      * `direction` (`str`) - The sort direction. This may be either `asc` or `desc`.
      * `key` (`str`) - Sort the Droplets by this key. This may be one of `backups`, `created_at`, `disk`, `id`,
        `image`, `ipv4_address`, `ipv4_address_private`, `ipv6`, `ipv6_address`, `ipv6_address_private`, `locked`,
        `memory`, `monitoring`, `name`, `price_hourly`, `price_monthly`, `private_networking`, `region`, `size`,
        `status`, `urn`, `vcpus`, or `vpc_uuid`.
    """
    __args__ = dict()


    __args__['filters'] = filters
    __args__['sorts'] = sorts
    if opts is None:
        opts = pulumi.InvokeOptions()
    if opts.version is None:
        opts.version = utilities.get_version()
    __ret__ = pulumi.runtime.invoke('digitalocean:index/getDroplets:getDroplets', __args__, opts=opts).value

    return AwaitableGetDropletsResult(
        droplets=__ret__.get('droplets'),
        filters=__ret__.get('filters'),
        id=__ret__.get('id'),
        sorts=__ret__.get('sorts'))
