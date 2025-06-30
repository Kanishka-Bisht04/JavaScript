// create a game where you start with any random game number. Ask the user to keep guessing 
// the number until the user enters correct value.

/*
let gameNum = 25;
let userNum = prompt("Enter the number: ");
while( userNum != gameNum){
    userNum=prompt("Guess the nmber again");
}

console.log("Congrats you entered the right number");

*/

let gameNum = Math.floor(Math.random() * 100) + 1; // Random number between 1 and 100
let userNum = parseInt(prompt("Guess a number between 1 and 100:"));
let attempts = 1;

while (userNum !== gameNum) {
    if (userNum > gameNum) {
        userNum = parseInt(prompt("Too high! Try again:"));
    } else if (userNum < gameNum) {
        userNum = parseInt(prompt("Too low! Try again:"));
    }
    attempts++;
}

console.log("Congrats! You guessed the right number", gameNum, "in", attempts, "attempt(s)!");

