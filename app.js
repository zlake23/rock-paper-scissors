/*ROCK SCISSOR PAPER GAME!*/
//declares variables
let playerScore = 0;
let computerScore = 0;
const playerScore_span = document.getElementById('player-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector(".scoreboard");
const playerChoice_span = document.querySelector("#player-choice");
const computerChoice_span = document.querySelector("#computer-choice");
const gameResult_div = document.querySelector("#game-result-val");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");
const newGame_div = document.querySelector("#new-game-btn");

//random computer choice
function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    const randomNumber = (Math.floor(Math.random() * 3));
    return choices[randomNumber];
}

//win, lose, draw functions
function win(playerChoice, computerChoice) {
    playerScore++;
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    playerChoice_span.innerHTML = "Player Chose: " + playerChoice;
    computerChoice_span.innerHTML = "Computer Chose: " + computerChoice;
    gameResult_div.innerHTML = "Player Wins!";
    document.getElementById("game-result-val").classList.remove('red-box', 'gray-box');
    document.getElementById("game-result-val").classList.add('green-box');
}

function lose(playerChoice, computerChoice) {
    computerScore++;
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    playerChoice_span.innerHTML = "Player Chose: " + playerChoice;
    computerChoice_span.innerHTML = "Computer Chose: " + computerChoice;
    gameResult_div.innerHTML = "Player Loses!";
    document.getElementById("game-result-val").classList.remove('green-box', 'gray-box');
    document.getElementById("game-result-val").classList.add('red-box');
}

function draw(playerChoice, computerChoice) {
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    playerChoice_span.innerHTML = "Player Chose: " + playerChoice;
    computerChoice_span.innerHTML = "Computer Chose: " + computerChoice;
    gameResult_div.innerHTML = "It's a Draw!";
    document.getElementById("game-result-val").classList.remove('red-box', 'green-box');
    document.getElementById("game-result-val").classList.add('gray-box');
}


//gameplay function
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
            lose(playerChoice, computerChoice);
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            draw(playerChoice, computerChoice);
            break;
    }
}

function clearGame() {
    playerChoice_span.innerHTML = "Player Chose: ";
    computerChoice_span.innerHTML = "Computer Chose: ";
    gameResult_div.innerHTML = "";
    playerScore = 0;
    playerScore_span.innerHTML = playerScore;
    computerScore = 0;
    computerScore_span.innerHTML = computerScore;
}

//button click functions
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
newGame_div.addEventListener('click', function () {
    clearGame();
})

}

main();