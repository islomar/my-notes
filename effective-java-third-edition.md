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

### Item 4: Enforce noninstantiability with a private constructor
* There might be good reasons for creating a non instantiable class:
 * Group related methods on primitive values or arrays.
 * Group static methods, including factories
 * Group methods on a final class, since you can't put them in a subclass
* Attempting to enforce noninstantiability by making a class abstract does not work: you might subclass it and the instantiate the subclass.
* A class can be mad noninstantiable by including a private constructor which throws an Exception.

### Item 5: Prefer dependency injection to hardwiring resources
* Static utility classes and singletons are inappropriate for classes whose behavior is parameterized by an underlying resource.
* Solution: pass the resource into the constructor when creating a new instance.
* DI is equally applicable to constructors, static factories and builders.
* A useful variant is to pass a *resource factory* to the constructor
* DI frameworks: Dagger, Guice, Spring...

### Item 6: Avoid creating unnecessary objects
* `String s = new String("patata"):` DON'T DO THIS!!!
* `String s = "patata"`: it is guaranteed that the object will be reused by any other code running inthe same VM that happens to  contain the same string literal.
* You can avoid creating unnecessary objects by using *stastic factory methods*
* If creating an object is expensive, you can cache it for reuse (see Pattern example at the end of this file).
* Another way to create unnecessary objects is *autoboxing*: prefer primitives to boxed primitives, and watch out for unintentional autoboxing.
* Avoid creating your own *objects pool* unless the objects in the pool are extremely heavyweight (e.g. database connection).-

### Item 7: Eliminate obsolete object references
* An *obsolete reference* is simply a reference that will never be dereferenced again.
* Memory leaks in garbage-collected languages = *unintentional object retentions*
* Solution: null out references once they become obsolete. Although that should be the exception rather than the norm. The best way to eliminate an obsolete reference is to let the variable that contained the reference fall out of scope.
* Whenever a class manages its own memory, the programmer should be alert for memory leaks.
* Another common source of memory leaks is caches. Solutions: e.g. use `WeakHashMap`
* Another source of memory leaks: listeners and other callbacks.
* Discover them with heap profilers.

### Item 8: Avoid finalizers and cleaners
* https://dzone.com/articles/deprecating-javas-finalizer
* finalizers are deprecated in Java 9 (Cleaner appears)
* Finalizers are unpredictable, often dangerous, and generally unnecessary.
* There is no guarantee they'll be executed promptly.
* Never do anything time-critical in a finalizer or cleaner.
* Uncaught exception thrown during finalization is ignored, anf finalization of that object terminates.
* There is a severe performance penalty for using finalizers and cleaners: finalizers inhibit efficient garbage collection.
* Furthermore, finalizers have a serious security problem: they open your class up to finalizer attacks.
* To protect nonfinal classes from finalizer attacks, write a fina *finalize* method that does nothing
* Solution: implement *AutoCloseable* and require its clients to invoke the *close* method
* Good uses of finalizers and cleaners: safety net in case the owner of a resource neglects to call its *close* method (better late than never).
* Instantiate cleaner objects in try-with-resource blocks


## Chapter 3: Methods common to all objects
* Object nonfinal methods: *equals*, *hashCode*, *toString*, *clone* and *finalize*.

### Item 10: Obey the general contract when overriding equals
* When to override it: for *value classes*. Only when a class has a notion of logical equality that differes from mere object identity and a superclass has not already overriden equals.
* Enum type does not require *equals* method to be overriden.
* The *equals* method implements an *equivalence relation*: reflexive, symmetric, transitive, consistent, non-nullity.

### Item 11: Always override hashCode when you override equals
* Equal objects must have equal hash codes.
* Used by collections like HashMap and HashSet.
* If a class is immutable and the cost of computing the hash code is significant, you might consider caching the hash code in the object rather than recalculatint it each time it is requested. E.g. lazily initialize.

### Item 12: Always override toString
* Standard, unambiguous, human-readable representation of the object.
* Document your intentions, whether you specify a format or not.
* Provide programmatic access to the information contained in the value returned by toString.

### Item 13: Override clone judiciously
* Immutable classes whould never provide a *clone* method.
* A class implementing Cloneable is expected to provide a properly functioning public clone method.
* First, call *super.clone()*
* Call clone recursively. Better deepCopy.
* A better approach to object copying is to provide a *copy constructor* or *copy factory*:
 * E.g. `public Yum(Yum yum){ ... }`, `public static Yum newInstance(Yum yum) { ... }`

### Item 14: Consider implementing Comparable
* Use of the relational operators *>* and *<* in *compareTo* methods is verbose and error-prone and no longer recommended.
* Instead, use static *compare* methods existing in boxed primitives (introduced in Java 7).
* Java 8: the *Comparator* interface was outfitted with a set of *comparator construction methods*, which enable fluent construction of comparators.

## Chapter 4: Classes and Interfaces
### Item 15: Minimize the accesibility of classes and members
TBD

## Chapter 5: Generics
TBD


## General
* Java 8: interfaces can contain static methods.
* Java 8 requires all static members of an interface to be public.
* Java 9 allows private static methods, but static fields and static member classes are still required to be public.
* *Simulated self-type idiom*: workaround for the fact that Java lacks a self type.
* `String.matches()`is not suitable for repeated use in performance-critical situations: 
  * it internally creates a Pattern instance for the regex and uses it only once. Creating a Pattern instance is expensive because it requries compiling the regex into a finite state machine.
  * Solution: explicitly compile the regex into a Pattern instance (immutable) as part of class intialization, cache it and reuse the same instance for every invocation.
