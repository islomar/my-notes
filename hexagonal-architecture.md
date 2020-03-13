# Hexagonal Architecture

## General
* [Netflix: ready for chanches with Hexagonal Architecture](https://netflixtechblog.com/ready-for-changes-with-hexagonal-architecture-b315ec967749)
    * They also shared their [testing strategy](https://netflixtechblog.com/ready-for-changes-with-hexagonal-architecture-b315ec967749#317d)
        * From the Application service, mocking the repositories
        * Integration tests: testing the repositories.
        * End to end: all the layers. No extensive test coverage here.


## CodelyTV course
* [CodelyTV course](https://pro.codely.tv/library/arquitectura-hexagonal/about/)
* Code example: https://github.com/CodelyTV/cqrs-ddd-php-example
* Estimated time: 2-3 hours

### Software architecture
* [Macro vs micro design](https://codurance.com/2015/05/12/does-tdd-lead-to-good-design/)
* [Debate acerca de la terminología de “Arquitectura”](https://twitter.com/mathiasverraes/status/939096131744817153)
* [Complejidad accidental vs complejidad esencial (paper)](https://en.wikipedia.org/wiki/No_Silver_Bullet)
    * http://faculty.salisbury.edu/~xswang/Research/Papers/SERelated/no-silver-bullet.pdf
* [Tweet acerca de la simetría en código](https://twitter.com/gonedark/status/936275444420268032)
* **Resources**
    * SOLID principles:  https://code.tutsplus.com/series/the-solid-principles--cms-634
    * https://codely.tv/blog/screencasts/arquitectura-hexagonal-ddd/
    * https://codely.tv/screencasts/errores-comunes-interfaces-solid/
    * https://fideloper.com/hexagonal-architecture
    * https://github.com/CodelyTV/scala-http-api/
    * https://github.com/CodelyTV/cqrs-ddd-php-example


### What is Hexagonal Architecture
* [The Clean Architecture (Uncle Bob)](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)
* **Advantages**
    * Adaptability
    * Changeability
    * Testability
    * Simplicity: Accidental vs Essential complexity
* Controller, Application Service and Domain (Domain Services, Modesl and Repos)
* Golden Rule: external layers should depend upong internal layers.
* Hexagonal Architecture = Ports and Adapters
    * Ports: interfaces in the domain layer.
    * Adapters: implementations in the infrastructure layer.
* Testing:
    * **Unit test**: Application and Domain layers. Application Service - Services/modesls/respos (we use a dobule for the repo implementation)
    * **Integration test**: Infrastructure layer. Repo implementations
    * **Acceptance test**: All the layers. Controller - Application Service - Services/modesls/respos - Repo implementations


### Repository Pattern
* "A Repository represents all objects of a certain type as a conceptual set. It acts like a collection, except with more elaborate querying capability"
* The repo receivesand returns Aggregates
* https://thinkinginobjects.com/2012/08/26/dont-use-dao-use-repository/
* **Active Record**: 
    * https://www.martinfowler.com/eaaCatalog/activeRecord.html
    * the Entity knows how to go to DB, e.g. `user.save()`
    * Tables are mapped to entities. Convention over configuration.
    * [From Rails](https://guides.rubyonrails.org/active_record_basics.html)
* **Data mapper**
    * E.g. ORMs like Hibernate or Doctrine.
    * You have an entity and then an XML/YAML where you map the class to the table, etc.
* It does not throw exceptions: if it does not find something, it will return null, Optional, whatever.


### Infrastructure Services
* https://codely.tv/screencasts/errores-comunes-interfaces-solid/
* The Repository is an Infrastructure Service.


### Application services vs. Domain services
* Use case (Clean Architecture) == Application Service (DDD) == Action (IDD)
* **Application services** do not talk to each other.
    * They represent a transaccional barrier, for events and database.
    * They publish events.
    * It receives VO as parameters instead of primitives.
* If we need to reuse logic in several Application services, we extract it to a Domain Service.
* In the Application Service, they inject the Repository, not the Domain Service, because their "unit" for testing is both App + Domain, they never want the case where the Domain Service might not be the real one.
    * [Question about it](https://pro.codely.tv/library/arquitectura-hexagonal/66748/path/step/35626570/discussion/88574/response/1778566/)
    
* They instantiate the Domain Services directly in the Applications Services. In case of injecting it, we wouldn't use an interface, since there is no need to change the implementation of a Domain Service (they don't test it like Sandro in the Bank kata).


### Modelling our doamin and publishing events
* https://pro.codely.tv/library/arquitectura-hexagonal/66748/path/step/35626572/
* Value Objects
    * Classes identified by the value they represent (no id).
    * It gives semantics.
    * Encapsulate the validation inside.
    * Behaviour magnet.
* Entities
    * They record the domain events from a `create()` method, besides the existing constructor (which would stay without secondary effects).
        * https://github.com/CodelyTV/php-ddd-example/blob/master/src/Mooc/Courses/Domain/Course.php#L27
    * But the events are only registered in the Entity: their publication would be done by the Application Service.
        * https://github.com/CodelyTV/php-ddd-example/blob/master/src/Mooc/Courses/Application/Create/CourseCreator.php#L30
* [Named constructors aka Factory Methods](https://codely.tv/screencasts/constructores-semanticos/)


## Testing Applicatin and Domain layers
* https://pro.codely.tv/library/arquitectura-hexagonal/66748/path/step/35626577/
* [CreateVideoTest.php](https://github.com/CodelyTV/php-ddd-example/blob/af67faf454e29b608d57ea3ca7156e2b25696512/src/Context/Video/Module/Video/Tests/Behaviour/CreateVideoTest.php)


## Testing Infrastructure Layer
* [VideoRepositoryTest.php](https://github.com/CodelyTV/php-ddd-example/blob/af67faf454/src/Context/Video/Module/Video/Tests/Infrastructure/VideoRepositoryTest.php)