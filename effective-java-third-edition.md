# Notes from "Effective Java: Third Edition"

## Chapter 1: Introduction
* The language supports four kinds of types: interfaces, classes (including enums), arrays and primitives. The first three are known as *reference types*
* Class instances and arrays are objects.
* A class's members consist of its fields, methods, member classes and member interfaces.
* A method's *signature* consists of its name and the types of its formal parameters ()it does *not* include the method's return type).


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
* Common names: from(), of(), valueOf(), instance(), getInstance(), create(), newInstance(), getType(), newType(), type()

### Item 2: Consider a builder when faced with many constructor parameters
* Avoid *telescoping constructor*
* Avoid *JavaBeans patterns*: empty constructor plus setters. It precludes generating immutable classes.
* Use the Builder pattern! The builder is typically a static member class. You finally call a parameterless *build* method
* It stimulates *named optional parameters*
* Possible disadvantage in performance-critical situations: in order to create an object, you must first create its builder.
* The Builder pattern is a good choice when disgning classes whose constructors or static factories would have more than a handful of parameters.

### Item 3: Enforce the singleton property with a private constructor or an enum type
* Making a class a singleton can make it difficult to test its clients
* Common ways: private constructor and export a public static member (either field or static factory)
 * To make it serializable: implements Serializable, make the field *transient* and implement readResove()
* Another way: declare a single-element enum. It's often the best way.

### Item 4: Enforce noninstantiability witha private constructor
TBD

### Item 5: TBD
TBD

### Item 6: TBD
TBD

### Item 7: TBD
TBD

### Item 8: TBD
TBD


## Chapter 3: Methods common to all objects
TBD

## General
* Java 8: interfaces can contain static methods.
* Java 8 requires all static members of an interface to be public.
* Java 9 allows private static methods, but static fields and static member classes are still required to be public.
* *Simulated self-type idiom*: workaround for the fact that Java lacks a self type.
