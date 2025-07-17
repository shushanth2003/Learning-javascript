
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
