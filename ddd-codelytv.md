# Domain-Driven Design (DDD)
* https://pro.codely.tv/library/domain-driven-design-ddd/about/
* https://github.com/CodelyTV/php-ddd-example
* Estimated time: ~8 hours


## How to define Bounded Contexts
* **Modules**: Inside the Bounded Context, each concept should be broken down into Modules. A Module will represent the related classes of a specific concept of that Bounded Context. So Modules represent important concepts inside of Bounded Contexts.
    * One aggregate per module.
* They propose a monorepo.
* **Applications**: the client of the Application Services. It could be a web, mobile, etc.
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
TBD

Bookmark:
https://pro.codely.tv/library/domain-driven-design-ddd/87157/path/step/54349099/
