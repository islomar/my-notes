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
- Each step in this architecture is **autoregressive**:
  - the output from one pass becomes the input for the next one.
- Most models are autoregressive and **they generate a single token each time**
![](How-Transformer-LLMs-Work-Anthropic-course/autoregressive.png)

## Understanding Language Models: Transformers

- TBD

## Tokenizers

- TBD

## Architectural Overview

- TBD

## The Transformer Block

- TBD

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
