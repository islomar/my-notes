# IA: Embeddings y RAG

- https://pro.codely.com/library/ia-embeddings-y-rag-230838/655241/path/
- https://github.com/CodelyTV/ai-search_engine_with_rag-course
- Asesor: Ángel Delgado
- Duración: ~ 3 horas

## 🚀 ¿Qué es RAG y los embeddings?, ¿qué aprenderás en el curso?
- RAG (Retrieval-Augmented Generation)
- 3 big LLM problems
  - Hallucinations
  - Cut-off date (no saben nada anterior a cierta fecha)
  - Finite context
- 3 ways to RAG (mecanismos para filtrar el conocimiento que le paso al prompt y limitar el contexto)
  - `SELECT * FROM courses WHERE category = 'DDD'`
  - Full-text search
    - e.g. con ElasticSearch, todos los cursos que contienen la palabra "Intro"
  - Vector search
    - e.g. "lístame los cursos introductorios de arquitectura y diseño de software". No contiene la palabra "intro" necesariamente, e.g. el de "Clean Code".
    - Solución: búsqueda vectorial aka búsqueda semántica.
    - `SELECT * FROM courses ORDER BY (embedding <=> ${generateEmbedding("Intro a Arq. y diseño de software")}) LIMIT 10;`

### 🧮 Qué es una búsqueda semántica y qué son los embeddings
- Gato, gato negro, perro, perro negro
- Una dimensión (tipo de animal):           vector(1)
- Dos dimensiones (tipo de animal y color): vector(2)
  - E.g. El gato está en la [-1, 1], el gato negro en la [-1, -1]
- Un **embedding** es un vector de N dimensiones (N es del orden de cientos o miles).
  - Esas dimensiones, inicialmente, tenían connotaciones de significado concreto. A día de hoy no, son conceptos abstractos.
  - Potencia de 2
  - A más dimensiones, más lenta es la búsqueda
- Se mide la "cercanía" teniendo en cuenta el ángulo del vector desde lo que buscas a lo que existe (NO por distancia euclidiana)
- Existen **modelos de embeddings**: le pasas un texto y te lo pasa a un embedding, e.g. "perro muy negro"
- La **comparación** del embedding se haría en la propia base de datos, pero la **generación** puede ser en la DB o llamando a un LLM o...
- **Embedding models** (to generate the embedding/vector)
  - `nomic-embed-text` vector(768): te lo puedes montar en local con OLlamA, https://ollama.com/library/nomic-embed-text
  - `text-embedding-3-small` vector(1536): de OpenAI
  - `text-embedding-3-large` vector(3072): de OpenAI
- [Recomendación de Supabase](https://supabase.com/docs/guides/ai/vector-columns#create-a-table-to-store-vectors), recomienda vector(384)
  - Para el embedding usan el [modelo `gte-small`](https://huggingface.co/Supabase/gte-small): en la tabla aparecen las dimensiones.

### 🧑‍🏫 Implementa RAG básico con PgVector + Langchain: Búsqueda de cursos similares
- [Código de ejemplo: RAG con PgVector](https://github.com/CodelyTV/ai-search_engine_with_rag-course/tree/main/01-what_is_rag/3-implement_rag_pgvector)
- `pgvector` es la extensión de Postgres que permite hacer búsquedas vectoriales dentro de Postgres
  - NO se encarga de generar el embedding/vector, sino de calcular la distancia. Y también permite almacenar el vector.
- A tu tabla normal, e.g. `cursos`, se le añade un campo `embedding vector(768)`
- En este ejemplo, sólo usa el nombre del curso para generar el embedding (usando OllamaEmbeddings, ofrecido por LangChain)
  - Tenemos que pasar el embedding a JSon antes de guardarlo en la tabla.
- De momento, una búsqueda por "Introducción a DDD" no está fina.

## 🔤 Embeddings: Búsqueda de curso por significado
- En algunos tutoriales se propone tener una tabla con todos los embeddings, no tenerlos en las propias tablas de negocios.
  - Pero es más sencillo empezar por añadir el campo `embedding` a la tabla
- Las diferentes formas de añadir embeddings
  - **Specific field**
    - A la tabla `courses` le añado un campo `embedding`
  - **Specific table**
    - Tengo una tabla`course_embeddings` (desnormalización)
    - Probablemente la mejor.
  - **Generic table** (con todos los embeddings dentro)
    - Tengo una tabla genérica `embeddings`
    - IMO demasiada abstracción, demasiada generalización

## 👨‍💻 Optimiza tu RAG añadiendo más contexto
- TBD

## 🔥 Qué base de datos elegir para hacer búsqueda por embeddings
- TBD

## 🍽️ Ingesta en base de datos vectorial datos de terceros
- TBD

## 🍄 Mejora la búsqueda por embeddings con datos de terceros
- TBD

## 🔜 Conclusiones y siguientes pasos
- [ChatGPT Prompting vs RAG vs fine tuning: Aprovecha la IA al máximo | #laFunción 9x18](https://www.youtube.com/watch?v=bjCdsnkQ6Dw)
- Más cursos
  - [Embeddings automáticos en Postgres](https://pro.codely.com/library/embeddings-automaticos-en-postgres-236271/702554/about/)
