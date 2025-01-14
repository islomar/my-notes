# Grokking Simplicity

- [Shared notes for the book club](https://docs.google.com/document/d/1KbOP8MYSf2g2K87wBFUzhzxWEX9Rb_o-ELwInWUSjGw/edit?tab=t.0#heading=h.zg785j5y7zw0)
- Libro: Grokking simplicity (de Eric Normand)
- 19 capítulos 559 páginas
- <https://grokkingsimplicity.com/>
- <https://www.manning.com/books/grokking-simplicity>
  - [Live book](https://livebook.manning.com/book/grokking-simplicity?origin=dashboard)
  - [Discussion forum](https://livebook.manning.com/forum?product=normand&p=1)
  - [Source code](https://www.manning.com/downloads/2263)
  - [Errata](https://manning-content.s3.amazonaws.com/download/6/131c10c-2ae7-4689-9b13-2da5b12fa7ff/Normand_Errata.html)

## Chapters 1-3

- **Side-effect**
  - Something that might change depending on **when** it is executed or **how many times**.
  - Anything besides returning a value.
  - E.g. a read-only access to a DB would be considered a side-effect.
- ACD
  - **Actions**
    - They have side-effects
  - **Calculations**
    - Pure functions, no side-effects
  - **Data**
    - "Data are facts about events". Probably biased towards CQRS.
- **Stratified design**
  - Smell to Ports and adapters or Clean/Onion Architectures...

## Chapters 4-5

- TBD

## Chapter X-Y

- TBD

## Other resources

- Vladimir Khorikov escribe sobre las tensiones de un modelo de dominio tiene que ver con esto: [Domain model purity vs. domain model completeness (DDD Trilemma)](https://enterprisecraftsmanship.com/posts/domain-model-purity-completeness/)
  - A **complete domain model** is a model that contains all the application’s domain logic. In other words, there’s no domain logic fragmentation.
  - **Domain logic fragmentation** is when the domain logic resides in layers other than the domain layer.
  - **Domain model purity**: a pure domain model is a model that doesn’t reach out to out-of-process dependencies (e.g. an Entity without any repository reference).
  - Trilemma: domain model completeness vs domain model purity vs performance.
  - 3 options:
    - **Push all external reads and writes to the edges of a business operation** — Preserves domain model completeness and purity but concedes performance.
    - **Inject out-of-process dependencies into the domain model** — Keeps performance and domain model completeness, but at the expense of domain model purity.
    - **Split the decision-making process between the domain layer and controllers** — Helps with both performance and domain model purity but concedes completeness. With this approach, you need to introduce decision-making points (business logic) in the controller.
  - "I strongly recommend that you choose domain model purity over domain model completeness, and go with the third approach: splitting the decision-making process between the domain layer and controllers."
  - IMO the **domain services** is the place for this kind of domain logic.
    - There is more to the domain model than the Entities/VO/Aggregates
- [Railway-oriented programming in Java (video, 2021)](https://www.youtube.com/watch?v=4zpDZ8gwmc4)
