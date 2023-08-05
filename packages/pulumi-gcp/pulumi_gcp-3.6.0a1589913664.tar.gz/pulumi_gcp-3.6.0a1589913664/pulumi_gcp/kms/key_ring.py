# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from typing import Union
from .. import utilities, tables

class KeyRing(pulumi.CustomResource):
    location: pulumi.Output[str]
    """
    The location for the KeyRing.
    A full list of valid locations can be found by running `gcloud kms locations list`.
    """
    name: pulumi.Output[str]
    """
    The resource name for the KeyRing.
    """
    project: pulumi.Output[str]
    """
    The ID of the project in which the resource belongs.
    If it is not provided, the provider project is used.
    """
    self_link: pulumi.Output[str]
    def __init__(__self__, resource_name, opts=None, location=None, name=None, project=None, __props__=None, __name__=None, __opts__=None):
        """
        A `KeyRing` is a toplevel logical grouping of `CryptoKeys`.


        > **Note:** KeyRings cannot be deleted from Google Cloud Platform.
        Destroying a provider-managed KeyRing will remove it from state but
        *will not delete the resource on the server.*


        To get more information about KeyRing, see:

        * [API documentation](https://cloud.google.com/kms/docs/reference/rest/v1/projects.locations.keyRings)
        * How-to Guides
            * [Creating a key ring](https://cloud.google.com/kms/docs/creating-keys#create_a_key_ring)

        ## Example Usage - Kms Key Ring Basic


        ```python
        import pulumi
        import pulumi_gcp as gcp

        example_keyring = gcp.kms.KeyRing("example-keyring", location="global")
        ```

        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] location: The location for the KeyRing.
               A full list of valid locations can be found by running `gcloud kms locations list`.
        :param pulumi.Input[str] name: The resource name for the KeyRing.
        :param pulumi.Input[str] project: The ID of the project in which the resource belongs.
               If it is not provided, the provider project is used.
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

            if location is None:
                raise TypeError("Missing required property 'location'")
            __props__['location'] = location
            __props__['name'] = name
            __props__['project'] = project
            __props__['self_link'] = None
        super(KeyRing, __self__).__init__(
            'gcp:kms/keyRing:KeyRing',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name, id, opts=None, location=None, name=None, project=None, self_link=None):
        """
        Get an existing KeyRing resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.

        :param str resource_name: The unique name of the resulting resource.
        :param str id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] location: The location for the KeyRing.
               A full list of valid locations can be found by running `gcloud kms locations list`.
        :param pulumi.Input[str] name: The resource name for the KeyRing.
        :param pulumi.Input[str] project: The ID of the project in which the resource belongs.
               If it is not provided, the provider project is used.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()

        __props__["location"] = location
        __props__["name"] = name
        __props__["project"] = project
        __props__["self_link"] = self_link
        return KeyRing(resource_name, opts=opts, __props__=__props__)
    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

