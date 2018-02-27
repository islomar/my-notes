# Working effectively with unit tests

Author: Jay Fields (http://blog.jayfields.com/)

Twitter
  * Hashtag:  #wewut
  * https://twitter.com/search?q=%23wewut

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
* Validate the system:
  - Immediate Feedback That Things Work as Expected
  - Prevent Future Regressions
* Solitary unit tests
* Sociable unit tests

## Further readings
* https://chainding.wordpress.com/2006/06/05/write-maintainable-unit-tests-that-will-save-you-time-and-tears/
* artofunittesting.com
