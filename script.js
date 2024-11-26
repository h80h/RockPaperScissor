let randomNum;
let userChoice;
let humanScore = 0;
let computerScore = 0;

getComputerChoice();
getHumanChoice();

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

function getHumanChoice(){
  // use prompt() to let and get user's input
  // give user hint message in pop up dialogue
  // need to declare a variable to store the input!
  userChoice = prompt("rock / paper / scissors ?")
}