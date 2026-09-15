# Introduction to Claude Code

- Lydia Hallie
  - <https://www.linkedin.com/in/lydia-hallie/>
  - <https://www.youtube.com/@theavocoder>
- <https://master.dev/courses/claude-code/introduction/>
- <https://github.com/lydiahallie/demo-issue-tracker>
- Duration: ~ 2 hours

## Claude Code Under the Hood

- Harness, models, and efforts.
- **Harness**
  - The program running Claude Code
  - It exposes all the the tools to the model, the shell commands, the code base, etc.
- **Models**
    ![](introduction-to-claude-code-course/Claude-code-models.png)
  - Trade-offs between capability, speed, and cost
  - Options
    - **Opus**
      - The most capable model.
      - Deep reasoning. The answer is not directly in the code
      - Opus on low effort level is like hiring an expert for 10 minutes.
    - **Sonnet**
      - General purpose task, good balance, preferred model for everyday SW engineering
      - Sonnet on high level is like hiring a beginner for like an hour
    - **Haiku**
      - Not great at reasoning.
      - Mechanical work
      - OK for simple tasks, like refactors.
    - **Fable**
  - The model can not do anything in your machine, it's the harness which does it.
  - The models can be used through an API: the one offered by Anthropic, but also AWS Bedrock, Vertex, etc.
  - The model is **stateless**
    - Every time we call the model, it starts from zero.
    - If you switch models mid-chat conversation, it will break cache (`prompt caching`): ideally you shouldn't switch model during a session
  - The harness provides **state**
- **Effort levels**: how hard you want the model to "think". Low, medium, high.

![](introduction-to-claude-code-course/claude-assembled-prompt.png)
    - **Tool schemas** is every action can Claude Code can take on my behalf (JSON schema), so that the model know what it has available.
    - **System prompt** is hardcoded in Claude Code itself.
    - **Environment informatin
    - **Messages array**: User prompt, claude.md file, skill lists, etc.

![](introduction-to-claude-code-course/claude-assembled-prompt-json.png)
![](introduction-to-claude-code-course/claude-api-calls.png)

- The **agentic loop** is the continuous back-and-forth process between the harness (Claude Code) and the API/model.

## CLAUDE.md & Plan mode

- <https://github.com/lydiahallie/demo-issue-tracker>
- The `claude.md` file provides context to the AI model about the project's structure, conventions, technologies used, commands, architecture, and data flow. It helps reduce the number of tool calls by giving the model upfront information about the codebase, preventing it from needing to make additional queries to understand basic project details.
- Demo using Claude Code v2.1.116 and Sonnet 4.6 with high effort
- `/init`
  - It will create a `CLAUDE.md` based on the existing codebase
  - She used Sonnet for this
  - Her generated `CLAUDE.md` was longer and more detailed than mine 🤔
- `/context`
  - To see how is the context filled currently, percentage used, how, etc.
- Plan mode
  - You can just prompt it, no need to switch to the "plan mode".
  - Plan Mode essentially adds a instruction to the prompt telling the model not to code anything yet.
- `bun install`
- `bun run dev`
- To make it prettier, she used <https://claude.ai/design>, attaching a screenshot, and then asking:
  - `Make this beautiful dark mode, modern design kanban style`
  - Then, she took a screenshot of the new design, went back to `claude` and prompted:
    - `I want to implement this design, how would you do that? Don't code anything yet, plan first`
  - I created a project pointing to the code base, no need for screenshot:
    - <https://claude.ai/design/p/3a881a64-2470-4419-904d-c6d0d5768dd5?file=Issue+Board+%28dark%29.dc.html>

## Permissions

- In `.claude/settings.json` we can define specific permissions
![](introduction-to-claude-code-course/claude-settings-json.png)
- `/permissions`
  - You can see what you allow, deny, ask, etc. and configure from there
  - Hierarchy: managed settings > global > project > user
    - The higher in the hierarchy (more to the left), the higher the precedence
    - <https://code.claude.com/docs/en/server-managed-settings>
    - Centrally configure Claude Code for your organization through server-delivered settings, without requiring device management infrastructure.
- `/fewer-permission-prompts`
  - It analyzes your previous Claude Code sessions, identifies tool calls that you've frequently accepted, and automatically adds them to your permissions settings to reduce repetitive prompting.

## Effort & Context Windows

- `/advisor`
  - Let Claude consult a stronger model at key moments

## Ideas to implement

- Permissions
- TBD
