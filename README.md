
### 💡 What is JavaScript?

**JavaScript** is a **programming language** used to make websites **interactive**, **dynamic**, and **smart**.

It runs **in the browser** (like Chrome, Firefox) and can also run on the server using **Node.js**.

---

### 🚀 Why We Use JavaScript?

1. ✅ **Add interactivity** to web pages
   (e.g., buttons, forms, sliders)

2. ✅ **Control webpage content** dynamically
   (e.g., show/hide text, update without reloading)

3. ✅ **Handle user actions**
   (e.g., mouse clicks, keyboard input)

4. ✅ **Communicate with servers**
   (e.g., fetch data using APIs)

5. ✅ **Build full apps**
   (React, Angular, Vue, etc.)

---

### 🧠 One-liner Summary:

> JavaScript makes websites **come alive** by allowing **logic, interaction, and dynamic content.**

## 🔧 How JavaScript Works (Behind the Scenes)

JavaScript runs inside a **JavaScript Engine** (like V8 in Chrome). It follows this process:

---

### ✅ 1. **Execution Context**

Whenever you run code, JS creates an **Execution Context** — a space to run your code.

It has **2 phases**:

---

### 🔹 Phase 1: **Memory Allocation (Creation Phase)**

* JS scans the code.
* It **allocates memory** for variables and functions.
* Variables are set to `undefined`, functions are stored as-is.

---

### 🔹 Phase 2: **Code Execution (Execution Phase)**

* JS **runs the code line by line**.
* Variables get real values.
* Functions are executed if called.

---

## 🔁 Call Stack

* JS uses a **call stack** to track which function is running.
* **Last in, first out (LIFO)** style.

---

## 🧵 Is JavaScript Single or Multi-threaded?

* ✅ **Single-threaded**
  ➤ It runs **one thing at a time** (like a queue).

---

## ⏳ Is JavaScript Synchronous or Asynchronous?

* ✅ **Synchronous by default** (runs line by line)
* But with **Web APIs + callback queue**, JS can handle **Asynchronous tasks**
  ➤ Like `setTimeout()`, `fetch()`, etc.

---

## 🔥 Step-by-Step: How JavaScript Code is Executed

When you run JavaScript code, the JS engine (like V8 in Chrome) does this:

---

### ✅ 1. **Global Execution Context is created**

* This is the **default environment** where your code runs.
* It has two phases:

#### 🔹 a) **Memory Creation Phase**

* All variables and functions are **allocated memory**.
* Variables are set to `undefined`.
* Functions are stored as **reference**.

#### 🔹 b) **Code Execution Phase**

* Code is **executed line by line**.
* Variables get actual values.
* Functions are **invoked** (executed) when called.

---

## 🧠 Example:

```js
function greet() {
  console.log("Hello!");
}

let name = "Shushanth";
greet();
```

### Execution Steps:

1. Memory Phase:

   * `greet` → stores function definition
   * `name` → `undefined`

2. Execution Phase:

   * `name = "Shushanth"`
   * `greet()` → function is **invoked**, goes into call stack

---

## 🧱 What is the Call Stack?

* JS uses a **Call Stack** to manage function execution.
* It works like a **stack of plates** (Last In, First Out).

---

### 📦 How it works:

```js
function one() {
  two();
  console.log("One");
}
function two() {
  console.log("Two");
}
one();
```

### Call Stack Steps:

1. `global()` is pushed
2. `one()` is called → pushed
3. `two()` is called → pushed
4. `console.log("Two")` → runs → `two()` is removed (popped)
5. `console.log("One")` → runs → `one()` is removed
6. `global()` is popped

---

## 🔼 What is Hoisting in JavaScript?

> **Hoisting** is the behavior where **variable and function declarations are moved to the top of their scope** during the **memory creation phase** of execution.

This happens **before** any code is actually run.

---

### 🧠 How It Works (Short Theory):

* In the **Memory Allocation Phase**, JS engine **scans the code**.
* It **hoists (lifts)**:

  * ✅ Function declarations — with full definition
  * ✅ `var` variables — with `undefined`
  * ❌ `let` and `const` are hoisted too, but **not initialized**

---

### ✅ Example 1: Hoisting with `var`

```js
console.log(name); // undefined (not error!)
var name = "Shushanth";
```

> JS hoisted `var name;` and set it as `undefined`, then assigned `"Shushanth"` in the execution phase.

---

### ✅ Example 2: Hoisting with `function`

```js
sayHello(); // Hello!

function sayHello() {
  console.log("Hello!");
}
```

> Function is fully hoisted — so it works **even before** it's written.

---

### ❌ Example 3: `let` and `const` Hoisting

```js
console.log(age); // ❌ ReferenceError
let age = 21;
```

