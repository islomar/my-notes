# DDD

**Table of Contents**
- [General](#general)
- [Book "Patterns, Principles and Practices of Domain-Driven Design"](#book-patterns-principles-and-practices-of-domain-driven-design)
- [CodelyTV: DDD](#codelytv-ddd)
- [Patterns, Principles, and Practices of Domain-Driven Design](#patterns-principles-and-practices-of-domain-driven-design)
- [DDD at Scale - using Domain Driven Design to build client centric products](#ddd-at-scale-using-domain-driven-design-to-build-client-centric-products)
- [Resources](#resources)

## General
* https://medium.com/nick-tune-tech-strategy-blog/what-is-a-domain-99f658b22d7d
* https://blog.avanscoperta.it/2021/04/22/about-team-topologies-and-context-mapping/
* https://medium.com/@wps_de/visualizing-communication-between-bounded-contexts-6796af6ff1b9

## Book "Patterns, Principles and Practices of Domain-Driven Design"

- [My notes for the book](patterns-principles-practices-ddd.md)

## CodelyTV: DDD
- [Curso DDD de CodelyTV](ddd-codelytv.md)
- [Estructura de carpetas: DDD en PHP](https://www.youtube.com/watch?v=UFnABp2s8Y0)
- [DDD en Laravel](https://www.youtube.com/watch?v=EInyOtPra44)

### CodelyTV: Learn DDD in 20 minutes

- Aprende DDD en 20 minutos >> https://www.youtube.com/watch?v=dH5aSQLXtKg
- DDD y CQRS: Preguntas Frecuentes >> https://www.youtube.com/watch?v=auEhX4WfCRA
- PHP Example: https://github.com/CodelyTV/cqrs-ddd-php-example

### Tactical Design

- Model-Driven Design
  - Map from our business/context, model it to our application. Drive the design based in the already existing model. Expressed in Services.
- Services
  - Application Services
  - Domain Services
  - Infrastructure Services
- Repositories
  - Data mapper perspective instead of Active Record
- Factories
  - Aggregates can be encapsulated in Factories
- Entities
  - It has an id
  - Integrity maintained by Aggregates
- Value Objects
  - It is represented by the value contained, not by an id (e.g. colours)
  - Encapsulated with Aggregates
- Aggregates
  - There is an Aggregate root.
  - It offers encapsulation to deal with Entities/VO
  - The repositories should work with Aggregates as a whole unit (for keeping integrity as well)
  - Accessed with Repositories
- Domain Events
  - Entities publish a domain event each time an Entity changes its state
- Layered Architecture

### Strategic Design

- Ubiquitous Language
- Bounded Context
  - A "same thing" could be managed in a different way in different contexts. E.g. a "video" or a "user" can be different.
  - You can have several bounded contexts in a monorepo or several repos, and even in several languages.
- Big Ball of Mud
- Anticorruption Layer
  - Any mechanism to decouple/isolate
- Context Map
  - Map all the "real" concepts to the DDD concepts.
  - It's something logic, not physical.
- Separate Ways
  - Context maps free teams to separate ways: each team working for example with different languages.
- Customer/Supplier Teams
- Continuous Integration
- Shared Kernel
  - Things that we can share. It could be between contexts (but it should be really light and small, e.g. the Value object for userId, base Entity, etc.)
- Conformist
- Open Host Service
  - To communicate with me, here you have my API (support multiple clients)
- Published Language
- Conformist
  - E.g. two teams with different contexts. If I want to consume your service, I have to adapt to your API.

## Patterns, Principles, and Practices of Domain-Driven Design

- https://github.com/islomar/my-notes/blob/master/patterns-principles-practices-ddd.md

## DDD at Scale: using Domain Driven Design to build client centric products
- https://www.meetup.com/es-ES/Software-Crafters-North/events/284995312/
- Bob Gregory (Engineering Coach at Cazoo)
- "Business-Driven Design"
- We need to constantly evolve our models.
- The actual domain model is the **shared understanding**. That's more valuable than the diagrams or the code.
- DDD shines when modelling a complex problem. Not to apply if:
  - Things are very simple. CRUD without business logic, static website, etc. There is no business model to articulate. Something really data-centric.
  - ML: it's a black box (by design), you do not understand the rules. You can not build a shared understanding with the computer.
- Trying to understand how are customers understand the problem.
- **Aggregate**: course-grained consistency boundary.
  - Order, order lines, delivery address.
  - Whenever we save, we save the whole Order.
  - If you get performance problems for saving it (e.g. because of having thousands of order lines). You can wonder if you really need consistency in all the thousands of order lines.
- **Bounded context**:
  - a linguistic boundary
  - every term we use has single concrete definition
  - in another context, the term could have a different meaning (e.g. "order" is different for a customer, for sales, logistics, etc.)
  - the problem space can be huge, we cut in small chunks... Avoid being overwhelmed by complexity. Cognitive load.
  - Small enough that we can hold it in our head.
  - A bounded context might be a good fit for a microservice. What business process does this microservice cover?


## Resources
- https://github.com/ddd-crew
- https://domorobo.to/
- https://medium.com/nick-tune-tech-strategy-blog/mapper-contexts-supercontexts-decoupling-domain-specific-and-domain-generic-bounded-contexts-5eb6a1e7c5fc
- Lots of talks about DDD, CQRS, Impact Mapping, etc: https://virtualddd.com/sessions
- https://proophsoftware.github.io/fee-office/
- https://www.infoq.com/articles/ddd-contextmapping/
