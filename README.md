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

