function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * 3)];
}


function playRound(computerSelection, playerSelection) {
    if (computerSelection === "Scissors" && playerSelection === "Paper" || computerSelection === "Paper" && playerSelection === "Rock" || computerSelection === "Rock" && playerSelection === "Scissors") {
        return `Computer Wins! ${computerSelection} beats ${playerSelection}`
    }
    else if (playerSelection === "Scissors" && computerSelection === "Paper" || playerSelection === "Paper" && computerSelection === "Rock" || playerSelection === "Rock" && computerSelection === "Scissors") {
        return `Player Wins! ${playerSelection} beats ${computerSelection}`
    } else if (computerSelection === computerSelection) {
        return `Tie! ${playerSelection} brings luck to neither opponent.`
    }
}

let getComputerScore = 0;
let getPlayerScore = 0;

const computerScore = document.querySelector("#computerScore");
const playerScore = document.querySelector("#playerScore");


const rock = document.querySelector("#Rock");
const paper = document.querySelector("#Paper");
const scissors = document.querySelector("#Scissors");

const options = document.querySelectorAll("button:not(#newG)");

const winner = document.querySelector("#winner");

const newGame = document.querySelector("#newGame");

const history = document.querySelector("#history");

function playNewGame() {
    newGame.addEventListener("click", () => {
        window.location.reload();
})} 

function disableButtons() {
    for (let option of options) {
        option.disabled = true;
        newGame.removeAttribute("hidden");
        playNewGame()
    }
}

function declareWinner() {
    if (getComputerScore == 5) {
        winner.textContent = "You lose!";
        disableButtons();
    } else if (getPlayerScore == 5) {
        winner.textContent = "You win!";
        disableButtons();
    }
}

for (let option of options) {
    option.addEventListener("click", function(e) {
        let getRoundResult = playRound(getComputerChoice(), e.target.id);
        console.log(e);
        if (getRoundResult[0] === "C") {
            getComputerScore ++;
            computerScore.textContent = getComputerScore;
        } else if (getRoundResult[0] === "P"){
            getPlayerScore++;
            playerScore.textContent = getPlayerScore;
        };
        console.log(getRoundResult);
        let roundHistory = document.createElement("p");
        roundHistory.textContent = (getRoundResult);
        history.appendChild(roundHistory);
        declareWinner()
        // playNewGame()
    });
}



// rock.addEventListener("click", function(e) {
//     let getRoundResult = playRound(getComputerChoice(), e.target.id);
//     console.log(e);
//     if (getRoundResult[0] === "C") {
//         computerScore ++;
//         computerScor.textContent = computerScore;
//     } else if (getRoundResult[0] === "P"){
//         playerScore++;
//         playerScor.textContent = playerScore;
//     };
//     console.log(getRoundResult);
// });


// paper.addEventListener("click", () => {
//     let getRoundResult = playRound(getComputerChoice(), "Paper");
//     if (getRoundResult[0] === "C") {
//         computerScore ++;
//         computerScor.textContent = computerScore;
//     } else if (getRoundResult[0] === "P"){
//         playerScore++;
//         playerScor.textContent = playerScore;
//     };
//     console.log(getRoundResult);
// });


// scissors.addEventListener("click", () => {
//     let getRoundResult = playRound(getComputerChoice(), "Scissors");
//     if (getRoundResult[0] === "C") {
//         computerScore ++;
//         computerScor.textContent = computerScore;
//     } else if (getRoundResult[0] === "P"){
//         playerScore++;
//         playerScor.textContent = playerScore;
//     };
//     console.log(getRoundResult);
// });




// console.log(playRound(computerSelection, "Rock"));
// game()


// function getPlayerChoice() {
//     let playerSelection = prompt("Rock, Paper or Scissors", "");
//     while (!playerSelection || (playerSelection.toLowerCase() !== "rock" && playerSelection.toLowerCase() !== "paper" && playerSelection.toLowerCase() !== "scissors")) {
//         console.log("Please enter a valid choice!");
//         playerSelection = prompt("Rock, Paper or Scissors", "");
//     }
//     playerSelection = `${playerSelection[0].toUpperCase()}${playerSelection.substring(1).toLowerCase()}`;
//     return playerSelection;
// }

// function game() {
    // for (let i = 0; i < 5; i++) {
    //     let computerSelection = getComputerChoice();
    //     let playerSelection = getPlayerChoice()
    //     let getRoundResult = playRound(computerSelection, playerSelection);
    //     if (getRoundResult[0] === "C") {
    //         computerScore ++;
    //     } else if (getRoundResult[0] === "P"){
    //         playerScore++;
    //     }
    //     console.log(getRoundResult)
    // }
    // console.log(`Computer : Player  ${computerScore}:${playerScore}`)
    // if (computerScore > playerScore) {
    //     console.log(`Computer wins!`);
    // } else if (computerScore < playerScore) {
    //     console.log(`Player wins!`);
    // } else {
    //         console.log(`It's a tie!`)
    //     }
// }