> `let` and `const` are hoisted, but stored in **"Temporal Dead Zone"** until they’re defined — so you get an error if you access them early.

---

## ✅ Summary:

| Declaration | Hoisted | Value (Before Init) | Can Use Before Declaring? |
| ----------- | ------- | ------------------- | ------------------------- |
| `var`       | ✅ Yes   | `undefined`         | ✅ Yes (but risky)         |
| `let`       | ✅ Yes   | ❌ Not initialized   | ❌ No (ReferenceError)     |
| `const`     | ✅ Yes   | ❌ Not initialized   | ❌ No (ReferenceError)     |
| `function`  | ✅ Yes   | Full function       | ✅ Yes                     |

---

## 📦 What is Variable Environment?

> The **Variable Environment** is the memory space inside an execution context that holds **variables, function parameters, and inner function declarations**.

* Each function has **its own** variable environment.
* Inner scopes can **access outer scopes**, but not vice versa.

---

### ✅ Example with Nested Scope:

```js
function outer() {
  let a = 10;
  function inner() {
    let b = 20;
    console.log(a + b); // ✅ Can access a from outer
  }
  inner();
}
outer();
```

* `inner()` has its own variable env (`b`)
* It can **access `a`** from `outer()` due to **lexical scope**

---

## 🧠 Summary:

| Concept              | Meaning                                    |
| -------------------- | ------------------------------------------ |
| Function Call        | Creates a new execution context            |
| Variable Environment | Stores function's variables and params     |
| Lexical Scope        | Inner functions can access outer variables |
| Call Stack           | Tracks function calls in order (LIFO)      |

---

## ✅ 1. **Diagram: Function Call & Execution Context**

```
global()
│
├── outer() → [Execution Context Created]
│      ├── a = 10
│      └── inner() → [Execution Context Created]
│             └── b = 20
│             └── console.log(a + b) = 30
│
└── All contexts removed after execution (Call Stack is empty)
```

---
## ✅ The **Shortest JavaScript Program** is:

```js
// empty file
```

Yes! Even an **empty file** is a valid JavaScript program.

---

### 🚀 What Happens Behind the Scenes?

When this empty file runs in the **browser**, JavaScript engine still creates:

1. **Global Execution Context**
2. **Global Object** → In the browser, it's called `window`
3. **this keyword** → Points to `window` in global scope

---

## 🪟 `window` – The Global Object in Browser

In a browser:

```js
console.log(window);
```

* It's an object created by the JS engine.
* It holds:

  * All global functions (`alert()`, `setTimeout()`, etc.)
  * All global variables
  * Browser APIs

---

## 🔑 `this` in Global Scope

In global scope:

```js
console.log(this);      // Points to window
console.log(this === window); // true ✅
```

So, any global variable you declare like:

```js
var name = "Shushanth";
console.log(window.name); // Shushanth
```

> Declaring with `var` adds it to the window object.
> But `let` and `const` DO NOT attach to window.

---

### 🧠 Summary:

| Concept          | Meaning                                            |
| ---------------- | -------------------------------------------------- |
| Shortest JS Code | Empty file – still creates global context          |
| Global Object    | In browsers → `window`                             |
| `this` in global | Refers to `window` object                          |
| Global variables | `var` attaches to `window`, `let` & `const` do not |

---
You're on 🔥 fire, Shushanth!
Now let’s break down this super important topic in a **short, sweet, and clear** way:

---

## 🔍 Scope, Lexical Environment & Scope Chain in JavaScript

These concepts are **key** to how variables are accessed in JS — and they're 🔥 hot in interviews too!

---

### ✅ 1. **Scope** – Where a variable is accessible

> **Scope** determines where in your code a variable can be used.

* **Global Scope** – Accessible anywhere
* **Function Scope** – Only accessible inside a function
* **Block Scope** – `let` & `const` inside `{}`

---

### ✅ 2. **Lexical Environment**

> A Lexical Environment is created every time a function runs. It contains:

* **Local memory** (variables + functions defined inside)
* A reference to the **outer lexical environment**

---

### ✅ 3. **Scope Chain**

> The **Scope Chain** is the chain of lexical environments JS follows to **find a variable**.

When you access a variable:

1. JS looks in the **current scope**
2. If not found, it **goes up** the outer environment
3. Continues until it reaches **global scope**

---

### 🔁 Example:

```js
function outer() {
  let a = 10;

  function inner() {
    let b = 20;
    console.log(a + b); // ✅ a is found in outer scope
  }

  inner();
}

outer();
```

🔗 **Scope Chain here:**

* `inner()` tries to find `a`
* It’s not in `inner()` → so it goes up to `outer()` and finds it there

---

## 🧠 Visual (Simplified)

```
inner() Lexical Env
├── b = 20
├── Reference → outer()

outer() Lexical Env
├── a = 10
├── Reference → global()

global() Lexical Env
```

