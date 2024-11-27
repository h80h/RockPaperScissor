let randomNum;
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
  randomNum = Math.floor((Math.random() * 3)) + 1;
  switch(randomNum){
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissors"
  }
}

function getHumanChoice(){
  // use prompt() to let and get user's input
  // give user hint message in pop up dialogue
  // need to declare a variable to store the input!
  return prompt("rock / paper / scissors ?").toLowerCase();
}

function playGame(){
  // Use for loop to make this game run 5 rounds
  // What needs to repeat are: getHumanChoice(), getComputerChoice(), playRound()
  
  alert("Let's do a total of 5 rounds 'Rock, Paper, Scissors' with the computer! 👻 ")
  
  for(let i = 0 ; i < 5 ; i++){
    alert(`Round ${i+1}`);
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();

    console.log(`Round ${i+1}:`)
    playRound(humanSelection, computerSelection);
  }

  // Announce the winner
  if (humanScore > computerScore ){
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
    // +==========+========+========+==========+
    // |   b\a    |  rock  | paper  | scissors |
    // +==========+========+========+==========+
    // | rock     | draw   | a(win) | b(win)   |
    // +----------+--------+--------+----------+
    // | paper    | b(win) | draw   | a(win)   |
    // +----------+--------+--------+----------+
    // | scissors | a(win) | b(win) | draw     |
    // +----------+--------+--------+----------+

    console.log(`You choose ${humanSelection}; Computer choose ${computerSelection}`)

    if((humanChoice == "rock" && computerChoice == "scissors") ||
      (humanChoice == "paper" && computerChoice == "rock") ||
      (humanChoice == "scissors" && computerChoice == "paper")){
      humanScore ++;
      console.log(`You win, ${humanSelection} beats ${computerSelection}`);
    }else if(humanChoice == computerChoice){
      draw ++;
      console.log(`It's a draw, ${humanSelection} & ${computerSelection} can't beat each other`);
    }else {
      computerScore ++;
      console.log(`You lose...${humanSelection} is beaten by ${computerSelection}`);
    }

    console.log("Scoreboard:");
    console.log(`You:${humanScore} Computer:${computerScore} Draw:${draw}`);
    console.log("========+========+========");
  }
}