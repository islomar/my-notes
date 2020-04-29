# Domain-Driven Design (DDD)
* https://pro.codely.tv/library/domain-driven-design-ddd/about/
* https://github.com/CodelyTV/php-ddd-example
* Estimated time: ~8 hours


## How to define Bounded Contexts
* **Modules**: Inside the Bounded Context, each concept should be broken down into Modules. A Module will represent the related classes of a specific concept of that Bounded Context. So Modules represent important concepts inside of Bounded Contexts.
    * One aggregate per module.
* They propose a monorepo.
* **Applications**: the client of the Application Services. It could be a web, mobile, etc. FMPOV it's the **primary ports**
    * They propose having the Applications outside the Bounded Contexts, since an Application might need to access several bounded contexts.
    * Example: https://github.com/CodelyTV/php-ddd-example/tree/master/apps
        * The `Backoffice Backend` would be the HTTP Controller, e.g. for an HTTP API (e.g. using Symfony).
        * The `Backoffice Frontend` would be the Web Controller, e.g. server-side rendering with `Twig`.
        * Both (HTTP and Web controllers) call the QueryBus.
* Other alternatives:
    * Having the Applications inside the Bounded Context.
    * Modules inside the Applications.


## Differences between Subdomains, Bounded contexts, Modules and Microservices
* **Subdomains**: problem space
* **Bounded contexts**: solution space
* **Context maps**: it should show how different bounded contexts are related.
* **Microservices**: what we deploy. E.g. an **Application**, understood the way it was described above. So... not necessarily one per bounded context.
* **Shared kernel**: code shared by different bounded contexts.

## Folders structure in a monorepo
They use (*Mooc* and *Backoffice* are Bounded Contexts; the insides are Modules):
```
applications/
    backoffice_backend
    backoffice_frontend
    mooc_backend
    mooc_backend
src/
    Backoffice
        Videos
        Students
        Payments
        Retentions
        Roadmap
        ...
        Shared
    Mooc
        Videos
        ...
        Shared
    Shared
        Domain
        Infrastructure
test/
    applications/
        backoffice_backend
        backoffice_frontend
        mooc_backend
        mooc_backend
    src/
        Backoffice/
        Mooc/
        Shared/
```

## Our first use case
* StudentPutController -> StudentSignUpper (Application Service) 
    -> StudentFinder (Domain Service)
    -> Student (Aggregate)
    -> StudentRepository
* They use the library [Phunctional](https://github.com/Lambdish/phunctional) for having a nice `get(key, defaultValue)`


## Where to validate when you have a web form?
* Strategies
    * Validate both in front and back.
    * Controller
    * Use Case
    * Entity/Value Object
* Their recommendations:
    * Duplicate the logic in the frontend/Controller AND the VO

## Aggregates
* Course: aggregate root
    * Id (VO)
    * Lessons (entity)
    * Review (entity)
        * StudentId (VO)
        * Rating (VO)
        * Comment (VO)
    * Description (VO)
    * Summary (VO)
* The aggregate root Course in the entrypoint, the gateway. 
* E.g. we do not handle Lessons independently, but only through the Course. 
* And not through a `course.setLessons(lessons)`, but through the constructor or business methods.
* The aggregate offers encapsulation and integrity restrictions (invariants)
    * Instead of `course.lesson.name()`, directly from `course.lessonName()`
* Possible issues:
    * Course can grow too much, e.g. because the Review grew too much.
    * We can extract the Review as another Aggregate.


Bookmark:
https://pro.codely.tv/library/domain-driven-design-ddd/87157/path/step/54349112/
