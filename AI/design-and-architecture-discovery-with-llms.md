<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents** *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Design and Architecture discovery with LLMs](#design-and-architecture-discovery-with-llms)
  - [Tools](#tools)
  - [My own prompts](#my-own-prompts)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Design and Architecture discovery with LLMs

- [Discovering legacy software with AI (Modesto San Juan)](https://www.modestosanjuan.com/posts/legacy-discovery-with-ai/)
- [Taller Modesto IA SCPNA 2025](./notes-from-talks-and-workshops/taller-modesto-ia-scpna-2025.md)
- [Susurrando DDD a la IA (Fernando Aparicio)](./DDD_ft_LLMs.md#susurrando-ddd-a-la-ia-un-enfoque-para-controlar-la-variabilidad-de-los-llms)
  - Deterministic class manifest, templates to reduce variability, and bounded context canvas.
- [SDD: Legacy / Brownfield Projects](<./Spec-Driven Development (SDD).md#legacy--brownfield-projects-l11>)
  - The agent reverse-engineers a constitution from existing code, READMEs, and TODOs.
- [Peppe Silletti: Your Codebase is AI’s Playground: My Step By Step Process To Redesign A Feature With Cursor + Claude Sonnet 4.0](https://peppesilletti.substack.com/p/your-codebase-is-ais-playground-my)
  - Step-by-step adventure in untangling a confusing interface using Cursor and Claude Sonnet 4.0.

## Tools

- [RepoMix](https://github.com/yamadashy/repomix)
  - 📦 Repomix is a powerful tool that **packs your entire repository into a single, AI-friendly file**.
  - It is perfect for when you need to feed your codebase to Large Language Models (LLMs) or other AI tools like Claude,
    ChatGPT, DeepSeek, Perplexity, Gemini, Gemma, Llama, Grok, and more.

## My own prompts

- [Project onboarding guidelines](./prompts/project-onboarding-guidelines.md)
- [Document system architecture](./prompts/document-system-architecture.md)
- [Quick onboarding guide](./prompts/quick-onboarding-guide.md)
