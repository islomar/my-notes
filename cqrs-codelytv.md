# Notes for CQRS course from CodelyTV
* Command Query Responsibility Segregation
* https://pro.codely.tv/library/cqrs-command-query-responsibility-segregation-3719e4aa/about/
* https://github.com/CodelyTV/php-ddd-example


## Introduction
* High level pattern
* Client --> (HTTP request) --> VideoPostController --> (CreateVideoCommand) --> CommandBus.dispatch() --> CreateVideoCommandHandler
    * CreateVideoCommand is a TO created by the VideoPostController.
    * SyncCommandBus implements CommandBus (e.g. with `dispatch()`): **Infrastructure**
    * The Command would belong to the **Application**.
    * The CommandBus interface belongs to the **Domain**.
    * The CommandBus has a 1:1 mapping between Commands and CommandHandlers.
    * CreateVideoCommandHandler (**Application**) takes the primitives from the Command, creates a Domain object and calls the UseCase.


### Advantages
- Rendimiento: la principal. Si no tienes problemas de rendimiento, probablemente no te compense.
- Asynchrony.
- Desacoplamiento incluso entre equipos.
- Destinado a aplicaciones con gran carga de **rendimiento**.
- La petición al Controller es un POST con tipos simples.
- Que el ID llegue de fuera y NO generado por la base de datos
- El Command es un DTO.
- Solo tipos primitivos, sin objetos del dominio.
- Datos en crudo
- El CommandBus tiene mapeado 1:1 cada Command a qué Handler va.
- El Handler:
    - descompone el DTO y genera un objeto del Dominio.
    

