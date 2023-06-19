console.log("Hello there!");

function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * 3)];
}



let computerSelection = getComputerChoice();
let playerSelection = prompt("Rock, Paper or Scissors", "");
playerSelection = `${playerSelection[0].toUpperCase()}${playerSelection.substring(1).toLowerCase()}`;

console.log(playerSelection);