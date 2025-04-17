# AI Code Assistants

## General

- [TDD and Generative AI – A Perfect Pairing?](https://www.youtube.com/live/_JjQRZEOOY8), 1 hour video by JetBrains
  - Showing a **local LLM** Agent (Llama3.1), a tool "Test Driven Generator"
- [RepoMix](https://github.com/yamadashy/repomix)
  - 📦 Repomix is a powerful tool that **packs your entire repository into a single, AI-friendly file**.
It is perfect for when you need to feed your codebase to Large Language Models (LLMs) or other AI tools like Claude, ChatGPT, DeepSeek, Perplexity, Gemini, Gemma, Llama, Grok, and more.
- [How to use AI to increase Software Development productivity](https://newsletter.eng-leadership.com/p/how-to-use-ai-to-increase-software)
- [How to Choose the Right LLM](https://blog.jetbrains.com/ai/2025/03/how-to-choose-the-right-llm/)
- [Enterprise AI Playbook](https://platforms.substack.com/p/how-to-win-at-enterprise-ai-a-playbook)

## Prototyping

- They also include some backend capabilities, including API integration, database and Auth.
- [Lovable](https://lovable.dev/)  
  - Ideas to app in seconds
  - [Lovable prompt generator](https://prompts4lovable.netlify.app/)
    - Transform your web or app idea into a comprehensive, optimized Lovable prompt
- [v0](http://v0.dev/)
- Bolt
- Lovable vs v0
  - <https://addyo.substack.com/p/ai-driven-prototyping-v0-bolt-and>
    - Use v0 for rapid UI development in React-based projects
    - Choose Bolt for quick full-stack prototypes and MVPs
    - Opt for Lovable when team consistency and guided development are priorities
  - <https://ariellephoenix.com/resources/lovable-vs-v0>
  - <https://addyo.substack.com/p/ai-driven-prototyping-v0-bolt-and>

### LLMs

- [LiveBench: A Challenging, Contamination-Free LLM Benchmark](https://livebench.ai/#/)
- Local LLM
  - <https://github.com/simonw/LLM>
  - <https://llm.datasette.io/>
  - <https://llm.datasette.io/en/stable/templates.html>

## List of AI coding assistants

- GitHub Copilot
- Cursor
- JetBrains AI Assistant
- JetBrains Junie (AI Agent)
- Augment Code
  - https://bsky.app/profile/did:plc:7vmjo77otwy2dzx6op76r2rv
  - What makes Augment different? Context. Every feature is context-aware. This means every suggestion, completion, and interaction reflects the components, APIs, and coding patterns in your codebase.
- Windsurf

### Cursor

- [How to implement DDD code using Artificial Intelligence](https://www.youtube.com/watch?v=jYOKb_OuKxU), 9 min. video
  - <https://codely.com/en/blog/how-to-implement-ddd-code-using-ai>
- [How to use Cursor AI to build side projects](https://newsletter.eng-leadership.com/p/how-to-use-cursor-ai-to-build-side)

### JetBrains Junie

- Yes, Junie and AI Assistant are separate products. The key difference lies in their approach. While the **AI Assistant** helps developers code faster by providing guidance and support for specific tasks, **Junie** works as a more autonomous coding agent. Junie can take on larger tasks step by step, either independently or in collaboration with you. It explores your project, writes code that fits, runs tests if necessary, and then shares the results for your review.
- `.junie/guidelines.md`
- [Can JetBrains Junie replace manual refactoring?](https://www.youtube.com/watch?v=vN2-VUFP784), 12 min. video

### GitHub Copilot

- [Copilot agent mode new features in Visual Studio Code | GitHub Checkout](https://www.youtube.com/watch?v=aKx5I0Mrr9g), 12 min. video
- [Test like a pro with Playwright and GitHub Copilot](https://www.youtube.com/watch?v=rjbaIVOGfyo), 14 min. video

## Other people's experiences and examples

- <https://harper.blog/2025/02/16/my-llm-codegen-workflow-atm/>
- <https://fernandosouto.dev/blog/news/>
- <https://github.com/ficiverson/trivia-quiz-ai-clean>
- <https://www.eferro.net/2025/03/vibe-coding-building-things-from.html>
- <https://www.eferro.net/2025/04/ive-launched-eferro-picks-site-my.html>

### Vibe coding

- <https://www.eferro.net/2025/04/vibe-coding-ii-when-flow-meets-tests.html>

## Prompting

- <https://www.eferro.net/2025/03/vibe-coding-building-things-from.html>
- <https://codely.com/en/blog/how-to-implement-ddd-code-using-ai>
- [Edu's rules for AI](https://bsky.app/profile/eferro.net/post/3lhyov244fs27)
  - <https://gist.github.com/islomar/d15902c0c3b0cdbe2b592e14c0837af3>
- <https://harper.blog/2025/02/16/my-llm-codegen-workflow-atm/>
- <https://dev.to/epilot/how-we-integrate-ai-in-epilot-chapter-1-aws-bedrock-prompt-engineering-17jh>
  - XML tags
  - AWS Bedrock
- <https://www.jetbrains.com/guide/ai/article/junie/intellij-idea/>

    ```text
    Analyze the project structure and tech stack, and create a .junie/guidelines.md file with concise, well-structured information to help new developers. Include guidance on organizing the structure, running tests, executing scripts, and following best practices. Keep the content short, clear, and practical.
    ```
- <https://bsky.app/profile/xpmatteo.bsky.social/post/3lmjiigahec2v> (also with Kent Beck)
  ```
  Please think deeply about how @vaughnvernon.bsky.social would refactor [this code] according to DDD principles
 ```

### My own prompt

- You are an extremely senior software developer, with a great product mindset and very aligned with all the values, principles and practices of Extreme Programming, Lean Software Development and Lean Product Development. Always have that in mind when analyzing any issue and taking decisions. Code is a liability, not an asset.
- Do Not Hallucinate. Think quietly to yourself, then act.
- Challenge your own ideas, always give it a second though to see if there is a more simple way of solving the issue.
- Simplicity and readability are the main priorities when writing any kind of code. By default, optimise for that over anything else, e.g. over being idiomatic.
- By default, code using object-oriented principles (OO, OOD, OOA, OOAD). For example:
  - Encapsulate what varies
  - Code to an interface rather than to an implementation
  - Each class in your application should have on ly one reason to change
  - Classes are about behavior and functionality
- Follow the SOLID development principles
- Adhere to Clean Code practices
- Favor delegation, composition and aggregation over inheritance.
- Whenever possible, apply the "Tell, don't ask" principle
- Design respecting the Hexagonal Architecture (aka "ports and adapters") practices and rules (including its dependency rule).
- Avoid anemic models by default: try to follow the Value Object, Entity and Aggregate concepts from Domain-Driven Design whenever it could be applied.
- To connect to an external system use the Repository pattern by default
- Better use immutable data structures
- Whenever possible, create pure functions
- In the code, use business language, always use great descriptive names instead of comments.
- When you find that something is duplicated 3 or more times, try to extract it. BUT watch out, only do it if the knowledge represented is the same.
- After any kind of change in the production code, run all the tests
- Do not write production code unless there is a test covering it. In case the test does not exist, first write the test.
- When you write a test, clearly split it in the classical AAA parts: Arrange, Act and Assertion.
- Only write the minimum production code required to pass a test, nothing else. Please, do not over-engineer!
- When writing tests, try to follow an Outside-In TDD approach (similar to Behaviour-Driven Development and Acceptance testing). Test the behaviour, not the implementation!
- Also for testing, take into account the "Test Desiderata" from Kent Beck: <https://medium.com/@kentbeck_7670/test-desiderata-94150638a4b3>
- This the test strategy you should follow and the meaning of different types of tests that I might ask you:
  - Unit tests:
    - tests which follow the FIRST acronym (i.e. Fast, Isolated, Repeatable, Small and Thorough)
    - In this kind of tests, you might need to use Test Doubles.
  - Integration tests:
    - Tests that interact with our infrastructure
    - E.g. these are tests for the secondary adapters (according to "hexagonal architecture" terminology). E.g. tests for a Repository implementation.

### "How to turn ChatGPT into your personal teacher"
<https://www.linkedin.com/posts/ruben-hassid_how-to-turn-chatgpt-into-your-personal-teacher-activity-7314512192559579137-1Trs>

"Act as an expert tutor who helps me master any topic through an interactive, interview-style course. The process must be recursive and personalized.

Here’s what I want you to do:

1. Ask me for a topic I want to learn.

2. Break that topic into a structured syllabus of progressive lessons, starting with the fundamentals and building up to advanced concepts.

3. For each lesson:

- Explain the concept clearly and concisely, using analogies and real-world examples.

- Ask me socratic-style questions to assess and deepen my understanding.

- Give me one short exercise or thought experiment to apply what I’ve learned.

- Ask if I’m ready to move on or if I need clarification.

- If I say yes, move to the next concept.

- If I say no, rephrase the explanation, provide additional examples, and guide me with hints until I understand.

4. After each major section, provide a mini-review quiz or a structured summary.

5. Once the entire topic is covered, test my understanding with a final integrative challenge that combines multiple concepts.

6. Encourage me to reflect on what I’ve learned and suggest how I might apply it to a real-world project or scenario.

Let’s begin: ask me what I want to learn."
