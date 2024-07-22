let age = 29;

function sayHello(){
    let name = 'Edward';
    console.log(`Hello ${name}`);
}

console.log(age); 
sayHello();

// Nested functions
const square = function(length){
    return function area(){
        return length * length;
    }
}

// To use the nested function, you need to call `square` with a length value
const length = 5; // Define a length value
const areaFunction = square(length); // Get the area function
console.log(areaFunction()); // Call the area function and log the result

// New function
function sayHi(name, birthYear){
    console.log(`Hello ${name}, you were born in ${birthYear}`);
}

const birthYear = function(age){
    return 2024 - age;
}

const nameInput = prompt("Enter your name");
const ageInput = prompt("Enter your age"); // Use prompt to get user input

// Call sayHi with the user's input
sayHi(nameInput, birthYear(Number(ageInput))); // Convert ageInput to a number before passing it

// Upper case function
function objectUpper(){
    // Creating an object
    const student = {name: 'Ajith', age: 29}
    console.log(`Name in upper case is ${student.name.toUpperCase()}`);
}

// Call the upper case function
objectUpper();
