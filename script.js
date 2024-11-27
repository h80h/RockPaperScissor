let userRPS;
let humanScore = 0;
let computerScore = 0;
let draw = 0;
let humanSelection;
let computerSelection;

alert(
`Open the console on the brower first to play this game
Note: Press Ctrl+Shift+J on Win or Cmd+Opt+J on Mac`);
playGame();

function getComputerChoice(){
  // use Math.floor(Math.random()) to ramdomly pick up number 1 - 3
  return Math.floor((Math.random() * 3)) + 1;
}

function getHumanChoice(){
  // use prompt() to let and get user's input
  // give user hint message in pop up dialogue
  // need to declare a variable to store the input!
  userRPS = prompt("rock / paper / scissors ?").toLowerCase();
  
  return userRPSConvert();

  function userRPSConvert(){
    switch (userRPS){
      case "rock":
        return 1;
      case "paper":
        return 2;
      case "scissors":
        return 3;
    }
  }
}

function playGame(){
  // Use for loop to make this game run 5 rounds
  // What needs to repeat are: getHumanChoice(), getComputerChoice(), playRound()
  
  for(let i = 0 ; i < 5 ; i++){
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
  }

  // Announce the winner
  if (humanScore > computerScore){
    console.log("The final winner is...YOU! Congrats! 🎉")
  } else if(humanScore < computerScore){
    console.log("What?? It's the computer beats you at the end...👾")
  } else {
    console.log("You & the computer are neck-and-neck this time 😼")
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
    
    const computerRPS = computerChoiceConvert();
    
    if(humanChoice > computerChoice){
      humanScore ++;
      console.log(`You win, ${userRPS} beats ${computerRPS}`);
    }else if(humanChoice < computerChoice){
      computerScore ++;
      console.log(`You lose...${userRPS} is beaten by ${computerRPS}`);
    }else if(humanChoice == computerChoice){
      draw ++;
      console.log(`It's a draw, ${userRPS} & ${computerRPS} can't beat each other`);
    }

    console.log("scoreboard:");
    console.log(`You:${humanScore} Computer:${computerScore} Draw:${draw}`);
    console.log("========+========+========");

    function computerChoiceConvert(){
      switch(computerSelection){
        case 1:
          return "rock";
        case 2:
          return "paper";
        case 3:
          return "scissors"
      }
    }
  }
}