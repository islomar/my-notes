# DDD ft LLMs

## General
- [From DDD Crew: AI DDD prompts and rules](https://github.com/ddd-crew/ai-ddd-prompts-and-rules/tree/main)
- [Codely: Cómo implementar código DDD usando IA (Cursor)](https://codely.com/blog/como-implementar-codigo-ddd-usando-ia)
    - https://www.youtube.com/watch?v=jYOKb_OuKxU


## Susurrando DDD a la IA. Un enfoque para controlar la variabilidad de los LLMs
- Fernando Aparicio Reviriego
    - https://www.fernandoaparicio.net/
    - https://github.com/faparicior
- https://www.youtube.com/watch?v=SPREVKAz-RI
- https://www.linkedin.com/in/fernandoaparicio/
- Comprensión Potemkin
    - https://es.wired.com/articulos/comprension-potemkin-ia-explica-pero-no-entiende
    - https://www.eldiario.es/tecnologia/comprension-potemkin-motivo-inteligencias-artificiales-explican-no-entienden_1_12444372.html
- "Genérame un bounded context canvas"
  - https://github.com/ddd-crew/bounded-context-canvas
  - https://miro.com/templates/the-bounded-context-canvas/
  - https://miro.com/ai/mcp
    - https://www.youtube.com/watch?v=v8d5WIf7nEg
- Manifiesto determinista de clases
    - Pide tabla con fila por clase.
    - Después añadir qué hace una clase (la responsabilidad debería ser pequeña)
    - Verificar que ha pasado por todas las clases
    - Usa el manifiesto para interrogar al LLM con las templates que necesites
    - Ejemplo de columnas:
        - Status
        - Identifier
        - Content
        - Catalogued
        - Processed
        - Class name
        - File path
        - Layer
        - Type (e.g. Use Case)
        - Description
        - Integration rules
        - Validation rules
        - Invariants
        - Business rules
- Le damos templates para que lo rellene y así reducir la variabilidad
- Tiene prompts con templates que incluye por ejemplo las definiciones de qué capas existen, qué categorias en cada una (e.g. Domain event), etc. También una template para el bounded context canvas.
- [Ejemplo para convertir de JSON a HTML](https://github.com/scbcn/scbcn.github.io/blob/master/schedule-instructions.md)
