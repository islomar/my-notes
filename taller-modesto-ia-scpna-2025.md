# AI Driven ¿Development?

- <https://pamplonaswcraft.com/programa/#dialog-167>

## Notas

- <https://github.com/microsoft/generative-ai-for-beginners/tree/main/17-ai-agents#what-are-ai-agents>
- Matriz de competencias
- Modelo de madurez/conciencia técnica en AIDA
- Entrevistas: preguntas para perfil Senior Backend Engineer
  - Enfrentar las preguntas a la matriz de competencias
  - Prompt para confrontarlo con transcripción de texto de la entrevista
- Gemini 2.5 Pro: tiene una venta de contexto de 1M de tokens.
  - Es el ChatGPT de Microsoft
- <https://repomix.com/>: empaqueta todo tu código en un XML
  - `repomix --ignore "**/*svg,README.md"`
- [Google AI Studio](https://aistudio.google.com)
  - Se puede usar [Gemini normal](https://gemini.google.com/) y corriente: la cuenta de pago te garantiza que no almacenan tu código, etc.
  - Le pasamos el XML de repomix
- Ejemplos de prompts:

```text
Document the system architecture:
1. High-level overview
2. Component interactions
3. Data flow diagrams
4. Design decisions and rational
5. System constraints and limitations
```

```text
Intenta obtener:
1. Diagrama de arquitectura
2. Guía de onboarding para desarrollo
3. Convenciones de código
```

```text
Intenta obtener:
1. Flujo de eventos (quién publica y quién suscribe)
2. C2 de C4 Model
3. Documentación de las APIs
```

```text

```

- Si te da un Mermaid erróneo, puedes pedirle a la IA que te genere un prompt para arreglarlo en el futuro (e.g. pasando un fichero con un diagrama incorrecto y el mismo corregido).
- Se puede integrar en la pipeline la generación de esta documentacion de C4 (tal vez no para ser ejecutada con cada push)
- Si me paso de tokens (repomix):
  - Ignorar recursos del repositorio (e.g. svg)
  - Divide
  - `--compress`: elimina el cuerpo del método, pero puede ser suficiente para ciertos tipos de análisis
  - `--remove-empty-lines`
  - `--remove-comments`
- <https://github.com/steipete/agent-rules>
  - Muchos ejemplos de reglas
  - Ver algún vídeo con su flujo de trabajo
- [SYSTEM PROMPT — GPT-4.1 Coding Agent (VS Code Tools Edition)](https://gist.github.com/burkeholland/7aa408554550e36d4e951a1ead2bc3ac)
  - [Getting 4.1 to behave like Claude](https://www.reddit.com/r/GithubCopilot/comments/1llewl7/getting_41_to_behave_like_claude/)
- Ejemplo para Incident Reports:
  - Tienen un documento describiendo cómo es un IR.
  - Se ha conectado Claude con el MCP de Atlassian para pedir que evalúe si un IR se ajusta bien a las expectativas de un IR.
- `llm` CLI:
  - Puedes crear templates
    - `cat repomix-XXX | llm -t aisecops`
- Pedir a la IA que haga un plan para después pasárselo y que lo haga.
- Se le puede pedir que te dé opciones.
- **[LangFlow](https://www.langflow.org/)**: como n8n pero para IA. NoCode.
    - [Step by step no-code RAG application using Langflow](https://www.youtube.com/watch?v=RWo4GDTZIsE)
