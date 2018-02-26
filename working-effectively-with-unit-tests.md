# Working effectively with uni tests

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
* You should prefer DAMP (Descriptive And Maintainable Procedures) to DRY.
* Replace loops with individual tests
