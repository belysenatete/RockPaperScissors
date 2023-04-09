const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
let userChoice;
let computerChoice;
let result;

//function for possible choices of a user and a computer
possibleChoices.forEach((possibleChoice) => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    getComputerChoice();
    getResult();
}));

//function for a random computer choice
function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber === 1) {
        computerChoice = 'rock';
    }
    if (randomNumber === 2) {
        computerChoice = 'paper';
    }
    if (randomNumber === 3) {
        computerChoice = 'scissors';
    }
    computerChoiceDisplay.innerHTML = computerChoice;
}

//function for a result display
function getResult() {
    if (userChoice === computerChoice) {
        result = 'Its a tie!';
    }
    if (computerChoice === 'rock' && userChoice === 'paper') {
        result = 'You win';
    }
    if (computerChoice === 'rock' && userChoice === 'scissors') {
        result = 'You lost';
    }
    if (computerChoice === 'paper' && userChoice === 'rock') {
        result = 'You lost';
    }
    if (computerChoice === 'paper' && userChoice === 'scissors') {
        result = 'You win';
    }
    if (computerChoice === 'scissors' && userChoice === 'rock') {
        result = 'You win';
    }
    if (computerChoice === 'scissors' && userChoice === 'paper') {
        result = 'You lost';
    }
    resultDisplay.innerHTML = result;
    console.log(result);
}
