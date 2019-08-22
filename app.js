/*ROCK SCISSOR PAPER GAME!*/
//checks for proper input by user
const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
      return userInput
    } else {
      console.log('Error, invalid input')
    }
  }
  //console.log(getUserChoice('scissors'));
  //assigns random number 0 - 2 for computer to throw rock, paper or scissors
  function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3)
    switch (randomNumber) {
      case 0:
        return 'rock';
      case 1:
        return 'paper';
      case 2:
        return 'scissors'
    }
  }
  
  //console.log(getComputerChoice());
  
  function determineWinner(userChoice, computerChoice) {
    if(userChoice === computerChoice) {
      return 'Tie Game!'
    }
    //determines winner if player used rock
    if(userChoice === 'rock') {
      if(computerChoice === 'paper') {
        return 'The computer won!'
      } else {
        return 'You won!'
      }
    }
    //determines winner if player used paper
    if(userChoice === 'paper') {
      if(computerChoice === 'scissors') {
        return 'The computer won!'
      } else {
        return 'You won!'
      }
    }
    //determines winner if player used scissors
    if(userChoice === 'scissors') {
      if(computerChoice === 'rock') {
        return 'The computer won!'
      } else {
        return 'You won!'
      }
    }
  }
  //console.log(determineWinner('paper', 'rock'));
  
  const playGame = () => {//arrow function
    const userChoice = getUserChoice('rock');//takes userChoice input
    const computerChoice = getComputerChoice();//assigns random computerChoice input
    console.log('You threw: ' + userChoice);
    console.log('Computer threw: ' + computerChoice);
    
   console.log(determineWinner(userChoice, computerChoice));//logs userChoice, computerChoice and called determineWinner function
  }
  
  playGame();//calls playGame function