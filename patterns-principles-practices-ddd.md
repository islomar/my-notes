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
* The **domain** (problem space) represents the problem area you are working withing. It is the "reality".
* The **domain model** (solution space) is abstraction of the problem domain, expressed as a acode impletementaion that represents a view, not the reality, of the problem.
* A **model** is represented as an analysis model and a code model. They are one and the same.
* The **analysis model** is a collection of artifacts that describe the model of a system. E.g. in UML.
* The **code model**: we should keep in in close synergy twith the analysis model, the design. E.g. sharing an UL.
    * The code model is the realization of the analysis model.
* **Model-Driven Design**:
    * it is the process of binding an analysis model to a code implementation model, ensuring that both stay in sync and are useful during evolution.
    * It differs from DDD in that is focused on implementation and any contraints that may require changes to an initial model, whereas **DDD focuses on language, collaboration, and domain knowledge**.
* The true value of follwing the DDD philosophy is in the collaboration of develoipers and domain experts to produce a better understanding of the domain. The code that is written is just an artifact of that process.    
* The UL should be clear and concise. Technical terms should be removed so they don't distract from business concepts.
* Keep linguistic consistency.
* Stay away from overloaded terms like poilcy, service or manager.
* A **specification** represetns a business rule that needs to be sastisfied by at least part of the domain model.
* The best way to create effective domain models is tofirstly focus on areas of the application that are important to the business.
* **A domin model is not a model of real life**. It is a system of abstractions on reality. It should exclude any irrelevant details of a domain that do not serve to solve problems.
* Try not to model real relationships; instead define associations (meaningful connections) in terms of invariannts and rules in the system.
* A domain model nees to be constantly refined to continually be useful.
* Adeveloper's purpose is not to code; it's to solve problems.
* Limit your abstractions: it is far better to be explicit than worry about not repeating yourself as trying to lie loosely related concepts under a super class can cause problems with code maintenance.
* Abstract behavior not implementations:
    * don't automatically abstract concepts that are related.
    * create abstract classes or interfaces based on behavior; keep them small and focused.
* Don't stop at the first good idea: 
    * constsantly refactor to your understanding of the problem domain.
    * A model is only useful for a moment in time; don't get attached to elegant designs.
* Try not to create a UL for everything. Areas and subdomains that are not complex will not benefit from a UL.



### Chapter 5: Domain Model Implementation Patterns
* The domain layer, at the hearf of your application, is the area of code that contains your domain model. It is isolated from infrastruture and presentation patterns.
* Some domain model patterns:
    * Domain model pattern
    * Transaction script
    * Table module

#### Domain model
* It is an OO model that incorporates both behavior and data.
* It incorporates business process and associations, rules, and rich domain logic.
* It is based on the premise that there is no database.
* Classes are free from infrastructure concerns and are completely persitence ignorant.
* You should focus on the verb and actions of a problem domain when modeling.
* In a domain model each object is responsible for a specific task. Objects work together to fulfill business use cases by delegating to each other.

#### Transaction Script
* It follows a procdural style of development rather than an OO approach.
* Useful for the parts of your domain that have little or no logic.
* Typically a single procedure is created for each of your business transactions.
* Problems when the application grows and the business logic complexities increase...


#### Table module
* It maps the oobject model to the database model. A single object represetnas a table or view in the database.
* The object is responsible for all persistence needs along with business logic behavior.
* Active Record
* Anemic Domain Model
    * Only useful when using functional programming.
* The model is OK for simpler parts of the domain that are isolated by a bounded context and that are simpley forms over data (CRUD).


### Chapter 6: Maintaining the Integrity of Domain Models with Bounded Contexts
* Bounded contexts enable a model to stay consistent and meaningful.
* Collaboration overhead and organization inefficiencies are major problems a monolithic model is likely to cause.
* Sometimes, a single physical entity in the problem domain can mistakenly be classified as a single concept in code.
    * E.g. a `product` or a `ticket` can be different in the Sales context and the Procurement context.
