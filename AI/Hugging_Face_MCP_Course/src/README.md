# Hello World MCP

## How to run the server
1. `uv init`
2. `uv venv`
3. `source .venv/bin/activate`
4. `uv pip install "mcp[cli]"`
5 `mcp dev hello_mcp_server.py`
6. On the browser page opened at http://127.0.0.1:6274/, click on "Connect"

## How to run the client
1. `uv pip install "huggingface_hub[mcp]>=0.32.0"`
2. `uv huggingface-cli login`
3. `tiny-agents run agent.json`
    - In this configuration, we are using the @playwright/mcp MCP server. This is an MCP server that can control a browser with Playwright.
    - The example shows a web-browsing agent configured to use the Qwen/Qwen2.5-72B-Instruct model via Nebius inference provider.
    - Prompt: "do a Web Search for HF inference providers on Brave Search and open the first result and then give me the list of the inference providers supported on Hugging Face"
    - https://huggingface.co/datasets/tiny-agents/tiny-agents/tree/main/celinah/web-browser