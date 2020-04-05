# Testing

## General
* [Integrated Tests Are A Scam](https://blog.thecodewhisperer.com/permalink/integrated-tests-are-a-scam)
* [The Practical Test Pyramid](https://martinfowler.com/articles/practical-test-pyramid.html)
* [Testing Strategies in a Microservice Architecture](https://martinfowler.com/articles/microservice-testing/)
* [Tests Driving Towards SRP: An Example by JBrains](https://online-training.jbrains.ca/courses/wbitdd-01/lectures/6486336)


## Frontend
* [TDD on the Front End](https://www.geepawhill.org/2020/03/11/tdd-on-the-front-end)
* [The Pragmatic Front-end Tester (talk)](https://www.youtube.com/watch?v=CmnacDZwO9c&feature=youtu.be)


## Microservices / API
* [Hilo interesante en Twitter](https://twitter.com/islomar/status/1238200594017529856)
* Pact
    * https://github.com/form3tech-oss/go-pact-testing
* Swagger/OpenAPI
* Postman (you can mock an API)
* Hoverfly (open source API simulation tool): https://docs.hoverfly.io/en/latest/
* [Mountebank](http://www.mbtest.org/)
    * open source tool to provide cross-platform, multi-protocol test doubles over the wire
* https://github.com/privacycloud/serverous
* http://wiremock.org/
    * https://twitter.com/duiraritz/status/1238221033280360448
* https://github.com/typicode/json-server
    * Dockerized: https://github.com/clue/docker-json-server
* [Desacopla tus Microservicios con MockServer para tener un mejor Testing](https://www.youtube.com/watch?v=Gy9RwY0ZiQo)
    * https://www.mock-server.com/


## CodelyTV course
* https://pro.codely.tv/library/testing-introduccion-y-buenas-practicas/90916/path/
* Estimated time: ~4 hours
* `assertSimilar()` instead of `assertEquals()`, to compare objects by their values.
* User `clearUnitOfWork()` when working with Doctrine, to be sure that we are fetching the DB.
* *Deterministic tests*: do not use the constants from business code in the tests.
* *Folder structure*: the tests should mimic the same folder structure than the business code.
* [PHP traits](https://www.php.net/manual/en/language.oop5.traits.php)
* SRP for tests: one broken requirement should cause only one test to fail.
* **Gherkin**: https://github.com/CodelyTV/php-ddd-example/blob/master/tests/apps/mooc/backend/features/courses/course_put.feature
* [TDD good habits manifesto](https://github.com/neomatrix369/refactoring-developer-habits/blob/master/02-outcome-of-collation/tdd-manifesto/tdd-good-habits-manifesto.md)
* TCR: https://github.com/islomar/tcr-workshop
* ATDD: 


### General
* [Pierden medio millón en criptomonedas y acusan al informático: "El error es de la empresa"](https://www.businessinsider.es/pierden-medio-millon-criptomonedas-culpan-informatico-error-es-empresa-198460)
* **Acceptance test**: Simulate so much as possible what the user would do with your application.
    * No parece que le importa si los sistemas externos son los de verdad. MEH. 
    * ¿En qué tipo de tests (cómo los llaman) prueban realmente TODO?
    * They use Gherkin for the acceptance tests.
    * They use Behat for PHP: https://docs.behat.org/en/latest/
    * They wouldn't check here the side-effect of sending domain events (since that is not visible for the user)
    * https://github.com/CodelyTV/php-ddd-example/blob/master/tests/apps/mooc/backend/features/courses_counter/courses_counter_get.feature
* https://github.com/CodelyTV/code-examples
    * Object mother, test data builder, named arguments


### PHP testing with PHPUnit
* https://github.com/CodelyTV/php-basic-skeleton
* `phpunit.xml`: you can define several testsuites (e.g. "unit", "fast", "isolated")
* You can parallelize the test executions with [paratest](https://github.com/paratestphp/paratest)
* You can exclude tests running phpunit with `--exclude-group='disabled'`: https://github.com/CodelyTV/php-ddd-example/blob/master/Makefile#L28
* In order to generate a report with test`--log-junit build/test_results/phpunit/junit.xml`
* You can configure where the tests are located: https://github.com/CodelyTV/php-ddd-example/blob/master/composer.json#L80

### Testing skeletons for several languages
* https://github.com/CodelyTV/java-basic-skeleton
* https://github.com/CodelyTV/scala-basic-skeleton
* https://github.com/CodelyTV/typescript-ddd-skeleton
    * Jest. You can configure IntelliJ to recognise the Jest functions (e.g. `describe`)


### CodelyTV vision about testing scope:
* **Unit test**: Application and Domain layers. Application Service - Services/modesls/respos (we use a dobule for the repo implementation)
* **Integration test**: Infrastructure layer. Repo implementations
* **Acceptance test**: All the layers. Controller - Application Service - Services/modesls/respos - Repo implementations

### Testing patterns
* http://blog.koalite.com/2015/06/alternativas-al-uso-de-objectmother-y-builders-en-los-tests/
* Builder pattern, Object Mother, Named parameters.
* Centralize the instantiation of the objects in one single place.
* https://github.com/CodelyTV/code-examples
* PHP does not have named parameters, but you can use array parameters: https://beamtic.com/named-parameters-php
* They create ObjectMother objects called XxxStub: it returns random values (Property-Based-Testing wannabe)

### Test doubles
* https://github.com/CodelyTV/php-ddd-example/blob/master/tests/src/Mooc/CoursesCounter/CoursesCounterModuleUnitTestCase.php#L36