* Correlation IDs are used to join up the lifecycle of a physical entity that exists in multiple contexts (e.g. a product).
* When there are no boudnaries in the code, it is too easy for coupling to occur.
* Your domain model is not your enterprise model.
* Use bounded contexts to divide and conquer a large model
* A bounded context makes it explicit to teams what the model is responsible for and what is is not.
* A bounded context is first and foremost a linguistic boundary.
* One of the most important parts of DDD is the protection of boundaries.
* It is important when developing the application that you isolate models within bounded contexts to avoid the blurring of responhsibilities that can lead to code that resembles a BBoM.
* Bounded context help to organize code at a macro level.
* Business capabilities are often strong indicators of linguistic boundaries.
    * A **business capabilitiy** is a grouoing of people in an organization that collaborate on business processes made up of lower-level capabilities.
* Conway's Law
* Try to retain some communication between teams
    * Cross-team pair programming.
    * Regular sessions in which teams share with other development teams whtat they are working on.
    * Diagrams and lightweight documentation
* **Subdomains** represent the logical areas of a problem domain. They exist to distill the problem space and break down complexity.
    * They reflect the business capabilities of the business organizational structure.
* **Domain models** are built to fulfill the uses cases of each of th subdomains. Ideally there would be a one-to-one mapping between models and subdomains.
    * **Bounded contexts** exist in the *solution space*.
    * A bounded context is a concrete technical implementation that enforces boundaries between models within an appication.
* A subdomain could contain more than a single model and a model could span more than a single subdomain
* A *bounded context* owns the vertical slice of functionality from the presentation layer, through the donmain logic layer, on to the persistence
    * A bounded context is used to define the applicatibility of a model in the solution space.
* If a bounded context contains a supporting or generic domain with a low logic complexity, you might want to favor a more CRUD style of development.
* You can apply different architectural patterns to the different bounded contexts.
* A **composite UI** shows data from multiple bounded contexts on the same web page.
* **Autonomy** is a key charaectteristic of bounded contexts that isolates teams from external distractions, and isolates models from unrelated concepts.
* **A single team should own a bounded context**


### Chapter 7: Context mapping
* A context map should be simple enough to be understuood by domain experts and development teams alike.
* It is a high-level, han drawn diagram that communicates a holitic picture of the contexts in play.
* It must demonstrate the integration points and the flow of data between bounded contexts.
* It is vital to understand who is responsible for each context that is required to change and how this change will take place.
* **Common relationships between bounded contexts**:
    * **Anticorruption layer**
        * Used to avoid corruption and protect your model from external influences. The interface adapts and translates to the interface of the other ocntext.
    * **Shared kernel**
        * Sharing part of the model to ease integration between two teams working on two separate bounded contexts that have a lot of crossover in therms of domain concepts and logic.
        * To be used if you have two bounded contexts in the same subdomain that share a subset of domain logic.
    * **Open host service**    
        * If multiple consumers need the same transforrmation logic needed from our model, we can provide a set of services to expose the functinality of a context via a clear defined, explicit contract.
        * To communicate with me, here you have my API (support multiple clients)
    * Separate ways: when bounded contexts are too costly to integrate an other nontechnical methods can be found (e.g. user interfaces, manual processes).
    * Partnership: two teams that have a common goal
        * An upstream/downstream relationship: customer supplier (teams work together to create ana greed-uon interface that satisfies both; the customer part of the relationship is the downstream context) or conformist.       
* When drawing the context map, you can include the type of relationship
* **All the development teamns in the organization need to understand the context map**
* **The goal is to understand an communicate Ownership and Responsibility**


### Chapter 8: Applicatin Architecture
* DDD focuses on managing the challenges of building applictions with complex domain logic by isolating the business compelxities from the technical concerns
* A layered architecture: Clean Architecture, Heagonal architecture (Ports & Adapters), Onion architecture...
* Dependency niversion
* **Domain Layer**
    * It conains the abstract model, it does not depend on anythingn else and is agnostic to the technicalities of the licents it serves and data stores that persist the domain objects.