---

## ✅ Summary:

| Term                | Meaning                                         |
| ------------------- | ----------------------------------------------- |
| Scope               | Where a variable is accessible                  |
| Lexical Environment | Local memory + reference to outer env           |
| Scope Chain         | The lookup path JS follows to resolve variables |

---

## ✅ `let` & `const` in JavaScript

They are modern ways to declare variables (introduced in ES6).
They are **block-scoped** and **not hoisted like `var`** (at least not the same way).

---

### 🚫 Temporal Dead Zone (TDZ)

> The **TDZ** is the time between when a variable is **hoisted** and when it is **initialized**.

During TDZ:

* You **can’t access** the variable
* If you try → ❌ **ReferenceError**

---

### 🔍 Example of TDZ:

```js
console.log(name);  // ❌ ReferenceError
let name = "Shushanth";
```

* `name` is hoisted **without initialization**
* It’s in the **Temporal Dead Zone** until this line: `let name = "Shushanth"`

---

## 🆚 Difference Between `var`, `let`, and `const`

| Feature       | `var`                              | `let`                     | `const`                   |
| ------------- | ---------------------------------- | ------------------------- | ------------------------- |
| Scope         | Function-scoped                    | Block-scoped              | Block-scoped              |
| Re-declare    | ✅ Allowed                          | ❌ Not allowed             | ❌ Not allowed             |
| Re-assign     | ✅ Allowed                          | ✅ Allowed                 | ❌ Not allowed             |
| Hoisted       | ✅ Yes (initialized to `undefined`) | ✅ Yes (but in TDZ)        | ✅ Yes (but in TDZ)        |
| Default Value | `undefined`                        | ❌ Error if accessed early | ❌ Error if accessed early |

---

### 🧠 Behind the Scenes (Memory Phase):

```js
// Memory Allocation Phase:
var a = undefined;
let b;   // In TDZ
const c; // In TDZ

// Execution Phase:
a = 10;
b = 20;
c = 30;
```

---

## 🔥 Types of Errors You Might See

| Error Type       | When it Happens                             |
| ---------------- | ------------------------------------------- |
| ❌ ReferenceError | Accessing variable in TDZ or undeclared var |
| ❌ TypeError      | Trying to reassign a `const`                |
| ❌ SyntaxError    | Bad syntax (e.g., missing brackets, etc.)   |

---

### ✅ Example:

```js
console.log(x);   // ❌ ReferenceError
let x = 5;

const y;          // ❌ SyntaxError (const must be initialized)
y = 10;

const z = 10;
z = 20;           // ❌ TypeError (can't change const)
```

---

## 💬 Summary:

* `let` & `const` are hoisted, but live in a **"Temporal Dead Zone"**
* They **cannot be used** before their declaration
* This helps **prevent bugs** and makes code **safer**

---

## 🧱 What is a Block in JavaScript?

> A **block** is anything inside `{ }`
> It can be used in:

* `if` / `else`
* `for` / `while`
* `function` body
* Plain `{ }` for grouping

```js
{
  // block
}
```

---

## 🧠 What is Block Scope?

> **Variables declared with `let` and `const` inside a block** are only accessible **inside that block**.

```js
{
  let a = 10;
  console.log(a); // ✅ Works
}
console.log(a); // ❌ ReferenceError (a is block-scoped)
```

* `var` is NOT block-scoped (it is function-scoped)

---

## 🪞 What is Shadowing?

> **Shadowing** happens when a variable declared inside a block has the **same name** as a variable in an outer scope.

```js
let a = "outer";

{
  let a = "inner"; // ⬅️ shadows the outer 'a'
  console.log(a);  // inner
}

console.log(a);    // outer
```

✅ This is **legal shadowing** — and **common in real apps**.

---

## 🚫 What is Illegal Shadowing?

> When you try to declare a `let` or `const` variable **inside a block**, **while an outer scope already has a `var`** with the same name.

```js
var x = 10;

{
  let x = 20;  // ❌ Illegal Shadowing in strict mode
  console.log(x);
}
```

* `var` is hoisted to function/global scope
* You **can't safely shadow** it using `let` or `const`
* This throws an error in **strict mode**

✅ Safe option: **Avoid using `var`** — use only `let`/`const`

---

## 📋 Summary:

| Concept           | Explained                                      |
| ----------------- | ---------------------------------------------- |
| Block Scope       | `let`/`const` visible only inside `{ }`        |
| Shadowing         | Inner variable hides outer with same name      |
| Legal Shadowing   | `let`/`const` shadowing outer `let`/`const`    |
| Illegal Shadowing | `let`/`const` shadowing outer `var` (⚠️ error) |

