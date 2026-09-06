# SoCraTes Germany 2026

- <https://www.socrates-conference.de/>
- [Feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfY4d4HPxVMOOCkRqXdabQO7YGxHordbHI5gEKH4DedOz99Q/viewform)

## Topics to propose

- Meditation 101
- Pair and ensemble programing in the era of LLMs
  - <https://dev.to/carl_hembrough_4ff217c2f1/pair-programming-in-the-ai-era-52bb>
  - <https://learnings.aleixmorgadas.dev/p/rethinking-pair-programming-in-the>
  - <https://medium.com/@kbartsch/pair-programming-in-the-age-of-ai-842394ccf9d8>
  - <https://www.reddit.com/r/ClaudeAI/comments/1mrrbyb/how_does_pair_programming_work_in_this_era_of_ai/>
- The basal cost of software
  - <https://www.eferro.net/2021/02/basal-cost-of-software.html>

## LLMs

- <https://wesmckinney.com/blog/agentic-engineering-aug-2026/>

## Training Day

- [Augmented Coding Patterns by Lada Kesseler and Lars Eckart](./augmented-coding-patterns-training/augmented-coding-patterns-training.md)
- From Feature Factory to Forge by Diana Montalion
  - Movie app
    - Movie
    - Cast
    - Score
  - Steps of the workshop
        1. Build
        2. Break
            - Verb + durable concept. For example: observe behaviour, maintain concepts, explain recommendations
        3. Reframe
        4. Flow
            - Edge case
        5. Evolve
            - User moved to a different country
            - 6 months inactive
        6. Apply
  - TBD

## Open Space

- **Getting a job in 2026**
- **Knowldege graphs**
  - Angelo Veltens
  - RDF triples
    - Resource Description Framework
  - SparQL
  - llm-knowledge-graph
    - <https://github.com/ericblue/knowledge-graph-llm-links>
    - <https://github.com/dylanhogg/llmgraph>
  - Similar to "Understand Anything"?
  - <https://neowiki.ai/>
  - Open Model used: kimi-free, <https://www.kimi.com/en/help/kimi-api/api-free-trial>
- **Psychological issues in using AI**
- **Organizing Anarchy**
- **e2e testing**
  - Markus Tacker
  - nRF cloud
  - Context: Moving from Braintree to Stripe
  - LS: Location Service
  - Pricing calculator
  - OTA: Over The Air
  - Billing Service
  - Using AWS Textract
  - Download the PDF generated in Stripe and verify it with OCR (just checking the text appeareance, not the layout in the PDF)
  - The test acted the "Billing Service"
    - Calling the staging Sripe
    - Calling test doubles for the database and another internal service
    - Calling the real SQS
- **AI ensemble practical session**
  - Gregor Riegler & [Lev Konstantinovskiy](https://github.com/tmylk)
  - Fish bowl of 5
  - <https://github.com/tmylk/ai-ensemble>
  - Guidelines/rules
    - Codex without skills/agents
    - Enforce frequent retros, ~every 7 minutes
    - Model: 5.6 Sol Medium
    - Only use the agent
    - Voice translation
    - There were initial custom instructions saying it's a mob session
  - Discussion on how to start:
    - Ask the agent to pla vs plan yourself
    - Feed the agent with the kata.md. Too much?
  - Using the emojis from Lada's session
  - Using the prompt to offer options and preferred options
  - It started with test first (but all of them at once)
  - Asked for options on how to visualize that the acceptance criteria are matched
  - They went for everything at once
  - Conversation about how to verify the code and tests are good
  - Stuck during the third round.
  - Everybody with ideas, but they were not ried
    - Write ideas (as prompt) and try one.
    - 3 ideas were raised: a new agent created for each one.
    - Asking to double check the tests created, mapping them to the acceptance criteria
  - Feedback given
    - Positive
      - The microretros were a great way to improve.
      - Exploring several options was a good decision
    - Improvement
      - No deep reading of the requirements. They didn't understand them.
      - They went for everything at once
      - Not enough time to align, that's normal

- **Delete session**
  - Lightweigh ADR
    - <https://www.thoughtworks.com/radar/techniques/lightweight-architecture-decision-records>
    - <https://github.com/peter-evans/lightweight-architecture-decision-records>
  - ADR as "Any Design Record"
