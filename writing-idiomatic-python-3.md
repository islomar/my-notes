# Writing idiomatic Python 3.3+
Author Jeff Knupp

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

* **Sets**
  * Use sets to eliminate duplicate entries from Iterable containers.
  * Use a set comprehension to generate sets concisely. E.g. `{user.first_name for user in users}`
  * Understand and use the mathematical set operations: e.g. union, intersection, difference, etc.

* **Generators** 
  * Use a generator to lazily load infinite sequences. A generator is a special type of coroutine which returns an iterable . The state of the generator is saved, so that the next call into the generator continues where it left off. Use `yield`.
  * Prefer a generator expression to a list comprehension for simple iteration.
    * For very large lists.
    * A list comprehension generates a list object and fills in all of the elements immediately. For large lists, this can be prohibitively expensive. The generator returned by a generator expression , on the other hand, generates each element "on-demand".

* **Context managers**
  * Use a context manager to ensure resources are properly managed. I.e. `with open(xxx) as file_handle:`
  
 * **Tuples** 
   * Use tuples to unpack data: In Python, it is possible to “unpack” data for multiple assignment.
   * Use _ as a placeholder for data in a tuple that should be ignored
 
 * **Variables**
   * Avoid using a temporary variable when performing a swap of two values. Use tuples: `(foo, bar) = (bar, foo)`


## Chapter 3: Organizing your code
  * Use modules for encapsulation where other languages would use Objects.
    * Most data that would otherwise stored in a class can be represented using the simple list , dict , and set types >> WTF, that is not semmantic.
    * classes should be used only when necessary and almost never at API boundaries.
  * **Formatting**
    * Use all capital letters when declaring global constant values.
    * Avoid placing multiple statements on a single line.
    * Format your code according to PEP8
  * **Executable scripts**
    * Use sys.exit in your script to return proper error codes.
    * Use the `if __name__ == '__main__'` pattern to allow a file to be both imported and run directly.
  * **Imports**
    * Prefer absolute imports to relative imports.
    * Do not use from foo import * to import the contents of a module.
    * If the package/module name is too long, use an as clause to shorten it.
    * Arrange your import statements in a standard order:
      1. standard library modules
      2. third-party library modules installed in site-packages
      3. modules local to the current project


## Chapter 4: General advice
* **Avoid reinventing the wheel**
  * Learn the Contents of the Python Standard Library
  * Get to know PyPI (the Python Package Index)
* **Modules of notes**
  * Learn the contents of the itertools module: https://docs.python.org/3/library/itertools.html#recipes
  * Use functions in the os.path module when working with directory paths.
