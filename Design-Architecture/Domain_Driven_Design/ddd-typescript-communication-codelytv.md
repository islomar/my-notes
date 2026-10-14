<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents** *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [DDD en TypeScript: Comunicación entre servicios y aplicaciones](#ddd-en-typescript-comunicación-entre-servicios-y-aplicaciones)
  - [Comunicación entre módulos con EventBus asíncrono](#comunicación-entre-módulos-con-eventbus-asíncrono)
    - [Intro](#intro)
    - [Definición de eventos de dominio y subscribers](#definición-de-eventos-de-dominio-y-subscribers)
    - [TBD](#tbd)
    - [TBD (2)](#tbd-2)
    - [TBD (3)](#tbd-3)
  - [Comunicación entre Bounded Context con RabbitMQ](#comunicación-entre-bounded-context-con-rabbitmq)
  - [Consume Eventos desde RabbitMQ](#consume-eventos-desde-rabbitmq)
  - [De Arquitectura Hexagonal a CQRS](#de-arquitectura-hexagonal-a-cqrs)
  - [Crea una nueva aplicación de Backoffice](#crea-una-nueva-aplicación-de-backoffice)
  - [Añade proyecciones al Backoffice con Parallel Change](#añade-proyecciones-al-backoffice-con-parallel-change)
  - [Buscador de cursos en el Backoffice: De Mongo a ElasticSearch](#buscador-de-cursos-en-el-backoffice-de-mongo-a-elasticsearch)
  - [Conclusión y siguientes pasos](#conclusión-y-siguientes-pasos)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# DDD en TypeScript: Comunicación entre servicios y aplicaciones

- <https://codely.com/cursos/ddd-en-typescript-comunicacion-entre-servicios-y-aplicaciones_x7jp>
- Dani Santamaria, Fernando Vilas (Audiense), Rubén Salado (Genially)
- <https://github.com/CodelyTV/typescript-ddd-example>
- <https://github.com/CodelyTV/typescript-ddd-course>
- ETA: 4 horas

## Comunicación entre módulos con EventBus asíncrono

### Intro

- [`abstract class DomainEvent`](https://github.com/CodelyTV/typescript-ddd-example/blob/master/src/Contexts/Shared/domain/DomainEvent.ts)
- `DomainEventSubscriber`
- `EventBus`

```js
interface EventBus {
  publish(events: Array<DomainEvent>): Promise<void>;
  addSubscribers(subscribers: Array<DomainEventSubscriber<DomainEvent>>): void;
}
```

### Definición de eventos de dominio y subscribers

- TBD

### TBD

- TBD

### TBD (2)

- TBD

### TBD (3)

- TBD

## Comunicación entre Bounded Context con RabbitMQ

TBD

## Consume Eventos desde RabbitMQ

TBD

## De Arquitectura Hexagonal a CQRS

TBD

## Crea una nueva aplicación de Backoffice

TBD

## Añade proyecciones al Backoffice con Parallel Change

TBD

## Buscador de cursos en el Backoffice: De Mongo a ElasticSearch

TBD

## Conclusión y siguientes pasos

TBD
