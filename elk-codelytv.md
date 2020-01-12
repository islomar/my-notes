# Elastic Stack (Elastic + Logstash + Kibana + Beats)
* Rubén Cougil, Javier Ferrer
* https://pro.codely.tv/library/elkbeats-centraliza-la-gestion-de-logs-con-the-elastic-stack/88971/


## Introduction
* Elastic Stack is the evolution of ELK, since Beats has been included.
* https://www.elastic.co/what-is/elk-stack
* https://github.com/CodelyTV/elastic-stack-example


## Elasticsearch
* On top of Apache Lucene (search engine), implemented in Java.
* **Highly scalable** search engine. It supports advanced search and indexation.
* Near realtime.
* `docker-compose up -d elasticsearch`
* curl http://localhost:9200
* Node types:
    * Master: administration and configuration of the cluster.
    * Data: to store documents. The document is one log. We usually scale these nodes.
    * Client: we need to communicate with this node, in order to retrieve data or for administering the cluster (it forwards the request to the master node). It is the entrypoint to the cluster. We usually have one.
    * Ingest: it receives the document and pre-process it before being stored by the data node.
* Store a document:
```
curl -X POST http://localhost:9200/codelytv/students/1 -H "Content-Type: application/json" -d '{ 
    "name": "student1", 
    "age": 55, 
    "email": "student1@codely.tv" 
}' | jq
```
    * `codelytv` is the index name (it will be created if it doesn't exist)
    * `students` is the type
    * `1` is the unique identifier for the document; if we don't send it, Elasticsearch will create one for us
    * If we send this same request twice, the document will be overriden, even if the `_version` of the answer is updated.
* Get a document: `curl http://localhost:9200/codelytv/students/1`
    * `curl http://localhost:9200/codelytv/students/1/_source` will not include the metainformation.
    * Filtered query: `curl http://localhost:9200/codelytv/_search?q=name:student1`
* Delete a document: `curl -X DELETE http://localhost:9200/codelytv/students/1`
* Delete an index: `curl -X DELETE http://localhost:9200/codelytv`
* Get all indices: `curl http://localhost:9200/_cat/indices`

### Cluster, nodes and shards
Cada nodo tiene parte de la información disponible en Elasticsearch. Los nodos pueden contener información replicada para intentar asegurar la alta disponibilidad, es decir, si un nodo deja de funcionar es conveniente tener una copia de los datos en otro de los nodos.

Toda la información contenida en un índice se distribuye en uno o más shards (también conocidas como particiones), esta separación lógica puede convertirse en separación física (de forma transparente) añadiendo nuevos nodos al cluster. El concepto de shard está también muy relacionado con la escalabilidad y disponibilidad.

### Adding information
* It is schemaless
* It uses JSON
* Internally and by default, Elasticsearch uses a technique called `Dynamic Mapping`, trying to infer the type associated to a property. There is also fine tuning for the mapping, if needed.
* Documents are stored in **indexes**. An index is like a DB. We can have lots of indexes. We can search in several indexes.
* **Types**: similar to tables... it is deprecated.
* Create a document: 
```
curl -X PUT http://localhost:9200/codelytv/_doc/1 -H "Content-Type: application/json" -d '{
    "level": "ERROR",
    "message": "Something went wrong"
}' | jq
```
* Get the document: `curl http://localhost:9200/codelytv/_doc/1`
* Get the index metadata: `curl  http://localhost:9200/codelytv`
* Find all the ERRORs: `curl http://localhost:9200/codelytv/_search?q=level:ERROR`
* Advanced search:
```
curl http://localhost:9200/codelytv/_search -H "Content-Type: application/json" -d '{
    "query": {
        "query_string": {
            "fields": ["level"],
            "query": "ERROR or WARNING"
        }
    }
}'
```

### Sending the logs from a PHP app
* Use [Monolog](https://github.com/Seldaek/monolog)
    * https://github.com/Seldaek/monolog/blob/master/doc/02-handlers-formatters-processors.md
* https://github.com/CodelyTV/elastic-stack-example
    * https://github.com/CodelyTV/elastic-stack-example/blob/master/app/php/composer.json
    * A Handler to send the logs to the standard output, and another one to send to Elasticsearch
```
git clone git@github.com:CodelyTV/elastic-stack-example.git elk-codelytv
cd elk-codelytv
docker-compose up -d
cd app/php/ && composer install
php app.php -a warning -b info
curl http://localhost:9200/monolog/_search | jq
```

### Complex search: DSL
* https://pro.codely.tv/library/elkbeats-centraliza-la-gestion-de-logs-con-the-elastic-stack/88971/path/step/50713546/
* https://www.elastic.co/guide/en/kibana/6.8/tutorial-load-dataset.html
    * Download and unzip `logs.jsonl.gz`
    * `curl -H 'Content-Type: application/x-ndjson' -XPOST 'localhost:9200/_bulk?pretty' --data-binary @logs.jsonl`
* DSL example:
```
curl http://localhost:9200/_search -H "Content-Type: application/json" -d '{
    "query": {
        "match_all": {}
    }
}' | jq
```
    * ```
curl http://localhost:9200/_search -H "Content-Type: application/json" -d '{
    "query": {
        "match": {
            "agent": "Mozilla"
        }
    },
    "size": 1
}' | jq
```
    * ```
curl http://localhost:9200/_search -H "Content-Type: application/json" -d '{
    "query": {
        "multi_match": {
            "query": "Mozilla",
            "fields": ["agent", "@message"]
        }
    },
    "size": 1
}' | jq
```
    * ```
curl http://localhost:9200/_search -H "Content-Type: application/json" -d '{
	"query": {
		"bool": {
			"must": {
				"match": {
					"context.app_name": "codelytv"
				}
			},
			"must_not": {
				"match": {
					"context.otro_parametro": "esto me lo ignoras"
				}
			}
		}
	},
    "size": 1
}' | jq
```
* Very fast for full-text search, if findes one agent with the word Mozilla in it (but there might be more words inside the agent).
* To influence in the weights of the fields, you can tweak the scoring:
    * https://qbox.io/blog/practical-guide-elasticsearch-scoring-relevancy
    * https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-function-score-query.html
* **Aggregations**: 
    * Metrics: avg, sum, etc.
        * With `stats` we get several metrics, like max, min, avg, etc.
    * Bucket: logical separation using some kind of criteria. E.g. prices categories in a website.
        * `terms`: a strict search :-)
        * Elastic creates the pseudo field `.keyword` by default.
    * ```
curl http://localhost:9200/_search -H "Content-Type: application/json" -d '{
    "aggs": {
        "mi_avg": {
            "avg": {
                "field": "bytes"
            }
        }
	},
    "size": 0 
}' | jq
```
    * ```
curl http://localhost:9200/_search -H "Content-Type: application/json" -d '{
	"aggs": {
		"mis_buckets": {
			"terms": {
				"field": "geo.src.keyword"
			}
		}
	},
    "size": 0 
}' | jq
```


## Logstash
* Parse, save and filter logs. Pipeline based.
* `Stash`: almacén.
* Instead of sending logs from the application, it is much more performant to write to disk.
* It takes the logs from files (and other sources), it normalizes it and sends to ElasticSearch.
* Inputs (log sources, also possible with Elastic Beats) => Filters (we can transformt the logs to normalize the data) => Ouputs (where we want to send them, e.g. to ElasticSearch)
* Logstash must be installed in every node where you are writing the log files.
* Logstash docker-compose volumes: `pipeline` for sharing the Logstash configuration (input, filter, output) and `logs`(where the app writes the logs, Logstash needs to access).
* `docker-compose up -d logstash`
* `curl http://localhost:9600/\?pretty`
* We need to normalize the logs, since they can be generated in different ways by different libraries, e.g. Monolog, log4j, etc.
    * https://github.com/vy/log4j2-logstash-layout
    * https://github.com/vy/log4j2-logstash-layout/blob/master/layout/src/main/resources/LogstashJsonEventLayoutV1.json
    * We can create our own template. But it is not always possible or desirable, so another option is to do it in the Logstash pipeline.
* Logstash has lots of plugins, and they can be installed from docker: https://github.com/elastic/logstash-docker/issues/43
* For normalizing, we can install the Translate filter plugin: https://www.elastic.co/guide/en/logstash/current/plugins-filters-translate.html
    * It comes with a dictionary to translate level strings to ints, e.g. ERROR to xxx.
* Another option is the **Mutations**.


## Kibana
* User interface
* `docker-compose up -d kibana`
* http://localhost:5601/
    * Flipping the port 5601, you can read... logs :-)
