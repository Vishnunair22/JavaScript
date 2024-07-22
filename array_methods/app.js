// Creating an array
const numbers = [1, 2, 3, 4, 5, 6];

// for...of printing method
for (let item of numbers) {
    console.log(item);
}

// forEach method
console.log('Numbers are:');
numbers.forEach(function(el) {
    console.log(el);
});

// Array with objects
const movies = [
    { name: 'Cars', score: 9 },
    { name: 'John Wick', score: 10 },
    { name: 'Fall Guy', score: 7 }
];

// Using for...of
for (let movie of movies) {
    console.log(`Movie is ${movie.name} and the score is ${movie.score}`);
}
// using for each 
movies.forEach(function(el){
    console.log(`The movie is ${el.name} and score is ${el.score}`);
});
// map method
const letters = ['q','w','e','r','t','y'];
console.log(letters);
const upperLetters = letters.map(function(letr){
    return letr.toUpperCase();
});
console.log(upperLetters);                      