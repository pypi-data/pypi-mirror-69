# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from typing import Union
from .. import utilities, tables

class RouterInterface(pulumi.CustomResource):
    interconnect_attachment: pulumi.Output[str]
    """
    The name or resource link to the
    VLAN interconnect for this interface. Changing this forces a new interface to
    be created. Only one of `vpn_tunnel` and `interconnect_attachment` can be
    specified.
    """
    ip_range: pulumi.Output[str]
    """
    IP address and range of the interface. The IP range must be
    in the RFC3927 link-local IP space. Changing this forces a new interface to be created.
    """
    name: pulumi.Output[str]
    """
    A unique name for the interface, required by GCE. Changing
    this forces a new interface to be created.
    """
    project: pulumi.Output[str]
    """
    The ID of the project in which this interface's router belongs. If it
    is not provided, the provider project is used. Changing this forces a new interface to be created.
    """
    region: pulumi.Output[str]
    """
    The region this interface's router sits in. If not specified,
    the project region will be used. Changing this forces a new interface to be
    created.
    """
    router: pulumi.Output[str]
    """
    The name of the router this interface will be attached to.
    Changing this forces a new interface to be created.
    """
    vpn_tunnel: pulumi.Output[str]
    """
    The name or resource link to the VPN tunnel this
    interface will be linked to. Changing this forces a new interface to be created. Only
    one of `vpn_tunnel` and `interconnect_attachment` can be specified.
    """
    def __init__(__self__, resource_name, opts=None, interconnect_attachment=None, ip_range=None, name=None, project=None, region=None, router=None, vpn_tunnel=None, __props__=None, __name__=None, __opts__=None):
        """
        Manages a Cloud Router interface. For more information see
        [the official documentation](https://cloud.google.com/compute/docs/cloudrouter)
        and
        [API](https://cloud.google.com/compute/docs/reference/latest/routers).

        ## Example Usage



        ```python
        import pulumi
        import pulumi_gcp as gcp

        foobar = gcp.compute.RouterInterface("foobar",
            ip_range="169.254.1.1/30",
            region="us-central1",
            router="router-1",
            vpn_tunnel="tunnel-1")
        ```


        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] interconnect_attachment: The name or resource link to the
               VLAN interconnect for this interface. Changing this forces a new interface to
               be created. Only one of `vpn_tunnel` and `interconnect_attachment` can be
               specified.
        :param pulumi.Input[str] ip_range: IP address and range of the interface. The IP range must be
               in the RFC3927 link-local IP space. Changing this forces a new interface to be created.
        :param pulumi.Input[str] name: A unique name for the interface, required by GCE. Changing
               this forces a new interface to be created.
        :param pulumi.Input[str] project: The ID of the project in which this interface's router belongs. If it
               is not provided, the provider project is used. Changing this forces a new interface to be created.
        :param pulumi.Input[str] region: The region this interface's router sits in. If not specified,
               the project region will be used. Changing this forces a new interface to be
               created.
        :param pulumi.Input[str] router: The name of the router this interface will be attached to.
               Changing this forces a new interface to be created.
        :param pulumi.Input[str] vpn_tunnel: The name or resource link to the VPN tunnel this
               interface will be linked to. Changing this forces a new interface to be created. Only
               one of `vpn_tunnel` and `interconnect_attachment` can be specified.
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

            __props__['interconnect_attachment'] = interconnect_attachment
            __props__['ip_range'] = ip_range
            __props__['name'] = name
            __props__['project'] = project
            __props__['region'] = region
            if router is None:
                raise TypeError("Missing required property 'router'")
            __props__['router'] = router
            __props__['vpn_tunnel'] = vpn_tunnel
        super(RouterInterface, __self__).__init__(
            'gcp:compute/routerInterface:RouterInterface',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name, id, opts=None, interconnect_attachment=None, ip_range=None, name=None, project=None, region=None, router=None, vpn_tunnel=None):
        """
        Get an existing RouterInterface resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.

        :param str resource_name: The unique name of the resulting resource.
        :param str id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] interconnect_attachment: The name or resource link to the
               VLAN interconnect for this interface. Changing this forces a new interface to
               be created. Only one of `vpn_tunnel` and `interconnect_attachment` can be
               specified.
        :param pulumi.Input[str] ip_range: IP address and range of the interface. The IP range must be
               in the RFC3927 link-local IP space. Changing this forces a new interface to be created.
        :param pulumi.Input[str] name: A unique name for the interface, required by GCE. Changing
               this forces a new interface to be created.
        :param pulumi.Input[str] project: The ID of the project in which this interface's router belongs. If it
               is not provided, the provider project is used. Changing this forces a new interface to be created.
        :param pulumi.Input[str] region: The region this interface's router sits in. If not specified,
               the project region will be used. Changing this forces a new interface to be
               created.
        :param pulumi.Input[str] router: The name of the router this interface will be attached to.
               Changing this forces a new interface to be created.
        :param pulumi.Input[str] vpn_tunnel: The name or resource link to the VPN tunnel this
               interface will be linked to. Changing this forces a new interface to be created. Only
               one of `vpn_tunnel` and `interconnect_attachment` can be specified.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()

        __props__["interconnect_attachment"] = interconnect_attachment
        __props__["ip_range"] = ip_range
        __props__["name"] = name
        __props__["project"] = project
        __props__["region"] = region
        __props__["router"] = router
        __props__["vpn_tunnel"] = vpn_tunnel
        return RouterInterface(resource_name, opts=opts, __props__=__props__)
    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

