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

# In the cloud

- https://www.runpod.io/