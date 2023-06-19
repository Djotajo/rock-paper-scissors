console.log("Hello there!");

function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

let b = getComputerChoice();
console.log(b);