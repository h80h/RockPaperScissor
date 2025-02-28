let randomNum;
let humanScore = 0;
let computerScore = 0;
let draw = 0;
let humanChoice;
let computerChoice;

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

let btns = document.querySelector("#btns")
let results = document.querySelector("#results")

btns.addEventListener("click", function(e){
  humanChoice = e.target.id;
  computerChoice = getComputerChoice();
  playRound(humanChoice, computerChoice);
})

// Announce the winner
// if (humanScore > computerScore ){
//   console.log("The final winner is...YOU! Congrats! 🎉")
// } else if(humanScore < computerScore){
//   console.log("What?? It's the computer beats you at the end...👾")
// } else {
//   console.log("You & the computer are neck-and-neck this time 😼")
// }

function playRound(humanSelection, computerSelection){
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

  results.textContent += (`You choose ${humanSelection}; Computer choose ${computerSelection}\n`)

  if((humanSelection == "rock" && computerSelection == "scissors") ||
    (humanSelection == "paper" && computerSelection == "rock") ||
    (humanSelection == "scissors" && computerSelection == "paper")){
    humanScore ++;
    results.textContent += (`You win, ${humanSelection} beats ${computerSelection}\n`);
  }else if(humanSelection == computerSelection){
    draw ++;
    results.textContent += (`It's a draw, ${humanSelection} & ${computerSelection} can't beat each other\n`);
  }else {
    computerScore ++;
    results.textContent += (`You lose...${humanSelection} is beaten by ${computerSelection}\n`);
  }

  results.textContent += ("Scoreboard:\n");
  results.textContent += (`You:${humanScore} Computer:${computerScore} Draw:${draw}\n`);
  results.textContent += ("========+========+========\n\n");

  if(humanScore >= 5){
    results.textContent += ("You got the 5 points faster, you're the final winner!")
  } else if(computerScore >= 5){
    results.textContent += ("computer got 5 points faster than you, computer is the final winner 👾")
  }
}