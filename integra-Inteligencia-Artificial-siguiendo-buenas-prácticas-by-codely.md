# Integra Inteligencia Artificial siguiendo buenas prácticas (OpenAI GPT, Ollama y LangChain)

## General

- <https://pro.codely.com/library/integra-inteligencia-artificial-siguiendo-buenas-practicas-openai-gpt-ollama-y-langchain-222393/598318/path/>
- <https://github.com/CodelyTV/add_ai_follwing_best_practices-course>
- Duración estimada: ~ 4 hours

## 🚀 ¿Cómo empezar con la Inteligencia Artificial como Developer?

- [ChatGPT Prompting vs RAG vs fine tuning: Aprovecha la IA al máximo](https://www.youtube.com/watch?v=bjCdsnkQ6Dw), video, 69 minutes
  - 13.02.2024
  - 3 ejemplos para diferenciar lo que podemos conseguir con prompt engineering, vs. RAG (Retrieval-Augmented Generation) vs. fine tuning de modelos de Inteligencia Artificial.
- [Cómo sacarle el máximo provecho a ChatGPT | #laFunción8x28](https://www.youtube.com/watch?v=sYZHBO3HRhA), video, 76 minutes
  - 25.04.2023
  - La IA es una herramienta muy poderosa que podemos utilizar en nuestro día a día. En el directo de hoy Bea Martín Valcárcel (@zigiella) nos ayudará a explorar diversas formas de darle utilidad.

### Conceptos de integración con IA

- **Modelos**
  - GPT (ChatGPT es la aplicación para el modelo GPT)
  - LLaMA, liberado por Meta, Open Source
  - Gemma (de Google, pesa poco, mejor para ordenadores no tan potentes)
  - Command R, open source, requieres mínimo 64 GB RAM local.
  - [Mistral](https://mistral.ai/)
  - Suno (audio)
  - Stable Diffusion (imágenes)
  - Lo que varía entre ellos es **cómo se interacciona con ellos**
- **Inferidor/servidor**
  - LLM server
  - Cómo se expone el modelo
  - [LlaMAcpp](https://github.com/ggml-org/llama.cpp) es el más conocido, genera un binario.
    - Sirve para varios modelos, no sólo para LLaMA.
  - Quiero desplegarlo, normalmente necesitas varios servidores. Muy caro en la nube.
  - **OLLaMa** es la más famosa abstracción sobre OLLaMA hoy en día. Por debajo usa LLaMAcpp.
    - Ofrece un API HTTP
- **SDKs**
  - Abstracción que facilita la integración
  - **LangChain**: para JS y Python (ciudadano de primer nivel), el más famoso
    - **LangChain4j**: para JVM
    - Permitir aplicar técnicas de RAG, donde se complementa la información del modelo con tu propia "base de datos".
    - Puede interactuar con las APIs de OLLaMA y similar, pero también con los modelos directamente.
  - **Resonance**: para PHP
  - **XEF.ai**: para Kotlin
  - **ModelFusion**: para JS/TS, también recomendado por LLaMAcpp
  - [microsoft/semantic-kernel](https://github.com/microsoft/semantic-kernel): Integrate cutting-edge LLM technology quickly and easily into your apps
    - [Introducing new Ollama Connector for Local Models](https://devblogs.microsoft.com/semantic-kernel/introducing-new-ollama-connector-for-local-models/)

### Primeros pasos con OLLaMA

- [Código fuente](https://github.com/CodelyTV/add_ai_follwing_best_practices-course/tree/main/01-intro/2-ollama)
- <https://ollama.com/>
  - `brew install ollama`
  - `ollama serve`: también podrías tenerlo en segundo plano todo el tiempo, con `brew`
  - Descargar un modelo, e.g. `ollama pull gemma:latest`
    - Similar a Docker. Se puede dockerizar, pero en Mac no hay virtualización de la GPU e iría lentísimo.
  - `ollama run gemma:latest`, para arrancar el modelo.
  - ¿Qué modelo utilizar?
    - Prueba y error
    - Depende del tamaño de RAM que tengas
- Por defecto corre en el puerto 11434 (regla mnemotécnica: el número parece LLAMA)
  - See server status: `curl http://localhost:11434 -v`
  - List all the models downloaded: `curl http://localhost:11434/api/tags | jq`
  - Download a model: `curl --request POST http://localhost:11434/api/pull -d '{"model": "gemma:latest"}'`
    - Similar to `ollama pull gemma:latest`
  - Ask a model: `curl --request POST http://localhost:11434/api/generate --header "Content-Type: application/json" -d '{"model": "gemma:latest", "prompt": "Qué es CodelyTV? (en menos de 15 palabras)", "stream": false}' | jq`
    - El `stream: false` devuelve toda la respuesta de golpe, para evitar enviar poco a poco la respuesta (puede interesar o no, depende).
    - La respuesta incluye "context", que habría que volver a enviar si hiciéramos una nueva consulta relacionada con ésta, para que la considerase de la misma conversación.
      - El uso de SDKs facilita esto, no tienes que encargarte de ello a mano.

### Desmitifica apps con IA: LangChain vs ModelFusion

- [Código fuente](https://github.com/CodelyTV/add_ai_follwing_best_practices-course/tree/main/01-intro/3-integrate_model)
  - `curl http://localhost:3000/api/langchain?prompt=Que%20es%20CodelyTV`
  - `curl http://localhost:3000/api/modelfusion?prompt=Que%20es%20CodelyTV`
- Alternativas:
  - <https://js.langchain.com/docs/introduction/>
    - También existe para Python
    - LangChain is a framework for developing applications powered by large language models (LLMs).
  - <https://github.com/vercel/modelfusion>
- LangChain tiene mucha más comunidad...

## 💡 Arquitectura de software: Cómo encaja la IA en tu app

- **Caso de uso**: ofrecer sugerencias de cursos a un usuario que acaba de terminar un curso.
- [Código fuente](https://github.com/CodelyTV/add_ai_follwing_best_practices-course/tree/main/02-software_architecture/2-implementation_details)
- Onion Architecture:
  - Infrastructure
    - OllamaMistralUserCourseSuggestionsRepository
  - Application
  - Domain
    - UserCourseSuggestionsRepository

## 👤 Caso práctico: Perfil de usuario con sugerencias de cursos

- **Alternativa 1: Orquestado por caso de uso**
  - [Código fuente](https://github.com/CodelyTV/add_ai_follwing_best_practices-course/tree/main/03-user_profile_wth_suggestions/1-llm_use_case)
  - En el caso de uso "UserFinder" inyectamos un UserRepository y un CoursesSuggestionsRepository
  - No les convence porque tienen que actualizar el agregado User con las recomendaciones, a posteriori
- **Alternativa 2: Encapsulado en UsersRepository**
  - [Código fuente](https://github.com/CodelyTV/add_ai_follwing_best_practices-course/tree/main/03-user_profile_wth_suggestions/2-llm_in_repo)
  - Apuestan por esta opción
  - En el UserFinder inyectamos un UserRepository, quien a su vez tiene una dependencia/inyección del UserCourseSuggestionsRepository
  - En realidad deberíamos haber de un LoggedInUserRepository, ya que no querríamos ver los cursos recomendados para un usuario cuyo perfil estuviéramos visitando (y que también hubiera hecho una llamada al mismo Repository)

## ⌨️ Caso práctico: Prompting con Ollama

- [Código fuente](https://github.com/CodelyTV/add_ai_follwing_best_practices-course/tree/main/04-llm_implementation_details/1-implement_a_recommendator)

## ✍️ Traslada el coste computacional al momento de escritura

## 🗣️ Cómo integrar tu app con OpenAI GPT

- TBD

## 🏁 Buenas prácticas aplicadas en la integración con LLM

- TBD

## ✅ Testea la integración con tu LLM

- TBD

## 🔜 Conclusiones y siguientes pasos

- TBD

## More links

- <https://www.youtube.com/playlist?list=PLZVwXPbHD1KMRRUApy-cVI7q6B5QhoF3H>
- [Deploy ANY Open-Source LLM with Ollama on an AWS EC2 + GPU in 10 Min (Llama-3.1, Gemma-2 etc.)](https://www.youtube.com/watch?v=SAhUc9ywIiw)

## Feedback

- ["2-implementation-details"](https://github.com/CodelyTV/add_ai_follwing_best_practices-course/tree/main/02-software_architecture/2-implementation_details): no compila, faltan clases. También incluir info Makefile que facilite arrancarlo todo (e.g. que incluya un "docker compose up" para la DB, etc.)