* **Application Layer**
    * It represents the use cases and behavior of the applicaiton.
    * Coordination, orchestration
    * Its responsiblitiy is to expose the capabilities and operations available to the application.
    * Application services contain application logic only.
    * It should be procedural in style an thin.
    * It contains the workflow steps required tofulfill a business use case.
    * **Read Models**: Sometimes it isi preferable for the application service layer to provide a specific view of domain state directly from the data source.
        * To prevent the model from having to change because of presentation needs, you can store the view data separately in a data schemna that is best suited to querying. E.g. you can store changes that occur within the domain model and use these as the basis for reporting requirements (e.g. rasing events that are stored for querying)
    * Application services should be ignorant to what consumes its functionality.        
    * You can create a **process manager** to coordinate a business process that spans more than a single bounded context.    
* **Infrastructural Layer**
    * Enable the application to be consumed (e.g. UI, web service, message endpoints...)
    * Technical implementation of storing information on the state of domain objects.
    * Logging, security, notifcation and integration with other bounded contexts and applications.
* **Testing**
    * For the infrastructure layer, favor integration and end-to-end testing.
    * The application service layer and the domain layer can be tested with unit tests and mocks/stubs for external resources
* Communication across layers: e.g. DTOs, application event objects.
* **Don't share data schema betweeen Bounded Contexts**
    * Bounded contexts can share the same DB, but data shcemas should be separate.
    * Ideally a bounded context should have its own database.
* Applicationss can be composed of more than one bounded context.
* Some people believe that the voundary of a bounded contewxt should extend to the presentation layer.


## Chapter 9: Common problems for teams starting out with DDD
* Overemphasizing the importance of tactical patterns.
* Using the same architecture for all bounded contexts
* Missing the real value of DDD: collaboration, communication, and context.
* Lack of a shared language.
* Lack of a domain expert.
* Underestimating the cost of applying DDD.
* Applying DDD to every problem
* Sacrificing pragmatism for needless purity
* **DDD is about the process of learning, refining, experimenting, and exploring in the quest to discover a useful model in collaboration**


### Chapter 10: Applyint the Principles, Practices , and Patterns of DDD
* DDD is not a silver bullet.
* Don't sell DDD as a project methodology!!
* **Focus on the  alignment with the business**
* Technology can complicate problem solving.
* Applying the principles of DDD
    * Start simple
    * Understand the Vision
        * Align your team with stakeholder's expectations.
        * What is the business goal/driver for this product?
        * What value will this product bring to the business?
        * How will you know if this is a successs? What does good look like?
        * How is this different from what has been done before?
* Capture the required behaviors. **The why part is essential**.
* If you find that the problem domain is becoming too large to manage, you can ease cognitive load by abstracting the problem to a higher level by creating **subdomains**.
* When there is little logic and merely data manipulation, you should follow a simpler method to manage domain logic, such as transaction script or active record.
* Understand the reality of the landscape: **create and share a context map**
* DDD doesn't work without a domain expert. Domain experts are your primary source of knowledge.
* **Your initial model will be wrong**.
* Start with an anemikc domain or simpler patterns, and refactor toward the rich domain model when needed.
* Lean on the anticorruption layer pattern to create a boundary between your new code an the existing code.
* Dopn't strive for perfect code; strive for perfect boundaries.
* A useful model is arrived at through hundresds of small refactorings.
* For a complex core domain, a team should produce at least three models.
* Don't get attached to ideas.
* **Design a model so that the most freque3nt modification of the model causes changes to the least number of types**.
* Be careful of premature refactoring.
* Any decisions you make in code need to be explicitly fed back to the domain experte and captured as a concept of the model.
* A domain model should communicate the intent of the business.
* Complex edge cases do not always need automated solutions.
* Dont's assume anything, keep things simple, delay large design decisions, and wait for complexity or new behaviors to challenge your solution.


## PART II. Strategic patterns: communicating between bounded contexts
### Chapter 11: Introduction to Bounded Context Integration
TBD


### Chapter 12: Integratin via Messaging
TBD

### Chapter 13: Integrating via HTTP with RPC and REST
TBD

## Extra readings
* https://medium.com/nick-tune-tech-strategy-blog/uncovering-hidden-business-rules-with-ddd-aggregates-67fb02abc4b?
* [The Context Game](http://codebetter.com/gregyoung/2012/02/29/the-context-game-2/), page 85