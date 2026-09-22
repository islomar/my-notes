<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Jev](#jev)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Jev

- <https://console.typesafe.ai/home>
- A new class of AI models optimized for programmatic (inside code) use.
- Think: Smart if-statements.
- RLCD (Reinforcement Learning for Calibrated Decisions)
- Goal: to overcome issues such as mode dropping, hallucinations, and lack of reliability inherent to RLHF, the method used to train modern-day LLMs.
- **Properties**
  - Structured, machine-native outputs:
    - System One produces structured outputs optimized for code, with type correctness guaranteed by design. Not 99.9999% success, actually 100%.
  - Parallel sampling for fast decisions
  - Consistent, calibrated, probabilistic results
    - Each decision is a calibrated probability, so similar inputs give similar outputs.
- **Limitations**
  - Not good at System 2 tasks
    - Jev is weaker than large reasoning models at System 2 tasks that involve high reasoning, like mathematical reasoning and games like chess
  - Not trained on specialized domains
  - Not a generative chat model
    - Jev doesn’t generate text, so you can’t chat with it. To ask it questions, you have to define the shape of the answer. Kind of like writing multiple choice questions.
- **Benefits**
  - 20-200x faster
    - our service is currently in us-west so where you request from matters.
  - 20-1.000x cheaper
  - Frontier-level intelligence for System 1 tasks
    - On tasks that call for instinctive judgment and common sense over large bodies of text and structure, Jev approaches frontier reasoning models.
    - This is the hardest claim to defend, and no one in the field has found a good way to prove it. We hope you experiment with Jev and see for yourself.


## Pending to read
- https://simonwillison.net/2026/Sep/21/jev/