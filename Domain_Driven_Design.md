# DDD

## CodelyTV: Learn DDD in 20 minutes
* Aprende DDD en 20 minutos >> https://www.youtube.com/watch?v=dH5aSQLXtKg
* DDD y CQRS: Preguntas Frecuentes >> https://www.youtube.com/watch?v=auEhX4WfCRA

PHP Example: https://github.com/CodelyTV/cqrs-ddd-php-example
https://github.com/islomar/payments-api

### Tactical Design
* Model-Driven Design
  - Map from our business/context, model it to our application. Drive the design based in the already existing model. Expressed in Services.
* Services
    - Application Services
    - Domain Services
    - Infrastructure Services
* Repositories
    - Data mapper perspective instead of Active Record
* Factories
    - Aggregates can be encapsulated in Factories
* Entities
    - It has an id
    - Integrity maintained by Aggregates
* Value Objects
    - It is represented by the value contained, not by an id (e.g. colours)
    - Encapsulated with Aggregates
* Aggregates
    - There is an Aggregate root.
    - It offers encapsulation to deal with Entities/VO
    - The repositories should work with Aggregates as a whole unit (for keeping integrity as well)
    - Accessed with Repositories
* Domain Events
    - Entities publish a domain event each time an Entity changes its state
* Layered Architecture 

### Strategic Design
* Ubiquitous Language
* Bounded Context
    - A "same thing" could be managed in a different way in different contexts. E.g. a "video" or a "user" can be different.
    - You can have several bounded contexts in a monorepo or several repos, and even in several languages.
* Big Ball of Mud
* Anticorruption Layer
    - Any mechanism to decouple/isolate
* Context Map
    - Map all the "real" concepts to the DDD concepts.
    - It's something logic, not physical.
* Separate Ways
    - Context maps free teams to separate ways: each team working for example with different languages.
* Customer/Supplier Teams
* Continuous Integration
* Shared Kernel
    - Things that we can share. It could be between contexts (but it should be really light and small, e.g. the Value object for userId, base Entity, etc.)
* Conformisst
* Open Host Service
    - To communicate with me, here you have my API (support multiple clients)
* Published Language
* Conformist
    - E.g. two teams with different contexts. If I want to consume your service, I have to adapt to your API.
