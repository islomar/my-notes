# Continuous Delivery Pipelines (How to Build Better Software Faster)

- Author: Dave Farley
- 100 pages
- Release date read: 2021-04-23
- The suggested hashtag for this book is #cdpipelines

## Deployment Pipeline Foundations

- **Continuous Delivery** emerged in the early 2000s, building on the techniques of Continuous Integration
- The term Continuous Delivery is taken from the first principle of the Agile Manifesto (2001)
- Page 3: data from "The State of DevOps Reports" with the benefits of CD.
- Continuous Delivery is achieved by working so that our software is always in a releasable state.
- we work in small steps, testing each tiny piece of new code as we proceed:
- Our aim is to commit each of these **small steps** as we make them, committing changes multiple times per day: all the time maintaining our software in a releasable state with each tiny change.
- Definition of "Done": The change is complete when it is delivered into the hands of its users.
- Continuous Delivery is an holistic approach: it focuses on optimising the whole of that span and is therefore not only a technical discipline: it also requires optimal organisational structure and performance; and, an appropriate culture and ways of working.
- Continuous Delivery gets us fast and frequent feedback from our customers and our tests, to enable us to learn and improve. We monitor and measure, and collect data, so that we can make evidence-based decisions.
- Continuous Delivery is achieved through automation: We look for ways to automate everything we can: testing and validating our changes, using computers for what they are good at, i.e repeatability and reliability; and freeing up developers’ time to utilise their creative, problem-solving skills.
- **Software Engineering**: "the application of an empirical, scientific approach to finding efficient solutions to practical problems in software."
- We use a Deployment Pipeline to organise all steps required to go from idea to releasable software and we automate as much of our development process as we can, to ensure that we produce software repeatably and reliably.
- A great place to start with Continuous Delivery is to measure the **Lead Time** i.e how long it takes for new code to complete its transit through the Deployment Pipeline.
- Continuous Delivery is a Lean approach: focus on reducing the Lead Time by reducing waste, duplication, overheads, handovers, delays, complex organisational structures and anything that is not directly helping to develop quality software.
- Continuous Delivery is not a fixed procedure, or set of tools that can be installed and followed. It is an approach for continuous learning: continuous improvement.
- The best Continuous Delivery practitioners release small software changes into production thousands of time a day, and measure their Lead Time in minutes!

### Three Key Ideas

- Continuous Delivery is founded upon three key ideas:
  - The reliable, repeatable production of high quality software.
  - The application of **scientific principles**, experimentation, feedback and learning.
  - The **Deployment Pipeline** as a mechanism to organise and automate the development process.

### Seven Essential Techniques

- Reduce the Cycle Time
- Automate Nearly Everything
- Control the Variables
- Work in Small Steps
- Make Evidence-based Decisions
- Work in Small Empowered Teams
- Apply Lean & Agile Principles

### What is a Deployment Pipeline?

- **Continuous Delivery is about getting from idea to valuable software in the hands of its users, repeatably and reliably.**
- The Deployment Pipeline is a machine that helps us do that, by organising our software development work, to go from Commit to **Releasable Outcome** as quickly and efficiently as possible, repeatably and reliably.
- The Deployment Pipeline defines **releasability** and is **the only route to production**. It therefore includes any and all steps that are necessary for new software to be releasable, i.e: all unit tests, acceptance tests, validation, integration, version control, sign-offs and any other tests or requirements to achieve releasability. When the work of the Deployment Pipeline is complete, we will know that the software is sufficiently fast, scalable, secure, and resilient, and does what our users want it to do.
- The correct scope of a Deployment Pipeline is an **independently deployable unit**
- We should not be building a separate Pipeline for each team, or architectural layer, or separate Pipelines for the build, test and deploy steps in our process.
- Our aim is for **fast feedback**, **multiple times-per-day**, and a **high level of confidence** that we can safely release our changes.
- The Deployment Pipeline is a **platform where we can test ideas and make changes safely**. The Pipeline enables the collection of test results, and **produces data about Lead-Time, Stability and Throughput**, which can all be used to make **evidence-based decisions**.
- The simplest version of a Deployment Pipeline includes these four stages:
  - Commit stage
    - Build
    - Technical tests (< 5 mins))
  - Artifact repository
    - A successful output from the Commit Stage is a Release Candidate that is saved (and version controlled) in the Artifact Repository
  - Acceptance test stage
  - Ability to deploy into Production
