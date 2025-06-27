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

- Si te da un Mermaid erróneo, puedes pedirle a la IA que te genere un prompt para arreglarlo en el futuro (e.g. pasando un fichero con un diagrama incorrecto y el mismo corregido).
- Se puede integrar en la pipeline la generación de esta documentacion de C4 (tal vez no para ser ejecutada con cada push)
- Si me paso de tokens (repomix):
  - Ignorar recursos del repositorio (e.g. svg)
  - Divide
  - `--compress`: elimina el cuerpo del método, pero puede ser suficiente para ciertos tipos de análisis
  - `--remove-empty-lines`
  - `--remove-comments`
