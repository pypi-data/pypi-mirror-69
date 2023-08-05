# Copyright (c) Microsoft Corporation. All rights reserved.
# Licensed under the MIT License.
#
import uuid
from datetime import datetime

from azure_monitor.protocol import LiveMetricEnvelope
from azure_monitor.utils import azure_monitor_context

DEFAULT_LIVEMETRICS_ENDPOINT = "https://rt.services.visualstudio.com"
LIVE_METRICS_SUBSCRIBED_HEADER = "x-ms-qps-subscribed"
LIVE_METRICS_TRANSMISSION_TIME_HEADER = "x-ms-qps-transmission-time"
STREAM_ID = str(uuid.uuid4())


def create_metric_envelope(instrumentation_key: str):
    envelope = LiveMetricEnvelope(
        documents=None,
        instance=azure_monitor_context.get("ai.cloud.roleInstance"),
        instrumentation_key=instrumentation_key,
        invariant_version=1,  # 1 -> v1 QPS protocol,
        machine_name=azure_monitor_context.get("ai.device.id"),
        metrics=None,
        stream_id=STREAM_ID,
        timestamp="/Date({0})/".format(str(calculate_ticks_since_epoch())),
        version=azure_monitor_context.get("ai.internal.sdkVersion"),
    )
    return envelope


def calculate_ticks_since_epoch():
    return round(
        (datetime.utcnow() - datetime(1, 1, 1)).total_seconds() * 10000000
    )