- **Key practices for a Deployment Pipeline**
  - Version control
  - Automation
  - Testing
    - Fast, technical Commit Stage test
    - In-depth Acceptance Tests
    - Other tests e.g.: Performance, Scalability, Resilience, Security, etc.
    - TDD
    - Manual testing: In Continuous Delivery, we eliminate manual regression testing. Manual testing, though, is useful for exploratory tests and to assess the usability of our software from the perspective of an external user.
- By completing **the whole cycle in an hour, or less**, we gain several chances to find, and fix any problems that we find, within the same day.
- **Small, Autonomous Teams**
  - They do not divide up the responsibilities for designing code, writing code, testing code and deploying systems into production, and they do not ‘throw changes over a wall’ to the next person in the process.
  - the team will need to be multi-skilled, autonomous, empowered and small.
- **The Deployment Pipeline is a Lean Machine**
  - The Deployment Pipeline applies scientifically rational, engineering principles, and a Lean approach to software development.
  - At its simplest, producing software entails only four things:
    - Requirements
    - Code
    - Testing
    - Deployment
  - Focussing on Lead Time, and getting efficient feedback, allows us to deliver fast
  - We eliminate waste by including only the essential steps necessary to release software into production, and by doing each step only once.
  - We optimise for the whole system, by including any and all tests and steps in the Pipeline that are necessary for the software to be releasable. At that point there is no more work to do.

### How to build a Deployment Pipeline

- We start simply: by building, or selecting, a **Walking Skeleton** - a tiny implementation of the system that performs a **small end-to-end function**, and **building just enough Pipeline** to support it.
- We take a **really simple Use Case**, or story, which involves the bare bones of our system, and implement the Deployment Pipeline for this simple example.
- Create a **Commit Stage**
- Create an **Artifact Repository**
  - Generate a _deployable thing_. This is our **Release Candidate** (e.g. a Docker image)
  - We give each RC a unique ID.
  - Change the Commit Stage so that the Release Candidate is stored in an Artifact Repository when all tests pass.
- Create an **Acceptance Stage**
  - We start by writing an Acceptance Test that describes the desired behaviour of our system, _before_ we write the code.
  - **Executable specifications**
  - Focus on WHAT the system/code should do, not on HOW.
  - Write some scripts to initialise the database (DB) so it is ready to use by the app: a clean installation from scratch.
  - It recommends a polling system for running the Acceptance Stage only for the latest RC (not after every new RC). That avoids creating an ever-growing backlog of work.
- Create simple reports from the BMS, for the results of all tests, that make it obvious when tests pass or fail. Start with simple reports - they can be refined later.
- **Any test failing, anywhere, means we kill that Release Candidate!**
- When the Acceptance Stage finishes, there should be a record of the success, or failure, of the Release Candidate. Set up somewhere to store these results using the Release Candidate ID from the Artifact Repository as a Key - for these results and for any other information collected.
- **Create a Simple Version of Production**
  - **Continuous Delivery** means working so that the software is always in a releasable state, so that we can decide when and how to deploy into production.
  - **Continuous Deployment** is when we deploy the changes automatically into Production once all steps in the Pipeline have passed.
  - We use the same mechanism that was created to deploy Release Candidates into the Acceptance Test Environment, to now deploy the Release Candidate Into Production.

### Test-Driven Development

- TDD is actually more about **design** than it is about testing
- TDD is a talent amplifier which improves the skills of the developer and the quality of the code they write.
- TDD is an error detection protocol
- Videos
  - <https://youtu.be/llaUBH5oayw>
  - <https://youtu.be/fSvQNG7Rz-8>
- TDD is not about test coverage
- A high level of test coverage is not a useful goal in itself, but may be a side-benefit of a comprehensive approach to TDD.
- We don’t chase coverage: our goal is to drive changes to the code from tests.
- It forces design of the code from the public API, so encourages **design-by-contract**.
- It encourages **design for testability**: testable code has the same properties as high-quality code.
- Overall, the development process is significantly more **efficient and faster**, because less time is spent on rework and fixing bugs.
- Tests for:
  - System and Component Performance
  - Resilience
  - Scalability
  - Security, Compliance, and Regulatory - Checks
  - Data Migration
