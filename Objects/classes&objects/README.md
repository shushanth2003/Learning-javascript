## Objects
 an object is a fundamental data structure used to store collections of data and more complex entities. Objects are made up of key-value pairs, where the key (or property name) is usually a string (or Symbol), and the value can be any data type, including another object or a function (called a method when it's attached to an object).

 ### constructor
 In JavaScript, a constructor is a special function used to create and initialize objects. It's most often used when you need to create multiple similar objects with the same structure and behavior.
 
 ```javascript
 function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function() {
    console.log("Hello, my name is " + this.name);
  };
}

const person1 = new Person("Alice", 25);
const person2 = new Person("Bob", 30);

console.log(person1.name); // Alice
console.log(person2.name); // Bob
person1.greet(); // Hello, my name is Alice
person2.greet(); // Hello, my name is Bob
```javascript