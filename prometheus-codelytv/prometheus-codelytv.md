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

### Types of metrics

- **Counters**:
  - it accumulates
  - it can only increment, never decrements
  - e.g. number of times the home was loaded
- **Gauge**
  - Discrete measures which can go up or down.
  - e.g. like a termometer or a speedmeter, number of users currently using the system, use of RAM, etc.
- **Histogram**
  - https://prometheus.io/docs/practices/histograms/
  - Time-based values.
  - You can see WHEN something happened with a specific value. You can select a range (bucket) and see the values there. E.g. to see percentiles
  - It is accumulative, each bucket contains the previous buckets.
  - It is calculated on server-side.
  - It measures latencies.
- **Summary**
  - It is a type of histogram: it also provides a total count of observations and an addition of all its values.
  - To be used when you can not predict which bucket you want.
  - It is calculated on client-side.
  - Recommended to be used whenever it's possible.
  - It uses quantiles (1-5) instead of percentiles (1-100).
  - It affects your client performance (it is published from the client) and you can not do some aggregation on the server-side.

### Solutions in the industry (alternatives)

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

## First steps with Prometheus

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

### Metrics formats

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

### Prometheus installation and configuration

- https://github.com/CodelyTV/prometheus-course
- `1.2-Instalacion-prometheus`
- http://localhost:9090/metrics
- http://localhost:9090/graph
  - http://localhost:9090/graph?g0.range_input=1h&g0.expr=%0Aprometheus_http_requests_total&g0.tab=1
  - `prometheus_http_requests_total`: if we show see, we will see the counters resets (not good!). In order to get better graphs we better use something like `rate(prometheus_http_requests_total)[5m]`: number of increments during the last 5 minutes, instead of measuring a "total" value. For a counter, it is better to measure a relative value, not an absolute one because of the restarts problem.

## Exposing application metrics

- Client libraries: https://prometheus.io/docs/instrumenting/clientlibs/

### Go

- https://github.com/CodelyTV/prometheus-course/tree/master/3.1-app-exporter-go
- Repository: 3.1-app-exporter-go
  - http://localhost:8081/metrics
  - http://localhost:9090/metrics
  - http://localhost:9090/graph

### PHP

- https://github.com/CodelyTV/prometheus-course/tree/master/3.4-app-exporter-php
- We install the apcu extension, `pecl install apcu`. It can be used as a memory cache.

### Java

- https://github.com/CodelyTV/prometheus-course/tree/master/3.2-app-exporter-java

## Exposing infrastructure metrics

### Docker metrics

- https://github.com/CodelyTV/prometheus-course/tree/master/2.1-caad-exporter
- An **exporter** is something between the Prom server and the agents (when needed because the metrics are not exposed in a native way).
- You better install the exporter in the same machine where you want to measure.
- The Docker exporter: https://github.com/google/cadvisor
- Now Docker already exposes metrics in a native way (but in an experimental way, better still use CAdvisor): https://docs.docker.com/config/daemon/prometheus/
- You can then create dashboards to visualize CPU, memory, number of instances, etc.

### MySQL metrics

- https://github.com/CodelyTV/prometheus-course/tree/master/2.2-mysql-exporter
- E.g. to show slow queries.

## How to ingest metrics

### Pushing

- https://github.com/CodelyTV/prometheus-course/tree/master/4.1-push-gateway
- https://github.com/prometheus/pushgateway
- The `pushgateway` is just another exporter.
- It is something between the App and Prometheus.
  - The App pushes metrics to the Push Gateway, and then Prometheus pulls metrics from that Push Gateway.
- It doesn't delete metrics and always remembers everything. E.g. if a pod disappears, its metrics remains.
- To be used just for things like the cron jobs (one for all of them is OK).
- It has a UI

### Remote data store: Cortex

- https://github.com/CodelyTV/prometheus-course/tree/master/4.2-remote-write-cortex
- Prometheus does not support clustering.
- Cortex provides long term storage for Prometheus. Permite escalado horizontal y aporta características como replicación de información y alta disponibilidad.
- We do not want to store everything, just what it is relevant (e.g. different frequency depending on how old data is).
- Other alternatives to Cortex: Elasticsearch, Kafka, InfluxDB.
- Another well known alternative is Thanos.
- Cortex uses the same PromQL and API contract.
- Usually you want several Cortex instances.
- We can use Grafana with Cortex.
  - We can add Cortex as a Data Source (thought we select "Prometheus" type).

### PromQL

- https://github.com/CodelyTV/prometheus-course/tree/master/4.3-promql
- If the app is restarted, the counters are restarted. So, we use the function `rate()`, which indicates the number of increments that happened for a `count` per second.
  - E.g. if the counter went `1, 2, 3, 4, 0, 1, 2`, the `rate` will detect the restart and return `1, 2, 3, 4, 5, 6, 7`.
  * You need to pass a vector to range, a range, e.g. 5 minutes `rate(node_network_receive_bytes_total[5m])`: this would aggregate every 5 minutes.
- For regex, we use the symbol `~`
- Some examples:
  - Get every HTTP status code except 4xx`http_requests_total {status! ~ "4 .."}`
  - Get every job which finishes with the string _server_: `http_requests_total {job = ~ ". * server"}`
  - `max_over_time(sum(go_gorouteine{job="codely"})([10m:1m])`: mke the addition of all the gosubroutines during the last 10 minutes and give me the maximum value reached.

## How to create alerts: Alertmanager

- https://github.com/CodelyTV/prometheus-course/tree/master/6.3-alert-manager
- https://www.robustperception.io/prometheus-and-alertmanager-architecture
- There is an independent component called **Alertmanager**
- The rules for the alerts are configured in Prometheus, but what to do is responsibility of the Alertmanager
- The Alertmanager scales, you can create a cluster and it works fine.
- Prometheus determines what is wrong and sends alerts. The Alertmanager takes these alerts, and converts them to notifications via email, PagerDuty, Slack etc.
- Prom does not scale, you can not cluster them. The Prom instances do not talk to each other, so if we configured the alert notification in each node, we would receive them duplicated.
- You could configure alerts in Grafana **BUT**:
  - In Grafana the UI is very basic
  - We couldn't use PromQL.
  - You can not share alerts between Grafana instances, it does not scale.
- You can test the Alerts in your pipeline.

## Prometheus in k8s

TBD

## DDD and Prometheus

TBD

## Next steps

TBD

## Resources

- I exists `promtool`, e.g. to check that rules are correctly configured: `promtool check rules ./etc/prometheus/alertmanager/rules.yml`
- https://peter.bourgon.org/blog/2017/02/21/metrics-tracing-and-logging.html
- There is a Chrome plugin for colouring the output of calling the endpoints `/metrics`

## To be read

- https://prometheus.io/docs/practices/histograms/

## Bookmark

- https://pro.codely.tv/library/prometheus/115108/path/step/71928279/
