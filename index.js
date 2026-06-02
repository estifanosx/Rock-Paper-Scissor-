const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissor = document.querySelector(".scissor");
let display = document.getElementById("result");
let urMove = document.getElementById("urMove");
let cpMove = document.getElementById("cpMove");

let computerMove = "";

rock.onclick = () => {
  repetiton();
  urMove.textContent = "You Chose Rock";
  if (computerMove === "rock") {
    display.textContent = "Tie";
  } else if (computerMove === "paper") {
    display.textContent = "You Lose";
  } else {
    display.textContent = "You win";
  }
};
paper.onclick = () => {
  repetiton();
  urMove.textContent = "You Chose Paper";
  if (computerMove === "rock") {
    display.textContent = "You win";
  } else if (computerMove === "paper") {
    display.textContent = "Tie";
  } else {
    display.textContent = "You Lose";
  }
};
scissor.onclick = () => {
  repetiton();
  urMove.textContent = "You Chose Scissor";
  if (computerMove === "rock") {
    display.textContent = "You Lose";
  } else if (computerMove === "paper") {
    display.textContent = "You win";
  } else {
    display.textContent = "Tie";
  }
};

const repetiton = () => {
  let randomNumber = Math.random();
  if (randomNumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber > 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "paper";
  } else {
    computerMove = "scissor";
  }
  cpMove.textContent = `Computer Chose ${computerMove}`;
};
