<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Difference between Omniroute, pi, Hermes, Opencode...](#difference-between-omniroute-pi-hermes-opencode)
  - [1. Pi: the engineer's toolkit](#1-pi-the-engineers-toolkit)
  - [2. OpenCode: the pragmatic middle ground](#2-opencode-the-pragmatic-middle-ground)
  - [3. Claude Code: probably the most mature turnkey experience](#3-claude-code-probably-the-most-mature-turnkey-experience)
  - [4. Codex CLI: increasingly the “give it a serious engineering problem” tool](#4-codex-cli-increasingly-the-give-it-a-serious-engineering-problem-tool)
  - [One important distinction: planning style](#one-important-distinction-planning-style)
    - [Claude Code](#claude-code)
    - [Codex](#codex)
    - [OpenCode](#opencode)
    - [Pi](#pi)
  - [TDD is where I think Pi/OpenCode become particularly interesting](#tdd-is-where-i-think-piopencode-become-particularly-interesting)
  - [Model freedom is the biggest architectural divide](#model-freedom-is-the-biggest-architectural-divide)
    - [Vertically integrated](#vertically-integrated)
    - [Model-agnostic](#model-agnostic)
  - [Context management](#context-management)
  - [Cost changes the answer](#cost-changes-the-answer)
    - [Subscription approach](#subscription-approach)
    - [API/model marketplace approach](#apimodel-marketplace-approach)
  - [What I would test in your situation](#what-i-would-test-in-your-situation)
  - [The comparison I personally find most illuminating](#the-comparison-i-personally-find-most-illuminating)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Difference between Omniroute, pi, Hermes, Opencode...

For an experienced engineer who cares about **TDD, small safe steps, understanding the changes, and retaining control over the workflow**, the differences are more important than simply “which model is smartest.”

Here’s the practical comparison as of **September 2026**.

|                            | **Pi**                    | **OpenCode**                    | **Claude Code**                   | **Codex CLI**                |
| -------------------------- | ------------------------- | ------------------------------- | --------------------------------- | ---------------------------- |
| Core philosophy            | Minimal, hackable harness | Full-featured open coding agent | Opinionated polished coding agent | OpenAI’s coding agent        |
| Model choice               | ⭐⭐⭐⭐⭐                     | ⭐⭐⭐⭐⭐                           | ⭐⭐                                | ⭐⭐                           |
| Extensibility              | ⭐⭐⭐⭐⭐                     | ⭐⭐⭐⭐                            | ⭐⭐⭐⭐⭐                             | ⭐⭐⭐⭐                         |
| Out-of-box UX              | ⭐⭐⭐                       | ⭐⭐⭐⭐                            | ⭐⭐⭐⭐⭐                             | ⭐⭐⭐⭐                         |
| Fine-grained permissions   | Basic/core + extensions   | Excellent                       | Excellent                         | Excellent                    |
| Subagents                  | Add/configure them        | Native                          | Native                            | Native/agentic workflows     |
| TDD suitability            | Excellent                 | Excellent                       | Excellent                         | Excellent                    |
| “Just solve this hard bug” | Depends heavily on model  | Depends heavily on model        | Very strong                       | Very strong                  |
| Control over architecture  | **Highest**               | High                            | Medium                            | Medium                       |
| Provider lock-in           | **Very low**              | **Very low**                    | Anthropic-centric                 | OpenAI-centric               |
| Best fit                   | Build your own workflow   | Flexible daily driver           | Turnkey Claude experience         | Turnkey GPT/Codex experience |

There is one important caveat: **agent quality = harness × model**. Comparing OpenCode to Claude Code, for example, isn't entirely fair if OpenCode is running a weaker model. OpenCode or Pi can themselves run Claude, GPT-family models, Gemini, etc.

## 1. Pi: the engineer's toolkit

Pi is unusually interesting because its authors intentionally keep the core small.

Out of the box, the model essentially gets four fundamental capabilities:

```text
read
write
edit
bash
```

Pi then expects you to build upward using **TypeScript extensions, skills, prompt templates and packages**. It also supports `AGENTS.md`/`CLAUDE.md` project instructions and multiple providers. ([Pi][1])

This means that instead of accepting:

```text
How Claude Code thinks coding should work
```

you can construct:

```text
How Isidro wants coding to work
```

For example:

```text
Red agent
   ↓
write ONE failing test
   ↓
Green agent
   ↓
implement minimum code
   ↓
test
   ↓
Refactor agent
   ↓
clean implementation
   ↓
test entire relevant suite
```

Pi's skill system is explicitly designed for packaging these kinds of workflows, and it can even create skills itself. ([Pi][2])

And there are already packages that add isolated specialist agents, model groups, explicit read-only modes and context handoffs. ([Pi][3])

That is why I think **Pi becomes more attractive the more opinionated you are about software development**.

Its weakness is the same thing.

Claude Code gives you a sophisticated product.

Pi gives you Lego.

If you simply install both and say:

> Fix this bug.

Claude Code is likely to feel more polished.

If you spend time configuring Pi exactly around your development philosophy, the relationship can reverse.

---

## 2. OpenCode: the pragmatic middle ground

OpenCode occupies a very nice position between Pi and Claude Code.

It's a finished application, but it remains largely **provider-neutral and deeply configurable**.

It supports many model providers directly and can also use a gateway such as OmniRoute. ([OpenCode][4])

Its agent architecture is particularly good.

You get primary agents such as:

```text
Build
Plan
```

and can define your own specialists:

```text
reviewer
architect
test-writer
debugger
security-reviewer
```

Each can have:

* its own model
* its own prompt
* its own tools
* its own permissions

For example, a review agent can literally be configured to have:

```text
edit  → DENY
shell → DENY
```

while your implementation agent gets write access. ([OpenCode][5])

OpenCode's permission model is especially attractive to me architecturally.

You can say things like:

```text
shell *             → ask
git status *        → allow
git diff *          → allow
git push *          → deny
```

rather than giving the model a generic yes/no terminal permission. ([OpenCode][6])

That's excellent for agentic engineering.

You could have:

```text
Explore agent
   read-only

        ↓

Test agent
   can edit tests
   can execute tests

        ↓

Implementation agent
   can edit src/
   can execute tests

        ↓

Reviewer
   read-only
```

There is considerably more guardrail enforcement here than merely telling an LLM:

> Don't modify anything yet.

---

## 3. Claude Code: probably the most mature turnkey experience

Claude Code takes a different approach.

Anthropic controls both:

```text
agent harness
      +
Claude models
```

and tunes them together.

That vertically integrated approach has real advantages.

Claude's models are explicitly trained/prompted around long-running agentic work, remaining-context awareness, context compaction and subagent orchestration. Anthropic's current model guidance specifically discusses using Claude across multiple context windows and delegating to isolated subagents. ([Claude Platform Docs][7])

Claude Code has also become a substantial production product rather than an experiment. Anthropic's analysis of roughly **400,000 actual Claude Code sessions** found that usage has moved beyond simple autocomplete/debugging into end-to-end building, testing, deployment and operations. ([Anthropic][8])

The experience is therefore more like:

```text
claude

> This endpoint has a race condition.
> Investigate it, explain the cause,
> write a failing test first, then fix it.
```

and let it go.

Claude Code also has a very mature ecosystem around:

```text
CLAUDE.md
hooks
skills
MCP
subagents
commands
permissions
plugins/extensions
```

So calling it “less customizable than Pi” doesn't mean it isn't customizable.

It means:

```text
Pi
you construct the harness

Claude Code
you customize Anthropic's harness
```

That's a meaningful distinction.

---

## 4. Codex CLI: increasingly the “give it a serious engineering problem” tool

Codex now occupies a position fairly analogous to Claude Code, but around OpenAI's coding models.

The notable difference is where the current OpenAI models put a lot of their strength: **long-horizon reasoning over difficult engineering tasks**.

OpenAI currently describes GPT-5.3-Codex as an agentic coding model, while the newer general GPT models are also available in Codex depending on the plan/configuration. ([OpenAI Developers][9])

Codex is particularly interesting for something like:

```text
Here's a 200k-line codebase.

This behaviour occurs only under concurrency.

We have a flaky integration test.

Nobody knows whether the bug is in:
- retries
- transactions
- Kafka ordering
- idempotency
- test infrastructure

Investigate it.
```

That sort of task benefits enormously from a model willing to spend considerable compute reasoning, searching, running tests and iterating.

OpenAI now treats Codex as its dedicated software-development product, distinct from normal ChatGPT and the more general Work agent. ([OpenAI Help Center][10])

---

## One important distinction: planning style

Imagine you ask all four:

> Add optimistic locking to this aggregate.

### Claude Code

Likely experience:

```text
investigate
 ↓
reason
 ↓
modify several files
 ↓
run tests
 ↓
notice failure
 ↓
fix
 ↓
run tests
 ↓
explain
```

Very fluid.

### Codex

Similar, but often comfortable spending considerably longer exploring and reasoning:

```text
inspect architecture
 ↓
trace persistence behaviour
 ↓
search call sites
 ↓
form hypothesis
 ↓
implement
 ↓
test repeatedly
 ↓
review resulting diff
```

### OpenCode

You can make this more explicit:

```text
Plan agent
 ↓
Build agent
 ↓
Review subagent
```

And those agents can even use different models.

### Pi

You could create exactly your own procedure:

```text
Domain analysis
 ↓
characterisation test
 ↓
STOP

human reviews test

 ↓
minimum implementation
 ↓
tests
 ↓
refactor
 ↓
architectural review
```

That is a fundamentally different degree of control.

---

## TDD is where I think Pi/OpenCode become particularly interesting

Suppose you instruct an autonomous coding agent:

> Implement feature X using TDD.

Most agents tend eventually to collapse that into:

```text
write test
write implementation
run both
```

which isn't really the feedback loop you're after.

With a configurable agent architecture you can structurally force:

```text
1. Write exactly one test.

2. Execute it.

3. Demonstrate that it fails
   for the expected reason.

4. Only now modify production code.

5. Write minimum implementation.

6. Execute test.

7. Refactor only after green.
```

And potentially give different agents access to different directories.

That distinction — **workflow enforced by tooling versus workflow requested through prompting** — is important.

For someone accustomed to disciplined TDD, pairing, trunk-based development and small safe steps, I'd pay particular attention to that rather than benchmark scores alone.

---

## Model freedom is the biggest architectural divide

There are effectively two camps.

### Vertically integrated

```text
Claude Code
    ↓
Claude

Codex
    ↓
OpenAI models
```

You get strong optimisation between model and harness.

### Model-agnostic

```text
          Claude
         ↗
OpenCode → GPT
         ↘ Gemini
          ↘ local

Pi       → same idea
```

And then you can introduce OmniRoute:

```text
Pi/OpenCode
     │
     ▼
 OmniRoute
     │
 ┌───┼────┬──────┐
 ▼   ▼    ▼      ▼
GPT Claude Gemini local
```

This lets you do something particularly powerful:

```text
exploration     → cheap/fast model
implementation  → Sonnet
hard bug        → GPT high-reasoning model
code review     → different model
documentation   → cheaper model
```

One provider doesn't need to win **every category**.

---

## Context management

This is becoming one of the most important differentiators in practice.

A naive agent eventually does:

```text
conversation
conversation
conversation
files
tests
logs
more files
git diff
more logs

CONTEXT FULL
```

Modern coding agents instead compact or hand off state.

Claude's current models explicitly understand remaining context and Anthropic recommends persistent external state for long-running agent work. ([Claude Platform Docs][7])

Pi exposes this philosophy especially clearly. For example, its agenticoding package offers a `handoff` mechanism so you can deliberately start a clean phase without dragging the entire old conversation forward. ([Pi][3])

That can produce:

```text
SESSION 1
Explore architecture

       ↓ handoff

SESSION 2
Implement agreed design

       ↓ handoff

SESSION 3
Review implementation
```

with only canonical decisions passed between phases.

I like that considerably more than pretending a giant conversation is “memory.”

---

## Cost changes the answer

There are two different ways to pay.

### Subscription approach

Claude Code can consume usage included with applicable Claude subscriptions.

Codex can consume the Codex allowance included in eligible ChatGPT plans; signing into Codex with ChatGPT uses that plan's usage rather than API billing. ([Anthropic][11])

So if you're already paying for one ecosystem, its CLI can have very attractive marginal cost.

### API/model marketplace approach

Pi/OpenCode let you choose models individually.

For instance, Anthropic currently prices Sonnet 5 API usage at **$2/M input and $10/M output tokens**. ([Anthropic][12])

Then you can use much cheaper models for mundane work and reserve expensive reasoning for genuinely difficult problems.

That can actually beat a single-provider solution economically if configured intelligently.

---

## What I would test in your situation

I wouldn't install all four and randomly alternate between them.

I'd run this experiment:

```text
                 ┌─────────────┐
                 │  OpenCode   │
                 │ daily work  │
                 └──────┬──────┘
                        │
               model selection
             ┌──────────┴─────────┐
             ▼                    ▼
          Claude                GPT
      implementation         hard reasoning


             plus


                 ┌─────────────┐
                 │     Pi      │
                 │ experiment  │
                 └─────────────┘
```

In other words:

**Start with OpenCode as the model-neutral daily driver.**

Use both Claude and OpenAI models through it.

At the same time, play with Pi specifically to answer:

> Can I build a coding workflow that is materially better suited to how I actually engineer software?

That is the really interesting Pi question.

---

## The comparison I personally find most illuminating

It isn't:

```text
Claude Code vs OpenCode vs Codex vs Pi
```

It's this:

```text
                WHO OWNS THE WORKFLOW?

Claude Code     Anthropic ─────────── You
                     ▲
                     │
                  mostly


Codex           OpenAI ────────────── You
                    ▲
                    │
                 mostly


OpenCode        OpenCode ─────── You
                            ▲
                            │
                        substantial


Pi              Pi ───────────── You
                                 ▲
                                 │
                           overwhelmingly
```

That leads to the simplest characterization:

**Claude Code:** “Give me a superb coding agent.”

**Codex:** “Give me a powerful engineering agent, particularly for difficult autonomous work.”

**OpenCode:** “Give me a powerful coding environment, but let me choose the models and agents.”

**Pi:** “Give me the primitives and let me design what an AI coding agent should be.”

For **your style of software development**, I would investigate **OpenCode first and Pi second**. Not because they're inherently “better” than Claude Code or Codex, but because your development process itself is unusually explicit; the ability to encode that process rather than merely prompt for it has disproportionate value. Claude Code and Codex would remain very useful as either complementary tools or, indirectly, model/agent backends for particular tasks.

[1]: https://pi.dev/docs/latest?utm_source=chatgpt.com "Pi Documentation · Documentation · Pi"
[2]: https://pi.dev/docs/latest/skills?utm_source=chatgpt.com "Skills · Documentation · Pi"
[3]: https://pi.dev/packages/pi-agenticoding?utm_source=chatgpt.com "pi-agenticoding · Packages · Pi"
[4]: https://opencode.ai/en/docs?utm_source=chatgpt.com "Intro | AI coding agent built for the terminal"
[5]: https://opencode.ai/v2/docs/agents?utm_source=chatgpt.com "Agents | OpenCode"
[6]: https://opencode.ai/v2/docs/permissions?utm_source=chatgpt.com "Permissions | OpenCode"
[7]: https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/prompt-templates-and-variables?utm_source=chatgpt.com "Prompting best practices - Claude Platform Docs"
[8]: https://www.anthropic.com/research/claude-code-expertise?hl=en-US&utm_source=chatgpt.com "How Claude Code is used in practice \ Anthropic"
[9]: https://developers.openai.com/api/docs/models/all?utm_source=chatgpt.com "All models | OpenAI API"
[10]: https://help.openai.com/en/articles/20001275/?utm_source=chatgpt.com "ChatGPT Work and Codex | OpenAI Help Center"
[11]: https://www.anthropic.com/news/higher-limits-spacex?utm_source=chatgpt.com "Higher usage limits and a SpaceX compute deal \ Anthropic"
[12]: https://www.anthropic.com/news/claude-sonnet-5?utm_source=chatgpt.com "Introducing Claude Sonnet 5 \ Anthropic"
