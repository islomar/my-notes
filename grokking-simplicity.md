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
- <https://ericnormand.me/podcast>

## Chapters 1-3

- **Side-effect**
  - Anything besides returning a value.
  - E.g. a read-only access to a DB would be considered a side-effect.
- **Actions**
  - Aka "functions with side-effects", impure functions.
  - Something that might change depending on **when** it is executed (ordering) or **how many times** (repetition).
  - Actions can take many forms:
    - Function calls
    - Method calls
    - Constructors
    - Expressions
    - Statements
- **Calculations**
  - Pure functions, mathematical functions, no side-effects.
  - Computations from inputs to outputs.
  - They don't affect anything outside of themselves, and hence it doesn't matter when or how many tmies they are run.
  - Calculations are **­referentially transparent** because a call to a calculation can be replaced by its result.
  - You don't have to worry about:
    - What else is running at the same time.
    - What has run in the past and what will run in the future.
    - How many times you have alreadyrun it.
- **Data**
  - "Data are facts about events". Probably biased towards CQRS.
  We record the facts immutably snice the facts don't change.
  - **Immutability**. Functional programmers use two main disciplines for implementing immutable data:
    1. **Copy-on-write**. Make a copy of data before you modify it.
    2. **Defensive copying**. Make a copy of data you want to keep.
  - Advantage of data
    - Serializable
    - Compare for equality
    - Open for interpretation
- **Stratified design**
  - Smell to Ports and adapters or Clean/Onion Architectures...
  - Organizing code by "rate of change"
    - (changes frequently) Business rules - Domain rules - Tech stack (changes seldom)

## Chapters 4-5

- Explicit inputs: arguments.
- Explicit outputs: return value.
- Implicit inputs and outputs: **side effects**
- Improve testing and reusability (example)
  - Don't depend on global variables.
  - Separate business rules from DOM updates
  - Don't assume the answer goes in the DOM
  - Return the answer from the function
- Reading a global variable is an **input** because data is entering the function.
- Modifying a global array is an **output** because data is leaving the function.
- Copying a mutable value before you modify it is a way to implement **immutability**. It's called **copy-on-write**.
- We only have to find one action in afunction for the whole function to be an action.
- "In general, we want to eliminate implicit inputs and outputs by replacing them with
arguments and return values"
- "Design is about pulling things apart. They can always be put back together"

## Chapter 6: Staying immutable in a mutable language

- Data is **nested** when there are data structures within data structures, e.g. an array full of objects.
- Data is **deeply nested** when the nesting goes on for a while.
- Some functional languages are immutable by default, e.g. Haskell, Clojure, Erlang, Elixir, Elm.
- Splitting a function that does a read and a write
- **Reads to mutable data** are actions
- Writes modify data, so they are what make the data mutable.
- If there are no writes to a piece of data, it is immutable.
- **Reads to immutable data** structures are calculations.
- **Swapping** pattern:
  1. read
  2. modify
  3. write
  E.g.: `shopping cart = add_item(shopping_cart, shoes)`
- In general, immutable data structures use more memory and are slower to operate on than their mutable quivalents.
  - Immutable data structures are fast enough for commmon applications. We can optimize later (if needed).
- **Shallow copies** only duplicate the top-level data structure of nested data.  
- **Structural sharing**: two nested data structures referencing the same inner data structure.
  - When it's all immutable, structural sharing is very safe: it uses less memory and is faster than copying everything
- The entire nested data structure has to remain unchanged for it to be immutable.

## Chapter 7: Staying immutable with untrusted code

- **Legacy code**: existing code that we can't replace at the moment. We have to work with it as is.
  - Very poor definition: can't you rename a local variable?
- **Defensive copy**: used to exchange data with code that mutates data.
  - it defends the immutable original
  - make a **deep copy** before sending the data to the "unsafe zone" (zone where data is mutable)
- You protect yourself by making copies: you copy data as it leaves your system, and you copy it as it comes back in.
- **Deep copies** duplicate all levels of nested data structures, from the top all the way to the bottom.
- **Defensive copying** is a discipline that maintains immutability when you have to exchange data with code that does not maintain immutability.
  - Rule 1: copy as data leaves trusted code
  - Rule 2: copy as data enters trusted code
- **Shared nothing architecture**: when modules implement defensive copying when talking to each other. (the modules don't share references to any data)

## Chapter 10: First-class functions: part 1

- A **code smell** is a characteristic of a piece of code that might be a symptom of deeper problems.
- There are two characteristics to the **implicit ­argument in function name** smell:
  1. Very similar function implementations
  2. Name of function indicates the difference in implementation
- The function name difference is an implicit argument.
  - From `setPriceByName()` and `setQuantityByName()` to `setFieldByName(field)`
- **Data orientation** is a style of programming that uses generic data structures to represent facts about events and entities
- **Higher-order functions** take other functions as arguments or return functions as their return values
  - Refactor to allow it: **replace body with callback**
- **Anonymous functions** are functions without names. They can be written inline - right where they are used.
- There are three ways to define functions:
  - Globally defined
  - Locally defined
  - Defined **inline**
- **An inline function** is defined where it is used. For example, a function might be defined in the argument list.


## Chapter 11: First-class functions: part 2

- They apply HOF to create `trycatch(f, errorHandler)`

## PENDING

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
- [Restrict mutability of state](https://kevlinhenney.medium.com/restrict-mutability-of-state-1ac69d1ec5fe)
- [Aplicando curry en JavaScript funcional](https://bootcamp.laboratoria.la/es/topics/functional/hof/currying)