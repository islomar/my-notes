# Technical writing course

- https://developers.google.com/tech-writing/overview
- The work of writing is simply this: untangling the dependencies among the parts of a topic, and presenting those parts in a logical stream that enables the reader to understand you.

## Technical Writing One

- https://developers.google.com/tech-writing/one
- [In-Class Exercises](https://developers.google.com/tech-writing/onel)
- [Facilitator's guide](https://developers.google.com/tech-writing/for-instructors/one/instructors-guide)
- More resources for facilitators: https://developers.google.com/tech-writing/for-instructors
- **Transitions**: The most important transitions in technical writing are as follows:
  - however
  - therefore
  - for example

### Words

- **Define** new or unfamiliar terms
- Use terms **consistently**
- Use **acronyms** properly: on the initial use of an unfamiliar acronym within a document or a section, spell out the full term, and then put the acronym in parentheses. Put both the spelled-out version and the acronym in boldface.
  - Do not cycle back-and-forth between the acronym and the expanded version in the same document.
- Here are the guidelines for acronyms:
  - Don't define acronyms that would only be used a few times.
  - Do define acronyms that meet both of the following criteria:
  - The acronym is significantly shorter than the full term.
  - The acronym appears many times in the document.
- Disambiguate pronouns

### Active voice

- The vast majority of sentences in technical writing should be in active voice.
- Convert passive voice to active voice because active voice is usually clearer.
- Most readers mentally convert passive voice to active voice. Why subject your readers to extra processing time? By sticking to active voice, readers can skip the preprocessor stage and go straight to compilation.
- Passive voice obfuscates your ideas, turning sentences on their head. Passive voice reports action indirectly.
- Some passive voice sentences omit an actor altogether, which forces the reader to guess the actor's identity.
- Active voice is generally shorter than passive voice.

### Clear sentences

- In technical writing, clarity takes precedence over all other rules.
- Choose strong verbs: pick the right verb.
- Reduce imprecise, weak, or generic verbs, such as forms of be, have, occur, happen.
- Stronger verbs: trigger, generate, ensure, specify, omit, issue, declare.
- Reduce there is/there are
  - In the best case scenario, you may simply delete There is or There are
  - You can sometimes repair a There is or There are sentence by moving the true subject and true verb from the end of the sentence to the beginning.
  - In still other situations, writers start sentences with There is or There are to avoid the hassle of creating true subjects or verbs. If no subject exists, consider creating one.
- Minimize certain adjectives and adverbs
  - adjectives and adverbs can make technical documentation sound dangerously like marketing material.
  - Don't confuse educating your readers (technical writing) with publicizing or selling a product (marketing writing).

### Short sentences

- **Focus each sentence on a single idea**
- **Convert some long sentences to lists**
- **Eliminate or reduce extraneous words**: simplify the sentences, e.g.
  - "Now" instead of "At this point in time"
  - "Find" instead of "Determine the location of"
  - "Can" instead of "is able to"
  - "Although" instead of "In spite of the fact that"
  - "Clarifies" instead of "enhances the clarification of"
- **Reduce subordinate clauses**
  - The following list (by no means complete) shows common words that introduce subordinate clauses:
    - which
    - that
    - because
    - whose
    - until
    - unless
    - since
  - Some subordinate clauses begin with a comma and some don't.
  - Do the subordinate clauses in a sentence extend the single idea or do they branch off into a separate idea? If the latter, consider dividing the offending subordinate clause(s) into separate sentences.
- Distinguish that from which
  - In the United States, reserve **which** for nonessential subordinate clauses, and use **that** for an essential subordinate clause that the sentence can't live without.
  - If you read a sentence aloud and hear a pause just before the subordinate clause, then use **which**. If you don't hear a pause, use **that**.
  - Place a comma before **which**; do not place a comma before **that**.

### Lists and tables

- Good lists can transform technical chaos into something orderly. Technical readers generally love lists. Therefore, when writing, seek opportunities to convert prose into lists.
- Use a bulleted list for unordered items. Use a numbered list for ordered items. In other words:
  - If you rearrange the items in a bulleted list, the list's meaning does not change.
  - If you rearrange the items in a numbered list, the list's meaning changes.
- An embedded list (sometimes called a run-in list) contains items stuffed within. Generally speaking, embedded lists are a poor way to present technical information. Try to transform embedded lists into either bulleted lists or numbered lists. Example:
  - The llamacatcher API enables callers to create and query llamas, analyze alpacas, delete vicugnas, and track dromedaries.
- Keep list items parallel
  - What separates effective lists from defective lists? Effective lists are parallel; defective lists tend to be nonparallel. All items in a **parallel** list look like they "belong" together
  - Conversely, at least one item in a nonparallel list fails at least one of these consistency checks: grammar, logical category, capitalization, punctuation.
- Start numbered list items with imperative verbs.
- Punctuate items appropriately
  - If the list item is a sentence, use sentence capitalization and punctuation. Otherwise, do not use sentence capitalization and punctuation.
  - "\* Most carambolas have five ridges." but "\* the color of lemons"
- Introduce each list and table
  - We recommend introducing each list and table with a sentence that tells readers what the list or table represents. In other words, give the list or table context. Terminate the introductory sentence with a colon rather than a period.
  - Although not a requirement, we recommend putting the word **following** into the introductory sentence. E.g. "The following list identifies key performance parameters"

### Paragraphs

- **Write a great opening sentence**
  - The opening sentence is the most important sentence of any paragraph. Busy readers focus on opening sentences and sometimes skip over subsequent sentences.
  - Good opening sentences establish the paragraph's central point.
  - Starting a paragraph with a rhetorical question, for example, can engage readers.
- **Focus each paragraph on a single topic**
- **Don't make paragraphs too long or too short**
  - Readers generally welcome paragraphs containing three to five sentences, but will avoid paragraphs containing more than about seven sentences.
  - When revising, consider dividing very long paragraphs into two separate paragraphs.
- **Answer what, why, and how**
  - What are you trying to tell your reader?
  - Why is it important for the reader to know this?
  - How should the reader use this knowledge? Alternatively, how should the reader know your point to be true?

### Audience

> good documentation = knowledge and skills your audience needs to do a task − your audience's current knowledge and skills

- In other words, make sure your document provides the information your audience needs that your audience doesn't already have.
- **Define your audience**
- **Determine what your audience needs to learn**
- **Fit documentation to your audience**
  - Writing to meet your audience's needs requires unselfish empathy. You must create explanations that satisfy your audience's curiosity rather than your own.
  - Match your vocabulary to your audience.
  - Unless you are writing specifically for other experienced members of your team, you typically must explain more than you expect.
  - Experts often suffer from the **curse of knowledge**, which means that their expert understanding of a topic ruins their explanations to newcomers. As experts, it is easy to forget that novices don’t know what you already know.
  - Prefer simple words over complex words; avoid obsolete or overly-complex English words.
  - Cultural neutrality and idioms:
    - Idioms are phrases whose overall meaning differs from the literal meaning of the individual words in that phrase. For example, the following phrases are idioms:
      - a piece of cake
      - Bob's your uncle

### Documents

- **State your document's scope**
  - A good document begins by defining its scope.
  - A better document additionally defines its non-scope--the topics not covered that the target audience might expect your document to cover.
- **State your audience**
  - A good document explicitly specifies its audience.
  - a good audience declaration might also specify any prerequisite knowledge or experience.
  - In some cases, the audience declaration must also specify prerequisite documents.
- **Establish your key points up front**
  - Time is gold
  - When reviewing your documentation, ensure that the start of your document answers your readers' essential questions.
  - Always write a summary for long engineering documents. Although the summary must be very short, expect to spend a lot of time writing it.
- **Break your topic into sections**

### Punctuation

- **Commas**
  - the rules regarding commas are somewhat hazier
  - You might be wondering about a list's final comma, the one inserted between items N-1 and N. This comma—known as the serial comma or Oxford comma—is controversial. We recommend supplying that final comma simply because technical writing requires picking the least ambiguous solution. E.g. "Our company uses C++, Python, Java, and JavaScript."
  - In sentences that express a condition, place a comma between the condition and the consequence. E.g. "If the program runs slowly, try the --perf flag."
  - Finally, avoid using a comma to paste together two independent thoughts.
- **Semicolons**
  - A period separates distinct thoughts; a semicolon unites highly related thoughts.
  - Many sentences place a transition word or phrase immediately after the semicolon. In this situation, place a comma after the transition. E.g. "however".
- **Em-Dashes**
  - An em-dash represents a longer pause—a bigger break—than a comma.
  - "C++ is a rich language—one requiring extensive experience to master."
  - Writers sometimes use a pair of em-dashes to block off a digression, as in the following example:
    - Protocol Buffers—often nicknamed protobufs—encode structured data in an efficient yet extensible format.
- **Parentheses**
  - Use parentheses to hold minor points and digressions. Parentheses inform readers that the enclosed text isn't critical.
  - keep parentheses to a minimum in technical writing.
  - If a pair of parentheses holds an entire sentence, the period goes inside the closing parenthesis.

### Summary

- Use terms consistently.
- Avoid ambiguous pronouns.
- Prefer active voice to passive voice.
- Pick specific verbs over vague ones.
- Focus each sentence on a single idea.
- Convert some long sentences to lists.
- Eliminate unneeded words.
- Use a numbered list when ordering is important and a bulleted list when ordering is irrelevant.
- Keep list items parallel.
- Start numbered list items with imperative words.
- Introduce lists and tables appropriately.
- Create great opening sentences that establish a paragraph's central point.
- Focus each paragraph on a single topic.
- Determine what your audience needs to learn.
- Fit documentation to your audience.
- Establish your document's key points at the start of the document.

## Technical Writing Two

- https://developers.google.com/tech-writing/two

### Self-editing

- **Adopt a style guide**
  - E.g. the [Google developer documentation style guide](https://developers.google.com/style)
  - You might prefer to start by adopting the [style-guide highlights](https://developers.google.com/style/highlights). E.g.:
    - [Write in the second person](https://developers.google.com/style/person). Refer to your audience as "you" rather than "we".
    - [Place conditional clauses before an instruction](https://developers.google.com/style/clause-order), rather than after.
      Format code-related text as code font.
- **Think like your audience**
  - You can then review your draft with your persona in mind. A persona can consist of any of the following attributes: a role, an end goal or a set of assumptions about their knowledge and experience.
- **Read it out loud**
  - Listen for awkward phrasing, too-long sentences, or anything else that doesn't feel natural.
- **Find a peer editor**

### Organizing large documents

- **Outline a document**:
  - Before you ask your reader to perform a task, explain to them why they are doing it.
  - Limit each step of your outline to describing a concept or completing a specific task.
  - Consider explaining a concept and then demonstrating how the reader can apply it either in a sample project or in their own work. Documents that alternate between conceptual information and practical steps can be a particularly engaging way to learn.
- **Introduce a document**
  - An introduction should include:
    - What the document covers.
    - What prior knowledge you expect readers to have.
    - What the document doesn't cover.
  - After you've completed the first draft, check your entire document against the expectations you set in your overview.
- **Add navigation**
  - Clear navigation includes:
    - introduction and summary sections
    - a clear, logical development of the subject
    - headings and subheadings that help users understand the subject
    - a table of contents menu that shows users where they are in the document
    - links to related resources or more in-depth information
    - links to what to learn next
- **Prefer task-based headings**
- **Provide text under each heading**
  - Most readers appreciate at least a brief introduction under each heading to provide some context. Avoid placing a level three heading immediately after a level two heading
- **Disclose information progressively**
  - Break up large series of steps.
  - Start with simple examples and instructions, and add progressively more interesting and complicated techniques.

### Illustrating

- **Write the caption first**
  - It is often helpful to write the caption before creating the illustration. Then, create the illustration that best represents the caption. This process helps you to check that the illustration matches the goal.
- **Constrain the amount of information in a single drawing**
  - After showing the "big picture," provide separate illustrations of each subsystem.
- **Focus the reader's attention**
- **Illustrating is re-illustrating**
  - As you revise, ask yourself the following questions:
    - How can I simplify the illustration?
    - Should I split this illustration into two or more simpler illustrations?
    - Is the text in the illustration easy to read? Does the text contrast sufficiently with its background?
    - What's the takeaway?
- **Illustration tools**
  - Google Drawings
  - diagrams.net
  - LucidChart
  - When exporting diagrams from these tools to use in documentation, it is usually best to export the files as Scalable Vector Graphics (SVG). The SVG format easily scales diagrams based on space constraints so that no matter the size, you end up with a high quality image.

### Creating sample code

- Good sample code is often the best documentation.
- Good samples are **correct** and **concise** code that your readers can **quickly understand** and **easily reuse** with **minimal side effects**.
- Pick descriptive class, method, and variable names.
- Optional: Use bold or colored font to draw the reader's attention to a specific section of your sample code.
- When your readers are very experienced with a technology, don't explain **what** the code is doing, explain **why** the code is doing it.
- Note: If you must sacrifice production readiness in order to make the code shorter and easier to understand, explain your decisions in the comments.
- **The example and the anti-example**

  - In addition to showing readers what to do, it is sometimes wise to show readers what not to do.

- ### Summary
- Adopt a style guide.
- Think like your audience.
- Read documents out loud (to yourself).
- Return to documents well after you've written the draft.
- Find a good peer editor.
- Outline a document. Alternatively, write free form and then organize.
- Introduce a document's scope and any prerequisites.
- Prefer task-based headings.
- Disclose information progressively (in some situations).
- Consider writing the caption before creating the illustration.
- Constrain the amount of information in a single drawing.
- Focus the reader's attention on the relevant part of a picture or diagram by describing the - takeaway in the caption or by adding a visual cue to the picture.
- Create concise sample code that is easy to understand.
- Keep code comments short, but prefer clarity over brevity.
- Avoid writing comments about obvious code.
- Focus your commenting energy on anything non-intuitive in the code.
- Provide not only examples but also anti-examples.
- Provide code samples that demonstrate a range of complexity.
- Make a practice of continuous revision.
- Provide different documentation types for different categories of users.
- Compare and contrast with something that readers are already familiar with.
- In tutorials, reinforce concepts with examples.
- In tutorials, note problems that readers may encounter.

## Resources

- https://developers.google.com/tech-writing/resources
- [University of Oxford Style Guide]+(https://www.ox.ac.uk/sites/files/oxford/media_wysiwyg/University%20of%20Oxford%20Style%20Guide.pdf)
- [Google Style Guide](https://developers.google.com/style)
- [Microsoft Style Guide](https://docs.microsoft.com/es-es/style-guide/welcome/)
  - [Bias-free communication](https://docs.microsoft.com/es-es/style-guide/bias-free-communication)
