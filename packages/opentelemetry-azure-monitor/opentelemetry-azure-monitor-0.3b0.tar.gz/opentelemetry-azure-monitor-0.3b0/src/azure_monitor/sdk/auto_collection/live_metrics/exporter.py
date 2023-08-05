# Copyright (c) Microsoft Corporation. All rights reserved.
# Licensed under the MIT License.
#
import collections
import logging
import typing

from opentelemetry.sdk.metrics import Counter, Observer
from opentelemetry.sdk.metrics.export import (
    MetricRecord,
    MetricsExporter,
    MetricsExportResult,
)

from azure_monitor.protocol import (
    Envelope,
    LiveMetric,
    LiveMetricDocument,
    LiveMetricDocumentProperty,
    LiveMetricEnvelope,
)
from azure_monitor.sdk.auto_collection.live_metrics import utils
from azure_monitor.sdk.auto_collection.live_metrics.sender import (
    LiveMetricsSender,
)

logger = logging.getLogger(__name__)


# pylint: disable=no-self-use
# pylint: disable=too-many-statements
# pylint: disable=too-many-return-statements
class LiveMetricsExporter(MetricsExporter):
    """Live Metrics Exporter

    Export data to Azure Live Metrics service and determine if user is subscribed.
    """

    def __init__(self, instrumentation_key):
        self._instrumentation_key = instrumentation_key
        self._sender = LiveMetricsSender(self._instrumentation_key)
        self.subscribed = True
        self._document_envelopes = collections.deque()

    def add_document(self, envelope: Envelope):
        self._document_envelopes.append(envelope)

    def export(
        self, metric_records: typing.Sequence[MetricRecord]
    ) -> MetricsExportResult:
        envelope = self._metric_to_live_metrics_envelope(metric_records)
        try:
            response = self._sender.post(envelope)
            if response.ok:
                self.subscribed = (
                    response.headers.get(utils.LIVE_METRICS_SUBSCRIBED_HEADER)
                    == "true"
                )
                return MetricsExportResult.SUCCESS

        except Exception:  # pylint: disable=broad-except
            logger.exception("Exception occurred while exporting the data.")

        return MetricsExportResult.FAILURE

    def _metric_to_live_metrics_envelope(
        self, metric_records: typing.Sequence[MetricRecord]
    ) -> LiveMetricEnvelope:

        envelope = utils.create_metric_envelope(self._instrumentation_key)
        envelope.documents = self._get_live_metric_documents()
        envelope.metrics = []

        # Add metrics
        for metric_record in metric_records:
            value = 0
            metric = metric_record.metric
            if isinstance(metric, Counter):
                value = metric_record.aggregator.checkpoint
            elif isinstance(metric, Observer):
                value = metric_record.aggregator.checkpoint.last
                if not value:
                    value = 0
            envelope.metrics.append(
                LiveMetric(name=metric.name, value=value, weight=1)
            )

        return envelope

    def _get_live_metric_documents(
        self,
    ) -> typing.Sequence[LiveMetricDocument]:
        live_metric_documents = []
        while self._document_envelopes:
            for envelope in self._document_envelopes.popleft():
                base_type = envelope.data.baseType
                if base_type:
                    document = LiveMetricDocument(
                        __type=self._get_live_metric_type(base_type),
                        document_type=self._get_live_metric_document_type(
                            base_type
                        ),
                        properties=self._get_aggregated_properties(envelope),
                        version="1.0",
                    )
                    live_metric_documents.append(document)
                else:
                    logger.warning(
                        "Document type invalid; not sending live metric document"
                    )

        return live_metric_documents

    def _get_live_metric_type(self, base_type: str) -> str:
        if base_type == "EventData":
            return "EventTelemetryDocument"
        if base_type == "ExceptionData":
            return "ExceptionTelemetryDocument"
        if base_type == "MessageData":
            return "TraceTelemetryDocument"
        if base_type == "MetricData":
            return "MetricTelemetryDocument"
        if base_type == "RequestData":
            return "RequestTelemetryDocument"
        if base_type == "RemoteDependencyData":
            return "DependencyTelemetryDocument"
        if base_type == "AvailabilityData":
            return "AvailabilityTelemetryDocument"
        return ""

    def _get_live_metric_document_type(self, base_type: str) -> str:
        if base_type == "EventData":
            return "Event"
        if base_type == "ExceptionData":
            return "Exception"
        if base_type == "MessageData":
            return "Trace"
        if base_type == "MetricData":
            return "Metric"
        if base_type == "RequestData":
            return "Request"
        if base_type == "RemoteDependencyData":
            return "RemoteDependency"
        if base_type == "AvailabilityData":
            return "Availability"
        return ""

    def _get_aggregated_properties(
        self, envelope: Envelope
    ) -> typing.List[LiveMetricDocumentProperty]:

        aggregated_properties = []
        measurements = (
            envelope.data.base_data.measurements
            if envelope.data.base_data.measurements
            else []
        )
        for key in measurements:
            prop = LiveMetricDocumentProperty(key=key, value=measurements[key])
            aggregated_properties.append(prop)
        properties = (
            envelope.data.base_data.properties
            if envelope.data.base_data.properties
            else []
        )
        for key in properties:
            prop = LiveMetricDocumentProperty(key=key, value=properties[key])
            aggregated_properties.append(prop)
        return aggregated_properties
