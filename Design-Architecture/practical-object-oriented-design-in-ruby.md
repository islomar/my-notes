# Practical Object-Oriented design in Ruby (POODR)

Author: Sandi Metz

http://www.poodr.com/
https://github.com/skmetz/poodr


## Chapter 1: Object-Oriented Design
* Change is unavoidable.
* Object-oriented design is about **managing dependencies**.
* Design is thus an art, the art of arranging code.
* The purpose of design is to allow you to do design **later** and its primary goal is to reduce the cost of change.
* Object-oriented software fails when the act of design is separated from the act of programming.
* SOLID and design patterns.
* OO: 
    * messaging and encapsulation.
    * methodsd get invoked in response to messages
    * the *String* class, that is, the blueprint for new string objects, *is itself an object*. It's an instance of the *Class* class.

## Chapter 2: Designing Classes with a Single Responsibility
* Design is more the art of preserving changeability than it is the act of achieving perfection.
* Code should be TRUE: Transparent, Reasonable, Usable and Exemplary
* Classes should have a single responsibility.
* When everything in a class is related to its central purpose, the class is said to be *highly cohesive* or to have a single responsibility.
* SRP requires that a class be cohesive.
* Do not feel compelled to make design decisions prematurely: "What is the future cost of doing nothing today?"
* Hide instance variables: always wrap instance variables in accessor methods instead of directly referring to variables.
* Hide data structures
* Enforce Single Responsibility Everywhere: methods, like classes, should have a single responsibility.
* Classes that do one thing *isolate* that thing from the rest of your application. This isolation allows change without consequence and reuse without duplication.


## Chapter 3: Managing Dependencies
* To collaborate, an object must know something about others. *Knowing* creates a dependency.
* An object depends on another object if, when one object changes, the other might be forced to change in turn.
* CBO: Coupling Between Objects.
* Law of Demeter.
* Inject dependencies.
* If you cannot remove unnecessary dependencies, you should isolate them within your class.
* Isolate instance creation.
* Remove argument-order dependencies, e.g. using hashes for initialization arguments (hhmm...); you can even mix it: take a few fixed-order arguments, followed by an options hash.
* You can also completely remove the defaults from the constructor and isolate them inside of a separate wrapping method.
* Use factories: isolate all knowledge of the external interface in one place.
* Do not allow external dependencies to permeate your code; protect yourself by wrapping each in a method that is owned by your own application.
* Depend on things that change less often than you do:
    * Some classes are more likely than others to have changes in requirements
    * Concrete classes are more likely to change than abstract classes.
    * Changing a class that has many dependents will result in widespread consequences.
      

## Chapter 4: Creating Flexible Interfaces
* OO is *made up* of classes but *defined* by messages.
* Messages reflect the living, animated application.
* The conversation between objects takes place using their *interfaces*
* *Interfaces* can be:
    * Within a class (e.g. in Java).
    * Duck typing
* The public parts of a class are the stable parts; the private parts are the changeable parts.
* The design goal is to retain maximum future flexibility while writing only enough code to meet today's requirements.
* Public interfaces:
    * Reveail its primary responsibility
    * Are expected to be invoked by others
    * Will not change on a whim
    * Are safe for others to depend on
    * Are thoroughly documented in the tests
* It shows an example through sequence diagrams.
* You don't send messages because you have objects, you have objects because you send messages
* Tell don't ask.
* The best possible situation is for an object to be completely independent of its context.
* Construct public interfaces with an eye toward minimizing the context they require from others.
* Avoid train wrecks.
* Demeter: it might be not so bad to NOT avoid message chains that return *attributes* (balance the likelihood and cost of change against the cost of removing the violation)
* Certains "violations" of Demeter reduce your application's flexibility and maintainability, while others make perfect sense.
* The train wrecks of Demeter violations are clues that there are objects whose public interfaces are lacking.


## Chapter 5: Reducing Costs with Duck Typing
* Duck types are public interfaces that are not tied to any specific class.
* Concrete code is easy to undertstand but costly to extend. Abstract code may initially seem more obscure but, once understood, is far easier to change.
* Polymorphism in OOP referes to the ability of many different objects to responsd to the same message.
* Hidden ducks: Case statements, isInstanceOf()...
* Tests are the documentation for duck types.
* *Monkey patching*: changing base classes (watch out!!)


## Chapter 6: Acquiring Behavior Through Inheritance
* Small, trustworthy self-contained objects with minimal context, clear interfaces, and injected dependencies are inherently reusable.
* Inheritance is, at its core, a mechanism for *automatic message delegation*. It defines a forwarding path for not-understood messages.
* JS has prototypical inheritance and Ruby has *modules*.
* The problem that inheritance solves: highly related types that share common behavior but differ along some dimension.
* Sublcasses are *specializations* of their superclasses.
* It almost never makes sense to create an abstract superclass with only one sublcass.
* The author recommends a up-down-up approach: first take all the superclass content to a subclass, then move whatever is common to the superclass (for not leaving anything specif by accident at the superclass).
* Use the *template method pattern*.
* Avoid calling super() from a subclass: use hook messages through template method pattern also instead, e.g. with a post_initialize(). 
      * **New sublcasses need only implement the template methods**.
      * Abstract superclasses use the template method pattern to invite inheritors to supply specializations.
      

