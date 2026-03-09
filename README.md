
## 1️⃣ What is the difference between var, let, and const?

`var`, `let`, and `const` are used to declare variables in JavaScript.

### var
`var` is the old way to declare variables in JavaScript. It is **function scoped**, can be **redeclared**, and its value can be **reassigned**. Variables declared with `var` are accessible outside a block `{}`.

### let
`let` was introduced in **ES6**. It is **block scoped**, **cannot be redeclared** in the same scope, but its value **can be reassigned**.

### const
`const` was also introduced in **ES6**. It is **block scoped**, **cannot be redeclared**, and its value **cannot be reassigned** after declaration. It **must be initialized** when declared.

---

## 2️⃣ What is the spread operator (...)?

The **spread operator (`...`)** in JavaScript is used to **expand elements of an array or object into individual elements**. It allows arrays or objects to be **copied, merged, or expanded easily**.

---

## 3️⃣ What is the difference between map(), filter(), and forEach()?

The difference between `map()`, `filter()`, and `forEach()` in JavaScript is mainly about **what they do with array elements and what they return**.

### forEach()
`forEach()` is used to **loop through each element of an array** and perform an action on it.  
It **does not return a new array**.  
It is mainly used when you just want to **execute code for every item**, such as printing values or updating something.

### map()
`map()` is used to **transform each element of an array**.  
It **creates and returns a new array** where every element is the result of the function you apply.  
It is useful when you want to **modify or convert array data**.

### filter()
`filter()` is used to **select elements from an array based on a condition**.  
It **returns a new array** that only contains the elements that **pass the condition** you specify.

---

## 4️⃣ What is an arrow function?

An **arrow function** is a **shorter and modern way to write functions in JavaScript**. It was introduced in **ES6** and uses the `=>` (arrow) syntax instead of the traditional `function` keyword.

Arrow functions make code **more concise and easier to read**, especially for simple operations.

Another important feature is that arrow functions **do not have their own `this` value**; instead, they use the `this` from their **surrounding scope**.

In simple terms, an **arrow function is a compact way to define a function in JavaScript**.

---

## 5️⃣ What are template literals?

**Template literals** are a feature in JavaScript introduced in **ES6** that allow you to create strings **more easily and flexibly**.

They use **backticks** ( ` ` ) instead of single (`' '`) or double (`" "`) quotes.

Template literals allow you to **embed variables and expressions directly inside a string** using `${ }`.

They also support **multi-line strings** without needing special characters like `\n`.

In simple terms, **template literals make it easier to combine text and variables and write cleaner, more readable strings in JavaScript.**