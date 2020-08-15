// create secretNumber
var secretNumber = 4;

// ask to guess a number
var guess = prompt("Guess a number: ");

// check the number
if (Number(guess) === 4) {
    alert("YOU GOT IT RIGHT!!!");
}

// check if the guess is tooo high or low
else if (Number(guess) > 4) {
    alert("Too high. Guess again!")
}

else {
    alert("Too low. Guess again!")
}