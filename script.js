let humanScore = 0;
let computerScore = 0;

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

function getComputerChoice(){
  // use Math.floor(Math.random()) to ramdomly pick up number 1 - 3
  return Math.floor((Math.random() * 3)) + 1;
}

function getHumanChoice(){
  // use prompt() to let and get user's input
  // give user hint message in pop up dialogue
  // need to declare a variable to store the input!
  let userChoice;
  userChoice = prompt("rock / paper / scissors ?").toLowerCase();
  
  return userChoiceConvert();

  function userChoiceConvert(){
    switch (userChoice){
      case "rock":
        return 1;
      case "paper":
        return 2;
      case "scissors":
        return 3;
    }
  }
  
}

function playRound(humanChoice, computerChoice){
  // IF humanChoice is the winner, increase humanScore by 1
  // ELSE IF computerChoice is the winner, increase computerScore by 1
  // Here's the table to show whether human or computer win (a is human):
  //
  // +=====+========+========+========+
  // | b\a |   1    |   2    |   3    |
  // +=====+========+========+========+
  // |   1 | draw   | a(win) | a(win) |
  // +-----+--------+--------+--------+
  // |   2 | b(win) | draw   | a(win) |
  // +-----+--------+--------+--------+
  // |   3 | b(win) | b(win) | draw   |
  // +-----+--------+--------+--------+
  
  if(humanChoice > computerChoice){
    return humanScore ++;
  }else if (humanChoice < computerChoice){
    return computerScore ++;
  }

}