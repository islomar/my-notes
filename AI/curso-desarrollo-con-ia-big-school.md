# Curso de Desarrollo con IA Gratis
- De 0 a MVP con IA
- https://thebigschool.com/sp/curso-desarrollo-ia-a-rrss-brais/
- Brais Moure
- Nerea Luis
- Carlos Azaustre
- Kiko Palomeras
- Alan Buscaglia
- Daniela Maissi

## Sesión 1: Descubre cómo pasar de idea a prototipo en horas, mediante el diseño de prompts técnicos para obtener código de calidad
- https://www.youtube.com/watch?v=tV7DKYdsG_4
- [NotebookLM](https://notebooklm.google/)
    - Múltiples fuentes
    - Chat
    - Resumen (audio, vídeo)
    - Mapa mental
- Problema: decidir un stack tecnológico
- ChatGPT o Gemini:
    - "Haz un análisis de esta librería de código https://github.com/ultralytics/ultralytics"
    - "Quiero un prompt refinado para aprender a usar..."
- Se pueden ver los razonamientos
- Prompt para SEO: pedir a Gemini el copy
    - [Firebase Studio](https://firebase.studio/)
        - Le pasamos un boceto del Excalidraw con el look & feel.
        - Le pasamos también el copy que Gemini nos ha devuelto

## Sesión 2: Descubre cómo dominar la Inteligencia Artificial para desarrollar proyectos seguros, mediante la creación de un equipo de IA con el que implementar, testear y documentar un proyecto haciendo que colaboren entre sí
- https://www.youtube.com/watch?v=ssPPIY3EJcc
- ChatGPT 5: nos escribe un "requirimientos.md"
- [Linear's MCP Server](https://linear.app/docs/mcp)
- Desde Claude, pedimos que nos genere todos los tickets de Linear para la historia de usuario que está en requerimientos.md
- Kiko Palomeras
- https://chatgpt.com/codex/
- [AGENTS.md](https://agents.md/)
- [Alan Buscaglia](https://www.linkedin.com/in/alanbuscaglia)
    - https://www.anthropic.com/engineering/claude-code-best-practices
    - Claude Code with task managers
    - Recomienda usar Claude Max: https://www.claude.com/pricing/max
    - Los subagentes sólo existen en Claude
- [Daniela Maissi](https://www.linkedin.com/in/daniela-maissi-43045510b)
    - Login form creado por la IA...
    - Brute force: SecList, [Hydra](https://hackviser.com/tactics/tools/hydra) (test password security) + [Rockyou](https://weakpass.com/wordlists/rockyou.txt) (list of passwords)
    - `hydra -l admin -P /usr/share/wordlists/rockyou.txt -t 16 -f -V 47.62.198.88 http-post-form "/index.php:username=^USER&password=^PASS:Credenciales incorrectas" -o hydra_results.txt`


## Sesión 3: Descubre cómo automatizar tus procesos de desarrollo con IA y conviértete en un perfil más competitivo en el panorama actual
- TBD


## References
- https://thebigschool.com/wp-content/uploads/2025/10/Apuntes-Curso-Desarrollo-Clase-1-.pdf
- https://thebigschool.com/wp-content/uploads/2025/10/Apuntes-Curso-Desarrollo-Clase-2.pdf
- https://the-amazing-gentleman-programming-book.vercel.app/es/book/Chapter15_IA-Driven-Development
