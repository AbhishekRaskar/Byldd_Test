
1. Closures in JavaScript:  
   A closure happens when a function remembers the variables from its outer function, even after that outer function has finished running. It’s useful when we want a function to keep certain data private.  
   Ex: Closures are helpful in cases like a counter function that keeps counting each time it’s called, without needing a global variable.

2. Differences between var, let, and const:
   -var: Can be used throughout the function (function scope), and it is hoisted (moved to the top) in the code. It can be changed anytime.
   -let: Works only in the block where it is defined (block scope) and is also hoisted but not usable before it’s declared.
   -const: Also block-scoped like let, but it cannot be reassigned after it’s set.


3. Hoisting: var is hoisted and can be accessed before it’s defined, but let and const are hoisted differently and will give an error if accessed before they are declared.

3. Programming Language vs Scripting Language:
   -Programming Language: Used to write software that runs on its own, often compiled (like Java or C++).
   - Scripting Language: Used to automate tasks in software, usually interpreted (like JavaScript or Python).
   JavaScript is a scripting language, used to add interactivity to web pages.