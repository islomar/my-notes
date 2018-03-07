# Writing idiomatic Python 3.3+
Author Jeff Knupp"

## Chapter 1: Control structures and functions
* **if statements**
  * Avoid comparing directly to True , False , or None.
  * Avoid repeating variable name in compound if statement: use xx in ('a', 'b', 'c').
  * Avoid placing conditional branch code on the same line as the colon.
* **For loops**
  * Use the enumerate function in loops instead of creating an "index" variable.
  * Use the in keyword to iterate over an iterable.
  * Use else to execute code after a for loop concludes.
* **Functions**
  * Avoid using '' , [] , and {} as default parameters to functions.
  * Use *args and **kwargs to accept arbitrary arguments.


## Chapter 2: Working with data
* **Lists**
  * Use a list comprehension to create a transformed version of an existing list.
  * Use the * operator to represent the "rest" of a list.
* **Dictionaries**
  * Use the default parameter of dict.get to provide default values.
  * Use a dict comprehension to build a dict clearly and efficiently.
* **Strings**
  * Prefer the format function for formatting strings.
  * Use ''.join when creating a single string for list elements.
  * Chain string functions to make a simple series of transformations more clear, e.g.: `book_info.strip().upper().replace(':', ' by')`
* **Classes**
  * Use underscores in function and variable names to help mark “private” data. One underscore for 'protected', two for 'private'.
    * Few developers are aware of the fact that prepending attribute names in a class does actually do something. Prepending a single underscore means that the symbol won’t be imported if the 'all' idiom is used. Prepending two underscores to an attribute name invokes Python’s name mangling. This has the effect of making it far less likely someone who subclasses your class will inadvertently replace your class’s attribute with something unintended.
 * Define `__str__` in a class to show a human-readable representation.
