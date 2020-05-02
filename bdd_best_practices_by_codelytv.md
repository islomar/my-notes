# BDD best practices with Gherkin
* https://pro.codely.tv/library/buenas-practicas-de-bdd-con-cucumber/65209/about/
* Examples in Java: https://github.com/codingstones/cucumber-java
* More examples: https://github.com/islomar/payments-api/blob/master/src/test/resources/features/create_one_payment.feature
* It's a collaboration and communication tool, to reinforce sharing understanding. Not only for testing.
* Specification by example, ATDD.

## Introduction
* Dan North: BDD is about using examples at multiple levels to create a shared understanding and surface uncertainty to deliver software that matters.
    * https://dannorth.net/2012/05/31/bdd-is-like-tdd-if/
    * https://twitter.com/tastapod/status/338749038100897792
* The naming is more descriptive.
* Tools: you coud use any testing library, but some frameworks are more ready for it, like **Cucumber**, Behat, Spock, Mamba, Jest, Rspec, etc.
* Specification by example:
    * https://martinfowler.com/bliki/SpecificationByExample.html
    * Up to date documentation about the expectations.
* Ubiquitious language.
* SME: Subject-Matter Expert.
* Is BDD the same as TDD? Yes. If you’re a programmer, and your entire team is programmers, and all your stakeholders are programmers and you have a single Subject Matter Expert embedded in the team.


## Cucumber
* Single source of truth
* Alive documentation.
* Customer-oriented.
* Less waste having to rework things.
* Gherkin 
    * Business Readable, Domain Specific Language.
    * vocabulary: `Given - When - Then`
    * Also `And`, `But`
    * `Background`: for common preconditions, like `BeforeAll` for the Scenario. E.g. an authenticated user.
    * `Scenario outline`, similar to parameterized tests.
    * `Tags`, to identify specific features or scenarios, e.g. per module in the system, or happy paths, etc.
    * `Step Arguments`, like `Doc Strings` and `Data Tables`.
        * [Example in RSpec](https://github.com/rspec/rspec-core/blob/master/features/command_line/init.feature)
    * Examples about all that: https://github.com/codingstones/cucumber-java/blob/master/src/test/resources/features/vat/vat.feature
* Feature: sometimes as `In order to... as a... I want...`
    * Scenario 1
    * Scenario 2
* One feature per file.
* You can visualize the output of the Cucumber tests, it is built-in.
    * You can also use something like [Relish](https://relishapp.com/).
    * Example with Relish: https://relishapp.com/danilat/sample/docs/calculator


## e2e testing
* https://github.com/codingstones/cucumber-java/tree/e2e
* https://github.com/codingstones/cucumber-java/blob/e2e/src/test/java/com/codingstones/bdd/bichomania/steps/CartSteps.java


## Script Antipattern
* Define the steps with technical vocabulary. E.g. *I click on....*
* Trying to reuse steps "too much".
* [Example in JS](https://github.com/codingstones/cucumber-js/blob/master/features/step_definitions/gigs_steps_business.js)


## Page Object pattern
* e2e are fragile usually.
* Page Object pattern to make it more robust and maintanible. More readable.
* Examples:
    * https://github.com/islomar/poc-geb/
    * Invoice Me:
        * https://github.com/codingstones/invoice_me/blob/master/features/e2e/step_definitions/invoice_steps.rb
        * https://github.com/codingstones/invoice_me/blob/master/features/e2e/page_objects/pages.rb
* https://danilat.com/weblog/2016/02/26/page-objects-con-phpunit-y-webdriver    


## Example mapping
* User Story refinement technique. Team technique to explore the domain.
* The three amigos: dev + test + business
* https://cucumber.io/blog/bdd/example-mapping-introduction/
    * Exercise: https://speakerdeck.com/mattwynne/rules-vs-examples-bddx-london-2014
* https://lisacrispin.com/2016/06/02/experiment-example-mapping/
* https://medium.com/coding-stones/estimar-es-timar-example-mapping-e9dbad471ced
* Elements of the example mapping:
    * Story
    * Rules (per story)
    * Examples (per rule)
    * Questions


## One specification against multiple implementations
* E.g. same acceptance tests for the HTTP API and the UI.
* You can configure it to run the same features/scenarios with different steps: the API steps or the UI steps.
    * [Example with both core and web](https://github.com/codingstones/invoice_me/tree/master/features)
    * They are launched like this: https://github.com/codingstones/invoice_me/blob/master/Rakefile
* In case you are working with multirepo (e.g. a different repo for the UI and the API), in GitHub you can use the submodules concept.
    * The features are in their own repository.
    * Both the backend and frontend repos have the features repo as a submodule.