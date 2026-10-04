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

## My laptop

Slimbook Executive, Ubuntu 24.04. Checked on 2026-10-04.

| Component | Spec | Relevance for local LLMs |
|---|---|---|
| CPU | Intel i7-12700H: 14 cores (6P + 8E), 20 threads. AVX2, AVX-VNNI, FMA, F16C. No AVX-512. | Fine for CPU inference with llama.cpp/Ollama |
| RAM | 64 GB DDR4-3200, 2 modules (dual channel, about 51 GB/s peak). 16 GB swap. About 39 GB free with normal desktop use. | Main asset. Bandwidth sets the CPU speed limit. |
| dGPU | NVIDIA RTX 3050 Ti Laptop, 4 GB VRAM, driver 580, CUDA 13.0 | Main bottleneck |
| iGPU | Intel Iris Xe | Not useful |
| NPU | Intel GNA | Cannot run LLMs |
| Disk | Samsung 980 PRO 1 TB NVMe. `/`: 17 GB free (95% used). Second partition: 195 GB free. | Fast model loading. `/` is almost full. |
| Tooling | Ollama 0.34.2 with qwen3:4b, qwen3:8b, gemma3:4b, Qwen3-Embedding-0.6B | |

### What fits

- **Fully on GPU (about 30–60 tok/s):** models up to about 4B at Q4, with short context. Example: qwen3:4b, gemma3:4b.
- **GPU + CPU split (about 8–20 tok/s):** dense 7–9B at Q4, such as qwen3:8b (5.2 GB). They exceed 4 GB VRAM, so Ollama offloads layers to the CPU.
- **Best fit: MoE models with few active parameters**, such as Qwen3-30B-A3B or gpt-oss-20b at Q4 (about 12–18 GB). The weights sit in RAM. About 3B parameters are active per token, so expect about 10–20 tok/s on CPU, more with attention/shared layers on the GPU. Better quality than any 8B dense model.
- **Dense 14B at Q4:** a few tok/s. Too slow for interactive use.
- **Dense 32B+:** loads in RAM, but runs at about 1–3 tok/s.

The speed figures are estimates. I have not benchmarked them on this laptop.

CPU speed ceiling: each generated token reads all active weights from RAM once. Max tok/s ≈ 51 GB/s ÷ active weight size. Real throughput is about 50–70% of that.

| Model (Q4) | Active weights per token | Ceiling | Expected on CPU |
|---|---|---|---|
| MoE, 3B active (Qwen3-30B-A3B) | about 1.8 GB | about 28 tok/s | about 12–18 tok/s |
| Dense 8B | about 5 GB | about 10 tok/s | about 5–7 tok/s |
| Dense 14B | about 9 GB | about 6 tok/s | about 3–4 tok/s |
| Dense 32B | about 19 GB | about 2.7 tok/s | about 1.5–2 tok/s |

Layers offloaded to the 4 GB GPU run faster, so partial offload raises these numbers.

### Pending

- Move Ollama model storage off `/`. The systemd service stores models under `/usr/share/ollama`. Set `OLLAMA_MODELS` to a folder on the 195 GB partition via a systemd override. That partition mounts under `/media/...` by UUID, so it needs an fstab entry before Ollama can depend on it.
- Try a Qwen3-30B-A3B Q4 quant after moving the storage.


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

# In the cloud

- https://www.runpod.io/