---
Absolutely, Shushanth! 🙌
**Closures** are one of the most powerful (and interview-loved 🔥) concepts in JavaScript — and I’m going to explain them **super clearly and simply** for you.

---

## 🔐 What is a Closure in JavaScript?

> A **closure** is created when a function **remembers** the **variables from its outer scope**, even **after the outer function has finished executing**.

---

### ✅ In Simple Words:

A closure means:

* A function inside another function
* The inner function **keeps access** to the outer function’s variables

Even **after** the outer function is **done running**, the inner function can **still access** its variables 🔥

---

## 📦 Closure Example:

```js
function outer() {
  let count = 0;

  function inner() {
    count++;
    console.log("Count is", count);
  }

  return inner;
}

const counter = outer(); // outer() runs, returns inner()

counter(); // Count is 1
counter(); // Count is 2
counter(); // Count is 3
```

---

### 🧠 What’s Happening?

* `outer()` runs and sets `count = 0`
* It **returns** the `inner()` function
* Even though `outer()` is **finished**, `inner()` still **remembers** `count`

➡️ **That's a closure!**

---

## 📚 Real-World Analogy:

Imagine a **child function** (`inner`) keeping a **backpack** of everything its **parent function** (`outer`) had.

Even when the parent is gone, the child still has access to that backpack. 🎒

---

## 🧹 Closures & Garbage Collection

* Normally, variables are **deleted** when a function finishes.
* But in **closures**, variables are **kept alive** (in memory) **as long as the inner function uses them**

✅ That’s how closures can **retain data**.

---

## 💡 Where Closures Are Used:

| Use Case                    | Real Example                              |
| --------------------------- | ----------------------------------------- |
| Data privacy                | Encapsulate variables                     |
| Function factories          | Create customized functions               |
| setTimeout/setInterval      | Delay actions using remembered state      |
| React Hooks (like useState) | Behind the scenes, hooks use closures! 🔥 |

---

## 🧪 Want to Try It? (Task)

### ❓ What’s the Output?

```js
function greet(name) {
  return function() {
    console.log("Hello " + name);
  };
}

const sayHi = greet("Shushanth");
sayHi();
```
---

## ❓The Interview Question (Classic)

### 👇 What will be the output?

```js
for (var i = 1; i <= 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, i * 1000);
}
```

---

### ❗ Most people say:

```
1
2
3
4
5
```

But the **actual output is**:

```
6
6
6
6
6
```

---

## 🧠 Why does this happen?

### 🔍 Because of two reasons:

1. `var` is **function scoped**, NOT block scoped
2. All 5 `setTimeout` callbacks **share the same `i`**

By the time the `setTimeout` runs, the loop is done, and `i` becomes `6`.
So all of them log `6`.

---

## ✅ How to Fix It?

### ✅ **Solution 1: Use `let` instead of `var`**

```js
for (let i = 1; i <= 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, i * 1000);
}
```

Output:

```
1
2
3
4
5
```

✅ Why this works:
`let` creates a new block-scoped `i` for each iteration.

---

### ✅ **Solution 2: Use Closures (IIFE)**

```js
for (var i = 1; i <= 5; i++) {
  (function (j) {
    setTimeout(function () {
      console.log(j);
    }, j * 1000);
  })(i);
}
```

* This uses an **Immediately Invoked Function Expression (IIFE)** to capture the value of `i` in `j` for each loop.

Output:

```
1
2
3
4
5
```

---

## ✅ 1. **What are First-Class Functions?**

> In JavaScript, **functions are treated like variables**.

This means you can:

* **Assign** functions to variables
* **Pass** functions as arguments
* **Return** functions from other functions

📌 **This is called: First-Class Functions**

```js
function greet() {
  return "Hello!";
}

const sayHi = greet;         // ✅ assign
console.log(sayHi());        // ✅ call through variable

function executor(fn) {      // ✅ pass function as argument
  return fn();
}

console.log(executor(greet)); // "Hello!"
```

---

## ✅ 2. **Anonymous Functions**

> A function **without a name**

Used mostly in:

* **Function expressions**
* **Callbacks**

```js
setTimeout(function () {
  console.log("I’m anonymous!");
}, 1000);
```

---

## ✅ 3. **Function Statement vs Function Expression**

### ✅ Function Statement (Declaration):

```js
function greet() {
  console.log("Hello");
}
```

