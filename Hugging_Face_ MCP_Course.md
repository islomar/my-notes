# Hugging Face MCP Course

- <https://huggingface.co/mcp-course>
- Authors
  - Ben Burtenshaw
  - Alex Notov
- [Discord MCP Course](https://discord.com/channels/879548962464493619/1373973086897967214)
- [Model Content Protocol Course from Hugging Face - MCP Course Introduction](https://www.youtube.com/watch?v=p4q6LI-2yZ8)
- [Written materials](https://huggingface.co/learn/mcp-course/unit0/introduction)

## 1. MCP Fundamentals, Architecture and Core Concepts

- <https://huggingface.co/learn/mcp-course/unit1/introduction>
- MCP is a standard like HTTP or USB-C, and is a protocol for connecting AI applications to external tools and data sources.
- MCP has a client and a server.
- The **host** is the user-facing application, and the client is the component within the host application that manages communication with a specific MCP Server.
- **Client**: A component within the host application that manages communication with a specific MCP Server. Each Client maintains a 1:1 connection with a single Server, handling the protocol-level details of MCP communication and acting as an intermediary between the Host’s logic and the external Server.
- **Server**: An external program or service that exposes capabilities (Tools, Resources, Prompts) via the MCP protocol.
  - **Tools**:        Executable functions that the AI model can invoke to perform actions or retrieve computed data. Typically relating to the use case of the application. 
    - A tool that can execute code that the LLM writes.
  - **Resources**:    Read-only data sources that provide context without significant computation.
    - A resource that contains the documentation of the application.
  - **Prompts**:      Pre-defined templates or workflows that guide interactions between users, AI models, and the available capabilities.
  - **Sampling**:   Server-initiated requests for the Client/Host to perform LLM interactions, enabling recursive actions where the LLM can review generated content and make further decisions.
    - E.g. A writing application reviewing its own output and decides to refine it further.

## 2.End-to-end Use case: MCP in Action

TBD

## 3. Deployed Use case: MCP in Action

TBD

## 4. Bonus Units

TBD

## Other Hugging Face courses

- [LLM Course](https://huggingface.co/learn/llm-course/)
- [Agents Course](https://huggingface.co/learn/agents-course/)
