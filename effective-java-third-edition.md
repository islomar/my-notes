# Notes from "Effective Java: Third Edition"

## Chapter 1
TB

## Chapter 2
### Item 1: consider static factory methods instead of constructors
* Criticism: https://dzone.com/articles/constructors-or-static-factory-methods
* Advantages: 
  * they have names
  * they're not required to create a new object each time they're invoked (singleton, immutable classes, noninstantiable, etc.)
  * they can return an object of any subtype of their return type: interface-based frameworks
  * the class of the returned object can vary from call to call as a function of the input parameters
  * you might use the interface static methods (>Java8) for this: https://github.com/shekhargulati/java8-the-missing-tutorial/blob/master/01-default-static-interface-methods.md
* Disadvantages:
  * You can not subclass unless there is a public/protected constructor
  * They are hard for programmers to find
  
## General
* Java 8: interfaces can contain static methods.
* Java 8 requires all static members of an interface to be public.
* Java 9 allows private static methods, but static fields and static member classes are still required to be public.
