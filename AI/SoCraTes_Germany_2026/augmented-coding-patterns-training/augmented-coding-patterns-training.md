# Augmented coding patterns

- Lada Kesseler
- Lars Eckart
- https://www.socrates-conference.de/training/#lada-kesseler 
- https://lexler.github.io/augmented-coding-patterns/

- https://talks.ai-coding-patterns.dev/socrates-2026/
- https://github.com/lexler/ai-coding-patterns-socrates-2026


## Patterns

    - **22: Silent misalignment**
    - **23: Active partner**
    - **24: Check alignment**
    - **25: Context markers**
        - Brown M&Ms
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
            - https://github.com/lexler/skill-factory
            - Ground rules + references + progressive disclosure (not everything is loaded from the beginning)
            - Lada prefers not to use them so much, beware skills you don't know, skills-factory
            - You can disable them for the model (but still triggering them manually)
            - You can configure in every repository which skills/agents are relevant for that project
            - You can add more info in the Frontmatter, like permissions.
            - Better to have leaner and more specialized skills than too broad ones.
            - Description: "Use when..." --> it could be something good to do
    - **Obstacle: Excess Verbosity**
        - "much more succint, please"
    - **9: Semantic Zoom**
        - Text became elastic and really powerful
        - You can zoom in and out of text
        - Asking for more or less details, depth
    - **10: Noise cancellation**
        - Default to "zoom out"
        - Force succinctness in knowledge documents or in responses to you
        - Delete mercilessly
    -  **12: Knowledge checkpoint**
        - You create checkpoints before implementation, e.g. saving in a markdown.
    - **13: Parallel implementations**
        - "Give me several implementations of this plan: game.md"
        - E.g. forking with worktrees
        - You can use tmux and have different Claude instances talking to each other
    - **27: Cast Wide**
        - Don't settle for your first solution. Actively push AI to show you more alternatives.
        - Ask differently!!
        - Deliberately look for your blind spots
            - "What solutions have we not even considered?"
            - "Can we make this simpler?"
            - "Can we do even simpler than that?"
            - "What entirely different approach would also work?"
        - Get it to teach you what you don't know you don't know.
    - **28: Reverse Direction**
        - One of her favorite patterns
        - Don't let AI steer you. You hold the steering wheel at every turn; you don't owe the conversation its expected next move.
    - **14: Offload deterministic**
        - AI is bad at determinism. Code is good at it. Use the right tool for the job.
    - **15: Unvalidated Leaps**
        - AI gets stuck because it's building on unverified assumptions about the code.
            - Slow it down, validate each step
            - Take many more smaller steps: Chain of Small Steps
        - When AI gets stuck, stop it and tell it to validate each step incrementally
        - Use TDD to create automatic micro-feedback loops that catch drift early. Try Predictive TDD - AI predicts test outcomes, gets surprised when wrong (like humans do), immediately corrects its mental model
    -  **16: Chain of Small Steps**
    - **17: AI slop**
        - Problem: Using AI output without adding human judgment or value. 
        - No value added = don't hit publish
    - **18: Feedback Flip**
    - **19: Refinement Loop**

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
- Exercise 08: to improve documents for the LLMs
- https://github.com/kenn-io/roborev
    - Continuous code review for AI coding agents.
- TBD


## Questions

- Number of skills? How is it decided which one is triggered? Can several ones be triggered?
- xxx

## Next week

- Fork the exercises repository and push my results
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
- Read about skills
    - https://agentskills.io/skill-creation/best-practices
    - https://platform.claude.com/docs/en/agents-and-tools/agent-skills/best-practices
        - Naming conventions: https://platform.claude.com/docs/en/agents-and-tools/agent-skills/best-practices#naming-conventions
- Number of skills? How is it decided which one is triggered? Can several ones be triggered?
- Schedule team's session: pairing/ensemble with LLMs (add section to the pairing slides)
    - Still benefits
        - Agree what to do.
        - Learn together to ask the right questions
    - Not valuable
        - Waiting in silence for 5-10-15 minutes to end: fast feedback by default is still the way to go (especially for implementation)
    - Good practices
    - Anti-patterns: start more WIP. Alternatives: breath, small refactor, code review, join another colleague, etc.
- Wittgenstein "the limits of my language are the limits of my world" --> connect it to LLM
- Search for Arlo Belshee prompt for Reverse Direction (slide 145)
- Try https://github.com/kenn-io/roborev
- Do exercise 10-refinement