# Working effectively with unit tests

Author: Jay Fields (http://blog.jayfields.com/)

Twitter
  * Hashtag:  #wewut
  * https://twitter.com/search?q=%23wewut

https://www.goodreads.com/book/show/22605938-working-effectively-with-unit-tests

Discussion group: https://groups.google.com/forum/#!forum/wewut


## Preface
There are many motivators for creating a test or several tests:
* validate the system
  - immediate feedback that things work as expected
  - prevent future regressions
* increase code-coverage
* enable refactoring
* document the behavior of the system
* your manager told you to
* Test Driven Development
  - improved design
  - breaking a problem up into smaller pieces
  - defining the "simplest thing that could possibly work"
* customer acceptance
* ping pong pair-programming


## Unit testing, a first example
* "Why do you test?: To create a tiny universe where the software exists to do one thing and do it well."
* Inline Setup: whenever it make sense to have things inside your own tiny test, remove it from the global setup.
* You should prefer DAMP (Descriptive And Maintainable Procedures) to DRY.
* Replace loops with individual tests
* "Programming is not about typing... it’s about thinking." –Rich Hickey
* Replace ObjectMother with DataBuilder

## Motivators
* Validate the system:
  - Immediate Feedback That Things Work as Expected
  - Prevent Future Regressions
 * Delete tests that no longer provide positive ROI.

## Types of tests
* Solitary unit tests
  - Never cross boundaries
  - The Class Under Test should be the only concrete class.
  - Boundary definition: "...a database, a queue, another system..." found in a test.
* Sociable unit tests: you use the real collaborators.

## Improving assertions
* Better one assertion per test
* Code should not only express how it works, but also why it’s been written in a particular way.
* If your test has an assertion, do not add any mock verifications.
* If your test verifies a mock, do not add any assertions.
* At most, 1 assertion per test.
* At most, 1 mock verification per test.
* When stubbing method return values, use the most generic argument matcher possible.
* Expect Exceptions via Try/Catch
* Using literals String, int, char) for expected values is advantageous for readability and traceability. To be clear, the expected value should be the literal itself, not a variable holding a value that was previously created by a literal.
* Assert last principle.
* Do not throw an exception to indicate success.
* Inline Setup.
* Test names are glorified comments (the author doesn't like having to write test names).
* Im plementation over specification: default return values. The authors prefers to have tests without mocking the collaborators behavior (that way it won't break for reasons which do not matter for the test), verifying default values returned (null, 0, etc.)

## Improving test cases
* There are two primary reasons for writing Solitary Unit Tests:
  1. Sociable Unit Tests can be slow and nondeterministic
  2. Sociable Unit Tests are more susceptible to cascading failures


## Improving test suites
* Do not test language or frameworks features nor standard libraries.
* In general, do no test private methods.
* Custom assertions are great.
* Test Data Builders. For each class you want to use in a test, create a Builder for that class that:
  * Has an instance variable for each constructor parameter
  * Initializes its instance variables to commonly used or safe values
  * Has a build method that creates a new object using the values in its instance variables
  * Has “chainable” public methods for overriding the values in its instance variables.



## Further readings
* https://chainding.wordpress.com/2006/06/05/write-maintainable-unit-tests-that-will-save-you-time-and-tears/
* artofunittesting.com
* http://www.natpryce.com/articles/000727.html
* https://martinfowler.com/bliki/BroadStackTest.html

Bookmark: 178/333
