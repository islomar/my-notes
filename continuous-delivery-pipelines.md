# Continuous Delivery Pipelines (How to Build Better Software Faster)

- Author: Dave Farley
- 100 pages
- Release date read: 2021-04-23
- The suggested hashtag for this book is #cdpipelines

## Deployment Pipeline Foundations

- Continuous Delivery emerged in the early 2000s, building on the techniques of Continuous Integration
- The term Continuous Delivery is taken from the first principle of the Agile Manifesto (2001)
- Page 3: data from "The State of DevOps Reports" with the benefits of CD.
- Continuous Delivery is achieved by working so that our software is always in a releasable state.
- we work in small steps, testing each tiny piece of new code as we proceed:
- Our aim is to commit each of these small steps as we make them, committing changes multiple times per day: all the time maintaining our software in a releasable state with each tiny change.
- Definition of "Done": The change is complete when it is delivered into the hands of its users.
- Continuous Delivery is an holistic approach: it focuses on optimising the whole of that span and is therefore not only a technical discipline: it also requires optimal organisational structure and performance; and, an appropriate culture and ways of working.
- Continuous Delivery gets us fast and frequent feedback from our customers and our tests, to enable us to learn and improve. We monitor and measure, and collect data, so that we can make evidence-based decisions.
- Continuous Delivery is achieved through automation: We look for ways to automate everything we can: testing and validating our changes, using computers for what they are good at, i.e repeatability and reliability; and freeing up developers’ time to utilise their creative, problem-solving skills.
- Software Engineering: "the application of an empirical, scientific approach to finding efficient solutions to practical problems in software."
- We use a Deployment Pipeline to organise all steps required to go from idea to releasable software and we automate as much of our development process as we can, to ensure that we produce software repeatably and reliably.
- A great place to start with Continuous Delivery is to measure the Lead Time i.e how long it takes for new code to complete its transit through the Deployment Pipeline.
- Continuous Delivery is a Lean approach: focus on reducing the Lead Time by reducing waste, duplication, overheads, handovers, delays, complex organisational structures and anything that is not directly helping to develop quality software.
- Continuous Delivery is not a fixed procedure, or set of tools that can be installed and followed. It is an approach for continuous learning: continuous improvement.
- The best Continuous Delivery practitioners release small software changes into production thousands of time a day, and measure their Lead Time in minutes!

### Three Key Ideas

- Continuous Delivery is founded upon three key ideas:
  - The reliable, repeatable production of high quality software.
  - The application of scientific principles, experimentation, feedback and learning.
  - The Deployment Pipeline as a mechanism to organise and automate the development process.

### Seven Essential Techniques

- Reduce the Cycle Time
- Automate Nearly Everything
- Control the Variables
- Work in Small Steps
- Make Evidence-based Decisions
- Work in Small Empowered Teams
- Apply Lean & Agile Principles

## Deployment Pipeline Anatomy

- TBD

## Whole Pipeline Considerations

- TBD

## Real Example of a Deployment Pipeline in the Fintech Industry

- <https://www.youtube.com/watch?v=bHKHdp4H-8w&t=1s>
- [TransFICC](https://transficc.com/): API for eTrading
- Tech. Stack
  - Java running on Linux
  - Built with Gradle
  - Jenkins for CI
  - Config Management via Ansible
  - Custom, In-House Deployment tool running over SSH
- When built from scratch, it takes 25 minutes to compile everything.
  - But TransFICC operate an incremental build
  - On average, the commit stage (build) usually takes around 3 minutes to run.
- **Pipeline stages**
  - Commit (build and "fast" tests)
  - Integration tests
  - Acceptance tests
  - Performance tests
  - Common Library Code
  - Trading Venue Adaptors
- **Integration tests**:
  - testing things which are a little bit slow for running on the "commit" stage
  - Integration tests don't deploy and start the system up!
- **Acceptance tests**
  - Evaluate the system as a whole.
  - They have a DSL
- Recommendation: run in parallel all the tests after the build stage (integration, acceptance, performance, common library and adaptors).
- Example: require a digit in all passwords
  - Start by writing the test.
  - Pass the test locally.
  - Build, deploy and test the system locally.
  - Write an acceptance test first whenever possible.
  - Commit and push
  - It took only 11 minutes from the moment the developer looked at the requirement and it was pushed.
- TransFICC practice Continuous Deployment
  - If the pipeline passes, change is automatically deployed
  - Trunk-Based Development (commits to the main branch)
- In case you break the pipeline, you can block anybody else access until you fix it.

Bookmark: page 8
