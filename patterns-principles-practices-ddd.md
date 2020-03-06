# Notes for the book "Patterns, Principles, and Practices of Domain-Driven Design"
* http://wrox.com/go/domaindrivendesign

## PART I. The principles and practices of Domain-Driven Design

### Chapter 1: what is Domain-Driven Design
* An **Analysis Model** is used to describe the logical design and structure of a software application. It is the represetnation of SW that non-technical people can conceptualize in order to understand how software is constructed.
* * The **Strategic Patterns** of DDD
    * **Core domain**
    * Focus effort and talent on the core **subdomain(s)**
    * **Ubiquitous Language** (UL)
    * **Bounded contexts**: it ensures that the **integrity** of the models is retained.
    * **Context maps**: relationship between bounded contexts.
* * The **Tactical Patterns** of DDD (aka *model building blocks*): collection of patterns that help to create effective models for complex bounded contexts.
* The **Strategic patterns** shape the solution, while **tactical patterns* are used to impliment a rich domain model. Strategic patterns can be useful for any application but tactical patterns are only useful if your model is sufficiently rich in domain logic.
* The **Problem Space** and the **Solution Space**
    * DDD's impact in the problem space is to reveal what is important and where to focus effort.
    * The solution side of DDD covers patterns that can shape the archictecture of your applications and make it easier to manage.
* Focus on the Core Domain: it's the unique selling point.
* Learning through collaboration between the development teams and business experts. Knowledge crunching.
* Creating models through exploration and experimentation: for every good design there must be at least three bad ones.
* Communication: the single **most important facet of DDD** is the creation of the UL, the ability to effectively describe a model built to represent a problem domain.
* Each context defines a **linguistic boundary**.
* Consntantly evolve the model.
* DDD is architecturally agnostic.
* DDD is a language- and domain-centric approach to software development.


### Chapter 2: Distilling the problem domain
* UL: apply a shared language rich in domain-specific terminology
* Domain experts vs Stakeholders
    * **Stakeholders** communicate the business goals and the inputs and outputs of the system. The system captures these as busines use cases.
* Patterns for **effective knowledge crunching**
    * Focus on the most interesting conversation.
        * Which parts of the system are hard to use?
        * Which manual processes stop you from doing more crateive, value-adding work?
    * Start from the Use Cases
    * **Powerful questions**
        * Where does teh need of this system come from?
        * How will this system give value to the business?
        * What would happen if this system wasn't built?
        * http://codebetter.com/gregyoung/2012/02/29/powerful-questions-2/
    * Sketching: keep your diagrams at a consistent level of detail
    * CRC: Class Responsability Collaboration Cards
    * Defer the naing of concepts in your model:
        * Premature naming can be a problem: selecting an existing word early in the process shapes our thinking.
        * http://codebetter.com/gregyoung/2012/02/28/the-gibberish-game-4/
        * If you find yourself appending *service* or *manager* to a class or concept, think more creatively.
    * Behaviour-Driven development
        * A **feature** describes a behavior that gives value to the business.
        * You write then several feature **stories** and **scenarios**
    * Rapid prototyping
        * Screen mock-ups
        * https://skillsmatter.com/podcast/open-source-dot-net/mystery-ddd
        * https://sourcemaking.com/antipatterns/analysis-paralysis
* Look for **existing models**
    * https://www.goodreads.com/book/show/85002.Analysis_Patterns
    * Ask for existing process maps and work flow diagrams to help you understand the domain at a deeper level
    * Don't be afraid of experimentation: there is not a correct model.
    * Event Storming
        * Domain event
        * Trigger for the event, e.g. user action (command), an external system, etc.
        * http://ziobrando.blogspot.co.uk
    * Impact Mapping
        * What impacts the business is trying to make?
        * Impact > Actors > Tasks
        * Create a mind-map-like diagram.
        * http://www.impactmapping.org
    * Business Model Canvas
    * Deliberate Discovery
        * https://dannorth.net/2010/08/30/introducing-deliberate-discovery/
        * Lear about areas of the problem domain that you are ignorat about
        * "Ignorance is the single greatest impediment to throughput"
    * Model Exploration Whirlpool
        * https://domainlanguage.com/ddd/whirlpool/
        * A method of modeling and knowledge crunching that can complement other agile methodologies.
        * It contains the following activities: scenario exploring, modeling, challenging the model, harvesting and documenting, code probing


### Chapter 3: Focusing on the Core Domain
* Don't blindly follow the users
* A **domain vision statement** can be created at the start of a project to explictly capture what is central to the success of the software, what the busines goal is, and where the value is.
* Don't get subdmoains confused with the organizational structure of a company. Subdomains represent areas of capability, define business processes, and represent the functionalyty of a system.
* Try not to bring technical concerns into conversation when you are analyzing the problem space.
* Domain types:
    * Generic domains 
        * E.g. reporting, notification; it does not define the application
        * Look to buy in software for them.
    * Core domains: 
        * the unique product offering from a rival's , what gives a competitive edge in the market
        * what makes your system work building?
    * Supporting domains: 
        * enablers for the core domain and the application
        * example for Amazon: browsing the catalog for products: it does not define it as a company and is not different from any other e-commerce site.
        * If possible, buy off-the-shelf solutions or do not invest heavily in these systems.
* Not alñ parts of asystem will be well designed
* Focus on clean boundaries over perfect models: **anticorruption layer**
* The core domain doesn't always have to be perfect the first time
* Build subdomains for replacement rather than reuse.


### Chapter 4: Model-Driven Design
TBD

### Chapter 5: Domain Model Implementation Patterns
TBD

### Chapter 6: Maintaining the Integrity of Domain Models with Bounded Contexts
TBD

### Chapter 7: Context mapping
TBD

## PART II. Strategic patterns: communicating between bounded contexts
### Chapter 11: Introduction to Bounded Context Integration
TBD


### Chapter 12: Integratin via Messaging
TBD

### Chapter 13: Integrating via HTTP with RPC and REST
TBD

## Extra readings
* https://medium.com/nick-tune-tech-strategy-blog/uncovering-hidden-business-rules-with-ddd-aggregates-67fb02abc4b?
