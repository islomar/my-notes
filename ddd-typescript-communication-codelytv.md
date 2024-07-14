# DDD en TypeScript: Comunicación entre servicios y aplicaciones
- https://codely.com/cursos/ddd-en-typescript-comunicacion-entre-servicios-y-aplicaciones_x7jp
- Dani Santamaria, Fernando Vilas (Audiense), Rubén Salado (Genially)
- https://github.com/CodelyTV/typescript-ddd-example
- https://github.com/CodelyTV/typescript-ddd-course
- ETA: 4 horas


## Comunicación entre módulos con EventBus asíncrono
- [`abstract class DomainEvent`](https://github.com/CodelyTV/typescript-ddd-example/blob/master/src/Contexts/Shared/domain/DomainEvent.ts) 
- `DomainEventSubscriber` 
- `EventBus`
```js
interface EventBus {
  publish(events: Array<DomainEvent>): Promise<void>;
  addSubscribers(subscribers: Array<DomainEventSubscriber<DomainEvent>>): void;
}
```

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