- The characteristics of testable code are:
  - **Simple**, efficient, and easy to read and maintain
  - More modular, more loosely coupled, and with **better separation of concerns**
  - **Higher-cohesion** and **better abstraction**
  - The code works!
- These attributes of testability are also the attributes of high-quality software.
- Code with these attributes is more flexible, more readable, and more compartmentalised: **insulating change in one part** of the code from other areas, making it not only easier to change, but also **safer to change**.
- If the tests are difficult to set up, this suggests that the code may be too complex and difficult to debug.
- This is significantly as a result of TDD forcing us to apply **Dependency Inversion** so that we can inject test-time components with which we can capture, and fake, those interactions that we want to test.

### Automate nearly everything

- Automation allows us to make mistakes and **recover quickly** from them. And not just for the code and the tests
- Automation should extend to the build and deployment infrastructure, and data and data structures too.
- We will automate:
  - the configuration of the test environments
  - the deployment of the Release Candidates into the test environments
  - control of the test execution, and
  - the tests themselves
- Builds should be efficient and deterministic
- we use the same tools, procedures and technologies throughout the Deployment Pipeline: the same automated mechanisms are used to deploy into develop or test environments, that we use to deploy into Production.
- We automate the deployment no matter how complex, or how simple. We make deployment a single, push button, act.
- **Automate Data Migration**: There should be NO manual intervention in the configuration and deployment of data
- **Automate Monitoring and Reporting**
- **Infrastructure Automation**
- Benefits of Automation
  - We can deploy our software changes in all environments
  - We reduce the risk from human error
  - We can offer frequent releases into production, and get user feedback on our new features and products.
- **Tips for Automation**
  - Work in Small Steps
  - Control the Variables
  - Identify what activities in the Deployment Pipeline do not require human ingenuity
  - What Automation could replace human intervention?
  - How could Automation support human decision-making?
  - Make changes incrementally and measure the impact
  - Version control everything

### Version control

- To be able to repeatably and reliably deliver quality software quickly into the hands of its users, we need to Version Control EVERY aspect of our systems and processes:
  - source code
  - environment configuration
  - dependencies
  - software infrastructure
  - databases
  - web-servers
  - languages
  - operating systems
  - network configuration
  - and even the Deployment Pipelines themselves!
- To be deterministic, we automate the provisioning of our infrastructure to reduce variance and achieve repeatability and reliability.
- As the ONLY route to Production, EVERY change flows through the Deployment Pipeline.
- Continuous Integration was invented as an antidote to the complexities caused by **Branching**.
- Branching is about **hiding information**: dividing up the work, and working on it independently, in ways that team members cannot see each others’ work.
- Branching comes with the risk that one person’s work may be **incompatible** with the changes of their team-mates.
- We want to limit this divergence and aim for **only one interesting version of the system** - the current one. We achieve this by working to **make small changes to Trunk/Master** and continuously evaluate them
- **Don't branch!!!**
  - If branches exist at all, they should be tiny, few in number, and short-lived, i.e: merged at least once per day. When we are working well, we will merge every 10, or 15 minutes, to get fast feedback on our changes and optimise the Deployment Pipeline to be efficient and thorough.
- Recent DevOps Research & Assessment reports found that merging frequently is a reliable predictor of higher Throughput, Stability and overall software performance

## Deployment pipeline anatomy

### The Development environment

- Establish a Development Environment that has:
  - Quality tooling
  - Good connectivity
  - A simple setup
  - Team relationships
    - E.g. pairing.
- The Development Environment should provide the ability to:
  - **Run Any Test**, ideally locally.
  - **Deploy the Whole System**, ideally locally.
  - Locally **Modify Configuration** of the deployed system to enable experiments, simulations and tailoring to different circumstances.

### The Commit Cycle

- The output of a successful Commit Stage is a Release Candidate.
- The common steps of a Commit Stage are:
  - Compile the Code
  - Run Unit Tests
  - Static Analysis
  - Build Installers
- The Commit Stage is where we do the fast unit and technical tests, best suited to getting results in a few minutes, and we leave other more complex and comprehensive tests to later in the Deployment Pipeline.
- The vast majority (99%) of Commit Stage tests will be Unit Tests, but we should also include:
  - analysis to check whether our coding standards are met
  - LINT-style, and Checkstyle evaluations
  - checks on data migration
  - compiler warnings,
