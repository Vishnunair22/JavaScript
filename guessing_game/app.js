// Creating a variable for the maximum value
let maximum = parseInt(prompt("Enter the maximum value for the range"));
while(isNaN(maximum) || maximum <= 0){
    maximum = parseInt(prompt("Enter a valid number greater than 0"));
}

let target = Math.floor(Math.random() * maximum) + 1;
console.log(`Target number (for testing): ${target}`); // This line is for testing and can be removed

let guess = parseInt(prompt("Enter your guess"));
let attempt = 1;

while(guess !== target){
    if(isNaN(guess)){
        guess = parseInt(prompt("Enter a valid number"));
    } else if(guess > target){
        guess = parseInt(prompt("You are too high! Enter another number"));
    } else if(guess < target){
        guess = parseInt(prompt("Too low! Enter another number"));
    } 
    attempt++;
}

console.log('Bingo! You got it right');
console.log(`You had ${attempt} attempts`);
