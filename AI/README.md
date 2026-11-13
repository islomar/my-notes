<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents** *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [AI](#ai)
  - [Glossary](#glossary)
  - [Learning resources (training, courses)](#learning-resources-training-courses)
  - [Language](#language)
  - [List of interesting MCPs](#list-of-interesting-mcps)
  - [List of interesting skills or plugins](#list-of-interesting-skills-or-plugins)
  - [AI and Product Management](#ai-and-product-management)
  - [TDD, LLM, TBD: PDQ, OK?](#tdd-llm-tbd-pdq-ok)
  - [LangGraph](#langgraph)
  - [LLM tooling and comparisons](#llm-tooling-and-comparisons)
  - [Interesting talks](#interesting-talks)
  - [Other resources](#other-resources)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

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
- <https://www.anthropic.com/learn>
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

- <https://www.eventcatalog.dev/docs/development/developer-tools/mcp-server/introduction>
- MCP servers can bloat your context window quite rapidly by providing large numbers of tool definitions

## List of interesting skills or plugins

- <https://github.com/lexler/skill-factory>
- <https://github.com/eferro/skill-factory>
- <https://www.skills.sh/>
- <https://www.skills.sh/vercel-labs/skills/find-skills>
- <https://github.com/AminBlg/SimpleEnglish>
  - Agent skill: make LLMs write docs in ASD-STE100 Simplified Technical
- <https://www.skills.sh/mattpocock/skills/grill-me>
  - <https://github.com/mattpocock/skills/blob/main/skills/engineering/grill-with-docs/>
  - <https://www.aihero.dev/skills-grill-with-docs#its-working-if>
  - `grill-with-docs → to-spec → to-tickets → implement → code-review → retro`
- <https://www.skills.sh/juliusbrussee/caveman/caveman>
- <https://skills.wheresryan.sh/anatomy>
  - Name an idea in one line, and Claude draws the machine that does it.
- <https://github.com/sergebulaev/linkedin-skills>  
- REA (Reverse Engineer Anything):
  - <https://rea.tools/>
  - <https://github.com/morluto/rea>
- `show-me`
  - <https://www.humanlayer.com/blog/show-me-skill>
  - tl;dr make your agent converse visually instead of in walls of prose.
  - <https://github.com/humanlayer/skills/blob/main/plugins/show-me/skills/show-me/SKILL.md>
  - This is really good for program design
- <https://github.com/jcesarperez/review-powers>
  - For PR reviews  
- [Anti-slop skills](https://webreactiva.com/blog/comparativa-skills-anti-slop)
- [Cloudflare security audit skill](https://github.com/cloudflare/security-audit-skill)
- [Skill inspector by NVIDIA](https://github.com/NVIDIA/SkillSpector)
  - Security scanner for AI agent skills.
    Detect vulnerabilities, malicious patterns, security risks, prompt injection, data exfiltration, and supply-chain risks in Claude Code, Codex, and MCP skills before you install them.
  - [Pi extension](https://github.com/NVIDIA/SkillSpector/blob/main/docs/PI_EXTENSION.md)
- [promptfoo - Red team Configuration](https://www.promptfoo.dev/docs/red-team/quickstart/)
  - Promptfoo is an open-source tool for red teaming gen AI applications.
  - <http://localhost:15500/redteam/setup>

## AI and Product Management

- [Claude Code for Product Managers](https://ccforpms.com/)
  - [PRDs](https://ccforpms.com/advanced/write-prd)
    - [Template from Lenny Rachitsky](https://docs.google.com/document/d/1ETJHLA6dpzIKw-mf5GBA3HpFKqkgzMcfkdxUiXHHMvs/edit?tab=t.0)
    - <https://uxdesign.cc/how-to-solve-problems-6bf14222e424>
- [AI for Product Management Course](./AI_for_Product_Management_Course.md)
- [Customer discovery data: connecting to Opportunity Solution Tree (OST)](https://www.linkedin.com/posts/mjocon_opened-claude-code-yesterday-and-had-it-pull-activity-7399160036792434688-W35p?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAE0FsUBFxH4_8dPPJp8bMcEG_t1xxaaVPk)
- <https://substack.com/@elsevanderberg/posts>
  - <https://www.youtube.com/@ElsevanderBerg>
  - [Product analytics 101 - Understanding onboarding flows](https://www.youtube.com/watch?v=tknpwEmTJh8)

## TDD, LLM, TBD: PDQ, OK?

- Tim Ottinger
- <https://www.youtube.com/watch?v=dCxw-K9Fc7w>
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
    - <https://www.industriallogic.com/blog/easy-integration/>
    - Detect and fix integration problems early and often, as they occur
    - prepare & CI
  - Safe release
    - Make releasing software a predictable and deterministic non-even
    - CD
- MD file describing the core scripts
  - `prepare` or `clean_start`
    - `git clean`
  - `run_tests`
    - [bandit](https://bandit.readthedocs.io/en/latest/): check security
  - `fixup`
    - in pre-commit
    - [`pyupgrade`](https://github.com/asottile/pyupgrade): automatically upgrade syntax for newer versions of the
      language.
  - run  
- Gee Paw Hill: you go from a "ready state" to the next "ready state"
- "In anticipation of this, write a test..." --> after describing the expected production behaviour.
- <https://github.com/tottinge/python-starter/blob/main/TDD_PROCESS.md>
- <https://typer.tiangolo.com/>
- `gitpython`
  - <https://github.com/gitpython-developers/GitPython>
  - <https://gitpython.readthedocs.io/en/stable/>
- He uses Warp + JetBrains
  - [Warp](https://www.warp.dev/) selects between different models...
- "Show me 3 different ways you could have written this function"

## LangGraph

- <https://academy.langchain.com/courses/intro-to-langgraph> (official one, 6 hours)
- <https://www.deeplearning.ai/short-courses/ai-agents-in-langgraph/> (creator, 1.5 hours)
- [LangChain- Develop AI Agents with LangChain & LangGraph](https://www.udemy.com/course/langchain/?couponCode=CP251120G2V2)
  (18 hours, Ambassador)
- [LangGraph Agents](https://langchain-ai.github.io/langgraph/)

## LLM tooling and comparisons

- [LLM tooling comparison](./llm-tooling-comparison.md)
- <https://kanzai.io/>
  - Your local kanban board for coding agents, from backlog to delivery.
  - The columns do the work. Drag a card into Development and an agent starts. Drag it into Approved and the merge queue
    runs. Agents work in parallel, each on its own branch.
- [WonderTwin](https://wondertwin.ai/)
  - Run local twins of every external service your AI agents reach for.
  - Stripe, Plaid, Shopify, and 35 more — running on your laptop.

## Interesting talks

- [Are You Using Claude Code Wrong? 6 Fixes That Change Everything](https://www.youtube.com/watch?v=6eZmX3b7ErQ)
  - Boris Cherny (Anthropic)
  - <https://howborisusesclaudecode.com/>
  - Every gap left in a request is filled with a guess.
    - We don't need anymore a long prompt with the role at the begining and a long list, but a clear intent, WHAT we want, how much effort to spend and how it should check its own work.
  - For anything with some complexity, flip it around and make Claude ask the questions: "Interview me until you could write the spec, then write it to spec.md"
    - I feel that's `/grill-me`
    - If what you want is visual, better show an image instead of describing it.
  - Ask for evidences instead of a verdict
  - `/verify`: makes Claude build and run the app and check the result
  - `/code-review`: checks the work in a fresh sub-agent that never saw your conversation. Ask him to skip style in a UI review, it always finds something and never finishes...
  - Claude making the same mistake once and again
    - If you see it making the same mistake, push Escape
    - If you see Claude doing the mistake for a third time, start a new session `/clear` and a prompt summarizing what you just learnt.
  - `Esc`+ + `Esc` shows you the history and lets you rewind the code and the conversation.
  - The cache lives for ~1 hour on a subscription, and only 5 minutes on an API key
    - So... if you leave the session open over lunch, once the session past about 200k tokens,
      Claude Code compacts it just before the cache expires, so you will come back to a summary of your work, not to your work itself.
    - The fix is a set of small habits:
      - `/clear` between tasks that have nothing to do with each other
      - `/tbd` does not add anything to the conversation
      - Turn effort down for simple jobs: low effort means fewer and shorter tool calls
      - When a message deserves deep thinking, type `/ultrathink`
      - Once a week, run `/usage`
      - A growing CLAUDE.md is a problem, "Lost-In-The-Middle". It's worse if you write IMPORTANT or NEVER, it will overapply the rule everywhere.
      In July 2026, they deleted 80% of instructions and everything kept on working the same: models are better and need less harness.
      - Keep `CLAUDE.md` under 200 lines and delete everything Claude can find by reading the project itself.
        Spend that space in what it can't find: the exact command that runs your tests, the places where the code is misleading, and anything you've had to correct twice.
      - If there is a rule that Claude keeps missing, turn it into a hook.
        - `/doctor prompt-audit` finds instructions written for older models, files that no longer exist, and lines that contradict each other.
      - CLAUDE keeps an automatic **memory** for every project.
        As you work, it saves notes about you, the corrections given, the work in project, where things live... The first 200 lines of that memory load into every conversation, like your own instructions.
        - Type `/memory` every couple of weeks, open the auto memory folder, and read what has been written there about you. You can edit or delete anything that's no longer true
- [What Does Quality Look Like When Software Development Becomes Agentic?](https://www.youtube.com/watch?v=2QiguGJo1s4) - 20 min. - Modern Software Engineering (October 2026)
- [How We Build Effective Agents: Barry Zhang, Anthropic](https://www.youtube.com/watch?v=D7_ipDqhtwk) - 15 min. (April 2025)
  - Workflows: LLMs orchestrated by code
  - Agents: LLMs deciding their own trajectories
  - Idea 1: **Don't build agents for everything**. Checklist for "should I build an agent?"
    - Is the task complex enough?
    - Is the task valuable enough?
    - Are all parts of the task doable
    - What is the cost of error/error discovery? (go with Agents if it's low)
  - Idea 2: **Keep it simple**
    - "Agents are models using tools in a loop". Components:
      - Environment
      - Tools
      - System prompt
  - Idea 3: **Think like your agents**
    - Put yourself in their -shoes- context window
  - Personal musings
    - Agents need budget-awareness: how do we explain and enforce 5 mins/$10/2M tokens budgets?
    - Tools should be self-evolving
    - Multi-agents need new ways of communicating

## Other resources

- [Pocket Flow](https://github.com/The-Pocket/PocketFlow): 100-line minimalist LLM framework
- [The AI Engineering Stack (The Pragmatic Engineer)](https://newsletter.pragmaticengineer.com/p/the-ai-engineering-stack)
- [LLMs: Common terms explained, simply](https://newsletter.eng-leadership.com/p/llms-common-terms-explained-simply)
- [Build vs Buy in the Age of AI](https://www.svpg.com/article-build-vs-buy-in-the-age-of-ai/)
- [Can LLM translate text accurately, without human help?](https://lokalise.com/blog/can-llm-translate-text-accurately)
- [How Do LLMs Work? A Guide to Large Language Models](https://autogenai.com/blog/how-do-llms-work/)
- [Unreasonable Claim of Reasoning Ability of LLM: Part 1](https://pkghosh.wordpress.com/2023/11/24/unreasonable-claim-of-reasoning-ability-of-llm/)
- <https://poloclub.github.io/transformer-explainer/> (Transformer visually explained)
- [Context Is What You Need: The Maximum Effective Context Window for Real World Limits of LLMs](https://www.arxiv.org/abs/2509.21361)
  - "A few top of the line models in our test group failed with as little as 100 tokens in context; most had severe
    degradation in accuracy by 1000 tokens in context. All models fell far short of their Maximum Context Window by as
    much as 99 percent."
  - [Chat with ChatGPT 5 about the paper](https://chatgpt.com/share/68dcc26b-fcb4-8011-8b20-fb4d9c81fcb9)
- [Tokenizer and token counter (GPT, Claude, Gemini, Grok)](https://gptforwork.com/tools/tokenizer)
- Brown M&Ms
  - You bury an instruction in your prompt or context, and then thoroughly check the output to see if the model ignores
    it.
  - If you want to get a feel for the **effective context window of your model**, you can try the "Brown M&Ms" test.
    Here's one I did where the mighty GPT-5 was forgetting details by the second interaction (Jason Gorman)
    - <https://chatgpt.com/share/68dcf4b8-86b0-8011-ac2b-5a722244b87a>
- [Building a Bootstrapped B2B Product with Gen AI (0 to 1)](https://elsevanderberg.substack.com/p/building-a-bootstrapped-b2b-product)
  - Hair-on-Fire product market fit archetype
  - Sell before you build
  - ICP: Ideal Customer Profile
    - In sales and marketing, an ICP is a detailed description of the type of company or customer that would be the most
      valuable for a business to target
- [CLI agent to pull customer quotes related to an opportunity (Else van der Berg)](https://www.youtube.com/watch?v=IOAX32v00ME)
  - <https://www.notion.so/Prompts-for-Product-Discovery-1c9660ca2b52805f8a06e17de26801f8>
- [Vibe coding an AI native MVP product as a non-technical PM (Dr. Else van der Berg)](https://www.youtube.com/watch?v=lDsQkCiqG1A)
  - <https://elsevanderberg.substack.com/p/vibe-coding-an-ai-native-rag-product>
- [21 Ways to Use AI at Work (And Build Your AI Product Toolbox)](https://www.producttalk.org/21-ways-to-use-ai-at-work)
- [15 Ways to Use AI at Home (and Fill Your AI Product Toolbox)](https://www.producttalk.org/15-ways-to-use-ai-at-home/)
- [Agentic Design Patterns](https://docs.google.com/document/d/1rsaK53T3Lg5KoGwvf8ukOUvbELRtH-V0LnOIFDxBryE/preview?tab=t.0):
  it includes examples in Python
- [bd - Beads Issue Tracker](https://github.com/steveyegge/beads)
  - Give your coding agent a memory upgrade
  - I think for working with GitHub/GitLab issues...
  - <https://steve-yegge.medium.com/introducing-beads-a-coding-agent-memory-system-637d7d92514a>
