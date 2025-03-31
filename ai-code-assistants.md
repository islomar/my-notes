# AI Code Assistants

## General

- [TDD and Generative AI – A Perfect Pairing?](https://www.youtube.com/live/_JjQRZEOOY8), 1 hour video by JetBrains
  - Showing a **local LLM** Agent (Llama3.1), a tool "Test Driven Generator"

## Cursor

- [How to implement DDD code using Artificial Intelligence](https://www.youtube.com/watch?v=jYOKb_OuKxU), 9 min. video
  - <https://codely.com/en/blog/how-to-implement-ddd-code-using-ai>

## JetBrains Junie

- Yes, Junie and AI Assistant are separate products. The key difference lies in their approach. While the **AI Assistant** helps developers code faster by providing guidance and support for specific tasks, **Junie** works as a more autonomous coding agent. Junie can take on larger tasks step by step, either independently or in collaboration with you. It explores your project, writes code that fits, runs tests if necessary, and then shares the results for your review.
- `.junie/guidelines.md`
- [Can JetBrains Junie replace manual refactoring?](https://www.youtube.com/watch?v=vN2-VUFP784), 12 min. video

## GitHub Copilot

- [Copilot agent mode new features in Visual Studio Code | GitHub Checkout](https://www.youtube.com/watch?v=aKx5I0Mrr9g), 12 min. video
- [Test like a pro with Playwright and GitHub Copilot](https://www.youtube.com/watch?v=rjbaIVOGfyo), 14 min. video

## Prompting

- <https://codely.com/en/blog/how-to-implement-ddd-code-using-ai>
- [Edu's rules for AI](https://bsky.app/profile/eferro.net/post/3lhyov244fs27)
- <https://www.jetbrains.com/guide/ai/article/junie/intellij-idea/>

### My own prompt

- Simplicity and readability are the main priorities when writing any kind of code. By default, optimise for that over anything else, e.g. over being idiomatic.
- By default, code using object-oriented principles (OO, OOD, OOA, OOAD). For example:
  - Encapsulate what varies
  - Code to an interface rather than to an implementation
  - Each class in your application should have on ly one reason to change
  - Classes are about behavior and functionality
- Follow the SOLID development principles
- Adhere to Clean Code practices
- Favor delegation, composition and aggregation over inheritance
- Design respecting the Hexagonal Architecture (aka "ports and adapters") practices and rules (including its dependency rule).
- Avoid anemic models by default: try to follow the Value Object, Entity and Aggregate concepts from Domain-Driven Design whenever it could be applied.
- To connect to an external system use the Repository pattern by default
- Better use immutable data structures
- Whenever possible, create pure functions
- After any kind of change in the production code, run all the tests
- Do not write production code unless there is a test covering it. In case the test does not exist, first write the test.
- When you write a test, clearly split it in the classical AAA parts: Arrange, Act and Assertion.
- Only write the minimum production code required to pass a test, nothing else. Please, do not over-engineer!
- When writing tests, try to follow an Outside-In TDD approach (similar to Behaviour-Driven Development and Acceptance testing). Test the behaviour, not the implementation!
- Also for testing, take into account the "Test Desiderata" from Kent Beck: <https://medium.com/@kentbeck_7670/test-desiderata-94150638a4b3>
- In the code, use business language, always use great descriptive names instead of comments.
- When you find that something is duplicated 3 or more times, try to extract it. BUT watch out, only do it if the knowledge represented is the same.
- This the test strategy you should follow and the meaning of different types of tests that I might ask you:
  - Unit tests:
    - tests which follow the FIRST acronym (i.e. Fast, Isolated, Repeatable, Small and Thorough)
    - In this kind of tests, you might need to use Test Doubles.
  - Integration tests:
    - Tests that interact with our infrastructure
    - E.g. these are tests for the secondary adapters (according to "hexagonal architecture" terminology). E.g. tests for a Repository implementation.