* **Hoisted** (can be called before it's defined)

### ✅ Function Expression:

```js
const greet = function () {
  console.log("Hi");
};
```

* **Not hoisted** (cannot call before definition)

---

## ✅ 4. **Function Parameter vs Argument**

| Term          | Meaning                             |
| ------------- | ----------------------------------- |
| **Parameter** | The **name** in function definition |
| **Argument**  | The **actual value** you pass       |

```js
function greet(name) {  // 'name' is a parameter
  console.log("Hi " + name);
}

greet("Shushanth");     // 'Shushanth' is an argument
```

---

### 🧠 Summary (Interview Friendly):

| Term                  | Meaning                                 |
| --------------------- | --------------------------------------- |
| First-Class Functions | Functions can be treated like variables |
| Anonymous Function    | Function without a name                 |
| Function Statement    | Declared with `function`, hoisted       |
| Function Expression   | Assigned to variable, not hoisted       |
| Parameter             | Variable in function definition         |
| Argument              | Actual value passed                     |

---

### ✅ What is a Callback Function?

> A **callback** is a function passed **as an argument** to another function, to be **called later**.

```js
function greet(name, callback) {
  console.log("Hello", name);
  callback(); // call later
}

function sayBye() {
  console.log("Bye!");
}

greet("Shushanth", sayBye);
```

* `sayBye` is a **callback function** passed to `greet`.

---

### ✅ Where are Callbacks used?

* **setTimeout**, **setInterval**
* **Event Listeners**
* **APIs**, **AJAX**, **Promises**
* **Functional programming** (e.g. `map`, `filter`)

---

### ✅ Callback in Event Listeners

```js
document.getElementById("btn").addEventListener("click", function () {
  console.log("Button Clicked 🚀");
});
```

* The function inside `addEventListener` is a **callback**
* It runs **only when the event happens** (like a click)

---

### 🔥 Blocking the Main Thread?

JavaScript is **single-threaded** → only **one task** runs at a time.

If a function takes **too long** to finish (e.g. a `while(true)`), it blocks:

* UI won’t update
* No other code runs
* **User interaction freezes**

```js
function longTask() {
  let i = 0;
  while (i < 999999999) {
    i++;
  }
  console.log("Done");
}
```

✅ To avoid blocking, we use:

* **Callbacks**
* **setTimeout**
* **Promises / async-await**

---

### ✅ Advantages of Callbacks:

| Advantage   | Meaning                                |
| ----------- | -------------------------------------- |
| Async Code  | Don't block the main thread            |
| Reusability | Logic separated into smaller functions |
| Control     | Decide when to run the function        |

---

## 🧪 Want a Mini Task?

Try this:

```js
function askUser(name, callback) {
  console.log("Hi", name);
  callback();
}

askUser("Shushanth", function () {
  console.log("Welcome to React course!");
});
```

---

## ⚙️ JavaScript is:

* **Single-threaded** (can run only one thing at a time)
* **Synchronous** by default
* But can behave **asynchronously** with help of:

  * **Web APIs**
  * **Callback Queue**
  * **Microtask Queue**
  * **Event Loop**

---

## 🚀 Example First:

```js
console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");
```

---

### 🧠 Output:

```
Start
End
Promise
Timeout
```

---

## 🔍 What Just Happened?

| Step                    | Explanation                                                                         |
| ----------------------- | ----------------------------------------------------------------------------------- |
| `console.log("Start")`  | Runs immediately                                                                    |
| `setTimeout(...)`       | Sent to **Web APIs** (browser timer), callback goes to **Callback Queue** after 0ms |
| `Promise.then(...)`     | Goes to **Microtask Queue**                                                         |
| `console.log("End")`    | Runs immediately                                                                    |
| After main thread empty | Microtask Queue is processed → logs `Promise`                                       |
| Then                    | Callback Queue runs → logs `Timeout`                                                |

---

## 🔁 The Event Loop's Job:

👉 **Keep checking:**

* Is **Call Stack** empty?
* If yes, first run tasks in **Microtask Queue** (e.g., Promises).
* Then run tasks in **Callback Queue** (e.g., `setTimeout`, `click events`, etc.)

---

## 📦 Web APIs (from browser):

* `setTimeout`
* `setInterval`
* `fetch`
* `DOM Events` (click, scroll)

> These are not part of JS itself but provided by the browser.

---

### 🧠 Real Use of Async JS:

* Delay something (`setTimeout`)
* Repeat action (`setInterval`)
* Fetch data from servers (`fetch`)
* Handle user input/events

---

## ✅ Summary:

| Term                | What it Does                            |
| ------------------- | --------------------------------------- |
| **Call Stack**      | Executes code line by line              |
| **Web APIs**        | Handles async work (timer, fetch)       |
| **Callback Queue**  | Stores `setTimeout`, DOM callbacks      |
| **Microtask Queue** | Stores `Promise.then`, `queueMicrotask` |
| **Event Loop**      | Coordinates the above queues            |

---

## ❓ Why “Trust Issues” with `setTimeout()`?

Because:

> **`setTimeout(callback, delay)` does *not* guarantee** that the callback will run *exactly after that delay*.
> It only means: “run *after at least* that much time — when the call stack is empty.”

---

## 🧠 Important Points:

1. ✅ `setTimeout(..., 1000)` = **run after minimum 1 second**
   ❌ Not exactly after 1 second

2. ✅ If JS is busy (e.g., long loop), the **callback waits**

---

### 🧪 Example:

```js
console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

for (let i = 0; i < 1e9; i++) {} // a long loop

console.log("End");
```

### 🧾 Output:

```
Start
End
Timeout
```

Even though `setTimeout(..., 0)` is used, the **loop blocked** the call stack. So the **callback was delayed**.

---

## 🧰 Behind the Scenes

| Part             | Role                                                   |
| ---------------- | ------------------------------------------------------ |
| **setTimeout()** | Registers a callback with the browser timer            |
| **JS Engine**    | Adds callback to **Callback Queue** *after* delay      |
| **Event Loop**   | Waits for Call Stack to be empty, then pushes callback |

If the call stack is busy, even a 0ms timeout will wait.

---

## 🔥 Famous Interview Question:

```js
console.log("1");

setTimeout(() => {
  console.log("2");
}, 0);

Promise.resolve().then(() => {
  console.log("3");
});

console.log("4");
```

**Output:**

```
1
4
3
2
```

### ✅ Why?

* `setTimeout(..., 0)` → goes to **Callback Queue**
* `Promise.then(...)` → goes to **Microtask Queue** (runs first)

---

## ✅ Summary (Trust Issues):

| Myth                                  | Truth                                           |
| ------------------------------------- | ----------------------------------------------- |
| `setTimeout(..., 0)` runs immediately | ❌ No. It waits for call stack to clear          |
| Delay is exact                        | ❌ No. It’s **minimum delay**, not guaranteed    |
| Callback is prioritized               | ❌ No. **Microtasks** (e.g., Promises) run first |

---

## ✅ What Are Higher-Order Functions (HOFs)?

A **Higher-Order Function** is a function that:

1. **Takes another function as an argument**, or
2. **Returns another function as a result**

🔁 In short: **Functions that work with other functions**.

---

### 💡 Examples:

#### 1. Function takes another function:

```js
function greet(callback) {
  callback();
}

greet(() => console.log("Hello Shushanth!"));
```

#### 2. Function returns another function:

```js
function multiplier(x) {
  return function(y) {
    return x * y;
  };
}

const double = multiplier(2);
console.log(double(5)); // 10
```

---

## ✅ Why Are Functions Like This Possible?

Because in JavaScript, **functions are first-class citizens** —
You can treat them like **values**, assign them to variables, pass them around, and return them.

---

## 💥 Common Higher-Order Functions in JavaScript:

| Function     | What it does                       |
| ------------ | ---------------------------------- |
| `.map()`     | Transforms each item in an array   |
| `.filter()`  | Filters items based on a condition |
| `.reduce()`  | Reduces array to a single value    |
| `.forEach()` | Iterates over an array             |

---

### 🧪 Example of `.map()`:

```js
const numbers = [1, 2, 3];

const doubled = numbers.map(num => num * 2);

console.log(doubled); // [2, 4, 6]
```

---

## 🧰 Bonus: Polyfill for `map()`

Let's build our own version of `.map()`:

```js
Array.prototype.myMap = function(callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }
  return result;
};

const nums = [1, 2, 3];
const squared = nums.myMap(x => x * x);

console.log(squared); // [1, 4, 9]
```

---

## ✅ Functional Programming in JS

Functional programming focuses on:

* Pure functions (no side effects)
* Immutability (not changing the original data)
* Reusability
* Composition (functions calling functions)

---

### 🧠 Summary

| Concept                | Meaning                                          |
| ---------------------- | ------------------------------------------------ |
| Higher-Order Function  | Takes or returns another function                |
| First-Class Function   | Can be passed around like data                   |
| Functional Programming | Programming style using pure, reusable functions |

---
### 🔥 `map()`, `filter()`, and `reduce()`

With short & sweet theory + code examples ✅

---

## 🧭 1. `map()` – *Transform each item in an array*

### ✅ Use when: You want to **change every item** in an array

```js
const nums = [1, 2, 3];

const doubled = nums.map(num => num * 2);

console.log(doubled); // [2, 4, 6]
```

➡️ It returns a **new array**, doesn't modify the original one.

---

## 🧼 2. `filter()` – *Keep only items that match a condition*

### ✅ Use when: You want to **remove some items**

```js
const nums = [1, 2, 3, 4, 5];

const even = nums.filter(num => num % 2 === 0);

console.log(even); // [2, 4]
```

➡️ Only returns items that pass the condition.

---

## 🧮 3. `reduce()` – *Turn array into a single value*

### ✅ Use when: You want to **accumulate** or **sum up**

```js
const nums = [1, 2, 3, 4];

const sum = nums.reduce((acc, curr) => acc + curr, 0);

console.log(sum); // 10
```

* `acc` = accumulator (stores total)
* `curr` = current item
* `0` = initial value

---

## 🧪 Bonus: Combine them!

```js
const numbers = [1, 2, 3, 4, 5, 6];

const result = numbers
  .filter(num => num % 2 === 0)     // [2, 4, 6]
  .map(num => num * 2)              // [4, 8, 12]
  .reduce((acc, curr) => acc + curr, 0); // 24

console.log(result); // 24
```

---

## 📝 Summary Table

| Function   | Purpose                 | Returns      |
| ---------- | ----------------------- | ------------ |
| `map()`    | Transform items         | New array    |
| `filter()` | Filter items            | New array    |
| `reduce()` | Combine to single value | Single value |

---

## 🔥 EP-01: Callback Hell & Inversion of Control

## 😖 Callback Hell

When **callbacks are nested inside callbacks**, making the code:

* Hard to read
* Hard to debug
* Hard to maintain

```js
loginUser("shushanth", () => {
  getUserData(() => {
    getPosts(() => {
      getComments(() => {
        console.log("All Done!");
      });
    });
  });
});
```

This **pyramid shape** is called **Callback Hell**.

---

## ❌ Inversion of Control

When you give control to another function via a callback, you **lose control** of:

* When it runs
* How many times it runs
* What arguments it gets

This leads to bugs if the **caller misbehaves**.

---

## ✅ Solution?

* Use **Promises** to flatten the structure.
* Then use **`async/await`** for clean async code.

---

## 🔥 What is a Promise in JavaScript?

A **Promise** is an object that represents the **future result** (or failure) of an asynchronous operation.

> It’s like a *“Promise to return a value later.”*

---

## ✅ States of a Promise:

1. **Pending** – initial state
2. **Fulfilled** – operation completed successfully (`resolve`)
3. **Rejected** – operation failed (`reject`)

---

## 📦 Creating a Promise

```js
let promise = new Promise((resolve, reject) => {
  // some async task
  setTimeout(() => {
    let success = true;
    if (success) {
      resolve("Data fetched!");
    } else {
      reject("Something went wrong!");
    }
  }, 1000);
});
```

---

## ⛓ Consuming a Promise

```js
promise
  .then((data) => {
    console.log("✅ Success:", data);
  })
  .catch((error) => {
    console.log("❌ Error:", error);
  });
```

---

## ✅ Output (after 1 second):

```
✅ Success: Data fetched!
```

---

## 🤯 Why Use Promises?

* Avoids **callback hell**
* Improves **code readability**
* Enables **chaining** of async operations
* Works smoothly with `async/await`

---

## 🔄 Real World Analogy:

> Ordering food online:
>
> * You place an order → (Pending)
> * Food delivered → (Fulfilled)
> * Delivery failed → (Rejected)

---

## ✅ EP-03: Creating a Promise, Chaining, and Error Handling

---

### 🔨 Creating a Promise

```js
const myPromise = new Promise((resolve, reject) => {
  let success = true;

  setTimeout(() => {
    if (success) {
      resolve("✅ Data fetched");
    } else {
      reject("❌ Fetch failed");
    }
  }, 1000);
});
```

* `resolve()` = success
* `reject()` = error
* `setTimeout()` = simulating async delay

---

### 🔗 Promise Chaining

Use `.then()` to chain logic step by step:

```js
myPromise
  .then((data) => {
    console.log(data);            // ✅ Data fetched
    return data + " → Step 2";
  })
  .then((step2) => {
    console.log(step2);           // ✅ Data fetched → Step 2
    return "✅ All done!";
  })
  .then(console.log);             // ✅ All done!
```

✅ Each `.then()` returns a **new Promise** — enabling **chaining**.

---

### ❗ Error Handling with `.catch()`

```js
myPromise
  .then((data) => {
    console.log(data);
    throw new Error("Something broke"); // simulating error
  })
  .catch((err) => {
    console.log("Caught error:", err.message);
  });
```

* Any error in `.then()` is caught in `.catch()`
* Use `.catch()` once at the end to handle **any error in the chain**

---

### 🧠 Summary

| Feature         | What it Does                      |
| --------------- | --------------------------------- |
| `new Promise()` | Create custom async logic         |
| `.then()`       | Handle success & return next step |
| `.catch()`      | Catch any error in the chain      |
| Chaining        | Cleanly run multiple async steps  |

---

## ✅ `Promise.all()`

### 🧠 **Theory:**

* `Promise.all()` takes **multiple promises** as an array.
* It **waits for all promises to resolve**.
* If **any one fails**, the whole thing fails and goes to `catch`.

### ✅ Use Case:

→ When **all async tasks must succeed** (like loading user, posts, and settings together).

### 📦 Syntax:

```javascript
Promise.all([promise1, promise2, promise3])
  .then((results) => {
    console.log(results); // Array of all resolved values
  })
  .catch((error) => {
    console.log("One promise failed:", error);
  });
```

---

## ✅ `Promise.race()`

### 🧠 **Theory:**

* `Promise.race()` also takes an array of promises.
* It returns **the result of the first settled promise** (resolved or rejected).
* It’s like a **race**, only the **fastest wins**.

### ✅ Use Case:

→ Useful for **timeouts**, **speed checks**, or picking the **fastest API**.

### 📦 Syntax:

```javascript
Promise.race([promise1, promise2])
  .then((result) => {
    console.log("First resolved:", result);
  })
  .catch((error) => {
    console.log("First rejected:", error);
  });
```

---

## ✅ What are JavaScript Modules?

**Modules** are files that contain reusable code — variables, functions, classes, etc.
They help you **split your code into smaller, manageable parts**.

> Think of modules as **"files you can import from or export to"**.

---

## 🧩 Why use Modules?

* Code reusability 🧠
* Cleaner structure 🧼
* Separation of concerns 🚀
* Easy to debug and maintain 🛠️

---

## 📤 Exporting from a Module

### 👉 Named Export:

```js
// utils.js
export const add = (a, b) => a + b;
export const sub = (a, b) => a - b;
```

### 👉 Default Export:

```js
// greet.js
export default function greet(name) {
  console.log("Hello", name);
}
```

---

## 📥 Importing in Another File

```js
// main.js
import greet from './greet.js';
import { add, sub } from './utils.js';

greet("Shushanth");
console.log(add(10, 5)); // 15
```

---

## 📌 Important Notes

* Always use `.js` in file paths (in browser-based ES Modules).
* Use `type="module"` in HTML:

```html
<script type="module" src="main.js"></script>
```

* Module code runs in **strict mode** by default.
* Module variables are **scoped** (not global).

---

## 📡 What is AJAX?

**AJAX** = **A**synchronous **J**avaScript **A**nd **X**ML
👉 It's a technique to send/receive **data from a server** without reloading the page.

Earlier we used:

* `XMLHttpRequest` (old way)
* Now we use `Fetch API` (modern way)

---

## 🚀 What is Fetch API?

`fetch()` is a **built-in function** in JavaScript to **make HTTP requests**.

> It's Promise-based and easier than `XMLHttpRequest`.

---

## ✅ Basic Syntax:

```js
fetch(url)
  .then(response => response.json()) // converts JSON string to JS object
  .then(data => console.log(data))
  .catch(error => console.log("Error:", error));
```

---

## 📦 Example:

```js
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(response => response.json())
  .then(post => {
    console.log("Title:", post.title);
  })
  .catch(err => console.error("Failed to fetch:", err));
```

---

## ✏️ Using `async/await` (cleaner):

```js
async function getPost() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const post = await response.json();
    console.log("Title:", post.title);
  } catch (err) {
    console.log("Error fetching data:", err);
  }
}

getPost();
```

---

## 📝 Notes:

* `.json()` converts the response into a JavaScript object
* Can also use `.text()`, `.blob()`, etc. depending on response type
* Works well for `GET`, `POST`, `PUT`, `DELETE` requests

---

## 🗃️ What are LocalStorage & SessionStorage?

They are both **Web Storage APIs** used to store **key-value** data in the browser.

| Feature       | `localStorage`          | `sessionStorage`        |
| ------------- | ----------------------- | ----------------------- |
| Lifetime      | Until manually deleted  | Until tab is closed     |
| Accessible in | All tabs of same origin | Only in the current tab |
| Storage Limit | \~5–10 MB               | \~5 MB                  |
| Persistent?   | ✅ Yes                   | ❌ No                    |

---

## 🧪 Syntax & Usage

### ✅ `localStorage`

```js
// Set item
localStorage.setItem("username", "shushanth");

// Get item
let name = localStorage.getItem("username");

// Remove item
localStorage.removeItem("username");

// Clear all
localStorage.clear();
```

---

### ✅ `sessionStorage`

```js
// Set item
sessionStorage.setItem("token", "abc123");

// Get item
let token = sessionStorage.getItem("token");

// Remove item
sessionStorage.removeItem("token");

// Clear all
sessionStorage.clear();
```

---

## 📌 Notes:

* Only **strings** can be stored.
* To store objects, convert with `JSON.stringify()` and `JSON.parse()`:

```js
let user = { name: "Shushanth", age: 21 };
localStorage.setItem("user", JSON.stringify(user));

let data = JSON.parse(localStorage.getItem("user"));
console.log(data.name); // Shushanth
```

---
