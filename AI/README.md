# AI

## Glossary

- **LLM**:    Large Language Model
- **RAG**:    Retrieval-Augmented Generation
- **MCW**:    Maximum Context Window
- **MECW**:   Maximum Effective Context Window

## Learning resources (training, courses)

- <https://github.com/rasbt/LLMs-from-scratch>
- <https://www.aihero.dev/mcp-prerequisites> (with TypeScript)
- [Building Agents with Model Context Protocol - Full Workshop with Mahesh Murag of Anthropic](https://www.youtube.com/watch?v=kQmXtrmQ5Zg)
- https://www.anthropic.com/learn
  - [Claude Code in Action](https://anthropic.skilljar.com/claude-code-in-action)
- Interesting courses from [DeepLearning.AI](https://www.deeplearning.ai/courses/)
  - Pretraining LLMs
  - Claude Code: A Highly Agentic Coding Assistant
  - Multi AI Agent Systems with crewAI
  - <https://www.deeplearning.ai/short-courses/pair-programming-llm/>
  - <https://www.deeplearning.ai/short-courses/post-training-of-llms/>
  - <https://www.deeplearning.ai/short-courses/pydantic-for-llm-workflows/>
- [Transformer Explainer: LLM Transformer Model Visually Explained](https://poloclub.github.io/transformer-explainer/)


## Language
- [Multilingual Evaluations in LLMs — a comparison](https://medium.com/@vbsowmya/multilingual-evaluations-in-llms-a-comparison-1d58b0fd9848)
- [Responsible Disclosure and Multilingual LLMs](https://medium.com/@vbsowmya/responsible-disclosure-and-multilingual-llms-0aef03d470f6)

## List of interesting MCPs
- https://www.eventcatalog.dev/docs/development/developer-tools/mcp-server/introduction
- MCP servers can bloat your context window quite rapidly by providing large numbers of tool definitions

## AI and Product Management
- [Claude Code for Product Managers](https://ccforpms.com/)
- [AI for Product Management Course](./AI_for_Product_Management_Course.md)
- [Customer discovery data: connecting to Opportunity Solution Tree (OST)](https://www.linkedin.com/posts/mjocon_opened-claude-code-yesterday-and-had-it-pull-activity-7399160036792434688-W35p?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAE0FsUBFxH4_8dPPJp8bMcEG_t1xxaaVPk)
- https://substack.com/@elsevanderberg/posts
  - https://www.youtube.com/@ElsevanderBerg
  - [Product analytics 101 - Understanding onboarding flows](https://www.youtube.com/watch?v=tknpwEmTJh8)


## TDD, LLM, TBD: PDQ, OK?
- Tim Ottinger
- https://www.youtube.com/watch?v=dCxw-K9Fc7w
- Steps
  - Clean start: 
    - put the system in a known "valid" state and prove it before beginning the next unit of work.
  - Easy recovery
    - Save and validate intermediate steps as we work, so we can always make a "safe retreat"
    - Save your game
    - `git commit`
  - Fast feedback
    - Ensure we are doing work that matters and doing it well
    - All tests pass, teaming, Staging/Prod
  - Easy integration
    - https://www.industriallogic.com/blog/easy-integration/
    - Detect and fix integration problems early and often, as they occur
    - prepare & CI
  - Safe release
    - Make releasing software a predictable and deterministic non-even
    - CD
- MD file describing the core scripts
  - prepare or clean_start
    - `git clean`
  - run_tests
    - [bandit](https://bandit.readthedocs.io/en/latest/): check security
  - fixup
    - in pre-commit
    - [pyupgrade](https://github.com/asottile/pyupgrade): automatically upgrade syntax for newer versions of the language.
  - run  
- Gee Paw Hill: you go from a "ready state" to the next "ready state"
- "In anticipation of this, write a test..." --> after describing the expected production behaviour.
- https://github.com/tottinge/python-starter/blob/main/TDD_PROCESS.md
- https://typer.tiangolo.com/
- gitpython
  - https://github.com/gitpython-developers/GitPython
  - https://gitpython.readthedocs.io/en/stable/
- He uses Warp + JetBrains
  - [Warp](https://www.warp.dev/) selects between different models...
- "Show me 3 different ways you could have written this function"


## LangGraph
- https://academy.langchain.com/courses/intro-to-langgraph (official one, 6 hours)
- https://www.deeplearning.ai/short-courses/ai-agents-in-langgraph/ (creator, 1.5 hours)
- [LangChain- Develop AI Agents with LangChain & LangGraph](https://www.udemy.com/course/langchain/?couponCode=CP251120G2V2) (18 hours, Ambassador)
- [LangGraph Agents](https://langchain-ai.github.io/langgraph/)

## Other resources
- [Pocket Flow](https://github.com/The-Pocket/PocketFlow): 100-line minimalist LLM framework
- [The AI Engineering Stack (The Pragmatic Engineer)](https://newsletter.pragmaticengineer.com/p/the-ai-engineering-stack)
- [LLMs: Common terms explained, simply](https://newsletter.eng-leadership.com/p/llms-common-terms-explained-simply)
- [Build vs Buy in the Age of AI](https://www.svpg.com/article-build-vs-buy-in-the-age-of-ai/)
- [Can LLM translate text accurately, without human help?](https://lokalise.com/blog/can-llm-translate-text-accurately)
- [How Do LLMs Work? A Guide to Large Language Models](https://autogenai.com/blog/how-do-llms-work/)
- [Unreasonable Claim of Reasoning Ability of LLM: Part 1](https://pkghosh.wordpress.com/2023/11/24/unreasonable-claim-of-reasoning-ability-of-llm/)
- https://poloclub.github.io/transformer-explainer/ (Transformer visually explained)
- [Context Is What You Need: The Maximum Effective Context Window for Real World Limits of LLMs](https://www.arxiv.org/abs/2509.21361)
  - "A few top of the line models in our test group failed with as little as 100 tokens in context; most had severe degradation in accuracy by 1000 tokens in context. All models fell far short of their Maximum Context Window by as much as 99 percent."
  - [Chat with ChatGPT 5 about the paper](https://chatgpt.com/share/68dcc26b-fcb4-8011-8b20-fb4d9c81fcb9)
- [Tokenizer and token counter (GPT, Claude, Gemini, Grok)](https://gptforwork.com/tools/tokenizer)
- Brown M&Ms
  - You bury an instruction in your prompt or context, and then thoroughly check the output to see if the model ignores it.
  - If you want to get a feel for the **effective context window of your model**, you can try the "Brown M&Ms" test. Here's one I did where the mighty GPT-5 was forgetting details by the second interaction (Jason Gorman)
    - https://chatgpt.com/share/68dcf4b8-86b0-8011-ac2b-5a722244b87a
- [Building a Bootstrapped B2B Product with Gen AI (0 to 1)](https://elsevanderberg.substack.com/p/building-a-bootstrapped-b2b-product)
  - Hair-on-Fire product market fit archetype
  - Sell before you build
  - ICP: Ideal Customer Profile
    - In sales and marketing, an ICP is a detailed description of the type of company or customer that would be the most valuable for a business to target
- [CLI agent to pull customer quotes related to an opportunity (Else van der Berg)](https://www.youtube.com/watch?v=IOAX32v00ME)
  - https://www.notion.so/Prompts-for-Product-Discovery-1c9660ca2b52805f8a06e17de26801f8
- [Vibe coding an AI native MVP product as a non-technical PM (Dr. Else van der Berg)](https://www.youtube.com/watch?v=lDsQkCiqG1A)
  - https://elsevanderberg.substack.com/p/vibe-coding-an-ai-native-rag-product
- [21 Ways to Use AI at Work (And Build Your AI Product Toolbox)](https://www.producttalk.org/21-ways-to-use-ai-at-work)
- [15 Ways to Use AI at Home (and Fill Your AI Product Toolbox)](https://www.producttalk.org/15-ways-to-use-ai-at-home/)
- [Agentic Design Patterns](https://docs.google.com/document/d/1rsaK53T3Lg5KoGwvf8ukOUvbELRtH-V0LnOIFDxBryE/preview?tab=t.0): it includes examples in Python
- [bd - Beads Issue Tracker](https://github.com/steveyegge/beads)
  - Give your coding agent a memory upgrade
  - I think for working with GitHub/GitLab issues...
  - https://steve-yegge.medium.com/introducing-beads-a-coding-agent-memory-system-637d7d92514a