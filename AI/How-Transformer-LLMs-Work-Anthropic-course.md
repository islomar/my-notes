# How Transformer LLMs Work (Anthropic course)

- <https://www.deeplearning.ai/short-courses/how-transformer-llms-work/>
  - 1 hour 34 minutes
  - 13 video lessons
- <https://learn.deeplearning.ai/courses/how-transformer-llms-work/>
- [Community](https://community.deeplearning.ai/c/short-course-q-a/how-transformer-llms-work/501)
- Jay Alammar and Maarten Grootendorst
  - O'Reilly book: "Hands-on Large Language Models"

## Introduction

- The transformer architecture revolutionized generative AI. In fact, the "GPT" in ChatGPT stands for "Generative Pre-Trained Transformer."
- Originally introduced in the groundbreaking 2017 paper **Attention Is All You Need**, by Ashish Vaswani and others, transformers were a highly scalable model for machine translation tasks. Variants of this architecture now power today’s LLMs such as those from OpenAI, Google, Meta, Cohere, and Anthropic.
- Original Transformer
  - Encoder
    - Input text
  - Decoder
    - Output text
- Encoder model
  - Input text --> Rich context-sensitive representation of the input
  - Basis for the BERT model
  - Great at numerically representing the text
- Decoder model
  - Input prompt
  - Generated text
  - Generative nature
  - Basis for the most popular LLMs from OpenAI, Anthropic, Cohere and Meta

## Understanding Language Models: Language as a Bag-of-Words

![](How-Transformer-LLMs-Work-Anthropic-course/recent-history-of-language-ai.png)

- Tokenization: process of converting words into pieces
- Vocabulary: all unique words of tokens contained in several documents
  - vocabulary size: number of tokens
  - you can count how often a token appears
- Bag-of-Words:
  - numerical representation of a text, taking into account the appearance and absence of its tokens in a **Vocabulary**.
  - the order is important, it allows to compare texts.
  - usually the vector representation numbers do not have a direct meaning: vector embeddings.

![](How-Transformer-LLMs-Work-Anthropic-course/language-as-bag-of-words.png)

## Understanding Language Models: (Word) Embeddings

- **Bag-of-Words** does not consider the semantic nature of text
- **Word2Vec** could capture meaning of words in vector embeddings through _neural networks

![](How-Transformer-LLMs-Work-Anthropic-course/vector-embeddings.png)

- Weights = parameters of the model
- Word2Vec **learning process**:
  - Using these neural networks, Word2Vec generates word embeddings by looking at which other words they tend to appear next to in a given sentence. You start by assigning every word in your vocabulary with a **vector embedding**, say, five values for each word is initialized with random values.
  - Then in every training step, you take pairs of words from training data, and the model attempts to predict whether or not they are likely to be neighbors in a sentence.
  - During this training process, Word2Vec learns the relationship between words and distills that information into the embedding.
  - If the two words tend to have the same neighbor, their embeddings will be closer to one another and vice versa.
  - The resulting embeddings capture the **meaning** of words.
- **Embeddings attempt to capture meaning by representing the properties of words/tokens**.
  - The number of values or properties that an embedding has is called **number of dimensions** (usually a fixed size, it can be very large)
  - You can use these values to get a proxy of the meaning of these words.
  - In practice, you don't really know what those properties represent, they are done through complex math calculations.
  - You can compare embeddings: how similar o dissimilar each embedding are depends on the training data.
![](How-Transformer-LLMs-Work-Anthropic-course/word-embeddings.png)
![](How-Transformer-LLMs-Work-Anthropic-course/word-embeddings-2.png)
![](How-Transformer-LLMs-Work-Anthropic-course/word-embeddings-3.png)

- There are several **types of embeddings**
  - Word2Vec is a **Representation Model**: it attempts to represent the text as values.
- An embedding is generated for each token.
- You can average the embeddings and get "word embeddings", "sentence embeddings", or "document embeddings".
![](How-Transformer-LLMs-Work-Anthropic-course/types-of-embeddings.png)

## Understanding Language Models: Encoding and Decoding Context with Attention

![](How-Transformer-LLMs-Work-Anthropic-course/encoding-and-decoding-context.png)

- Word2Vec creates static embeddings: the same embedding is generated for the word "bank" regardless of the context.
- **Recurrent Neural Networks (RNNs)** can be used to model entire sequences.
  - RNN: Recurrent Neural Network
- Each step in this architecture is **autoregressive**:
  - the output from one pass becomes the input for the next one.
- Most models are autoregressive and **they generate a single token each time**
![](How-Transformer-LLMs-Work-Anthropic-course/autoregressive.png)
- Word2Vec
  - Encoder (RNN): it represents language
    - It generates the context in the form of an embedding: one single **context embedding** representing the entire input.
  - Decoder (RNN): it generate language
  - Issue: the **context embedding** is for the whole sentence, problem if the sentence is too complex
![](How-Transformer-LLMs-Work-Anthropic-course/word2vec_encoding_and_decoding_context.png)
- **Attention** (2014) allows a model to focus on **parts** of the input that are relevant to on another.
  - Attention selectively determines which words are most important in a given sentence.

  - The attention Encoder does not pass a single "context embedding", but the hidden states of all input words. A stateful word is an internal vector from a hidden layer of an RNN that contains the information about the previous words.
  - The Decoder then uses the Attention mechanism to look at the entire sequence.
    - The result is better because now you look at the entire sequence using embedding **for each token** or words instead of the smaller and more limited context embedding.
![](How-Transformer-LLMs-Work-Anthropic-course/Attention.png)

## Understanding Language Models: Transformers

- Two big models
  - **Representation Models**
    - Embedding models
  - **Generative Models**
- Paper "Attention is all you need" (2017)
  - <https://en.wikipedia.org/wiki/Attention_Is_All_You_Need>
  - [Paper in PDF](https://proceedings.neurips.cc/paper_files/paper/2017/file/3f5ee243547dee91fbd053c1c4a845aa-Paper.pdf)
  - "The name 'Transformer' was picked because Jakob Uszkoreit, one of the paper's authors, liked the sound of that word."
  - A key reason for why the architecture is preferred by most modern LLMs is the parallelizability of the architecture over its predecessors. This ensures that the operations necessary for training can be accelerated on a GPU allowing both faster training times and models of bigger sizes to be trained.
  - Since the Transformer model is not a seq2seq model and does not rely on the sequence of the text in order to perform encoding and decoding, the paper relied on the use of sine and cosine wave functions to encode the position of the token into the embedding.
  - For their 100M-parameter Transformer model, the authors increased the learning rate linearly for the first 4000 (warmup) steps and decreased it proportionally to inverse square root of the current step number.
- The Transformer architecture is based solely in **attention**, without the Recurrent Neural Network.
- Could be trained in parallel which speeds up calculation significantly.
- **Self-attention**
  - Self-attention, sometimes called intra-attention is an attention mechanism relating different positions
of a single sequence in order to compute a representation of the sequence.
  - E.g. attention only in the input sequence.
- The Transformer Decoder can take any previously generated words and pass it to the masked self-attention.
  - Intermediate embeddings are generated and passed to another attention network together with the embeddings of the encoder.
- It randomly initializes the embeddings
- The original Transformer serves well to translation tasks but not others like text classification.  
![](How-Transformer-LLMs-Work-Anthropic-course/transformers-1.png)
![](How-Transformer-LLMs-Work-Anthropic-course/transformers-2.png)
- In 2018, a new architecture called **BERT (Bidirectional Encoder Representations from Transformers)** was introduced that could be leveraged for wide variety of tasks.
  - **Encoder only** architecture, focused on representing language and generating contextual word embeddings.
  - The input contains an additional token: **CLS or "Classification Token"**, used as a representation for the entire input.
![](How-Transformer-LLMs-Work-Anthropic-course/bert-1.png)
![](How-Transformer-LLMs-Work-Anthropic-course/bert-2png)
![](How-Transformer-LLMs-Work-Anthropic-course/training-steps.png)
- **Generative models** use a different architecture.
  - Randomly initialized embeddings.
  - The input is passed to the **Decoders only**, as generative models tend to only stack decoders.
  - One of the first implementations was GPT
![](How-Transformer-LLMs-Work-Anthropic-course/transformer-models.png)
- **Context Length**
  - Both models have it.
  - It includes both the input and the output
  ![](How-Transformer-LLMs-Work-Anthropic-course/context-length.png)
- Parameters
  - GPT-1 had 117 Million parameters
  - GPT-2 had 1.5 Billion parameters
  - GPT-3 had 175 Billion parameters
  - GPT-4 had 1.8 Trillion parameters
  - GPT-5 had 1.5 Trillion parameters (unconfirmed)
  - Claude 4 had 50-100 Billion parameters (unconfirmed)
  ![](How-Transformer-LLMs-Work-Anthropic-course/year-of-generative-ai.png)

## Tokenizers

- See [Jupyter Notebook with example](./How-Transformer-LLMs-Work-Anthropic-course/L2_tokenizers.ipynb)
  - Vocabulary length: 28.996
  - Tokenizers used in the example:
    - bert-base-cased
    - bert-base-uncased
    - Xenova/gpt-4
    - gpt2
    - google/flan-t5-small
    - bigcode/starcoder2-15b
    - microsoft/Phi-3-mini-4k-instruct
    - Qwen/Qwen2-VL-7B-Instruct
- Break down the text into smaller pieces
- Embeddings: turn tokens into numeric representations
  - Embeddings are static and created independently of every other token.
- These embeddings are passed to the Language Model and converted into **Contextualized Embeddings**  
  - There is one contextualized embedding per token, but ALL other tokens have been considered to generate it.
- Tokens can be words or parts of a word. It's necessary because tokenizers have a limited number of tokens or **vocabulary**
- Each token has a fixed ID which is used to represent the token and it's fed to the Language Model to generate the token embedding.
- The output of the Language Model is an output Token ID, which is decoded to represent an actual token or word.
  ![](How-Transformer-LLMs-Work-Anthropic-course/tokenizers-1.png)
- A helpful rule of thumb is that one token generally corresponds to ~4 characters of text for common English text. This translates to roughly ¾ of a word (so 100 tokens ~= 75 words).
-`SEP`: separation token, it signifies the end of a sentence.
- **Trade-off**: the larger the vocabulary, the more embeddings need to be calculated.

## Architectural Overview

- The Transformer LLM generates tokens one by one
- The Transformer is compound of three major components:
  - Tokenizer
  - Stack of Transformer Blocks: this is the neural networks
  - Language Modelling Head (LM Head)
- The model has "Token embeddings" associated to these tokens.  
- What happens at the end is a kind of **scoring** or **token probability calculation**
- **Decoding strategy**
  - You choose one of the output tokens
  - You can choose the top scoring token but there are other options.
  - *Greedy decoding*: when temperature is 0, you always choose the top scoring token.
  - Other methods
    - Choose top_p
    - Add randomness (temperature > 0)
![](How-Transformer-LLMs-Work-Anthropic-course/architectural-overview-1.png)
- Transformers process all their input tokens in parallel; that parallelization makes it time efficient.
- The number of tracks (parallel tokens flowing through the system) is the **context size** of the model
- Once we generate our first output token, now we feed that entire prompt with the token that we've generated into the transformer again. It's a **loop**.
- **KV caching**: during the previous loop, we cache the calculation for those tokens before the next one to calculate.
- **Time to first token**: how long the model takes to process the input sequence in order to generate the first token.
  - The process to generate the next one is slightly different (with the previous caching mentioned)
![](How-Transformer-LLMs-Work-Anthropic-course/architectural-overview-2.png)

## The Transformer Block

- We have associated embedding vectors for each token.
- We try to predict what the next word is.
- Each Transformer Block has two components:
  - **Self-Attention**
    - it allows to attend to previous tokens and incorporates the context of the token that it's looking at
    - this is an NLP task called **coreference resolution**
    - It does two things:
      - Relevance scoring
      - Combining information
  - **Feed Forward Neural Network (FFNN)**
    - storage of information and statistics of the next word that comes in after the input token
    - kind of "high level intuition"
    - what it most frequently appears as next word
![](How-Transformer-LLMs-Work-Anthropic-course/transformer-block-1.png)

![](How-Transformer-LLMs-Work-Anthropic-course/feed-forward-neural-network-intuition.png)

## Self-Attention

- Specific course: "Attention in Transformers: Concepts and Code in PyTorch"
- The final goal of the **relevance scoring** is getting relevance of each previous token for estimating the next one.
![](How-Transformer-LLMs-Work-Anthropic-course/self-attention-1.png)
![](How-Transformer-LLMs-Work-Anthropic-course/self-attention-2.png)
- [Ring Attention Explained](https://coconut-mode.com/posts/ring-attention)
- Second step: **Combining information** from the relevant tokens
  - it is done using the values vectors associated with each of these tokens
![](How-Transformer-LLMs-Work-Anthropic-course/self-attention-3.png)
- The same operation happens **in parallel** in multiple attention heads.
  - Each Attention Head has its own set of queries, values, weight matrices, etc.
- We first split the information into heads
![](How-Transformer-LLMs-Work-Anthropic-course/self-attention-4.png)
- Improvements in Self-Attention
  - Shared keys and values matrix, instead of having each Attention head its own. It's a kind of compression, it will be faster.
  - Even more efficient: **group query attention** or **multi-query attention**
![](How-Transformer-LLMs-Work-Anthropic-course/self-attention-5.png)
- **Sparse attention**
  - Full attention vs Sparse attention
  - Since "total attention" is too expensive, we get sparse attention: local attention boosts performance by only paying attention to a small number of previous positions/tokens. E.g. only the last 4 tokens.
  - Global autoregressive self-attention vs Local autoregressive self-attention.
  - Paper [Generating long sequences with sparse transformers](https://arxiv.org/abs/1904.10509)
- [Ring Attention](https://coconut-mode.com/posts/ring-attention)
  - It enables enlarging the context
  - We can divide up attention calculation across the sequence dimension into chunks.
  - we can map the divided up attention calculation on multiple GPUs and orchestrate the computation in a way that adds minimal overhead, by cleverly overlapping communication and computation.
- Paper "The Llama 3 Herd of Models" (November 2024)
  - <https://ai.meta.com/research/publications/the-llama-3-herd-of-models/>
  - <https://arxiv.org/abs/2407.21783>
![](How-Transformer-LLMs-Work-Anthropic-course/the-llama-3-herd-of-models.png)  

## Model Example

- Example using the Hugging Face Transformer library.
- In this lesson, you will reinforce your understanding of the transformer architecture by exploring the decoder-only model [`microsoft/Phi-3-mini-4k-instruct`](https://huggingface.co/microsoft/Phi-3-mini-4k-instruct).
  - The Phi-3-Mini-4K-Instruct is a 3.8B parameters, lightweight, state-of-the-art open model trained with the Phi-3 datasets that includes both synthetic data and the filtered publicly available websites data with a focus on high-quality and reasoning dense properties.
  - The vocabulary size is 32064 tokens, and the size of the vector embedding for each token is 3072.
  - The model never sees the text, just numbers, the token ids.

## Recent improvements

- Original Transformers had both an Encoder and a Decoder. Current ones have mostly only a Decoder (no Encoder).
- Transformer decoder architecture from 2017:
![](How-Transformer-LLMs-Work-Anthropic-course/transformer-decoders-comparison.png)
- Efficient organization of training data requires specific positional encoding properties.
- Static positional encoding:
![](How-Transformer-LLMs-Work-Anthropic-course/organization-of-training-data.png)
- **Rotary embeddings** (RoPE) add positional information at the self-attention layer

## Mixture of Experts (MoE)

- It uses multiple sub-modules to improve the quality of LLMs.
- In each layer you have multiple sub-neural networks, ech one we all "an expert", and then a **router** in each layer that decides which expert should process this token or this vector (it creates probability scores).
  - The router is a FFNN itself, like the experts.
- [A Visual Guide to Mixture of Experts (MoE)](https://newsletter.maartengrootendorst.com/p/a-visual-guide-to-mixture-of-experts)
![](How-Transformer-LLMs-Work-Anthropic-course/mixture-of-experts-1.png)
- Know that an “expert” is not specialized in a specific domain like “Psychology” or “Biology”. At most, it learns syntactic information on a word level instead:
![](How-Transformer-LLMs-Work-Anthropic-course/mixture-of-experts-2.png)
- More specifically, their expertise is in handling specific tokens in specific contexts.
![](How-Transformer-LLMs-Work-Anthropic-course/mixture-of-experts-3.png)
![](How-Transformer-LLMs-Work-Anthropic-course/mixture-of-experts-4.png)
![](How-Transformer-LLMs-Work-Anthropic-course/mixture-of-experts-5.png)
- An **FFNN** allows the model to use the contextual information created by the attention mechanism, transforming it further to capture more complex relationships in the data.
- Expert = FFNN
- The MoE replaces **the dense layers**
  - The FFNN in a traditional Transformer is called a dense model since all parameters (its weights and biases) are activated. Nothing is left behind and everything is used to calculate the output.
![](How-Transformer-LLMs-Work-Anthropic-course/dense-neural-network.png)

- Sparse Model = MoE layer
![](How-Transformer-LLMs-Work-Anthropic-course/moe-layer.png)
![](How-Transformer-LLMs-Work-Anthropic-course/moe-layer-2.png)
- All experts are loaded despite only using one of them
- Sparse parameters
![](How-Transformer-LLMs-Work-Anthropic-course/sparse-parameters.png)
- Active parameters: only those used
![](How-Transformer-LLMs-Work-Anthropic-course/active-parameters.png)
- Example: Mistral 8x7B
  - 8 experts, each with 7B parameters
  - The largest number of parameters can be found in the Attention mechanism
![](How-Transformer-LLMs-Work-Anthropic-course/example-mistral-model.png)
![](How-Transformer-LLMs-Work-Anthropic-course/pros-and-cons-moe.png)


## Further readings
- [LLMs: Common terms explained, simply](https://newsletter.eng-leadership.com/p/llms-common-terms-explained-simply)
- https://poloclub.github.io/transformer-explainer/ (Transformer visually explained)