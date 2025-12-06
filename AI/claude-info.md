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

- <https://github.com/NTCoding/claude-skillz> --> VERY INTERESTING
- <https://github.com/animalzinc/claude-plugins>
- [Bokata slicer CC](https://github.com/abrahamvallez/bokata-slicer-cc)
  - Intelligent vertical slicing and feature decomposition for Claude Code using the Hamburger Method and radical vertical slicing techniques.

## Sub-agents

- Specialized roles
- https://code.claude.com/docs/en/sub-agents
- <https://ccforpms.com/fundamentals/custom-subagents>
- <https://github.com/nikeyes/stepwise-dev>
- [Awesome Claude Code Sub-Agents](https://github.com/VoltAgent/awesome-claude-code-subagents) - Collection of community sub-agent templates
- [Sub-Agent Examples](https://github.com/wshobson/agents) - Real-world agent configurations
- [SubAgents.cc](https://www.subagents.cc/) - Sub-agent template generator

## Hooks
- [Auto-reviewing Claude's Code](https://github.com/NTCoding/claude-skillz/tree/main/automatic-code-review) by Nick Tune
  - https://medium.com/nick-tune-tech-strategy-blog/auto-reviewing-claudes-code-cb3a58d0a3d0
- [Claude Code Reminder Hook](https://github.com/lexler/claude-code-user-reminders)
- [How Claude Code Hooks Save Me HOURS Daily](https://www.youtube.com/watch?v=Q4gsvJvRjCU) (video, 3 min.)
  - E.g. Hook that avoid using npm and forces bun
  - E.g. hook that saves to a file every bash command executed by Claude (e.g. auditing?)
  - E.g. hook to block from accessing certain paths
  - E.g. notification and stop hooks which play audio once it has finished...

## Ideas for commands

- `/create-plan`
- <https://github.com/nikeyes/stepwise-dev>

## Agent Skills
- [Claude Agent Skills Explained](https://www.youtube.com/watch?v=fOxC44g8vig)
- https://github.com/anthropics/skills
- https://www.claude.com/blog/skills-explained
- https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills
- Skills are folders that include instructions, scripts, and resources that Claude can load when needed.
- Claude will only access a skill when it's relevant to the task at hand. When used, skills make Claude better at specialized tasks like working with Excel or following your organization's brand guidelines.
- Skills are composable
- Difference between skills and subagents
  - Subagents have their own context window, context prompt and specific tool permissions
  - Skills provide portable expertise that any subagent can use
- Subagent is not fully loaded from the beginning; its workflow is dynamically loaded on a need-to-use basis, similar to how Claude Skills work. When a Claude Code session begins, only the subagent's name and description are loaded to keep the system efficient. The full functionality and resources are only loaded when a specific task requires that subagent's expertise. 
  - Skills use **progressive disclosure** to keep Claude efficient. When working on tasks, Claude first scans Skill metadata (descriptions and summaries) to identify relevant matches. If a Skill matches, Claude loads the full instructions. Finally, if the Skill includes executable code or reference files, those load only when needed.
  - This architecture means you can have many Skills available without overwhelming Claude's context window. Claude accesses exactly what it needs, when it needs it.
- **Use Skills when**: You want capabilities that any Claude instance can load and use. Skills are like training materials—they make Claude better at specific tasks across all conversations.
- **Use subagents when**: You need complete, self-contained agents designed for specific purposes that handle workflows independently. Subagents are like specialized employees with their own context and tool permissions.
- **Use them together when**: You want subagents with specialized expertise. For example, a code-review subagent can use Skills for language-specific best practices, combining the independence of a subagent with the portable expertise of Skills.

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
