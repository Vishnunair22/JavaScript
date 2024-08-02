const one = document.querySelector('.one');
const two = document.querySelector('.two');
const player1 = document.querySelector('.player1');
const player2 = document.querySelector('.player2');
const reset = document.querySelector('.reset');

let total1 = 0;
let total2 = 0;

player1.addEventListener('click', function() {
    const randNum = Math.floor(Math.random() * 2);  // Random number between 0 and 1
    total1 += randNum;
    one.innerHTML = total1;
    if (total1 >= 5) {
        alert('Player 1 wins!');
        resetGame();
    }  // Fixed the missing closing brace here
});

player2.addEventListener('click', function() {
    const randNum = Math.floor(Math.random() * 2);  // Random number between 0 and 1
    total2 += randNum;
    two.innerHTML = total2;
    if (total2 >= 5) {
        alert('Player 2 wins!');
        resetGame();
    } 
});

reset.addEventListener('click', resetGame);

function resetGame() {
    total1 = 0;
    total2 = 0;
    one.innerHTML = total1;  // Reset player 1 score display
    two.innerHTML = total2;  // Reset player 2 score display
}
