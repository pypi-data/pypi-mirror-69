# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from typing import Union
from .. import utilities, tables

class Registry(pulumi.CustomResource):
    credentials: pulumi.Output[list]
    """
    List of public key certificates to authenticate devices. Structure is documented below. 

      * `publicKeyCertificate` (`dict`) - The certificate format and data.
        * `certificate` (`str`) - The certificate data.
        * `format` (`str`) - The field allows only  `X509_CERTIFICATE_PEM`.
    """
    event_notification_configs: pulumi.Output[list]
    """
    List of configurations for event notification, such as
    PubSub topics to publish device events to. Structure is documented below.

      * `pubsub_topic_name` (`str`) - PubSub topic name to publish device state updates.
      * `subfolderMatches` (`str`) - If the subfolder name matches this string
        exactly, this configuration will be used. The string must not include the
        leading '/' character. If empty, all strings are matched. Empty value can
        only be used for the last `event_notification_configs` item.
    """
    http_config: pulumi.Output[dict]
    """
    Activate or deactivate HTTP. Structure is documented below.

      * `http_enabled_state` (`str`) - The field allows `HTTP_ENABLED` or `HTTP_DISABLED`.
    """
    log_level: pulumi.Output[str]
    mqtt_config: pulumi.Output[dict]
    """
    Activate or deactivate MQTT. Structure is documented below.

      * `mqtt_enabled_state` (`str`) - The field allows `MQTT_ENABLED` or `MQTT_DISABLED`.
    """
    name: pulumi.Output[str]
    """
    A unique name for the resource, required by device registry.
    Changing this forces a new resource to be created.
    """
    project: pulumi.Output[str]
    """
    The project in which the resource belongs. If it is not provided, the provider project is used.
    """
    region: pulumi.Output[str]
    """
    The Region in which the created address should reside. If it is not provided, the provider region is used.
    """
    state_notification_config: pulumi.Output[dict]
    """
    A PubSub topic to publish device state updates. Structure is documented below.

      * `pubsub_topic_name` (`str`) - PubSub topic name to publish device state updates.
    """
    def __init__(__self__, resource_name, opts=None, credentials=None, event_notification_configs=None, http_config=None, log_level=None, mqtt_config=None, name=None, project=None, region=None, state_notification_config=None, __props__=None, __name__=None, __opts__=None):
        """
         Creates a device registry in Google's Cloud IoT Core platform. For more information see
        [the official documentation](https://cloud.google.com/iot/docs/) and
        [API](https://cloud.google.com/iot/docs/reference/cloudiot/rest/v1/projects.locations.registries).


        ## Example Usage



        ```python
        import pulumi
        import pulumi_gcp as gcp

        default_devicestatus = gcp.pubsub.Topic("default-devicestatus")
        default_telemetry = gcp.pubsub.Topic("default-telemetry")
        default_registry = gcp.iot.Registry("default-registry",
            event_notification_configs=[{
                "pubsubTopicName": default_telemetry.id,
            }],
            state_notification_config={
                "pubsub_topic_name": default_devicestatus.id,
            },
            http_config={
                "http_enabled_state": "HTTP_ENABLED",
            },
            mqtt_config={
                "mqtt_enabled_state": "MQTT_ENABLED",
            },
            credentials=[{
                "publicKeyCertificate": {
                    "format": "X509_CERTIFICATE_PEM",
                    "certificate": (lambda path: open(path).read())("rsa_cert.pem"),
                },
            }])
        ```


        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[list] credentials: List of public key certificates to authenticate devices. Structure is documented below. 
        :param pulumi.Input[list] event_notification_configs: List of configurations for event notification, such as
               PubSub topics to publish device events to. Structure is documented below.
        :param pulumi.Input[dict] http_config: Activate or deactivate HTTP. Structure is documented below.
        :param pulumi.Input[dict] mqtt_config: Activate or deactivate MQTT. Structure is documented below.
        :param pulumi.Input[str] name: A unique name for the resource, required by device registry.
               Changing this forces a new resource to be created.
        :param pulumi.Input[str] project: The project in which the resource belongs. If it is not provided, the provider project is used.
        :param pulumi.Input[str] region: The Region in which the created address should reside. If it is not provided, the provider region is used.
        :param pulumi.Input[dict] state_notification_config: A PubSub topic to publish device state updates. Structure is documented below.

        The **credentials** object supports the following:

          * `publicKeyCertificate` (`pulumi.Input[dict]`) - The certificate format and data.
            * `certificate` (`pulumi.Input[str]`) - The certificate data.
            * `format` (`pulumi.Input[str]`) - The field allows only  `X509_CERTIFICATE_PEM`.

        The **event_notification_configs** object supports the following:

          * `pubsub_topic_name` (`pulumi.Input[str]`) - PubSub topic name to publish device state updates.
          * `subfolderMatches` (`pulumi.Input[str]`) - If the subfolder name matches this string
            exactly, this configuration will be used. The string must not include the
            leading '/' character. If empty, all strings are matched. Empty value can
            only be used for the last `event_notification_configs` item.

        The **http_config** object supports the following:

          * `http_enabled_state` (`pulumi.Input[str]`) - The field allows `HTTP_ENABLED` or `HTTP_DISABLED`.

        The **mqtt_config** object supports the following:

          * `mqtt_enabled_state` (`pulumi.Input[str]`) - The field allows `MQTT_ENABLED` or `MQTT_DISABLED`.

        The **state_notification_config** object supports the following:

          * `pubsub_topic_name` (`pulumi.Input[str]`) - PubSub topic name to publish device state updates.
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

            __props__['credentials'] = credentials
            __props__['event_notification_configs'] = event_notification_configs
            __props__['http_config'] = http_config
            __props__['log_level'] = log_level
            __props__['mqtt_config'] = mqtt_config
            __props__['name'] = name
            __props__['project'] = project
            __props__['region'] = region
            __props__['state_notification_config'] = state_notification_config
        alias_opts = pulumi.ResourceOptions(aliases=[pulumi.Alias(type_="gcp:kms/registry:Registry")])
        opts = pulumi.ResourceOptions.merge(opts, alias_opts)
        super(Registry, __self__).__init__(
            'gcp:iot/registry:Registry',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name, id, opts=None, credentials=None, event_notification_configs=None, http_config=None, log_level=None, mqtt_config=None, name=None, project=None, region=None, state_notification_config=None):
        """
        Get an existing Registry resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.

        :param str resource_name: The unique name of the resulting resource.
        :param str id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[list] credentials: List of public key certificates to authenticate devices. Structure is documented below. 
        :param pulumi.Input[list] event_notification_configs: List of configurations for event notification, such as
               PubSub topics to publish device events to. Structure is documented below.
        :param pulumi.Input[dict] http_config: Activate or deactivate HTTP. Structure is documented below.
        :param pulumi.Input[dict] mqtt_config: Activate or deactivate MQTT. Structure is documented below.
        :param pulumi.Input[str] name: A unique name for the resource, required by device registry.
               Changing this forces a new resource to be created.
        :param pulumi.Input[str] project: The project in which the resource belongs. If it is not provided, the provider project is used.
        :param pulumi.Input[str] region: The Region in which the created address should reside. If it is not provided, the provider region is used.
        :param pulumi.Input[dict] state_notification_config: A PubSub topic to publish device state updates. Structure is documented below.

        The **credentials** object supports the following:

          * `publicKeyCertificate` (`pulumi.Input[dict]`) - The certificate format and data.
            * `certificate` (`pulumi.Input[str]`) - The certificate data.
            * `format` (`pulumi.Input[str]`) - The field allows only  `X509_CERTIFICATE_PEM`.

        The **event_notification_configs** object supports the following:

          * `pubsub_topic_name` (`pulumi.Input[str]`) - PubSub topic name to publish device state updates.
          * `subfolderMatches` (`pulumi.Input[str]`) - If the subfolder name matches this string
            exactly, this configuration will be used. The string must not include the
            leading '/' character. If empty, all strings are matched. Empty value can
            only be used for the last `event_notification_configs` item.

        The **http_config** object supports the following:

          * `http_enabled_state` (`pulumi.Input[str]`) - The field allows `HTTP_ENABLED` or `HTTP_DISABLED`.

        The **mqtt_config** object supports the following:

          * `mqtt_enabled_state` (`pulumi.Input[str]`) - The field allows `MQTT_ENABLED` or `MQTT_DISABLED`.

        The **state_notification_config** object supports the following:

          * `pubsub_topic_name` (`pulumi.Input[str]`) - PubSub topic name to publish device state updates.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()

        __props__["credentials"] = credentials
        __props__["event_notification_configs"] = event_notification_configs
        __props__["http_config"] = http_config
        __props__["log_level"] = log_level
        __props__["mqtt_config"] = mqtt_config
        __props__["name"] = name
        __props__["project"] = project
        __props__["region"] = region
        __props__["state_notification_config"] = state_notification_config
        return Registry(resource_name, opts=opts, __props__=__props__)
    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

