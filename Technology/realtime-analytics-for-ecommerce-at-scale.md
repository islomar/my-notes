<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Realtime Analytics for e-commerce at scale](#realtime-analytics-for-e-commerce-at-scale)
  - [About this Session](#about-this-session)
    - [Challenges inherent to any analytics project at scale:‍](#challenges-inherent-to-any-analytics-project-at-scale‍)
    - [Specific to e-commerce:](#specific-to-e-commerce)
    - [Additional "small" details:](#additional-small-details)
  - [About Tinybird](#about-tinybird)
  - [The challenges of analytics-at-scale for any project](#the-challenges-of-analytics-at-scale-for-any-project)
  - [Schema design and trade-offs](#schema-design-and-trade-offs)
  - [The data life cycle. Moving data out of the production DB](#the-data-life-cycle-moving-data-out-of-the-production-db)
  - [Handling time zones](#handling-time-zones)
  - [Interesting readings](#interesting-readings)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Realtime Analytics for e-commerce at scale

- https://www.tinybird.co/courses/real-time-analytics-for-ecommerce-at-scale
- https://twitter.com/Data_sigh
- Javi Santana
- Jorge Sancha
- Related with [Principles of real-time analytics on large datasets](principles-real-time-analytics.md)

## About this Session

- Understanding the technology and techniques required to build real-time analysis over billions of transactions for international ecommerce at scale – a 90 minute crash course created by the Tinybird team.

### Challenges inherent to any analytics project at scale:‍

- Dealing with large quantities of data: billions of ingested rows and trillions of rows scanned daily with high-frequency ingestion.
- Achieving high-concurrency consumption: several hundred, or more, requests per second serving real-time dashboards and/or automations.
- Data reconciliation: deduplication techniques and the ability to rewrite history at the scale and speed mentioned above.

### Specific to e-commerce:

- Stock and catalog management
- Handling the order life cycle
- Reporting consistent results over different currencies and time zones
- Preparing for special events like Black Friday

### Additional "small" details:

- Achieving “real-time”: sub-second API endpoints, responses, and chart rendering.
- How to keep costs down even as data and use cases grow.
- How to be flexible enough to adapt to new use cases.

## About Tinybird

- It is the way to build Realtime Data Products
- Ingest data at any scale
- Materialize or query data
- Expose low latency API endpoints
- Made for developers and data engineers

## The challenges of analytics-at-scale for any project

- When you get to a few million rows problems start
- We want high concurrency consumption
- As fast as any API with Spark-like data sizes
- Another challenge: moving data from your busy DB to a place where you can query it safely. Not easy in real-time when volume is high.
- Column oriented analytical databases
- Elements of the order life cycle: states, products, errors, returns, countries, changes, currencies.
- Product catalog change a lot, as well as stock management.

## Schema design and trade-offs

- **Dimension** data: doesn't grow linearly with time, like product catalog, stores, countries.
- **Fact** data: grows every day, e.g. orders
- Denormalize as much as possible and avoid joins (not always possible)
- The less space the columns thake the better.
- They use LZ4 compression
- Precision: don't use Float32 for money

## The data life cycle. Moving data out of the production DB
* Past: batch (Apache Spark)
* Future: real-time (Tinybird)

## Handling time zones
* Sometimes it's more important the UTC and sometimes the local time.

## Interesting readings

- https://blog.tinybird.co/2020/12/21/how-we-setup-real-time-analytics-service-to-process-12-trillion-rows-during-black-friday/
