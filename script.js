let randomNum;

function getComputerChoice(){
  // use Math.floor(Math.random()) to ramdomly pick up number 1 - 3
  // if it picks 1, return 'rock'
  // if it picks 2, return 'paper'
  // if it picks 3, return 'scissors' 
  randomNum = Math.floor((Math.random() * 3)) + 1
  switch (randomNum){
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissors";
  }
}