## What is a Command?
* Example: [CreateVideoCommand](https://github.com/CodelyTV/php-ddd-example/blob/12bda8290d/src/Mooc/Videos/Application/Create/CreateVideoCommand.php)
- Un Command en CQRS es un DTO, with primitive type. Solo tipos que entienda de manera natural un JSON, nada del dominio. CommandHandler will instantiate the domain object from the primitives and call the UseCase/ApplicationService/Action.
* It is immutable.
* They have side-effects: something will be created, updated, deleted...
* Commands do return NOTHING.
* CommandBus can be synchronous or asynchronous
* Very different to the GoF Command: there, the Command has an `execute()` (it's an interface) and it has behaviour, it executes itself.
    * https://sourcemaking.com/design_patterns/command
    * It's an OO callback, encapsulating a request as an object.


## What is a Query?
* Example: [FindVideoQuery](https://github.com/CodelyTV/php-ddd-example/blob/12bda8290dda1b42294ea63d1c631ead1bdb376f/src/Mooc/Videos/Application/Find/FindVideoQuery.php)
* También es un DTO.
* Una QueryResponse es un DTO
* NO tiene side-effect.
* Devuelve una respuesta.
* Ayuda a separar mejor nuestro dominio.
* Nos permite cachear muy fácilmente
* Using Read/ViewModels, we can have projections which will help us to have faster and more simple Queries.


## Command/Query Bus
* It centralizes the decision for what handler to invoke (and indirectly, which use case).
* It allows async logic to be executed when the programming language doesn't allow it (or not in an easy way).
* It adds a unique indirection point where we could place middlewares with traversal logic for all the use cases.
* It further decouples the UseCase from its client (e.g. the Controller).
* They use Prooph:
    * [CommandBusSync](https://github.com/CodelyTV/php-ddd-example/blob/d3da9074b7/src/Infrastructure/Bus/Command/CommandBusSync.php)
    * [CommandBusAsync](https://github.com/CodelyTV/php-ddd-example/blob/d3da9074b7/src/Infrastructure/Bus/Command/CommandBusAsync.php)
* `dispatch()` for the CommandBus, `ask()` for the QueryBus

## End to end Command Example
* For mapping Commands with CommandHandlers, [they use reflection](https://github.com/CodelyTV/php-ddd-example/blob/12bda8290dda1b42294ea63d1c631ead1bdb376f/src/Shared/Infrastructure/Bus/Command/SymfonySyncCommandBus.php#L23)
    * Their solution includes using the `HandleMessageMiddleware` and `HandlersLocator` from Symfony.
* Acceptance test for posting a video: [video_post.feature](https://github.com/CodelyTV/php-ddd-example/blob/d3da9074b765d0612e4c467e54d0cac94ba7d7c9/applications/api/features/video/video_post.feature)


## Our first Command: creating a VideoLike
* `VideloLikeCommand`: it belongs to the Application layer.
* `final class` for the Command.


## Async Commands
* We want to trim a video: change the start or the end. The operation takes a long time, so we need to do it in an async way.
* PATCH method.
* TrimVideoCommand
* SyncProophCommandBus
* AsyncFileCommandBus
* AsyncRequestFinder: this is the handler for people asking the state of the commands (it can take a look in 3 files: pendingRequests, inProgressRequests and processedRequests).


## ID generation strategies
* Database:
    1. What if you change your DB implementation?
    2. You need to return the resource to the client, so that it knows the ID.
    3. In the client, it needs to keep track of the ID, it allows the object not to have an ID first... but after getting the response, it has an ID (different validations, etc.).
    4. You can not have pure commands who return nothing.
    5. Testing: additional complexity, you need to compare the expected and actual in a different way (one contains the ID, the other doesnt).
    6. My reasons: the ID is a domain attribute, not a hidden technical one.
* Use Case:
    * You wouldn't have the previous problem 1.
    * The rest of the drawbacks stay.
* Proponen que el ID lo genere siempre el cliente (que sea un UUID).
* De esta manera, los Commands pueden ser realmente puros (no devolver nada) y facilita el testing (no hay que inyectar nada en ninguna parte).VO (ya lo traduce a tipos del dominio),
* lo envía al Application Service/Use Case (Video Creator)


## End to end Query Example
* Client -- (id) --> VideoGetController -- (FindVideoQuery) --> QueryBus -- (FindVideoQuery) --> FindVideoQueryHandler -- (VideoId) --> VideoFinder --
* A QueryResponse is returned by the VideoFinder: https://github.com/CodelyTV/php-ddd-example/blob/master/src/Backoffice/Courses/Application/SearchByCriteria/BackofficeCoursesByCriteriaSearcher.php
* The VideoGetController calls the `queryBus.ask(new FindVideoQuery())`
* `FindVideoQueryHandler` uses a `VideoResponseConverter` to convert the `Video` returned by the UseCase to a `VideoResponse`.
    * In the Handler, they use [pipe](https://github.com/Lambdish/phunctional/blob/master/src/pipe.php) (from Lambdish) to call the converter after with the returned object from the UseCase (Video): NOPE.


## Async queries (example in Scala)
* **Motivation**: we try to avoid blocking the main executin thread when performing I/O operations to the DB. Asynchrony is a solution for a performance problem.
* They user `Future` (like `Promises` in JS).
* [AsyncUserGreetFinderTest](https://github.com/CodelyTV/cqrs-ddd-scala-example-deprecated/blob/66854f8df4227c603add6070fc295f04b8ac5339/src/test/scala/tv/codely/cqrs_ddd_scala_example/acceptance/AsyncUserGreetFinderTest.scala)
* The Repository returns `Future[Option[User]]`


## QueryHandler
* Example for a Query Handler: [FindVideoQueryHandler](https://github.com/CodelyTV/php-ddd-example/blob/12bda8290dda1b42294ea63d1c631ead1bdb376f/src/Mooc/Videos/Application/Find/FindVideoQueryHandler.php)


## Testing
* Acceptance test for a Controller client: [video_get.feature](https://github.com/CodelyTV/php-ddd-example/blob/12bda8290dda1b42294ea63d1c631ead1bdb376f/tests/applications/mooc_backend/features/video/video_get.feature)
* Acceptance test for posting a video: [video_post.feature](https://github.com/CodelyTV/php-ddd-example/blob/d3da9074b765d0612e4c467e54d0cac94ba7d7c9/applications/api/features/video/video_post.feature)
* Unit test example for the use case: [FindVideoTest](https://github.com/CodelyTV/php-ddd-example/blob/12bda8290dda1b42294ea63d1c631ead1bdb376f/tests/src/Mooc/Videos/Application/Find/FindVideoTest.php)


## PHP related
* [Prooph](https://github.com/prooph)
    * http://getprooph.org/
    * [CommandBusSync](https://github.com/CodelyTV/php-ddd-example/blob/d3da9074b7/src/Infrastructure/Bus/Command/CommandBusSync.php)
        * `use Prooph\ServiceBus\CommandBus as ProophCommandBus;`
* For mapping Commands with CommandHandlers, [they use reflection](https://github.com/CodelyTV/php-ddd-example/blob/12bda8290dda1b42294ea63d1c631ead1bdb376f/src/Shared/Infrastructure/Bus/Command/SymfonySyncCommandBus.php#L23)
    * Their solution includes using the `HandleMessageMiddleware` and `HandlersLocator` from Symfony.


## Readings
* [https://codely.tv/screencasts/constructores-semanticos/](https://codely.tv/screencasts/constructores-semanticos/)
* [https://jenssegers.com/85/goodbye-controllers-hello-request-handlers](https://jenssegers.com/85/goodbye-controllers-hello-request-handlers)
* [http://danielwhittaker.me/2015/05/25/is-a-cqrs-command-gof-command/](http://danielwhittaker.me/2015/05/25/is-a-cqrs-command-gof-command/)
* [https://codely.tv/screencasts/codigo-acoplado-framework-microservicios-ddd/](https://codely.tv/screencasts/codigo-acoplado-framework-microservicios-ddd/)
* [https://codely.tv/screencasts/ddd-cqrs-preguntas-frecuentes/](https://codely.tv/screencasts/ddd-cqrs-preguntas-frecuentes/)
* [https://www.adayinthelifeof.nl/2011/06/02/asynchronous-operations-in-rest/](https://www.adayinthelifeof.nl/2011/06/02/asynchronous-operations-in-rest/)    


Bookmark:
https://pro.codely.tv/library/cqrs-command-query-responsibility-segregation-3719e4aa/62554/path/step/33532849/