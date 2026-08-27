# Augmented coding patterns

- Lada Kesseler
- Lars Eckart
- https://www.socrates-conference.de/training/#lada-kesseler 
- https://lexler.github.io/augmented-coding-patterns/

- https://talks.ai-coding-patterns.dev/socrates-2026/
- https://github.com/lexler/ai-coding-patterns-socrates-2026


## Patterns

    - **1: Context management**
    - **2: Knowledge document**
    - **3: Ground rules**
        - The things you care so much, that if they don't happen, bad things will happen CLAUDE.md, AGENTS.md, etc.
        - user-level or project-level
        - ground rules at the beginning of the context window
        - You don't have to tell your agents to read those files
        - Recommended to use symbolic links
    - **4: Extract knowledge**
    - Obstacle: Limited Context Window
        - You can compact
    - **5: Distracted agent**
        - Generalist vs Specialist: e.g. "main" vs "little committer"
        - Even with the same size, it works better with the Specialist
    -** 6: Focused agent**
        - Subagent is a way to do focused agents
    - **7: Reference docs**
        - Ground rules: e.g. prefer simple solutions!
            - always on
        - Maps & knowledge:         e.g. test.sh is in the root, nullables.md, approval_tests.md, uv.md, test_plan.md, frontend_style.md
        - Guides:       e.g. code_style.md, pythong_style.md
        - Playbooks:    e.g. TDD process, refactoring.process.md, TDD.process.md
        - TODO lists
        - Scratchpads:  something temporary, it can completely disappear later
        - Ways to do it:
            - Slash commands: basically like a pointer to a file
            - ??
    - **Knowledge composition**
    - **11: External Context**
        - Move a distinct piece of work into its own agent — it runs in a separate context and hands back only the result.
            - Like delegating to a teammate: they do the legwork and report back a summary, not their whole day.
            - Both sides get sharper:
                - The main thread stays clean — the sub-task's noise never enters it
                - The sub-task gets its own window — full focus on a single goal
        - **Skills**
            - Ground rules + references + progressive disclosure
            - Lada prefers not to use them so much, beware skills you don't know, skills-factory
            - You can disable them for the model (but still triggering them manually)
            - You can configure in every repository which skills/agents are relevant for that project
            - You can add more info in the Frontmatter, like permissions.
    - **22: Silent misalignment**
    - **23: Active partner**
    - **24: Check alignment**
    - **25: Context markers**
        - Brown M&Ms
    - TBD
    - 

## Prompts

    - Tell me something I need to know even if I don't want to hear it.
    - Push back...
    - Ask questions...
    - Using emojis in specific answers

## General notes

- Serena
    - https://mcpmarket.com/es/tools/skills/serena-code-architecture
    - https://lobehub.com/skills/massgen-massgen-serena 
    - Plugin existing for IntelliJ: https://plugins.jetbrains.com/plugin/28946-serena
- TBD


## Questions

- Number of skills? How is it decided which one is triggered? Can several ones be triggered?
- xxx

## Next week

- Include ground rules in Copilot
- Review symbolic links
- Start using tmux and write down shortcuts
- Differences between copilot cli and ide
    -The Copilot CLI introduces the /fleet command, which allows you to pass a single prompt that the CLI splits into multiple actions, working on them in parallel.
    - https://docs.github.com/en/copilot/concepts/agents/copilot-cli/fleet
- How to run focused agents with Copilot
    - Do you have support for subagents? How do I spawn them? Are there options or specific instructions I can/should add?
- Schedule a session with the whole team: 2 days, 1.5 hours per day
- Share in #cop-developers