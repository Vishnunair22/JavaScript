// Math operators in JavaScript
console.log(20 + 25); // Addition
console.log(40 - 20); // Subtraction
console.log(100 * 2); // Multiplication
console.log(100 / 4); // Division
console.log(125 % 4); // Modulus

// Variable declaration
let myName = 'Vishnu';
console.log(myName); // Fixed the variable name

// Variables can have any data type
let num = 2;
console.log(num);
let value = true;
console.log(value);

// const keyword
const pi = 3.14;
console.log(pi);

// JS strings
myName = 'Harry Potter'; // Reassigning the variable instead of redeclaring
console.log(myName); // is a string

// Indexing a string 
console.log(myName[2]); // gives 'r' as result

// String to upper case
console.log(myName.toUpperCase()); // gives out 'HARRY POTTER'

// Length of a string
console.log(myName.length);

// Trim method
let newWord = '  Google   ';
console.log(newWord.trim());

// indexOf method
console.log(newWord.trim().indexOf('G')); // Fixed case sensitivity

// Slice method
let sayHello = 'Hello Everyone! Let’s gather around';
console.log(sayHello.slice(1, 5));

// Splice method (not applicable to strings, correct usage below with array)
let arr = ['Hello', 'Everyone!'];
arr.splice(1, 0, 'sat'); // Inserting 'sat' at index 1
console.log(arr);

// Escape characters in string
console.log('Hello there\nHow are you?'); // prints 'How are you?' in a new line
console.log('Hello Sammy\"'); // prints "Hello Sammy"
console.log('This is a popular symbol in programming\\');

// Random number generation
let rollDie = Math.floor(Math.random() * 6) + 1; // generate a number between 1 and 6
console.log(rollDie);

// Using string template literals
let name = 'Donald';
let age = 24;
console.log(`Hello ${name}. Congrats on turning ${age}`); // prints Hello Donald. Congrats on turning 24
