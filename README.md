# think-with-js

_Author Ical Balino_

## Programming Primer (in JS)
- Values 
- Operations 
- Variables 
- Expressions and Statements 
- Decisions 
- Loops 
- Functions

## Three Pillars of JS
1. **Types / Coercion**
2. **Scope / Closures** 
3. **this / Prototypes**

### 1. Types / Coercion
- Primitive Types 
- Converting Types 
- Checking Equality

"In JavaScript, everything is an object." `false`

"In JavaScript, variables don't have types, values do."

` new() ` is a built-in fundamental objects

1. use New:
    - Object()      
    - Array() 
    - Function() 
    - Date() 
    - RegExp() 
    - Error()
2. don't use New:
    - String() 
    - Number() 
    - Boolean(

"The way to convert from one type to another: **coercion**" <br>
Coercion: string concatenation (number to string)

Falsy = “”,  0, -0, null, NaN, false, undefine

**Checking Equality ( == vs. === )**

- Loose Equality vs. Strict Equality
    <br> == checks value (loose) `false`
    <br> === checks value and type (strict) `false`

- Coercive Equality vs. Non-Coercive Equality
    <br> == allows coercion (types different) `true`
    <br> === disallows coercion (types same) `true`

Coercive Equality: == and === <br>
Coercive Equality: null == undefined

when the types are already the same, the double equals and the triple equals do exactly the same thing in 100% of all cases.

kesimpulan :
<br> == is not about comparisons with unknown types.
<br> == is about comparisons with known type(s), optionally where conversions are helpful.
<br> You simply cannot write quality JS programs without knowing the types involved in your operations.

### 2. Scope / Closures
- Nested Scope 
- Closure

what does **scope** mean? <br>
it means where the JavaScript engine looks for things. where in memory that is.

**Undefined vs. Undeclared** <br>
undefined is a variable that has been declared, but it doesn't have a value. and then 
undeclared is a variable that was never declared anywhere.

**Function Expressions**
<br> function expression is a function that is assigned as a value someware
<br> * Named function expressions
<br> * Anonymous function expressions
<br> * Arrow Functions
<br> * [Function Scoping: IIFE](https://benalman.com/news/2010/11/immediately-invoked-function-expression/)
<br> * Block Scoping
<br> * Block Scoping: encapsulation
<br> * Block Scoping: explicit let block

**Closures**
Closure is when a function “remembers” the variables outside of it, even if you pass that function elsewhere.<br>
Closure without understanding scope is actually not understanding closure.

here more about [Scope & Closures](https://github.com/getify/You-Dont-Know-JS/tree/2nd-ed/scope-closures)

### 3. this / Prototypes
- this 
- Prototypes 
- class { } 

**this: dynamic context**
<br> A function's this references the execution context for that call, determined entirely by <u>how the function was called<u>. 
<br> A dynamic context means that we can change, use the same function but change what context it is. based upon how we call the function. that makes it much more flexible and reusable

**prototypes system**
<br>* prototype: as "classes"
<br>* instances
<br>* class
<br>* constructor
<br>* this keyword
<br>* new keyword

**class { }**
<br>The class keyword is layered on top of the prototype system and the class keyword syntax that looks a lot more like the class designs that we normally do in C++ or Java.
<br>ES6 class

**Penutup Three Pillars JS**
<br> There is no substitute in learning JavaScript other than just writing the JavaScript!
<br> The best way to learn JS is to get in and write it!
