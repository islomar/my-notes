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
* Classes that do one thing *isloate* that thing from the rest of your application. This isolation allows change without consequence and reuse without duplication.


## Chapter 3: Managing Dependencies
* To collaborate, an object must know something about others. *Knowing* creates a dependency.
* An object depends on another object if, when one object changes, the other might be forced to change in turn.
* CBO: Coupling Between Objects.
* Law of Demeter.
* Inject dependencies.
* If you cannot remove unnecessary dependencies, you should isolate them within your class.
* Isolate instance creation.
* Remove argument-order dependencies, e.g. using hashes for initialization arguments (hhmm...); you can even mix it: take a few fixed-order arguments, followed by an options hash.


## Chapter 4: Creating Flexible Interfaces
TBD

## Chapter 5: Reducing Costs with Duck Typing
TBD

## Chapter 6: Acquiring Behavior Through Inheritance
TBD

## Chapter 7: Sharing Role Behavior with Modules
TBD

## Chapter 8: Combining Objects with Composition
TBD

## Chapter 9: Designing Cost-Effective Tests
TBD

## Interesting Links
* https://medium.com/@mithi/review-sandi-metz-s-poodr-ch-1-4-wip-d4daac417665
* POODR W&A with Sandi Metz: https://www.youtube.com/watch?v=XtEi3Xv2O_w
* Notes from someone else: https://gist.github.com/speric/31ae0987d21eac1d4f87
* Sandi Metz talk "Nothing is something": https://www.youtube.com/watch?v=OMPfEXIlTVE
