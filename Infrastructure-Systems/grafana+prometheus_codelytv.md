# Grafana + Prometheus

- https://github.com/CodelyTV/prometheus-course/tree/master/5.1-grafana
- https://pro.codely.tv/library/curso-grafana-con-prometheus

## General

- Any configuration from the UI can algo be done through files.

## Dashboards

- You can create your dashboard by hand and then export it to a JSON, in order to share it or version it.
- Grafana dashboard: https://github.com/CodelyTV/prometheus-course/tree/master/5.2-grafana-dashboard

### Panels

- Linear Graph 1
  - E.g. number of goroutines (i.e. threads), which is a gauge.
- Linear Graph 2
  - Memory consumption
  - We use the CAdvisor: `avg(container_memory_usage_bytes{container_label_com_docker_compose_service="app"} * 1e-6) by (container_label_com_docker_compose_service` (in order to get MB)
  - We add thresholds (from "Field" tab):
    - warning if greater than 20 MB
    - critical if greater than 21
    - then we can add alerts in Grafana
- Gauge
  - `rate(http_request_duration_seconds_sum[1m]) / rate(http_request_duration_seconds_count[1m])`: average of time that it takes the requests
    - We add thresholds, e.g. percentages.
  - % CPU Usage: `sum by (container_label_com_docker_compose_service) (rate(container_cpu_usage_seconds_total{container_label_com_docker_compose_service=\"app\"}[1m]) * 1024 * 60) / on (container_label_com_docker_compose_service) (container_spec_cpu_shares{container_label_com_docker_compose_service=\"app\"}) / 60 * 100`
- Vertical Graph with Lines (equalizer)
  - HTTP response code ratio: `sum(rate(http_requests_total{job="codely", code!="200"}[1m])) by (code)` (increments per second)
  - Display mode: Retro LCD
  - Display: Lines
- Vertical Graph with Bars
  - `avg(rate(http_requests_total[1m])) by (code)`
  - Display: Bars
  - Stacking and null value: Stack
  - You can change the colour for every different status code.

### Variables in Grafana

- TBD

## Issues

- https://grafana.com/docs/grafana/latest/installation/docker/#migration-from-a-previous-version-of-the-docker-container-to-5-1-or-later
- https://community.grafana.com/t/new-docker-install-with-persistent-storage-permission-problem/10896
