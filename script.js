console.log("Hello there!");

function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

let b = getComputerChoice();
console.log(b);