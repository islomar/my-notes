<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Contents

- [Local LLM models](#local-llm-models)
  - [My laptop](#my-laptop)
    - [What fits](#what-fits)
    - [Pending](#pending)
  - [General](#general)
- [In the cloud](#in-the-cloud)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Local LLM models

## In the cloud

- https://www.runpod.io/

## My laptop

Slimbook Executive, Ubuntu 24.04. Checked on 2026-10-04.

| Component | Spec | Relevance for local LLMs |
|---|---|---|
| CPU | Intel i7-12700H: 14 cores (6P + 8E), 20 threads. AVX2, AVX-VNNI, FMA, F16C. No AVX-512. | Fine for CPU inference with llama.cpp/Ollama |
| RAM | 64 GB DDR4-3200, 2 modules (dual channel, about 51 GB/s peak). 16 GB swap. About 39 GB free with normal desktop use. | Main asset. Bandwidth sets the CPU speed limit. |
| dGPU | NVIDIA RTX 3050 Ti Laptop, 4 GB VRAM, driver 580, CUDA 13.0 | Main bottleneck |
| iGPU | Intel Iris Xe | Not useful |
| NPU | Intel GNA | Cannot run LLMs |
| Disk | Samsung 980 PRO 1 TB NVMe, PCIe 4.0 x4. `/` (`nvme0n1p2`): 112 GB free (63% used). Data partition (`nvme0n1p3`): 157 GB free (73% used). Both partitions are on the same drive and run at the same speed. | Ollama models live on the data partition. |
| Tooling | Ollama 0.34.2 with qwen3:30b-a3b, qwen3:4b, qwen3:8b, gemma3:4b, Qwen3-Embedding-0.6B | |

### What fits

- **Fully on GPU (about 30–60 tok/s):** models up to about 4B at Q4, with short context. Example: qwen3:4b, gemma3:4b.
- **GPU + CPU split (about 8–20 tok/s):** dense 7–9B at Q4, such as qwen3:8b (5.2 GB). They exceed 4 GB VRAM, so Ollama offloads layers to the CPU.
- **Best fit: MoE models with few active parameters**, such as Qwen3-30B-A3B or gpt-oss-20b at Q4 (about 12–19 GB). The weights sit in RAM. About 3B parameters are active per token. Measured: Qwen3-30B-A3B runs at about 10 tok/s (see [Benchmark](#benchmark-qwen330b-a3b)). Better quality than any 8B dense model.
- **Dense 14B at Q4:** a few tok/s. Too slow for interactive use.
- **Dense 32B+:** loads in RAM, but runs at about 1–3 tok/s.

Models of about 3–4B parameters at Q4 quantization would run fully on the GPU. Larger models will be split between GPU and CPU and run noticeably slower.

Only Qwen3-30B-A3B is measured. The other speed figures are estimates.

CPU speed ceiling: each generated token reads all active weights from RAM once. Max tok/s ≈ 51 GB/s ÷ active weight size. Real throughput is about 50–70% of that.

| Model (Q4) | Active weights per token | Ceiling | Expected on CPU |
|---|---|---|---|
| MoE, 3B active (Qwen3-30B-A3B) | about 1.8 GB | about 28 tok/s | measured: about 10 tok/s |
| Dense 8B | about 5 GB | about 10 tok/s | about 5–7 tok/s |
| Dense 14B | about 9 GB | about 6 tok/s | about 3–4 tok/s |
| Dense 32B | about 19 GB | about 2.7 tok/s | about 1.5–2 tok/s |

Layers offloaded to the 4 GB GPU run faster, so partial offload raises these numbers.

### Benchmark: qwen3:30b-a3b

Run on 2026-10-04. Ollama 0.34.2, Q4_K_M (18 GB), thinking off, temperature 0, AC power, power profile "balanced", about 24 GB RAM used by other apps.

| Run | Context | Prompt processing | Generation |
|---|---|---|---|
| Cold start (load 36 s) | 4k | 18 tok | 8.0 tok/s |
| Warm, code prompt | 4k | 25 tok | 9.6 tok/s |
| Warm, explanation | 4k | 19 tok | 10.1 tok/s |
| Long prompt | 16k | 5,441 tok at 114 tok/s | 4.8 tok/s |

Thread count (warm run, 4k context, 256 tokens):

| `num_thread` | 6 (default) | 8 | 12 | 14 |
|---|---|---|---|---|
| Generation | 10.1 tok/s | 12.3 tok/s | 13.4 tok/s | 11.2 tok/s |

Two runs per setting. Differences of about ±1 tok/s are noise.

Retest with the 12-thread variant, alternating both models, 3 warm runs each:

| Model | Runs | Median |
|---|---|---|
| `qwen3:30b-a3b` (6 threads) | 10.5, 9.7, 9.7 | 9.7 tok/s |
| `qwen3:30b-a3b-t12` (12 threads) | 11.0, 10.1, 10.0 | 10.1 tok/s |

The 13.4 tok/s result did not repeat. 12 threads gives about +4%, within noise. CPU temperature reached 74 °C during the runs.

Findings:

- Ollama splits the model well on its own: attention layers and KV cache on the GPU (CUDA, flash attention on), expert weights in RAM. `ollama ps` shows 86% CPU / 14% GPU.
- Ollama uses 6 threads by default (the P-cores). More threads give little or no gain (see retest). 14 threads is slower, because the E-cores hold back the rest.
- Long context costs a lot: at 16k context, generation drops to about 5 tok/s.
- 10 tok/s × 1.8 GB per token is about 18 GB/s, roughly 35% of the 51 GB/s RAM peak.

Variant with 12 threads, created as `qwen3:30b-a3b-t12` (same weights, no extra disk space):

```bash
printf 'FROM qwen3:30b-a3b\nPARAMETER num_thread 12\n' > /tmp/Modelfile
ollama create qwen3:30b-a3b-t12 -f /tmp/Modelfile
```

### Pending

- Test the "Performance" power profile.

### Ollama model storage

Moved on 2026-10-04. Models live on the data partition and are bind-mounted onto the path Ollama already uses.

- Real location: `/media/islomar/11795f86-ef0a-4162-b620-f8be882cf63f/ollama-models` (owner `ollama:ollama`)
- Path Ollama sees: `/usr/share/ollama/.ollama/models` (no `OLLAMA_MODELS` change)
- `/etc/fstab` line:
  ```
  /media/islomar/11795f86-ef0a-4162-b620-f8be882cf63f/ollama-models /usr/share/ollama/.ollama/models none bind,nofail,x-systemd.requires-mounts-for=/media/islomar/11795f86-ef0a-4162-b620-f8be882cf63f 0 0
  ```
- Drop-in `/etc/systemd/system/ollama.service.d/models-mount.conf` sets `RequiresMountsFor=/usr/share/ollama/.ollama/models`. If the mount fails, Ollama does not start, so it cannot fill `/` again.
- Backup of the previous fstab: `/etc/fstab.bak.2026-10-04`

Why a bind mount: the `ollama` user cannot enter `/media/islomar` (permissions `other::---`), so pointing `OLLAMA_MODELS` there fails. An ACL on that folder could be reset by udisks.

Check: `findmnt /usr/share/ollama/.ollama/models` and `ollama list`.


## General
- https://chatgpt.com/g/g-p-6771a6b3ecac819188c21ea367c0e8cb/c/6ab019b4-4c60-83ed-b652-860299874c53
- https://www.reddit.com/r/LocalLLM/comments/1u4mrz0/laptop_recommendations_for_local_llm_use/
- [Extract about local LLM models from AI Community of Practice](./extract-ai-community-of-practice-about-local-llm-models.md)
- **VRAM (Video RAM)** provides ultra-high-speed, dedicated workspace exclusively for a discrete graphics card, while **unified memory** creates a single shared pool accessed instantly by both the CPU and GPU without data copying.
- [IA Local Ahora Va 6x Más Rápida en tu PC](https://www.youtube.com/watch?v=LCmHSO6tqME)
  -  Un modelo de 125.000 millones de parámetros corre a **94 tokens por segundo** usando **Strata** en un PC Ryzen 5 7600, con una RTX 5070 de 12 GB, 64 GB DDR5 de RAM frente a los 15 tok/s de llama.cpp
  - Con motor Strata en lugar de Llama.cpp --> ~65 tok/s
  - En este vídeo te cuento cómo lo consigue el motor Strata para IA local, cuánto se acelera de verdad al escribir y al leer, y si tu ordenador puede ejecutarlo.
  - Modelo **Qwen 3.8 Flash-next**
  - Strata corre ~5x más rápido con 12 GB de gráfica
- Los modelos `gemma` tienden a estasr pensados para ser ejecutados en máquinas no muy potentes (es de Google)
  - https://deepmind.google/models/gemma/

## Ollama vs LM Studio vs Docker

- `model weights → inference engine → model server/runtime → your application`

Yes. The terminology is slightly confusing because **“LLM inferer” mixes several different layers**.

A useful mental model is:

**model weights → inference engine → model server/runtime → your application**

For example, Qwen, Llama, Mistral or `gpt-oss` are the **models**. Something such as `llama.cpp`, MLX or vLLM is the **actual inference engine** doing the matrix calculations. Ollama, LM Studio and Docker Model Runner sit one level higher and make those engines/models convenient to run and expose via an API.

| | Ollama | LM Studio | Docker Model Runner |
|---|---|---|---|
| Main philosophy | Developer-friendly local LLM runtime | Desktop LLM workbench | Docker-native LLM runtime |
| GUI | Some UI, but CLI/API oriented | **Excellent GUI** | Docker Desktop GUI + CLI |
| CLI | **Excellent** | Good (`lms`) | **Excellent** (`docker model`) |
| API | Ollama + OpenAI-compatible | Native + OpenAI + Anthropic compatible | OpenAI + Ollama + Anthropic compatible |
| Model management | Very simple | **Excellent interactive browsing** | Docker/OCI-style |
| Best for | App development | Exploring/testing models | Docker-based infrastructure |
| Headless/server use | **Very good** | Possible | **Very good** |
| Reproducibility/deployment | Good | Less its focus | **Excellent** |
| Engines | Abstracted by Ollama | llama.cpp; MLX on Apple Silicon | llama.cpp, vLLM, Diffusers |
| Typical experience | `ollama run ...` | Download → click → chat | `docker model run ...` |

LM Studio can expose a local server with OpenAI- and Anthropic-compatible APIs, and currently provides native APIs/SDKs as well. [LM Studio](https://lmstudio.ai/docs/developer/core/server?utm_source=chatgpt.com) Ollama similarly exposes an API and OpenAI compatibility, and has become increasingly oriented toward developer tooling and agents. [Ollama](https://ollama.com/blog/openai-compatibility?trk=public_post_comment-text\&utm_source=chatgpt.com) Docker Model Runner is now much more than simply “put an LLM inside a container”: it directly manages models and supports `llama.cpp`, vLLM and Diffusers engines. [Docker Documentation](https://docs.docker.com/ai/model-runner/?utm_source=chatgpt.com)

The important question is what actually changes when you switch between them.

### 1. Usually, the intelligence comes from the model, not the inferer

Suppose you run exactly:

**Qwen 3 8B, Q4_K_M**

through Ollama, LM Studio and Docker Model Runner.

You should expect roughly the **same fundamental capability**. Switching from LM Studio to Ollama isn't analogous to switching from GPT-5 to Qwen. You're running essentially the same neural network.

But the outputs might not be identical.

That's because the runtime can change things like:

- prompt/chat templates
- quantization
- context-window configuration
- sampling defaults (`temperature`, `top_p`, etc.)
- KV-cache configuration
- tool-calling implementation
- structured-output implementation
- batching
- GPU/CPU offloading
- attention/kernel implementations

So:

> **Model choice has a huge effect on answer quality. Runtime choice usually has a much smaller effect on answer quality, but potentially a large effect on speed, RAM/VRAM usage, compatibility and developer experience.**

That's probably the single most important distinction.

### 2. LM Studio is essentially a laboratory/workbench

LM Studio is particularly pleasant when you're experimenting.

You can download a model, see its size and quantization, load it, change context length and parameters, chat with it, inspect behaviour, unload it, switch models, and then expose the model through an API.

It supports `llama.cpp` models on Mac, Windows and Linux and additionally MLX on Apple Silicon. [LM Studio](https://lmstudio.ai/docs/app?trk=public_post-text\&utm_source=chatgpt.com)

And your application can simply talk to:

```text
http://localhost:1234/v1
```

using an ordinary OpenAI client. [LM Studio](https://lmstudio.ai/docs/developer/openai-compat?trk=public_post_comment-text\&utm_source=chatgpt.com)

So I'd characterise it as:

> **“I want to play with local models and understand what works.”**

For evaluating models, it's probably the nicest of the three.

### 3. Ollama feels more like a developer service

With Ollama you tend to do:

```bash
ollama pull qwen3:8b
ollama run qwen3:8b
```

and an API server is sitting there for your application.

Your architecture might simply be:

```text
My application
      │
      │ HTTP
      ▼
   Ollama
      │
      ▼
   Qwen 3
      │
      ▼
    GPU
```

It's particularly attractive when you don't care much about the machinery underneath.

Conceptually it's similar to Docker:

```bash
docker run postgres
```

versus:

```bash
ollama run qwen3
```

You tell Ollama **what model you want**, rather than worrying much about how to load GGUF files, configure the inference engine, expose HTTP endpoints, etc.

And Ollama exposes an OpenAI-compatible interface, so applications designed for OpenAI-style APIs can often point at it by changing the base URL. [Ollama](https://ollama.com/blog/openai-compatibility?trk=public_post_comment-text\&utm_source=chatgpt.com)

For the sort of software development you do, I'd probably start here.

### 4. Docker by itself is NOT an LLM inferer

This distinction matters.

You can absolutely have:

```text
Docker
 └── container
      └── Ollama
           └── Qwen
```

or:

```text
Docker
 └── container
      └── llama.cpp server
           └── Qwen
```

or:

```text
Docker
 └── container
      └── vLLM
           └── Qwen
```

In all of these, **Docker isn't performing inference**. It's merely running the software that does.

That's the traditional approach.

But Docker has subsequently introduced **Docker Model Runner**, which changes this somewhat.

With it you can now write:

```bash
docker model pull ai/qwen2.5-coder
docker model run ai/qwen2.5-coder
```

and Docker manages the inference machinery for you. [Docker Documentation](https://docs.docker.com/ai/model-runner/?utm_source=chatgpt.com)

Its architecture looks more like:

```text
Your application
       │
       ▼
Docker Model Runner
       │
       ├── llama.cpp
       │
       ├── vLLM
       │
       └── Diffusers
              │
              ▼
            Model
```

And that makes Docker Model Runner a genuine competitor to Ollama.

### 5. Docker Model Runner has an interesting advantage

It treats AI models rather like another software artifact.

For example:

```text
application image
database image
LLM model
```

can all fit into your Docker-centric development environment.

Docker Model Runner can pull models from Docker Hub or Hugging Face and can package GGUF/Safetensors models as **OCI artifacts**. [Docker Documentation](https://docs.docker.com/ai/model-runner/?utm_source=chatgpt.com)

That becomes interesting for things like:

```text
git repository
│
├── compose.yaml
├── backend/
├── frontend/
└── AI model dependency
```

You could reproduce a development environment much more systematically.

Given your preference for automated/reproducible engineering environments, that's the aspect of Docker Model Runner I think you'd find most interesting.

### 6. And Docker gives you a choice of actual inference engines

This is one area where Docker Model Runner has become particularly interesting.

Currently it can use:

```text
llama.cpp
    ↓
good local development
GGUF / quantized models
lower resource usage


vLLM
    ↓
high-throughput inference
Safetensors
NVIDIA GPU / server-oriented


Diffusers
    ↓
image models
Stable Diffusion etc.
```

Docker itself recommends `llama.cpp` for resource-efficient local development and vLLM where throughput matters. [Docker Documentation](https://docs.docker.com/ai/model-runner/?utm_source=chatgpt.com)

So there's another subtle distinction:

```text
Docker Model Runner
```

isn't necessarily the inference **engine** either.

It can be the orchestrating runtime controlling:

```text
Docker Model Runner
       ↓
     vLLM
       ↓
 Qwen 3 model
```

### What would I use in your case?

For your Ubuntu development machine, I'd split the use cases like this:

**Ollama → my default choice for developing applications.**

It has very little friction:

```text
ollama pull model
          ↓
localhost API
          ↓
your Python/TypeScript app
```

It's ideal if what you're building should simply depend on an `LLMProvider`/`ModelGateway`-style abstraction and you don't want local inference infrastructure leaking into the application.

**LM Studio → I'd keep it around for exploration.**

If somebody says:

> “Qwen3-30B-A3B Q4 is dramatically better than gpt-oss-20b.”

LM Studio is a lovely way to download both, inspect variants, adjust parameters and interactively compare them.

**Docker Model Runner → I'd investigate once you're packaging the application.**

Particularly if you want:

```text
git clone ...
docker compose up
```

to result in something like:

```text
frontend
backend
postgres
vector DB
local LLM
```

without requiring developers to separately install and configure Ollama.

---

There's one architectural consequence here that I think is **much more important than which of these three you select**.

If you're developing an application around local LLMs, I'd make the application largely unaware of Ollama/LM Studio/Docker:

```text
                         ┌── OpenAI
                         │
Application → LLM port ──├── Anthropic
                         │
                         ├── Ollama
                         │
                         ├── LM Studio
                         │
                         └── Docker Model Runner
```

Since **all three local options now provide OpenAI-compatible APIs**, swapping between them can be nearly just a configuration change. Ollama supports OpenAI-compatible requests; LM Studio exposes `/v1/chat/completions`, `/v1/responses`, embeddings, etc.; and Docker Model Runner exposes compatible APIs as well. [Ollama](https://ollama.com/blog/openai-compatibility?trk=public_post_comment-text\&utm_source=chatgpt.com)

That lets you choose your **model independently from your inference runtime**, which is the separation I would want in the design.

If you want, I can go one level deeper and compare **Ollama vs llama.cpp vs vLLM vs MLX vs Docker Model Runner**. That's actually the more technically interesting comparison, because there we'd be comparing the inference engines themselves and can talk about **tokens/sec, VRAM, batching, quantization and production suitability**.

## Ollama vs llama.cpp vs vLLM vs MLX vs Docker Model Runner
There is a much more useful way to think about this than simply “Ollama vs vLLM”.

### The layers

A local LLM setup is roughly:

```text
Your application
      │
      │ OpenAI / native API
      ▼
┌──────────────────────────────┐
│ Runtime / orchestration      │
│ Ollama / Docker Model Runner │
└─────────────┬────────────────┘
              │
              ▼
┌──────────────────────────────┐
│ Inference engine             │
│ llama.cpp / vLLM / MLX       │
└─────────────┬────────────────┘
              │
              ▼
┌──────────────────────────────┐
│ Model representation         │
│ GGUF / Safetensors / etc.    │
└─────────────┬────────────────┘
              │
              ▼
       CPU / GPU / memory
```

And this matters because **Ollama and Docker Model Runner are primarily higher-level runtimes**, whereas **llama.cpp, vLLM and MLX are closer to the actual computation**.

As of 2026, Ollama itself can use llama.cpp and MLX-based inference, while Docker Model Runner supports llama.cpp and vLLM for LLMs. [Ollama](https://registry.ollama.com/blog/improved-performance-and-model-support-with-gguf?utm_source=chatgpt.com)

### The comparison I would make

| | llama.cpp | vLLM | MLX / MLX-LM | Ollama | Docker Model Runner |
|---|---|---|---|---|---|
| What is it? | Inference engine + server | High-throughput inference engine/server | Apple ML framework + LLM tooling | LLM runtime/model manager | Docker LLM orchestration |
| Sweet spot | Local inference | Server/production inference | Apple Silicon | Easy local development | Reproducible Docker environments |
| Typical model format | **GGUF** | **Safetensors/HF**, many quantized formats | HF / MLX | GGUF + other supported formats | GGUF with llama.cpp; Safetensors with vLLM |
| CPU | **Excellent** | Possible, but not its main strength | No | **Good** | llama.cpp backend: yes |
| NVIDIA | Excellent | **Excellent** | Not MLX-LM's normal target | Excellent | Excellent |
| AMD | Very good | Supported upstream, with caveats depending config | No | Good | llama.cpp backend |
| Apple Silicon | **Excellent** | No practical choice | **Excellent / native** | **Excellent** | llama.cpp |
| Tiny quantized models | **Excellent** | Good | Excellent | **Excellent** | **Excellent** |
| Single-user latency | **Excellent** | Excellent | **Excellent** | Excellent | Depends on engine |
| Many concurrent users | Good | **Excellent** | Not its focus | Good | **Excellent with vLLM** |
| Multi-GPU / distributed | Some | **Excellent** | Limited/specialized | Simplified | vLLM backend |
| Fine control | **Very high** | **Very high** | High | Medium | Medium |
| Ease of use | Medium | Medium | Medium | **Very high** | **Very high** |

The most significant technical distinction is really **llama.cpp vs vLLM**.

---

### 1. llama.cpp: squeeze a model efficiently onto almost anything

llama.cpp is an extremely portable C/C++ inference engine.

It supports a remarkably broad collection of hardware:

```text
CPU
 │
 ├── x86 / AVX / AVX2 / AVX512 / AMX
 ├── ARM
 └── RISC-V

GPU
 │
 ├── NVIDIA → CUDA
 ├── AMD → HIP
 ├── Apple → Metal
 ├── Intel → SYCL
 └── generic GPUs → Vulkan
```

It can even do:

```text
Model doesn't fit in VRAM

GPU   ███████████████
CPU   ███████

       ↑
split model between them
```

CPU+GPU hybrid inference is one of its important advantages. [GitHub](https://github.com/ollama/ollama/issues/11247?utm_source=chatgpt.com)

Its other superpower is **GGUF quantization**.

You might have a 32B model available as:

```text
F16       enormous
Q8        large
Q6_K      ↓
Q5_K_M    ↓
Q4_K_M    ~sweet spot
Q3_K_M    ↓
Q2_K      tiny
```

llama.cpp supports weight quantization ranging from very low-bit representations through 8-bit and full precision. [GitHub](https://github.com/ollama/ollama/issues/11247?utm_source=chatgpt.com)

This is why you often see:

```text
Qwen3-32B-Q4_K_M.gguf
```

The huge advantage is:

> You can sometimes run a model that theoretically shouldn't fit comfortably on your hardware.

And perhaps accept a relatively small quality reduction.

#### It isn't merely a toy single-user engine anymore

This is important because older comparisons often say:

> llama.cpp = one local user  
> vLLM = batching

That's outdated.

`llama-server` now supports:

- parallel decoding
- multiple users
- continuous/dynamic batching
- speculative decoding
- embeddings
- function calling
- constrained JSON
- multimodal models
- OpenAI-compatible APIs

Continuous batching is enabled by default in its server. [GitHub](https://github.com/ggml-org/llama.cpp/blob/master/tools/server/README.md?utm_source=chatgpt.com)

So llama.cpp can absolutely serve applications.

But vLLM takes the serving problem considerably further.

---

### 2. vLLM: don't optimise one request — optimise the server

Imagine one person asking questions:

```text
user → LLM
```

llama.cpp is extraordinarily good at that.

Now imagine:

```text
user 1 ─┐
user 2 ─┤
user 3 ─┤
user 4 ─┤
user 5 ─┤
        ▼
       LLM
```

The GPU is now a shared computational resource.

The question stops being:

> How quickly can I generate one response?

and becomes:

> How many tokens can this GPU generate across all users per second?

That's what vLLM is designed around.

It supports things such as **continuous batching, chunked prefill, prefix caching, PagedAttention, optimized CUDA/HIP execution, speculative decoding and multiple forms of distributed parallelism**. [vLLM](https://docs.vllm.ai/en/latest/?utm_source=chatgpt.com)

For example, suppose three requests share a huge system prompt:

```text
Request A:
[10,000 token system prompt] + "Question A"

Request B:
[10,000 token system prompt] + "Question B"

Request C:
[10,000 token system prompt] + "Question C"
```

vLLM can use prefix caching so that computation associated with identical prefixes can be reused rather than needlessly recomputed. [vLLM](https://docs.vllm.ai/en/latest/design/prefix_caching/?utm_source=chatgpt.com)

This becomes very relevant for agents because you frequently have:

```text
same system prompt
same tool definitions
same coding instructions
same repository context
+ different user request
```

That's exactly the sort of workload where server-level inference optimisations become valuable.

---

### 3. PagedAttention is one reason vLLM became so important

When an LLM generates text, it stores information from previous tokens in something called the **KV cache**.

Simplifying heavily:

```text
"Write me a program that..."

token 1 ──┐
token 2 ──┤
token 3 ──┤ → KV cache
token 4 ──┤
...       │
token N ──┘
```

With long context and many simultaneous users, this consumes a *lot* of GPU memory.

A naive allocation strategy can leave memory fragmented/wasted:

```text
GPU memory:

AAAAAAAAAAA.........
BBBB.......
CCCCCCCCCCCCCC......
```

vLLM's PagedAttention treats this more like virtual memory pages:

```text
[page][page][page][page][page][page]
  A     B     C     A     C     B
```

It lets the inference system manage KV-cache memory much more efficiently.

Hence:

```text
                        optimisation target

llama.cpp    → model fitting + efficient local inference
vLLM         → GPU utilisation + serving throughput
```

That's an oversimplification, but a useful one.

---

### 4. Quantization is another major difference

This deserves special attention because people often attribute differences to the inference engine that are actually caused by **different representations of the model**.

Imagine comparing:

```text
llama.cpp
Qwen 32B
GGUF Q4_K_M
```

with:

```text
vLLM
Qwen 32B
BF16 Safetensors
```

and discovering that the vLLM output is better.

You cannot conclude:

> vLLM is smarter.

You have changed **both the engine and the numerical representation of the model**.

A better experiment would be:

```text
same model
same quantization
same context
same prompt template
same sampling parameters
```

and then change only the engine.

vLLM now supports a substantial range of quantisation schemes too—FP8, INT8, INT4, AWQ, GPTQ, GGUF and others—so the historical “llama.cpp = quantized, vLLM = full precision” distinction isn't really valid anymore. [vLLM](https://docs.vllm.ai/en/latest/?utm_source=chatgpt.com)

---

### 5. MLX is a rather different beast

MLX comes from Apple and is deeply designed around **Apple Silicon's unified-memory architecture**.

On an M-series Mac:

```text
          Unified memory
        ┌───────────────┐
CPU ────┤               ├──── GPU
        │   64 GB RAM   │
        └───────────────┘
```

There's no conventional:

```text
64 GB system RAM
+
16 GB VRAM
```

boundary.

That's a very attractive architecture for large models.

A Mac with 64 or 128 GB unified memory can therefore run models that would otherwise require enormous discrete-GPU VRAM.

`mlx-lm` provides generation, quantisation, Hugging Face integration and even fine-tuning specifically on Apple Silicon. [GitHub](https://github.com/ml-explore/mlx-lm?pubDate=20260614\&utm_source=chatgpt.com)

So if I had a high-memory Mac Studio, I would seriously investigate:

```text
MLX-LM
```

rather than automatically using llama.cpp.

For your Ubuntu environment, however, **MLX-LM isn't the relevant standalone choice**; I'd concentrate primarily on llama.cpp/Ollama versus vLLM. [GitHub](https://github.com/ml-explore/mlx-lm?pubDate=20260614\&utm_source=chatgpt.com) 

---

### 6. Then where does Ollama fit?

Now we can explain Ollama much more precisely.

Think:

```text
            Ollama
               │
     ┌─────────┴─────────┐
     │                   │
 model management     inference
     │                   │
     │             ┌─────┴─────┐
     │             │           │
     │         llama.cpp      MLX
     │
     ├── pull
     ├── create
     ├── list
     ├── delete
     ├── Modelfile
     └── API
```

Ollama itself pins and integrates llama.cpp and adds compatibility and scheduling around it. [GitHub](https://github.com/ollama/ollama/blob/main/llama/README.md?utm_source=chatgpt.com)

So instead of doing:

```bash
wget model.gguf

llama-server \
   -m model.gguf \
   --ctx-size 32768 \
   --n-gpu-layers 99 \
   ...
```

you can often do:

```bash
ollama run qwen3
```

That's the value.

It's not primarily that Ollama has discovered some vastly superior matrix multiplication algorithm.

It's that it provides:

> **a pleasant product around inference.**

Model discovery, downloading, configuration, hardware detection, lifecycle, API serving, etc.

And Ollama has continued incorporating optimisations from llama.cpp; its 0.30 release, for example, added broader GGUF compatibility and improved NVIDIA performance while enabling Vulkan acceleration more broadly. [Ollama](https://registry.ollama.com/blog/improved-performance-and-model-support-with-gguf?utm_source=chatgpt.com)

---

### 7. Direct llama.cpp vs Ollama is therefore an interesting choice

Suppose both ultimately execute through llama.cpp:

```text
My app → Ollama → llama.cpp → GPU
```

versus:

```text
My app → llama-server → GPU
```

Why eliminate Ollama?

**Control.**

With direct llama.cpp you can tune virtually everything:

```text
GPU offload
KV cache
batch size
continuous batching
parallel slots
context size
flash attention
speculative decoding
CPU threads
tensor splitting
etc.
```

And you get new llama.cpp capabilities immediately rather than after Ollama integrates them.

Why keep Ollama?

Because you generally **don't want to care about any of that** while developing an application.

That's why I would normally prefer Ollama first.

---

### 8. Docker Model Runner is another layer again

Docker Model Runner looks more like:

```text
                  Docker Model Runner
                          │
          ┌───────────────┼──────────────┐
          ▼               ▼              ▼
      llama.cpp          vLLM        Diffusers
          │               │              │
        GGUF         Safetensors     image models
```

Docker explicitly positions the engines differently:

```text
llama.cpp
→ local development
→ low resources
→ quantized models

vLLM
→ production
→ concurrent requests
→ high throughput
``` :chatgpt-content-reference{index="12"}


That means this:

```bash
docker model run ai/my-model
```

doesn't tell you everything about its performance.

The interesting question becomes:

> **Which backend is Docker Model Runner using?**

If it's llama.cpp:

```text
Docker Model Runner
        ↓
    llama.cpp
        ↓
       GPU
```

the fundamental inference behaviour will resemble llama.cpp.

If it's vLLM:

```text
Docker Model Runner
        ↓
       vLLM
        ↓
       GPU
```

you're getting vLLM's serving architecture.

---

### 9. What actually changes your tokens/sec?

This is where I'd rank the factors approximately like this:

```text
             impact

GPU/CPU hardware              ████████████████████

model size                    ████████████████████

quantization                  ████████████████

GPU offloading                ███████████████

context / KV-cache            ███████████

inference engine              ██████████

runtime wrapper               ███
```

Not literally measured values—just the relative idea.

Changing:

```text
Ollama → direct llama.cpp
```

may make relatively little difference.

Changing:

```text
Qwen 32B Q8
      ↓
Qwen 32B Q4_K_M
```

can be dramatic.

And changing:

```text
CPU
 ↓
RTX GPU
```

is an entirely different world.

---

### 10. Latency and throughput are NOT the same thing

This is one distinction worth remembering.

Suppose you benchmark:

```text
llama.cpp:  55 tokens/s
vLLM:       50 tokens/s
```

You might conclude:

> llama.cpp wins.

But try sixteen simultaneous requests:

```text
                   total throughput

llama.cpp           170 tokens/s

vLLM                600 tokens/s
```

Those numbers are illustrative, not benchmark results.

The conceptual point is:

```text
single request
──────────────
latency matters


many requests
─────────────
throughput matters
```

vLLM's architecture is particularly geared toward the second case. It supports tensor, pipeline, data, expert and context parallelism for scaling inference across hardware. [vLLM](https://docs.vllm.ai/en/latest/?utm_source=chatgpt.com)

---

### 11. So which would I choose?

For **local application development**:

```text
Ollama
   ↓
llama.cpp
   ↓
local GPU
```

That is where I'd start.

You get almost all the benefits of llama.cpp without exposing all its configuration complexity.

For **squeezing the maximum out of your own machine**:

```text
direct llama.cpp
```

Especially if you're experimenting with:

- models barely fitting RAM/VRAM
- different GGUF quantizations
- GPU/CPU splitting
- huge contexts
- speculative decoding
- detailed performance tuning

For a **real multi-user inference service**:

```text
vLLM
```

especially with one or more serious GPUs.

Its current feature set includes continuous batching, prefix caching, PagedAttention, multiple quantisation formats, speculative decoding and extensive parallel/distributed inference. [vLLM](https://docs.vllm.ai/en/latest/?utm_source=chatgpt.com)

For a **big Apple Silicon machine**:

```text
MLX-LM
```

would absolutely be part of my evaluation.

And for a project where I wanted:

```bash
git clone my-project
docker compose up
```

to reproduce the whole environment:

```text
frontend
backend
database
inference runtime
LLM model
```

I'd seriously consider:

```text
Docker Model Runner
```

because **OCI model packaging and Docker integration are genuinely useful operational capabilities**, rather than inference-performance improvements. Docker Model Runner can package GGUF/Safetensors models as OCI artifacts and expose OpenAI/Ollama-compatible APIs. [Docker Documentation](https://docs.docker.com/ai/model-runner/?utm_source=chatgpt.com)

---

### The recommendation I'd make for you

I wouldn't choose one technology permanently.

I'd design the application like:

```text
                     ┌──── OpenAI
                     │
                     ├──── Anthropic
                     │
Your application ────┼──── Ollama
        │            │
     LLM port        ├──── llama.cpp
                     │
                     └──── vLLM
```

and initially use:

```text
Development
    ↓
Ollama
    ↓
local model
```

Then, if profiling tells you local inference itself is important:

```text
Ollama
  ↓
direct llama.cpp
```

And if you eventually need a shared GPU inference server:

```text
Ollama
  ↓
vLLM
```

without changing your domain/application code.

The benchmark I'd actually run before making the choice is **same model + same quantization + same prompt**, and measure **time-to-first-token, generation tokens/sec, prompt-processing tokens/sec, RAM/VRAM consumption, and aggregate throughput at 1, 4 and 16 concurrent requests**. That would tell you vastly more than generic online “Ollama vs vLLM” benchmarks.

And there is a particularly interesting next question here: **GGUF vs Safetensors, and Q4/Q5/Q8 vs FP8/BF16**. That is often *more consequential* than choosing Ollama versus llama.cpp, because it determines **how large a model you can actually run and how much intelligence you lose through quantization**.