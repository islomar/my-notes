# OpenCode

- <https://opencode.ai>
- OpenCode is an open source AI coding agent. It’s available as a terminal-based interface, desktop app, or IDE extension.
- Use cases:
  - A **model-agnostic coding harness** that can sit on top of cloud APIs or local models.
  - OpenCode is being considered alongside Pi and Codex as a harness.
  - Hybrid setup: use a stronger model for planning/reasoning and a cheap/local model for constrained tasks. That’s exactly the kind of experiment OpenCode is well suited to.
  - Some people appear to use OpenCode as their normal interface.
  - Remote use via OpenCode Web + Tailscale gets a positive mention

    ```text
    OpenCode
    │
    ├── cloud provider
    │    ├── OpenAI
    │    ├── Anthropic
    │    └── etc.
    │
    └── local provider
            └── Ollama / local Qwen / etc.
    ```  

- [OpenCode Go](https://opencode.ai/v2/docs/console/go) is a low cost $10/month subscription that gives you reliable access to popular open coding models.
- OpenCode lists models from [models.dev](https://models.dev/), provider integrations, and your configuration.
- Qwen3.8 27B are capable of handling small tasks in OpenCode.
- OpenCode can **route work to different models/providers automatically through agents/subagents**, but it does not appear to have a built-in “general-purpose intelligent router” that dynamically picks any model purely from the task on every turn.
  - **You can define specialized agents with their own model/provider**, for example a cheap/fast model for simple tasks, a stronger model for implementation, and another for architecture/review.
  - OpenCode’s primary agents can then invoke subagents automatically based on their descriptions, and each subagent can have its own configured model.
  - There is also a separate [`small_model`](https://github.com/mudrii/opencode-docs/blob/main/docs/official/config.md#models) setting for lightweight internal tasks such as title generation, so OpenCode already has the idea of using a cheaper model for some work built into its configuration.
  - There is also already a third-party project called [opencode-model-router](https://github.com/marco-jardim/opencode-model-router) specifically designed to add automatic tier-based routing such as fast, medium, and heavy, mapping task types to different configured models.
  
  ```text
  OpenCode primary agent
        │
        ├── "search/read-only task"
        │       → fast/local model
        │
        ├── "implementation task"
        │       → stronger coding model
        │
        └── "architecture/reasoning task"
                → expensive frontier model
  ```

  - I could start with this:

    ```text
    planner
    → GPT-5.6 / Claude

    local-small
    → Qwen 4B/8B via Ollama

    coder
    → stronger cloud coding model

    reviewer
    → another strong model
    ```

  ```text
    GPT-5.6 / Claude
        │
        │ plan + reason
        ▼
    OpenCode orchestrator
        │
        ├─────────────┬──────────────┐
        ▼             ▼              ▼
    local Qwen     cheaper API     strong API
    small task     routine task    hard task  
  ```
  
  - Example

    ```json
    {
        "$schema": "https://opencode.ai/config.json",
        "model": "openai/gpt-5.6",

        "agents": {
            "local-worker": {
            "mode": "subagent",
            "description": "Handles small, mechanical, low-risk coding tasks",
            "model": "ollama/qwen3"
            },

            "reviewer": {
            "mode": "subagent",
            "description": "Performs careful code review and architectural analysis",
            "model": "anthropic/claude-sonnet-4-5"
            }
        }
    }
    ```
