# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from typing import Union
from .. import utilities, tables

class ServicePerimeterResource(pulumi.CustomResource):
    perimeter_name: pulumi.Output[str]
    """
    The name of the Service Perimeter to add this resource to.
    """
    resource: pulumi.Output[str]
    """
    A GCP resource that is inside of the service perimeter.
    Currently only projects are allowed.
    Format: projects/{project_number}
    """
    def __init__(__self__, resource_name, opts=None, perimeter_name=None, resource=None, __props__=None, __name__=None, __opts__=None):
        """
        Allows configuring a single GCP resource that should be inside of a service perimeter.
        This resource is intended to be used in cases where it is not possible to compile a full list
        of projects to include in a `accesscontextmanager.ServicePerimeter` resource,
        to enable them to be added separately.

        > **Note:** If this resource is used alongside a `accesscontextmanager.ServicePerimeter` resource,
        the service perimeter resource must have a `lifecycle` block with `ignore_changes = [status[0].resources]` so
        they don't fight over which resources should be in the policy.


        To get more information about ServicePerimeterResource, see:

        * [API documentation](https://cloud.google.com/access-context-manager/docs/reference/rest/v1/accessPolicies.servicePerimeters)
        * How-to Guides
            * [Service Perimeter Quickstart](https://cloud.google.com/vpc-service-controls/docs/quickstart)

        ## Example Usage - Access Context Manager Service Perimeter Resource Basic


        ```python
        import pulumi
        import pulumi_gcp as gcp

        access_policy = gcp.accesscontextmanager.AccessPolicy("access-policy",
            parent="organizations/123456789",
            title="my policy")
        service_perimeter_resource_service_perimeter = gcp.accesscontextmanager.ServicePerimeter("service-perimeter-resourceServicePerimeter",
            parent=access_policy.name.apply(lambda name: f"accessPolicies/{name}"),
            title="restrict_all",
            status={
                "restrictedServices": ["storage.googleapis.com"],
            })
        service_perimeter_resource_service_perimeter_resource = gcp.accesscontextmanager.ServicePerimeterResource("service-perimeter-resourceServicePerimeterResource",
            perimeter_name=service_perimeter_resource_service_perimeter.name,
            resource="projects/987654321")
        ```

        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] perimeter_name: The name of the Service Perimeter to add this resource to.
        :param pulumi.Input[str] resource: A GCP resource that is inside of the service perimeter.
               Currently only projects are allowed.
               Format: projects/{project_number}
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

            if perimeter_name is None:
                raise TypeError("Missing required property 'perimeter_name'")
            __props__['perimeter_name'] = perimeter_name
            if resource is None:
                raise TypeError("Missing required property 'resource'")
            __props__['resource'] = resource
        super(ServicePerimeterResource, __self__).__init__(
            'gcp:accesscontextmanager/servicePerimeterResource:ServicePerimeterResource',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name, id, opts=None, perimeter_name=None, resource=None):
        """
        Get an existing ServicePerimeterResource resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.

        :param str resource_name: The unique name of the resulting resource.
        :param str id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] perimeter_name: The name of the Service Perimeter to add this resource to.
        :param pulumi.Input[str] resource: A GCP resource that is inside of the service perimeter.
               Currently only projects are allowed.
               Format: projects/{project_number}
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()

        __props__["perimeter_name"] = perimeter_name
        __props__["resource"] = resource
        return ServicePerimeterResource(resource_name, opts=opts, __props__=__props__)
    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

