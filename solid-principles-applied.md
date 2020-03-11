# SOLID principles applied

* CodelyTV course: https://pro.codely.tv/library/principios-solid-aplicados/77070/path/
* Code examples: 
    * https://github.com/CodelyTV/java-solid-examples
    * https://github.com/CodelyTV/php-coupled_code-example
    * https://github.com/CodelyTV/php-ddd-example
* Estimated time: ~3 hours


## Single Responsibility Principle (SRP)
* https://pro.codely.tv/library/principios-solid-aplicados/77070/path/step/46980344/
* High cohesion and robustness.
* Allow class composition (favour composition over inheritance).
* Avoid (knowledge) duplicity.
* Examples:
    * https://github.com/CodelyTV/php-coupled_code-example
    * https://github.com/CodelyTV/php-coupled_code-example/blob/master/src/AppBundle/Controller/VideoController.php
        * Better solution: https://github.com/CodelyTV/php-ddd-example/blob/2a5f727405b000c31370aa52f56f5c104f80cfe5/applications/mooc_backend/src/Controller/Video/VideoPostController.php
    * https://github.com/CodelyTV/php-ddd-example


## Open-Closed Principle (OCP)
* Open for extension, closed for modification    
* [Tell don't ask](https://www.youtube.com/watch?v=Be-ULOIGAZk)
* It can be applied not only to classes/functions, but also for systems, services, etc.
* How to achieve it:
    * Do not depend on specific implementations.
    * One typical way to fix it at class/funcion level: polymorphism. With interfaces or Abstract Classes.
* Example: 
    * [CourseCreator](https://github.com/CodelyTV/php-ddd-example/blob/master/src/Mooc/Courses/Application/Create/CourseCreator.php)
    * In CourseCreator, we have to add a new line each time we want a new action related with a course creation.
    * Following OCP, a "better" solution might be to publis a Domain Event "CourseCreated" (shown example with tryrabbit)
        * The event would be published using a message broker like RabbitMQ, SQS, etc.
        * We could have several queues/subscribers for each action (e.g. one for notifying, send an email, another one for increase a counter, etc.).
    * Don't go to a message broker solution unless it's necessary. A more simple baby step would be the Observer pattern.


## Liskov substitution principle (LSP) 
* In a computer program, if S is a subtype of T, then objects of type T may be replaced with objects of type S (i.e. an object of type T may be substituted with any object of a subtype S) without altering any of the desirable properties of the program (correctness, task performed, etc.). 
* More formally, the Liskov substitution principle (LSP) is a particular definition of a subtyping relation, called (strong) behavioral subtyping.
* Subclasses should respect the contract of the superclasses.
* Corolary: do not override superclasses methods!
* This principle, combined with SRP, would allow us to apply OCP.
* Typical example: classes Rectangle and Square
    * [Code example](https://github.com/CodelyTV/java-solid-examples/tree/master/src/main/java/tv/codely/solid_principles/liskov_substitution_principle)
    * https://github.com/CodelyTV/php-ddd-example/blob/804d33e9ce5db0cf78e9c1b9ed7889a358f25ecd/src/Mooc/Videos/Infrastructure/Persistence/VideoRepositoryMySql.php#L25


## Interface Segregation Principle (ISP)
* Clients should NOT be forced to depend on methods that they don't use.
* Interfaces belong to the clients: define the interfaces based on the clients who use them, not on the implementations that we have.
* Avoid [Header Interfaces](https://martinfowler.com/bliki/HeaderInterface.html), encourage [Role Interfaces](https://www.martinfowler.com/bliki/RoleInterface.html).
* [Video "Principio de Segragación de Interfaces"](https://www.youtube.com/watch?v=EzUIbMdxJTk&feature=youtu.be)
* [Video "Errores comunes al diseñar Interfaces - #SOLID - ISP"](https://youtu.be/mDAQLkdNGHU)
* Goal: high cohesion and low structural coupling.


## Dependency Inversion Principle (DSP)
* [Code example](https://github.com/CodelyTV/java-solid-examples/tree/master/src/main/java/tv/codely/solid_principles/dependency_inversion_principle)
* High-level modules should not depend on low-level modules. Both should depend on abstractions (e.g. interfaces).
* Abstractions should not depend on details. Details (concrete implementations) should depend on abstractions.
* How:
    * Inject dependencies
    * Depend on interfaces for those dependencies, not implementations.
    * LSP as a premise


## General things
* [SOLID in practice: kata GildedRose](https://github.com/CodelyTV/java-gildedrose-kata)
* [Specification pattern, aka Criteria](https://github.com/CodelyTV/php-ddd-example/blob/master/src/Shared/Domain/Criteria/Criteria.php)
    * It could be further extended with the  [Composite Pattern](https://refactoring.guru/design-patterns/composite)
* SOLID with functional programming:
    * https://blog.ploeh.dk/2014/03/10/solid-the-next-step-is-functional/
    * https://twitter.com/CodelyTV/status/933623454108147712
    * [Entrevista Raúl Raja - CTO 47 Degrees](https://www.youtube.com/watch?v=gI8AhDMkICQ)