## Chapter 7: Sharing Role Behavior with Modules
* Use of classical inheritance is always optional; every problem that it solves can be solved another way.
* Some problems require sharing behavior among otherwise unrelated objects. This common behavior is orthogonal to class; it's a *role* an object plays.
* In Ruby, you can achieve it with *modules*.
* Let objects speak for themselves: objects should manage themselves; they should contain their own behavior.
      * Avoid anemic model.
      * Tell don't ask
* Classes themselves are objects in their own right: they're an instance of the Class class.
* All ot the code in an abstract superclass should apply to every class that inherits it.
* Superclasses should not contain code that applies to some, but not all, subclasses.
* Subclasses should not override a method.
* Subclasses agree to a *contract*; they promise to be substituable for their superclasses.
* **Liskov Substitution Principle (LSP)**: A subclass can be used anywhere its superclass would do; you should be able to substitute a superclass S by its subclass T.
* Avoid writing code that requires its inheritors to send super; instead use hook messages.
* Create shalow hierarchies: avoid deep or wide hierarchies.


## Chapter 8: Combining Objects with Composition
* UML: composition is represented as a black diamond.
* *Composition* often involves delegation but the term means something more. A *composed* object is made up of parts with which it expects to interact via well-defined interfaces.
* Composition describes a *has-a* relationship.
* *Aggregation* is exactly like composition except that the contained object has an independent life.
* Classical inheritance is a *code arrangement technique*.
* Composition allows objects to have structural independence, but at the cost of explicit message delegation.
* Composition contains far fewer built-in depdencies than inheritance; it is very often the best choice.
* **Inheritance**:
   * Use of inhteritance results in code that can be described as *open-closed*.
   * Hierarchies are therefore *exemplary*; by their nature they provide guidance for writeing the code to extend them.
   * You might be writing code that will be used by others for purposes you did not anticipate. It's easy to extend incorrectly modeled hierarchies.
   * This is the classical inheritance's greatest stregth and biggest weakness; sublcasses are bound, irrevocably and by design, to the classes above them in the hierarchy. These built-in dependencies amplify the effects of modifications made to superclasses.
* **Composition**:
   * Create many small objects that contain straightforward responsibilities that are accesible through clearly defined interfaces.
   * Composed objects tend to consist of simple, discrete entities that can easily be rearranged into new combinations.
   * The combined operation of the whole may be less than obvious.
   * The benefits of structural independence are gained at the cost of automatic message delegation.
* Inheritance is specialization.
* Inheritance is best suited to adding functionally to existing classes when you will use most of the old code and add relatively small amounts of new code.
* Use composition when the behavior is more than the sum of its parts.
* Use inheritance for *is-a* relationships.
* Use duck types for *behaves-like-a* relationships.
* Use composition for *has-a* relationships.
* The more parts an object has, the more likely it is that is should be modeled with composition.


## Chapter 9: Designing Cost-Effective Tests
* Changeability is the only design metric that matters; code that's easy to change *is* well-designed.
* Good design preserves maximum flexibility at minimum cost by putting off decisions at every opportunity, deferring commitments until more specific requirements arrive.
* The true purpose of testing is to reduce costs.
* Fixing bugs early always lower costs.
* Tests provide the only reliable documentation of design.
* Tests allow you to safely defer design decisions.
* Good design naturally progressses toward small independent objects that rely on abstractions.
* Tests are the canary in the coal mine; when the design is bad, testing is hard.
* Tests should concentrate on the incoming or outgoing messages that cross an object's boundaries.
* Value vs. behavior testing.
* Objects should make assertions about state *only* for messages in their own public interfaces.
* *Queries*: outgoing messages with no side effects.
* *Commands*: outgoing messages with side effects.
* Proving that a message gets sent is a test of behavior, not state, and involves assertions about the number of times, and with what arguments, the message is sent.
* Incoming messages should be tested for the state they return. Outgoing command messages should be tested to ensure they get sent. Outgoing query messages should not be tested.
* **BDD** takes an outside-in approach, creating objects at the boundary of an application and working its way inward, mocking as necessary to supply as-yet-unwritten objects.
* **TDD** takes an inside-out approach, usually starting with tests of domain objects and then reusing these newly created domain objects in the tests of adjacent layers of code.
* Isolate the Object Under Test
* Inject dependencies as roles.
* Roles need tests of their own.
* Use tests to document roles.
* In general, don't test private methods.
* Mocks are tests of behavior, as opposed to tests of state.
* The author created a test for the interface, which gets "inherited" by the tests who validate the implementations of that interface.
* She creates as well a test for the subclasses (e.g. to check that it implements the template methods), which must be "inherited" as well by the implementationt tests.
* The author creates its own double for a role in a test (or you can use the corresponding doubles library).
* You must test concrete abstract behavior.
* Write one shareable test for the overall interface and another for the subclass responsibilities. Diligently isolate responsibilities.


## Interesting Links
* https://medium.com/@mithi/review-sandi-metz-s-poodr-ch-1-4-wip-d4daac417665
* POODR W&A with Sandi Metz: https://www.youtube.com/watch?v=XtEi3Xv2O_w
* Notes from someone else: https://gist.github.com/speric/31ae0987d21eac1d4f87
* Sandi Metz talk "Nothing is something": https://www.youtube.com/watch?v=OMPfEXIlTVE