- [Brian Marik's Test Quadrant](https://bit.ly/34UNSso) >> IMO not very useful
- Commit Stage tests should provide quality feedback to the developer **within 5 minutes**
  - Any longer than 5 minutes and developers are likely to move on, or not pay full attention.
  - To get results from our tests in under 5 minutes, we need to optimise for precision and efficiency.
  - So we will avoid network access, disk access, database access and starting up the application - all of which introduce complexity and delays
- When working well, the developer will be **committing changes every 10-15 minutes**.
- To achieve that level of productivity, to get fast feedback in under 5 minutes, and be able to quickly revert and correct any defects, means working on **small pieces of code and working in small steps**.
  - Less risky
  - Simpler changes are easier to understand and **easier to revert** if necessary.
  - Smaller steps mean smaller mistakes, **faster feedback** and the opportunity to learn and improve more quickly.
- This incremental way of working starts before the Commit Stage. When defining requirements:
  - Capture **tiny increments** from the perspective of the user,
  - Break down large requirements into **smaller pieces**,
  - Ensure **requirements describe WHAT** the software will do and not HOW it does it.
  - Work so that each Commit is safe, tested and ready to deploy into production, even when the feature, to which the Commit adds, is not yet ready for use.
- **Continuous Integration**
  - Before committing a change, the developer should run tests locally on their code, to avoid stalling the Deployment Pipeline because of minor errors.
  - Once the developer commits their change, they wait and watch to see if it passes the Commit Stage tests.
  - If we commit a change that causes a test to fail, then, here comes another rule of thumb: **Allow 10 minutes to commit a fix or revert the change**.
  - Usually, if we work in small steps, any change is **simple** and so unlikely to hide complex problems.
  - E-mail notifications are too slow, and too easy to ignore, so information radiators or **instant alerts** are better ways to notify the team about build fails.
  - Our top priority is to keep our software in a releasable state. The Deployment Pipeline defines releasability, so if a test fails, our software is no longer releasable! We need to **keep the route to Production unblocked**.
  - **if a team-mate has introduced a failure, and left, revert their change**
- **Summary**
  - Commit Stage tests should provide quality feedback to the developer in under 5 minutes.
  - If a test fails, we allow 10 minutes to commit a fix or revert the change.
  - If a team-mate introduces a failure, and is not around to fix the problem, we revert their change.
  - If the code passes the Commit Stage tests, the developer moves onto new useful work.
  - We work in small steps and aim to commit at least once per day.
  - Package the results of a successful Commit Stage to create a Release Candidate.
  - Release Candidates are stored in the Artifact Repository.

### The Artifact repository

- The Artifact Repository is the logical home for all Release Candidates, and where we store, permanently, all the Release Candidates that make it into Production.
- The Artifact Repository is the **version of truth**.
- The Release Candidates stored here are the **exact bits and bytes that we intend to deploy into production**.
- We separate out any environment-specific configuration from the Release Candidate.
- When working well, we may produce Release Candidates every 10-15 minutes - that is a LOT of binary data, so we need to manage our data storage effectively.
- Semantic versioning may be useful for other purposes, but we **use sequence numbers as IDs for Release Candidates**, and treat semantic version numbers as a display name (in addition to the unique ID) as a way to communicate to users what the Release Candidate means.
- We should aim to perform a periodic **purge to discard any Release Candidates that don’t make it into production**.
- We should also aim to **permanently store ALL Release Candidates that do make it into production**, in the Artifact Repository.

### The Acceptance Stage

- **Incorporate Acceptance Tests into the development process from the start.**
- Create a new Acceptance Test for every Acceptance Criteria for every User Story.
- Don’t confuse this with User Acceptance Testing, which involves a human sign-off informed by customer feedback.
- **Aims of the Acceptance Stage**
  - To evaluate our changes from an external user perspective
  - To test in **life-like scenarios**
  - To evaluate in production-like test environments
  - To eliminate the need for manual regression testing
  - To achieve a sufficient level of **confidence** that our software is functionally ready for production
- **Steps in Running Acceptance Tests**
  1. Configure the environment, ready for the Release Candidate.
  2. Deploy the Release Candidate.
  3. Carry out a **smoke test**, or health check to ensure that the Release Candidate is up and running, ready for use.
  4. Run Acceptance Tests
- We adopt the language of the problem domain.
- **The Four-Layer Approach**
  - Executable Specifications.
    - E.g. `placeAnOrder()`
  - Domain Specific Language (DSL)
    - This layer supports the easy creation of Executable Specifications. It provides functions like ‘placeAnOrder’ which Exec Specs can call on.
    - This layer enables consistency, re-use and efficiency in the creation of Acceptance Test Cases (Exec Specs).
  - Protocol Drivers
    - sit between the DSL and System Under Test (SUT) and translate from the high level language of the problem domain (e.g “placeAnOrder”) to the language of the system, using more detailed concepts like “navigate to this URL”.
  - System Under Test (SUT) - We deploy the system using the same tools and techniques as we will use to deploy it in Production.
- Acceptance Tests can act as a kind of **whole system super-integration test**.
- The aim should be to allow developers to add any test that they need, but also for developers to care enough to **think about the cost, in time, of each test**.

### Manual Testing

- There IS a valuable role for Manual Testing. It is just that manual regression testing is slow, unreliable and expensive.
- We want people to evaluate the software and make a subjective assessment of how easy and enjoyable it is to use, and to spot silly mistakes early on.
- It may be better to think about Manual Testing being off to one side, running in parallel with the developers’ work, in a more collaborative, agile, way of working
- Manual Testing is not an essential component of every Deployment Pipeline. **For many types of software it is unnecessary: automated testing can do a better job.**
- However, it is useful for software with a significant UI component, where a broader assessment of the usability of a system is helpful.

### Performance testing

- Performance Tests typically cover:
  - **Usability**: How slow is the system from the users’ point of view? Is it annoying to use?
  - **Throughput**: How much stuff can our system process?
  - **Latency**: How long does it take to get results back?
  - **Soak-Testing**: Long-running tests to find out if protracted use causes any unforeseen problems.
- Our range of Performance Tests is likely to produce large quantities of interesting data. To avoid drowning in tables and graphs, we need to **clarify what is being measured**, and define what level of performance is good enough (or not!) to create **Pass/Fail Thresholds**.
- The most sensible measures to achieve a Pass/Fail Test are **Throughput and Latency**. We capture these measurements, and establish **threshold values** that make sense in the context of our testing.
- It is important to **allow room for variance** in the tests, because there will be some.
- **Component-Based Performance Testing**
  - Which components of our system are likely to be performance critical?
  - These can be evaluated separately, in isolation from the whole system, with distinct pass/fail criteria for each component.
- **System-Level Performance Testing**
  - create a realistic, but simplified, simulation of normal patterns of use (like in Form3).
  - This allows us to replay, or simulate, different scenarios and measure their performance.
  - We can run a series of **stress-tests**, by progressively ramping-up load and thereby establishing a reasonable **worst case scenario** to identify usable, sensible, maximum and minimum thresholds for our tests.
- **Long-Running Tests**
  - Long-running tests, also known as Soak Tests should not be used to define releasability.
  - They may run for days, or weeks, and do not fit within our Deployment Pipeline timescales.
  - Soak Tests are often used as a safety net to protect against inadequate testing elsewhere in our development process. If this is the case, then the best strategy is to **fix the cause of the problem**, not react to the symptoms.
  - Long-running tests are often used to spot resource leaks.
- **Control the Variables**
  - What **external factors** are most likely to influence the system under test? Can we isolate or fake these?
  - Is there scope for doing more Component-level testing?
  - Could we run the Performance Tests on a separate, dedicated, network?
  - Are we using the same hardware and configuration for Performance Testing as we have in Production?

### Testing Non-Functional Requirements

- Non-Functional Requirements is the widely used term for technical requirements of the system, such as: scalability, resilience, fault-tolerance, security, disaster recovery, and others.
- These are behaviours which impact on the users, and, if they constitute releasability of the software, they should be evaluated as part of the Deployment Pipeline.
- **Scalability**
  - To test the scalability of our software, we can re-use the same environment we established for performance testing.
  - This should be automated and can be run periodically, e.g: at weekends.
- We can also automate common penetration tests.
- These, sometimes highly technical, security and regulatory requirements may need to involve specialists, but they are **everyone’s responsibility within the team**.

### Testing Data and Data Migration

- Continuous Delivery is not just about code. The Data that our systems produce and rely upon must be able to change too.
- **Data Migration**
  - We make Data Migration an **automated, integral part of deployment**, so that every time we deploy the system, wherever we deploy it, the migration will run.
  - There may be little or no data to migrate in an acceptance test environment, but we will run Data Migration anyway.
- **Data Migration Testing Stage**
  - unit-test the migration scripts themselves. We use **fake data** and run these tests as part of the Commit Stage to gain fast feedback on the quality of the changes >> **not really sure how to do that**
  - It may also help to increase confidence in complex Data Migrations that run at deployment time, by **rehearsing** them before release. For this we **create a Data Migration Test Stage in the Deployment Pipeline**.
  - **An Approach to Data Migration Testing:**
    - **Clone current Production Data** - automate the cloning and run scripts in the Production Environment on the cloned version
    - **Anonymise** the Production Data
    - Copy the anonymised Production Data across to the test systems to use as the basis for migration testing
    - Deploy the Release Candidate
    - Run simple smoke tests on post-migration major use cases
  - This type of testing may be helpful to build confidence in Data Migration, but in reality may have limited value if testing elsewhere is robust and effective.
- **Data Management**
  - It is much easier to evolve the structure if we **make additive changes**.
  - Deletions lose information and so can make it impossible to step back a version.
- **Recommended Techniques for Managing Data Schema Change**
  - Employ NO manual intervention in the configuration and deployment of data.
  - Automate tests to validate data, with respect to Data Migration.
  - Use Database Refactoring techniques. (The book “Refactoring Databases” by Scott Ambler, describes these in detail.)
  - **Version schemas** with monotonically increasing sequence numbers: each change in structure ticks the sequence.
  - Record every small change in a delta script identified by that sequence number.
  - Store the desired version of the schema, along with the application.
  - Store the current version of the schema along with the data.
- Maintain a record, committed along with the application, of which version of the data it needs to work.
- Create a **delta script** for each small change. Script the change in structure, and then also script any migrations that are necessary to ‘move’ the data from the previous version to this new current one. Use the schema sequence number as the ID of the script
- There may be some Data Migrations that take too long to perform at Deployment Time. For these sorts of migration, consider using **Run-Time Data Migration strategies** instead:
  - **Lazy Migrator**: Migrate old records when they are accessed.
  - **Lazy Reader**: Interpret old records and present them as new to the system on demand.
  - **Down-Time Migrator**: Search for old records to migrate when the system is otherwise idle.
- There are three categories of **Test Data**:
  1. **Transactional** - data that is generated by the system as part of its normal operation.
  2. **Reference** - mostly read-only, look-up data that is used to configure the system (usually lists of something useful).
  3. **Configuration** - data that defines the behaviour of the system.
- [Evolutionary Database Design](https://martinfowler.com/articles/evodb.html)

### Release Into Production

- **Defining Releasability**: The Deployment Pipeline is the only route to Production. We therefore need to include any and all steps that are necessary for new software to be **releasable**
- What other steps should be added to define releasability? And which should be done first?
  - Different user requirements
  - Full range of possible tests
  - Performance, technical or compliance standards assessed against thresholds.
  - Etc.
- The aim is to maximise the work that the automation does, while aiming to **minimise human intervention**.
- **Release strategies**
  - Blue/green deployment
  - Rolling transition
  - Canary release
  - A/B tests
- If we are releasing frequently, we can reduce work by auto-generating **Release Notes**, to describe the changes that we are releasing.
- We can include **Authorisations** within the Deployment Pipeline, to give us an audit record of who performed what actions.

## Whole pipeline considerations

### Infrastructure as code

- This infrastructure is a **dependency** of the system, which we control through Automation, of both the provisioning and the updating of the infrastructure, and by using effective **Version Control**. We want to know that every bit and byte in production is the one that we intend, and is reproducible.
- The best way to do this is to ensure that every change to our infrastructure flows through the Deployment Pipeline
- **Recommended Practices**
  - Use definition files. Make the infrastructure soft. Create a script that can be version - controlled.
  - Script everything so that systems are self-documenting, repeatable and auditable.
  - Version control everything.
  - Continuously test systems and processes.
  - Make changes in small steps.
  - Keep services continuously available.
  - Prefer unattended execution - push button to trigger the deployment and configuration of everything, without manual intervention at stages.

### Regulation and compliance

- There is no correlation between poor performing organisations and their size, bureaucracy and their regulation.
- Counter-productive measures to reduce risk:
  - reduce the frequency of releases,
  - make each release bigger and more complex,
  - constrain teams and encourage a culture of following a process, rather than one of experimentation and learning to find new ways to deliver better outcomes
- The DORA report states that:
  > "We found that external approvals were negatively correlated with lead-time, deployment frequency and restore time, and had no correlation with change failure rate.
  > In short, approval by an external body (such as a manager or Change Approval Board) simply doesn’t work to increase the stability of production systems...
  > However, it certainly slows things down. It is in fact worse than having no change approval process at all."
- Techniques that Facilitate Regulatory Compliance
  - LMAX example
- Knight Capital bankruptacy in 2012
  - Manual organisation of releases.
  - Manual changes to multiple servers.
  - No review of the deployment by a second technician

### Measuring Success

- There is no instant route to Continuous Delivery: it takes work. We make progress incrementally and iteratively. We take small steps and measure our progress - producing data so that we can make **Evidenced-Based Decisions** about how we can continuously improve, so that we can produce the best possible software in the most efficient way.
- The Deployment Pipeline offers a way of consistently and automatically gathering useful information about our software and how it is developed.
- Useful measures:
  1. Purpose
  2. Quality
  3. Efficiency
- **Purpose**
  - Measures of purpose will always be contextual: what is important to measure depends on the nature of the business.
  - **Pirate Metrics** - AARRR!
    - **Acquisition**: the number of people who visit the service
    - **Activation**: the number of people who have a good initial experience
    - **Retention**: the number of people who come back for more
    - **Revenue**: the number of people who subscribe, or make a purchase
    - **Referral**: the number of people who recommend the service to other people
- **Quality**
  - Change Failure Rate
  - Failure Recovery Time
- **Efficiency**
  - Throughput is a measure of the efficiency with which we produce new software, and can be
    measured as:
    - **Frequency** - how often we can release changes into Production, and
    - **Lead Time** - how long it takes to go from Commit to a releasable outcome.
- **Measures of Throughput and Stability**
  1. Change Failure Rate
  2. Failure Recovery Time
  3. Frequency
  4. Lead Time
- Virtuous circle effect.
- Continuous Integration and Trunk-based Development are proven ways to achieve high measures of Stability and Throughput
- The DORA reports also show that organisations that deploy very frequently into production are more commercially successful
- We want to make Evidence-Based Decisions, based on data not dogma.
  - We automate this measurement, in order to consistently and reliably produce these data points over time. We can then track trends, and look at averages and peak variations,
- The automated collation of this data can be used to create simple dashboards to share with the team
- **Calculating Lead Time**
  - We want to measure Lead Time and make small steps to continuously improve and get faster
- There are some rule of thumb timescales to aim for:
  - Complete Commit Stage tests in under 5 minutes
  - Complete acceptance tests and all other checks and steps through the Deployment Pipeline in under an hour
  - When a test fails, allow about 10 minutes to identify and commit a fix, or revert the change

### The LMAX Case Study

- London Multi-Asset Exchange
- Financial trading
- We started simply: building a bare-bones Pipeline, in just 2-3 weeks, to support the development of the first couple of features of the system.
- Over the next 5 years, we added to, and evolved, the Deployment Pipeline to fit the needs at the time.
- There was a development team of about 30 people in all roles, committing and evaluating changes within the same Deployment Pipeline.
- The Deployment Pipeline grew with the software to handle nearly 100,000 tests
- The Pipeline integrated with 20 to 30 external third-party systems
- Everything was version controlled, and systems and whole environments could be recreated from scratch. So Infrastructure as Code, automated infrastructure management and deployment automation were the norm.
- We adopted Pair Programming to ensure the quality of the software and to spread expertise throughout the team. The programming pairs organised their work around testing: starting with a new story and writing at least one acceptance test for each acceptance criteria, for every new feature.
- A Domain Specific Language (DSL) was developed to write acceptance tests in a way that described the behaviour of the system, without describing how the system actually worked.
- LMAX applied Continuous Integration techniques. The developers committed regularly, every few minutes: working on Trunk.
- **The Commit Stage in 4 Minutes**
  - The Commit Stage comprised 35 - 40,000 unit tests, a few hundred analysis tests (such as asserting coding standards) and a few hundred data migration tests.
  - running parts of the build and many of the tests **in parallel**.
  - If all tests passed, the Commit Stage packaged the software, generating deployable components of the system - mostly JAR files
- **The Acceptance Stage in 40 Minutes**
  - The team wrote new acceptance tests for every success criteria, for each new feature, of a constantly growing system.
  - The Acceptance Stage grew to include 15 - 20,000 whole system tests.
  - We built an acceptance test grid of some 40 - 50 servers, which dynamically allocated test cases to servers as they became free.
  - when the Acceptance Stage was next free, the newest Release Candidate was deployed. This meant that **changes were batched up**, avoiding the potential problem of a backlog of work being generated by the Commit Stage, which would have meant that the slower Acceptance Stage would never catch-up.
  - Once the acceptance tests were written, the developers practised fine-grained TDD
- in addition to the technical unit tests
  and user-focussed acceptance tests, we also included:
  - Static Analysis for Code Quality
  - Security Features
  - Fail-Over Scenarios
  - Admin Scenarios
  - Time Travel Tests
  - Manual Exploratory Tests
  - Performance Tests
  - Scalability and Resilience Evaluations
  - Data Migration Tests
  - Compliance and Regulatory Requirements
  - Tactical Tests to Fail Fast for Common Errors
- **Manual Tests**
  - We created a simple UI, which showed the Manual Testers a list of Release Candidates that had passed acceptance testing, so they didn’t waste time on work that might not pass automated testing.
  - Manual test environments were configured using the same systems and tools as used in all other environments (including Production).
- **Performance Tests**
  - LMAX implemented system-level performance testing by recording the inputs to the system during a period of high-demand. We then instrumented this recording so that it could be, computationally, scaled-up, and ran these tests at 5x normal load.
- **Scalability & Resilience**
  - Once a month we used scalable system-level tests to ramp-up load, 5x, 10x, 20x and so on, until the system showed signs of stress.
  - This was automated, and scalability runs were carried out over a weekend when the system performance environment wasn’t needed for development
- **Into Production**
  - LMAX **practises Continuous Delivery, not Continuous Deployment**. Changes were not automatically released once they had successfully transited the Pipeline.
  - **Smoke tests** and **health checks** were run to confirm that the system was live and ready for use, using the same DSL that we had used for acceptance testing.
  - Release into Production usually took between 5 and 10 minutes, including data migration
- https://martinfowler.com/articles/lmax.html
- **Take-Aways**
  - A modular approach to design makes it easier to change out technologies.
  - Automate everything you can to improve speed, version control, consistency, repeatability and reliability.
  - Assign a unique ID to each Commit and Release Candidate, so that your Pipeline can generate a complete record of every change.
  - The unique ID should make it clear which Release Candidate is the newest so that the Pipeline does not waste time on older out-dated versions, or create a backlog. Sequence numbers work well for this.
  - Make it a shared team priority to fix Pipeline failures before starting new work
  - Think about the range of different types of “users” of your system, and reflect their requirements in Pipeline tests and processes
  - Use the same configuration and mechanisms for automated testing, manual testing and production
  - **Grow the Pipeline incrementally. Start simply: add sophistication as you learn and your system grows. Follow a Lean approach.**

### The Role of the Deployment Pipeline

- We are optimising the software development process from “Idea” to “Valuable software in the hands of our users.”
- We measure success in this optimisation based on the speed and quality of the feedback that we can gain.
- If we succeed, we end up with a continuous flow of ideas.

## My reflections

- Not mention to Git hooks for running fast tests and fast checks (e.g. static analysis).
- I disagree with the need of a RC saved in the Artifact Repository. When you do Continuous Deployment with TBD, that might not be necessary.
- "Commit Stage tests are technically focused and intended to support programming." >> I disagree, there can be fast tests (doubling external-slow-flaky dependencies) from "the outside", that's much more than "technical".
- p48: incluye manual testing como paso ANTES de desplegar en Prod > MEH!!
- Too much text... missing lots of practical examples (e.g. with a GH repository).

## Lessons learned

- When the Acceptance Stage was next free, the newest Release Candidate was deployed. This meant that **changes were batched up**, avoiding the potential problem of a backlog of work being generated by the Commit Stage, which would have meant that the slower Acceptance Stage would never catch-up.

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
