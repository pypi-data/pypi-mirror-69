# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from typing import Union
from .. import utilities, tables

class Variable(pulumi.CustomResource):
    name: pulumi.Output[str]
    """
    The name of the variable to manage. Note that variable
    names can be hierarchical using slashes (e.g. "prod-variables/hostname").
    """
    parent: pulumi.Output[str]
    """
    The name of the RuntimeConfig resource containing this
    variable.
    """
    project: pulumi.Output[str]
    """
    The ID of the project in which the resource belongs. If it
    is not provided, the provider project is used.
    """
    text: pulumi.Output[str]
    """
    or `value` - (Required) The content to associate with the variable.
    Exactly one of `text` or `variable` must be specified. If `text` is specified,
    it must be a valid UTF-8 string and less than 4096 bytes in length. If `value`
    is specified, it must be base64 encoded and less than 4096 bytes in length.
    """
    update_time: pulumi.Output[str]
    """
    (Computed) The timestamp in RFC3339 UTC "Zulu" format,
    accurate to nanoseconds, representing when the variable was last updated.
    Example: "2016-10-09T12:33:37.578138407Z".
    """
    value: pulumi.Output[str]
    def __init__(__self__, resource_name, opts=None, name=None, parent=None, project=None, text=None, value=None, __props__=None, __name__=None, __opts__=None):
        """
        Manages a RuntimeConfig variable in Google Cloud. For more information, see the
        [official documentation](https://cloud.google.com/deployment-manager/runtime-configurator/),
        or the
        [JSON API](https://cloud.google.com/deployment-manager/runtime-configurator/reference/rest/).



        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] name: The name of the variable to manage. Note that variable
               names can be hierarchical using slashes (e.g. "prod-variables/hostname").
        :param pulumi.Input[str] parent: The name of the RuntimeConfig resource containing this
               variable.
        :param pulumi.Input[str] project: The ID of the project in which the resource belongs. If it
               is not provided, the provider project is used.
        :param pulumi.Input[str] text: or `value` - (Required) The content to associate with the variable.
               Exactly one of `text` or `variable` must be specified. If `text` is specified,
               it must be a valid UTF-8 string and less than 4096 bytes in length. If `value`
               is specified, it must be base64 encoded and less than 4096 bytes in length.
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

            __props__['name'] = name
            if parent is None:
                raise TypeError("Missing required property 'parent'")
            __props__['parent'] = parent
            __props__['project'] = project
            __props__['text'] = text
            __props__['value'] = value
            __props__['update_time'] = None
        super(Variable, __self__).__init__(
            'gcp:runtimeconfig/variable:Variable',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name, id, opts=None, name=None, parent=None, project=None, text=None, update_time=None, value=None):
        """
        Get an existing Variable resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.

        :param str resource_name: The unique name of the resulting resource.
        :param str id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] name: The name of the variable to manage. Note that variable
               names can be hierarchical using slashes (e.g. "prod-variables/hostname").
        :param pulumi.Input[str] parent: The name of the RuntimeConfig resource containing this
               variable.
        :param pulumi.Input[str] project: The ID of the project in which the resource belongs. If it
               is not provided, the provider project is used.
        :param pulumi.Input[str] text: or `value` - (Required) The content to associate with the variable.
               Exactly one of `text` or `variable` must be specified. If `text` is specified,
               it must be a valid UTF-8 string and less than 4096 bytes in length. If `value`
               is specified, it must be base64 encoded and less than 4096 bytes in length.
        :param pulumi.Input[str] update_time: (Computed) The timestamp in RFC3339 UTC "Zulu" format,
               accurate to nanoseconds, representing when the variable was last updated.
               Example: "2016-10-09T12:33:37.578138407Z".
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()

        __props__["name"] = name
        __props__["parent"] = parent
        __props__["project"] = project
        __props__["text"] = text
        __props__["update_time"] = update_time
        __props__["value"] = value
        return Variable(resource_name, opts=opts, __props__=__props__)
    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

