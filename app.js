/*ROCK SCISSOR PAPER GAME!*/
//declares variables
let playerScore = 0;
let computerScore = 0;
const playerScore_span = document.getElementById('player-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector(".scoreboard");
const playerChoice_span = document.querySelector("#player-choice");
const computerChoice_span = document.querySelector("#computer-choice");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");


function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    const randomNumber = (Math.floor(Math.random() * 3));
    return choices[randomNumber];
}

function win(playerChoice, computerChoice) {
    playerScore++;
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    playerChoice_span.innerHTML = "Player Chose: " + playerChoice;
    computerChoice_span.innerHTML = "Computer Chose: " + computerChoice;
}

function lose() {
    computerScore++;
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
   
}

function draw() {
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
   
}

function playGame(playerChoice) {
    const computerChoice = getComputerChoice();
    switch (playerChoice + computerChoice) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            win(playerChoice, computerChoice);
            break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            lose();
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            draw();
            break;
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