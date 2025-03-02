# Accelerate Your Learning with ChatGPT

- <https://www.coursera.org/learn/learning-chatgpt>
- [Discussion Forums](https://www.coursera.org/learn/learning-chatgpt/discussions/weeks/1)
- Barbara Oakley, Oakland University
  - Learning how to learn
  - Mindshift: break through obstacles to learning and discover your hidden potential
    - Changing your job or career
  - Learning how to learn for youth
  - Uncommon Sense Teaching
  - Uncommon Sense Teaching: Part 2, Building community and habits of learning
  - [Uncommon Sense Teaching: teaching online](https://www.coursera.org/learn/teaching-online)
- Jules White from Vanderbilt University
  - Coursera course "Prompt engineering for ChatGPT"
- GPT stands for Generative Pre-trained Transformer
- Additional reading recommended:
  - Practical books
    - "Teaching with AI", by José Bowen and C. Edward Watson.
    - "ChatGPT and the future of AI"
    - "Co-Intelligence", by Ethan Mollick
  - Theoretical
    - "The worlds I see", by Fr. Fei-Fei Li
    - "The alignment problem", by Brian Christian.
  - Worldwide overview:
    - "AI super powers", by Kai-Fu Lee
- Good courses on generative AI
  - "Generative AI for everyone", at DeepLearning AI
  - "Navigating Generative AI: a CEO Playbook", at Coursera
  - "Generative AI Essentials: Overview and Impact", at University of Michigan
  - "Introduction to Artificial Intelligence (AI)", at IBM
  - Many courses from Jules White

## Module 1: GenAI Landscape and Neural Networks — Parallels in Machine and Human Learning

- "AI won't replace humans, but humans who use AI will replace humans that don't." (Fei Fei Li, Stanford professor, AI researcher)
- ChatGPT:
  - predicting the next word in a sentence.
  - it relates words in sentences to one another
- Paper "Attention is all you need" (2017)
  - <https://arxiv.org/abs/1706.03762>
  - <https://en.wikipedia.org/wiki/Attention_Is_All_You_Need>
  - [Suno: make a song about anything](https://suno.com/)
  - It introduced the idea of the **Transformer**, which has two main components in it:
    - The encoder: where we take in the information, e.g. the prompt
    - The decoder: which spits out the ouput
- **Translation**: an act, process, or instance of translating; such as:
  - a rendering from one language into another
  - a change to a different substance, form, or appearance: **conversion**
- **AI meets metaphor: learning is linking**
  - How the brain learns
  - Neurons, axons, dendritic spines...
  - Neurons send signals
  - When you learn, you're making new connections between neurons.
  - The more you practice something, the stronger those connections become.
  - You need to restudy the materials and "learn well". You need to practice.
  - Metaphor is incredibly valuable in learning.
  - Tool used by many great professors: **metaphors and analogies**
    - But metaphors always break down...
  - How to we come up with metaphors?
    - We can use generative AI!!!
    - We can ask for several metaphors
- **Translating Concepts to Metaphors & Analogies**
  - **The Metaphor Pattern**
    - we want to get the model to explain things to us using metaphors and analogies that we understand well.
    - Pattern: "Explain some topic using metaphors and analogies. [Here what you want to learn about]"
    - Example: "Explain why we should learn about generative AI, even though the models are changing so rapidly. Use a car and engine analogy."
    - Example with less direction: "Whenever you explain things to me, relate it to analogies and metaphors that I will understand. I know a lot about cars. Explain why we should learn about generative AI, even though the models are changing so rapidly."
- **Helping the Large Language Model Select Metaphors & Analogies**
  - Example:

  ```Plain text
  About me:
  ---------
  I'm a professor of Computer Science at Vanderbilt University. I'm the senior advisor, I have a typo to the Chancellor in Generative AI and Enterprise and Education. I love the mountain bike and ride BMX bikes. I like cooking and healthy eating. Even if I'm not that great at being disciplined with my eating, I like to understand the science behind nutrition.
  ---------
  Explain how the transformer model works using analogies and metaphors that will resonate with me.
  ```

- **Audience Persona Pattern**:
  - Explain some topic to [some audience]
  - Example: "Explain how the transformer model works to a fifth grader, which is our audience, using analogies and metaphors that will make sense to the audience."
- **Large Language Models & the Brain**
  - 7 international giants with their Foundational Large Language Models (**"Engines"**):
    - Google: Gemini -- 1 million tokens
    - Amazon: Claude (from Antrhopic)  - 200k tokens
    - Microsoft: ChatGPT (from OpenAI)  - 128k tokens
    - Meta: LLaMA 3 (70k tokens)
    - Twitter: Grok
    - LinkedIn (Microsoft): Inflection Pi
    - Baidu: ERNIE
    - Alibaba: Tongyi Qianwen
    - Tencen: Hunyuan
  - There are 149 foundational LLMs released in 2023 alone.
  - **Context window**: number of tokens (how many words at a time can this model take in)
    - There's basically a limit on how many tokens, which are basically a bit shorter than words that the transformers' attention can focus on at once.
    - If your text has 50k words and your context window has 30k words (around 40k tokens), you're in trouble.
      - And it doesn't only matter the input size: there must bu room for the output as well.
    - The LLM can't remember information outside the context window.
  - It's always good to **tell your engine to become an expert** in whatever subject is involved in your query.
  - Two pathaways, two ways of learning:
    - Hippocampus learning, declarative, going from the working memory to the long-term one. Conscious learning. Deliberative thinking.
    - Basal ganglia. Unconscious learning, more experiential. Automatic way of thinking. Deep neural network.
      - Not only for physical activities, it also happens with maths, for example.
      - The automatic system gets less powerful when we grow older.
  - AI **hallucinations** or confabulations.
    - AI does not have the conscious hippocampus way of learning, only the experiental one. Odd outputs. Like a human with prefrontal cortex damaged.
- **Learning in the Age of AI: More than "Cheating Lightly"**
  - [The Flynn Effect](https://en.wikipedia.org/wiki/Flynn_effect): IQ tests are updated periodically. Raise from 30s to 70s (educatoin?). Decline from 70s (she thinks related with things like calculators and stopping learning and understanding some things).
  - You can get practice materials from ChatGPT and alike. It's easier to learn.
- **Prompting for Options & Perspectives, Not Answers**
  - We don't want to start thinking less.
  - **Never ask for ONE of anything**.
    - Example: "Give me five completely different ways to build a chair out of Cheerios and compare and contrast them. The chair needs to be strong enough to support a real person."
  - Ask to give us **multiple, conflicting interpretations of something**.
    - Useful to overcome our bias.
- **Prompting for questions**
  - Example: "Help me understand this material better. What are five questions I should ask about it to deepen my understanding?"
  - Example: "What are five questions that, if I can answer them, would show that I have a broad understanding of this material?"
  - Generate questions instead of answers... Enhance your practice.
- **Having fun with metaphors & analogies**
  - "Explain [Insert a topic] using a metaphor or analogy related to [Insert a domain]."  
- **Learning more & staying connected**
  - [Prompt Engineering for ChatGPT](https://www.coursera.org/learn/prompt-engineering)
  - <https://www.linkedin.com/in/jules-white-5717655/>
  - Barb's courses: <https://www.coursera.org/instructor/barboakley>
  - Jules' courses: <https://www.coursera.org/instructor/juleswhite>
  - [A Prompt Pattern Catalog to Enhance Prompt Engineering with ChatGPT](https://arxiv.org/abs/2302.11382)

## Module 2: AI-Enhanced Learning Strategies — Retrieval, Motivation, and Cognitive Amplification

- **Mapping the Landscape of Large Language Models and GenAI Learning**
  - ChatGPT:
    - Writing assistants: Jjenni, Grammarly, Writesonic, Jasper
    - Research: Quivr, Consensus, Elicit, Explainpaper, scite_, keenious, scholarcy, Connected papers, Semantic scholar, ResearchRabbit.
    - Live to Internet: Copilot, Plus AI (PowerPoint maker).
    - Teachers and instructors: Magic school, Eduaide.ai, TeachMateAI.
    - Creative productivity platforms: Canva, Gamma
    - Imagery: Dall-E, Midjourney, Stable Difussion
  - Gemini
    - Video: Pika, runaway, Kapwing, synthesia
  - LLaMa
    - HugginChat
    - Coding: Codium, Tabnine
- Beware of the results, a lot of "noise" and "garbage" in some cases.
- Some tools are simple "wrappers" which don't add much value compared with what you could do yourself.
- Each generative AI platform has its own individual characteristics
  - ChatFPT is closed, we don't know what the weights are. Llama is open.
  - Training data
    - ChatGPT trained on a massive internet dataset.
    - Meta AI trained on subset of internet, focused on conversational and interactive data.
    - Semantich Scholar trained on 200 million research papers
  - Tuning:
    - Differently optimized for in-depth versus converstaional responses and other factors
  - Personality
- **AI-Driven Learning: Maximizing Retrieval Practice**
  - **Retrieval practice**: much better for learning than any other approach.
    - Teaching other people is actually *retrieval practice*
  - You can ask ChatGPT for **pretesting questions**
    - [Pretesting Reduces Mind Wandering and Enhances Learning During Online Lectures](https://www.researchgate.net/publication/347120870_Pretesting_Reduces_Mind_Wandering_and_Enhances_Learning_During_Online_Lectures)
    - Often you don't know what is actually important among the things that you want to learn...
    - Quiz done BEFORE starting to study.
  - Ask for the "key ideas" to help caffold your learning.
  - Example: "Can you provide a three-page synopsis in layperson's terms of the attached document?"
    - layperson=lego
    - <https://abreevy8.io>
    - In Linux: <https://github.com/autokey/autokey/wiki>
    - Flashcard system (space repetition):
      - <https://www.idorecall.com/> (from Barbara Oakley)
      - Quizlet
      - Kahoot!
      - Anki
- **Flipped Interaction Pattern: AI-Driven Practice & Teaching**
  - Rather than telling one of these models what to do, rather than asking it questions, **we want to get it to ask us questions**, and then based on our responses, dynamically adapt and flow through whatever it is that we're trying to achieve or practice.
  - Example:

  ```text
   Please quiz me on phishing and techniques that are used to trick people.
   
   Break the topic down into individual topics that someone needs to learn. 
   
   Ask me questions one at a time to assess my knowledge of these topics. At the end, suggest topics that I should focus on to improve my understanding. 
   
   Ask me the first question.
  ```

  - Example:

  ```text
    Act as an expert in breaking down complex topics and teaching through simple analogies and metaphors. 
    
    Teach me how transformer models work one step at a time. After you teach me each topic, ask me a question to assess my understanding. Adapt what you teach next or review based on how well I answer the question. 
    
    Teach me the first thing.
  ```

- **Prompting for Feedback**
  - **Question refinement pattern**
    - Example: "Whenever I ask you a question, you will suggest a better version of my question that is clearer and more specific and ask me if you should answer it instead"
  - **Cognitive verifier pattern**
    - Example:

    ```text
    Act as an entrenched skeptic. Challenge my thinking on a presentation I'm about to give, identify my assumptions and challenge them.
    
    Ask me pointed questions one at a time to challenge my assumptions. Be persistent and don't let me off the hook easily. Challenge the assumptions underlying my answers. 
    
    Ask me the first question.
    ```

- **Unleashing curiosity and motivation**
  - Two modes of learning and thinking
    - Focused mode
      - The task-positive network
    - Diffuse mode
      - The task-negative network
      - e.g. wandering mind, daydreaming
  - Pinbal metaphor to understand those two ways of learning and thinking.
  - Dopamine: anticipatory hormone and neurons.
  - Hooks and curiosity suppress diffues mode and enhace focus.
  - Ask genAI for ideas to provoke curiosity!
- **Multimodal prompting discovery**
  - E.g. tranlating imagery into information.
  - Examples:
    - "I'm going to take pictures of things. And whenever I take pictures of things, you give me a crazy, fun, totally unique new game that I could play with them."
    - "Tell me the physics of anything I take a picture of."
    - "Tell me a world record related to anything I take a picture of."
    - Food picture: "Give me step by step plans to make this. Create a complete list of materials with identifiers like one a, one b, and then output your step by step plan and reference the materials. "
- **GenAI as a creative catalyst: supplementing working memory**
  - Working memory: the part of your memory holding something temporarily.
  - Long-term memory: the memory we hold all around our neocortex.
    - Neocortex: the thin surface of the brain whre many of our memories are stored.
- **The importance of classical study & memorization with respect to prompts**
  - Example: "Write a letter to my boss asking for a raise **in the style of** William Faulkner"
  - Example: "Create a SWOT analysis of this presentation"
