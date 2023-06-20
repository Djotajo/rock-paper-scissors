function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

function getPlayerChoice() {
    let playerSelection = prompt("Rock, Paper or Scissors", "");
    while (!playerSelection || (playerSelection.toLowerCase() !== "rock" && playerSelection.toLowerCase() !== "paper" && playerSelection.toLowerCase() !== "scissors")) {
        console.log("Please enter a valid choice!");
        playerSelection = prompt("Rock, Paper or Scissors", "");
    }
    playerSelection = `${playerSelection[0].toUpperCase()}${playerSelection.substring(1).toLowerCase()}`;
    return playerSelection;
}

function playRound(computerSelection, playerSelection) {
    if (computerSelection === "Scissors" && playerSelection === "Paper" || computerSelection === "Paper" && playerSelection === "Rock" || computerSelection === "Rock" && playerSelection === "Scissors") {
        return `Computer Wins! ${computerSelection} beats ${playerSelection}`
    }
    else if (playerSelection === "Scissors" && computerSelection === "Paper" || playerSelection === "Paper" && computerSelection === "Rock" || playerSelection === "Rock" && computerSelection === "Scissors") {
        return `Player Wins! ${playerSelection} beats ${computerSelection}`
    } else if (computerSelection === computerSelection) {
        return "Tie!"
    }

}

function game() {
    let computerScore = 0;
    let playerScore = 0;
    for (let i = 0; i < 5; i++) {
        let computerSelection = getComputerChoice();
        let playerSelection = getPlayerChoice()
        let getRoundResult = playRound(computerSelection, playerSelection);
        if (getRoundResult[0] === "C") {
            computerScore ++;
        } else if (getRoundResult[0] === "P"){
            playerScore++;
        }
        console.log(getRoundResult)
    }
    console.log(`Computer : Player  ${computerScore}:${playerScore}`)
}

game()