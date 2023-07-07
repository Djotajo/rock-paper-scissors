function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * 3)];
}


function playRound(computerSelection, playerSelection) {
    if (computerSelection === "Scissors" && playerSelection === "Paper" || computerSelection === "Paper" && playerSelection === "Rock" || computerSelection === "Rock" && playerSelection === "Scissors") {
        return `Computer Wins! ${computerSelection} > ${playerSelection}`
    }
    else if (playerSelection === "Scissors" && computerSelection === "Paper" || playerSelection === "Paper" && computerSelection === "Rock" || playerSelection === "Rock" && computerSelection === "Scissors") {
        return `Player Wins! ${playerSelection} > ${computerSelection}`
    } else if (computerSelection === computerSelection) {
        return `Tie! You both chose ${playerSelection}.`
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
        if (getRoundResult[0] === "C") {
            getComputerScore ++;
            computerScore.textContent = getComputerScore;
        } else if (getRoundResult[0] === "P"){
            getPlayerScore++;
            playerScore.textContent = getPlayerScore;
        };
        let roundHistory = document.createElement("p");
        roundHistory.textContent = (getRoundResult);
        history.appendChild(roundHistory);
        declareWinner()
    });
}