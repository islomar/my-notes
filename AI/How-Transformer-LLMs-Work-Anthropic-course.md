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
  - **Feed Forward Neural Network** 
    - storage of information and statistics of the next word that comes in after the input token
    - kind of "high level intuition"
    - what it most frequently appears as next word
![](How-Transformer-LLMs-Work-Anthropic-course/transformer-block-1.png)

![](How-Transformer-LLMs-Work-Anthropic-course/feed-forward-neural-network-intuition.png)


## Self-Attention

- TBD

## Model Example

- TBD

## Recent improvements

- TBD

## Mixture of Experts (MoE)

- TBD

## Conclusion

- TBD

## TBD

- TBD
