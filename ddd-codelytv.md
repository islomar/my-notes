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
            Application
            Domain
            Infrastructure
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
* Aggregates have transactionality boundaries.
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
* Course: https://github.com/CodelyTV/php-ddd-example/blob/master/src/Mooc/Courses/Domain/Course.php
* E.g. we do not handle Lessons independently, but only through the Course. 
* And not through a `course.setLessons(lessons)`, but through the constructor or business methods.
* To add a review: `course.addReview(reviewId, rating, studendtId, comment)`. We do not pass the Review VO, but its attributes (VO), we would have the instantiation of the Review inside the Course.
* The aggregate offers encapsulation and integrity restrictions (invariants)
    * Instead of `course.lesson.name()`, directly from `course.lessonName()`
* Possible issues:
    * Course can grow too much, e.g. because the Review grew too much.
    * We can extract the Review as another Aggregate.
* When Review grows too much, we create an aggregate root in its own:
    * CourseReview (aggregate root)
    * ReviewId (VO)
    * CourseId (VO)
    * Rating (VO)
    * StudentId (VO)
    * Comment (VO)
    * The Course will NOT store the Reviews, it only needs the Rating.
    * The CourseReview holds the CourseId (for relationship purposes when needed).
    * No JOINS in the database.
* We could extract another aggregate from Course: CourseLesson
    * Again: no reference to the Lesson from the Course. Each CourseLesson will hold a CourseId (same than the Reviews).
    * Danger: now controlling the consistency of the whole Course, some invariants, is not that easy. 
        * E.g. there should not be two lesson for the same course with the same order (e.g. "1"). Solution: create a Domain Service. That logic will be in the DS instead of the Aggregate.
        * E.g. updating the total number of steps and videos. Solution: domain events. Each time a Step is created, a domain event is published. Our Course will be listening to it and will update the total number of courses.
* Each aggregate will be in its own Module:
  * Course
  * CourseReview
  * CourseLesson
* Mooc would be the bounded context, which would have several modules.
* Mooc (BC)
  * Courses
    * Courses Review
    * Courses Lessons
    * Students
    * Roadmap
    * Paths
* Usually the relationship is 1 Module = 1 Aggregate, to keep the SRP.
* Example: https://github.com/CodelyTV/java-ddd-example/pull/9/files

## Failing miserably
* Uvinum
* Menu
  * Menu (Aggregate Root)
  * Tabs (E)
  * Filter (E)
  * Links (VO)
* The Menu grew up A LOT. From the Menu, you could directly add a link... but it was a pass through to tabs, which passed it to Filter, etc.
* How to avoid N queries?: Read Model!

## Repositories
* The Repositories work with Aggregate Roots


## Role interfaces vs Header interfaces
* Clients should NOT be forced to depend on methods that they don't use.
* Interfaces belong to the clients: define the interfaces based on the clients who use them, not on the implementations that we have.
* Avoid [Header Interfaces](https://martinfowler.com/bliki/HeaderInterface.html), encourage [Role Interfaces](https://www.martinfowler.com/bliki/RoleInterface.html).

## Communication between Modules: Application Services vs Repositories
* AS `VideoCommentPublisher` which needs to check if the video exists. We have several options:
  * Inject the `VideoRepository`
    * Drawback: we couple to the Video module AND we duplicate logic to check if a video exists.
  * Inject the `VideoFinder` (AS)
    * We avoid having duplicated logic


Bookmark:
https://pro.codely.tv/library/domain-driven-design-ddd/87157/path/step/54349124/
