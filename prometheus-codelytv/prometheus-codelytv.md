# Monitoring with Prometheus (CodelyTV)

- https://pro.codely.tv/library/prometheus/115108/about/
- https://github.com/CodelyTV/prometheus-course
- Trainer: Rubén Cougil

## Introduction

- Prometheus is great for recording any temporal series.
- It is not a good option if you need detailed and complete data with 100% precision (they're usually aggregated). You better use logging or tracing for that.

### Observability

- Knowing what happens in your system in realtime.
- Even better: being able to predict what it will happen.
- TSDB: timeseries databases, used to keep the metrics. It is just values with an associated timestamp.
- Tracing + Metrics + Logging
- **Tracing**
  - request scoped
  - correlation_id
  - you can do distributed tracing
- **Metrics**
  - Aggregatable, e.g. RAM used in your servers, number of active instances.
  - Business
  - Application
  - Infrastructure
  - Customer
  - Pipeline
- **Logging**
  - events, usually enriched with a context

## Types of metrics

- **Counters**:
  - it accumulates
  - it can only increment, never decrements
  - e.g. number of times the home was loaded
- **Gauge**
  - Discrete measures which can go up or down.
  - e.g. like a termometer or a speedmeter, number of users currently using the system, use of RAM, etc.
- **Histogram**
  - Time-based values.
  - You can see WHEN something happened with a specific value. You can select a range (bucket) and see the values there. E.g. to see percentiles
  - It is accumulative, each bucket contains the previous buckets.
  - It is calculated on server-side.
- **Summary**
  - It is a type of histogram: it also provides a total count of observations and an addition of all its values.
  - To be used when you can not predict which bucket you want.
  - It is calculated on client-side.
  - Recommended to be used whenever it's possible.
  - It uses quantiles (1-5) instead of percentiles (1-100).
  - It affects your client performance (it is published from the client) and you can not do some aggregation on the server-side.

## Solutions in the industry (alternatives)

- **StatsD**
  - The "oldest" one, very popular, from Etsy, kind of standard.
  - Usually it uses Graphite in order to show graphics.
- **InfluxDB**
  - OpenSource model, written in Go.
  - You pay for
- **Datadog**
  - It is not OpenSource.
  - SaaS.
  - It is kept months and months...
- **Prometheus**
  - De facto telemetry for k8s.
  - From SoundCloud
  - Instead of sending the metrics from the clients to the server, there the metrics are gathered, access from the "server".
  - It is pulling, the rest of alternatives are pushing.
  - Each agent/client exposes endpoints with the metrics in plain text.
  - E.g. it requests it every 10 seconds, so the metrics must be aggregated.
  - The existing SaaS offers scalable storage for their metrics.
- **OpenTelemetry**
  - Trying to standardise metrics and tracing.
  - https://opentelemetry.io/
  - OpenCensus: https://opencensus.io/
  - OpenTracing: https://opentracing.io/

## Introduction to Prometheus

### Architecture

- **Prometheus server**
  - Retrieval (scraping the Prom agents)
  - TSDB (it stores the data retrieved)
  - HTTP Server
- Prom server pulls the metrics from the Prometheus targets (jobs/exporters).
  - It exists elements tha converts any data in any tool to Prometheus (e.g. to convert from MySQL to Prom)
- Not everything can work with jobs/exporters, e.g. a cron job that does something
  - In those cases, those jobs can push metrics at exit to a **Pushgateway**, from where the server can pull the metrics.
- It exists service discovery for Prom, in order to know which endpoints it should scrape, it needs to discover targets.
  - You can use Consul, Zoopkeeper, etc.
- We can visualize the data with **Grafana**.
  - It also exists API clients and Prometheus web UI.
- **Alertmanager**: alerts are pushed to the Alertmanager and then forwarded to email, PagerDuty, etc.

## Metrics formats

- They are exposed as plain text.
- Example: `api_http_requests_total{method="POST", uri="\"} 12`
- Metrics usually have a prefix: the namespace, e.g. `api` in the previous example, it is usually the monitored application.
- `http_requests` is what you want to measure
- `total`: the suffix, usually total, sum or count, the unit of medition. It could also be `total_bytes` or `total_seconds`, etc. Prom recommends specific units.
- Then we have the **labels**: creating several dimensions for a metric, so that we could further filter.
  - E.g. `host` or `env`.
- A time serie is a combination of metric, label and the metric value. Every new label creates a new timeserie. The more cardinality in the labels, the more storage spece it occupies.
- Finally, we have the value, e.g. `12`.
- A **counter**: `prometheus_counter_example {label="value"} 42`
- A **gauge**: `prometheus_gauge_example {label="value"} 522.123`
- An **histogram**:
  - `prometheus_histogram_example_bucket {label="value",le="1"} 28641`
  - `prometheus_histogram_example_bucket {label="value",le="3"} 28782`
  - `prometheus_histogram_example_bucket {label="value",le="8"} 28844`
  - `prometheus_histogram_example_bucket {label="value",le="+Inf"} 28860`
  - `prometheus_histogram_example_sum {label="value"} 1863.80491025699`
  - `prometheus_histogram_example_count {label="value"} 28860`
- A **summary**:
  - `prometheus_summary_example_bucket {quantile="0.5"} 6.4853e-05`
  - `prometheus_summary_example_bucket {quantile="0.9"} 0.00010102`
  - `prometheus_summary_example_bucket {quantile="0.99"} 0.000177367`
  - `prometheus_summary_example_sum {label="value"} 1.620491025699e+06`
  - `prometheus_summary_example_count {label="value"} 1.11229e+09860`

## Resources

- https://peter.bourgon.org/blog/2017/02/21/metrics-tracing-and-logging.html
- There is a Chrome plugin for colouring the output of calling the endpoints `/metrics`
