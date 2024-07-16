// Creating an array
let color = ['blue', 'green', 'red', 'yellow'];

// Finding an array element
console.log(color[1]); // Output: green

// Replacing an array element
color[3] = 'white';
console.log(color); // Output: ['blue', 'green', 'red', 'white']

// Basic array methods
// Push method
let movieLine = ['Athul', 'Anoop', 'Madhu'];
console.log(movieLine); // Output: ['Athul', 'Anoop', 'Madhu']
movieLine.push('Shaan');
console.log(movieLine); // Output: ['Athul', 'Anoop', 'Madhu', 'Shaan']

// Pop method
movieLine.pop();
console.log(movieLine); // Output: ['Athul', 'Anoop', 'Madhu']

// Unshift method
movieLine.unshift('Melvin');
console.log(movieLine); // Output: ['Melvin', 'Athul', 'Anoop', 'Madhu']

// Shift method
movieLine.shift();
console.log(movieLine); // Output: ['Athul', 'Anoop', 'Madhu']

// new array
let cars = ['BMW', 'Benz', 'Audi', 'Toyota'];

// second array
let cars1 = ['Ford', 'Tesla'];

// array after concatenation
cars = cars.concat(cars1);
console.log(cars); // Output: ['BMW', 'Benz', 'Audi', 'Toyota', 'Ford', 'Tesla']

// index of an array element
console.log(cars.indexOf('BMW')); // Output: 0

// check if an array includes an element
console.log(cars.includes('Audi')); // Output: true

// sort an array
cars.sort();
console.log(cars); // Output: ['Audi', 'Benz', 'BMW', 'Ford', 'Tesla', 'Toyota']

// slice an array
console.log(cars.slice(2, 4)); // Output: ['BMW', 'Ford']

// splice an array
cars.splice(1, 0, 'Nissan');
console.log(cars); // Output: ['Audi', 'Nissan', 'Benz', 'BMW', 'Ford', 'Tesla', 'Toyota']