* We need to configure Kibana to recognize the Elasticsearch indexes: Management -> Kibana -> Index patterns. E.g. `codelytv` in these examples. We add `@timestamp` as the Time filter.
* Download file: `wget https://download.elastic.co/demos/kibana/gettingstarted/logs.jsonl.gz`
* `curl -H 'Content-Type: application/x-ndjson' -XPOST 'localhost:9200/_bulk?pretty' --data-binary @logs.jsonl`
* Best practice: havin an index of Elasticsearch per day. It is good for performance reasons.
* Elasticsearch sometimes offers you properties in two flavor. It includes a `.keyword`, which is aggregable and allows exact match, though it loses fuzzy search capabilities.
* Create a visualization for the different HTTP status codes:
    * Chart: Vertical Bar
    * Buckets - X-axis >> Aggregation: Date Histogram.
    * `Split Charts` would generate several graphs.
    * Add sub-bucket >> Split Series >> Terms >> response.keyword
    * Split Charts >> Terms >> host.keyword >> show the HTTP status codes per host
* Create a visualization for top referers:
    * Chart: Data Table
    * Split Rows >> Terms >> referer.keyword
* Create a visualization to show in a Pie chart the user agents.
    * E.g. useful for linking user agents with 500 errors.     
* Create region map to see the origin of the requests:
    * Chart: Region Map
    * Shape field >> Terms >> geo.src
* Create new dashboard
    * We can clone it afterwards.


## Beats
* https://www.elastic.co/products/beats
* Data shipper, it can complement or substitute Logstash (it is lighter).
* Logstash consumes a lot of resources in the instance where it is installed (it is JVM based).
* Logstash and Beats are not incompatible, we can use both in a complementary way.
* It is Go binaries.
* There are different types of Beats: Filebeat, Metricbeat, Heartbeat, Auditbeat, Packetbeat, 
* We need to map the volume of the application logs folder.
* You can mutate, transform and filter: `filebeat.yml`
* You can send not only to Elasticsearch, but also to Redis or any other output.
* How do I write a processor plugin by myself?
    * https://github.com/elastic/beats/issues/6760
    * https://www.elastic.co/guide/en/beats/devguide/7.5/index.html
* There is Docker logging drivers to send the standard output to wherever you want (files or anywhere else).
* In case of outage (e.g. Elasticsearch is down), Beats and Logstash have memory and know where they stopped sending logs, so that they can resume when the service is up and running again.


## Recap and FAQ
TBD
