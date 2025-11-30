# Claude info

## General

- `/context`
- `/compact`
- `/clear`
- `/model`
- "think" < "think hard" < "think harder" < "ultrathink"
- `ultrathink`
  - For planning
  - <https://claudelog.com/faqs/what-is-ultrathink/>
- Sonnet (planning) → Haiku (execution) → Sonnet (review)
- Press Esc at any time to stop Claude from executing.
- REWIND: press Esc twice gives you the option to revert any files that were created or changed.
- CLAUDE.md overwrites the prompts
- CLAUDE.md too long?
  - Aim for 50-200 lines
  - Move detailed context to separate reference docs
  - Link to those docs from CLAUDE.md
- Adding rules on the fly: You can add rules using the # symbol at the start of a line
- Four levels:
  - `~/.claude/CLAUDE.md`              # 1. Global (all your projects)
  - `/project-root/CLAUDE.md`          # 2. Project-specific
  - `/project-root/frontend/CLAUDE.md` # 3. Directory-specific
  - `/project-root/CLAUDE.local.md`    # 4. Personal (gitignored)
- Priority Order. Most specific wins:
  - Directory-level (e.g., /frontend/CLAUDE.md)
  - Project-level (e.g., /project-root/CLAUDE.md)
  - Global (e.g., ~/.claude/CLAUDE.md)
- User prompts (least priority)
  - How they stack: Levels combine (don’t replace). All rules apply simultaneously, with more specific levels overriding on conflicts.
- To encourage more proactive subagent use, include phrases like "use PROACTIVELY" or "MUST BE USED" in your `description` field in the subagent file.

## Interesting readings

- [Claude Code: What It Is, How It's Different, and Why Non-Technical People Should Use It (Teresa Torres)](https://www.producttalk.org/claude-code-what-it-is-and-how-its-different/)
- [Playwright Test Agents](https://playwright.dev/docs/test-agents)
- [Claude Code: Best practices for agentic coding](https://www.anthropic.com/engineering/claude-code-best-practices)

## Claude plugins

- <https://github.com/animalzinc/claude-plugins>
- [Bokata slicer CC](https://github.com/abrahamvallez/bokata-slicer-cc)
  - Intelligent vertical slicing and feature decomposition for Claude Code using the Hamburger Method and radical vertical slicing techniques.

## Sub-agents

- <https://ccforpms.com/fundamentals/custom-subagents>
- <https://github.com/nikeyes/stepwise-dev>
- [Awesome Claude Code Sub-Agents](https://github.com/VoltAgent/awesome-claude-code-subagents) - Collection of community sub-agent templates
- [Sub-Agent Examples](https://github.com/wshobson/agents) - Real-world agent configurations
- [SubAgents.cc](https://www.subagents.cc/) - Sub-agent template generator

## Ideas for commands

- `/create-plan`
- <https://github.com/nikeyes/stepwise-dev>

## Pending

- <https://medium.com/nick-tune-tech-strategy-blog/minimalist-claude-code-task-management-workflow-7b7bdcbc4cc1>
- <https://www.anthropic.com/engineering/code-execution-with-mcp>
- <https://refactoring.fm/p/managing-context-for-ai-coding>
- <https://support.claude.com/en/articles/11647753-understanding-usage-and-length-limits>
- <https://nizar.se/lean-claude-code-for-production/>
- <https://code.claude.com/docs/en/common-workflows>
- <https://github.com/nizos/tdd-guard>
- <https://github.com/citypaul/.dotfiles/blob/main/claude/.claude/agents/refactor-scan.md>
  - It contains more interesting agents, e.g. for TDD.
- <https://github.com/abrahamvallez/bokata-slicer-cc>
- <https://www.ksred.com/claude-code-as-an-mcp-server-an-interesting-capability-worth-understanding/>
- <https://www.anthropic.com/engineering/claude-code-best-practices>
- <https://code.claude.com/docs/en/sub-agents>
- <https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/prompt-generator>
- <https://code.claude.com/docs/en/hooks>
- Skills
- Plugins
