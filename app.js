/*ROCK SCISSOR PAPER GAME!*/
//declares variables
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector(".scoreboard");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");


function getComputerChoice() {
    let choices = ['r', 'p', 's'];
    const randomNumber = (Math.floor(Math.random() * 3));
    return choices[randomNumber];
}

function playGame(userChoice) {
    const computerChoice = getComputerChoice();
    
    switch {
        case:
    }
}

function main() {
rock_div.addEventListener('click', function() {
    playGame("rock");
});
paper_div.addEventListener('click', function() {
   playGame("paper"); 
});
scissors_div.addEventListener('click', function() {
    playGame("scissors");
});
}

main();