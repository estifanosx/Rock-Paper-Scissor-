const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissor = document.querySelector(".scissor");
let display = document.getElementById("result");
let urMove = document.getElementById("urMove");
let cpMove = document.getElementById("cpMove");
let score = document.getElementById("score");
let Wins = 0;
let Losses = 0;
let Ties = 0;

rock.onclick = () => {
  playGame("rock");

  // urMove.textContent = "You Chose Rock";
  // if (computerMove === "rock") {
  //   display.textContent = "Tie";
  // } else if (computerMove === "paper") {
  //   display.textContent = "You Lose";
  // } else {
  //   display.textContent = "You win";
  // }
};
paper.onclick = () => {
  playGame("paper");
  // urMove.textContent = "You Chose Paper";
  // if (computerMove === "rock") {
  //   display.textContent = "You win";
  // } else if (computerMove === "paper") {
  //   display.textContent = "Tie";
  // } else {
  //   display.textContent = "You Lose";
  // }
};
scissor.onclick = () => {
  playGame("scissor");

  // urMove.textContent = "You Chose Scissor";
  // if (computerMove === "rock") {
  //   display.textContent = "You Lose";
  // } else if (computerMove === "paper") {
  //   display.textContent = "You win";
  // } else {
  //   display.textContent = "Tie";
  // }
};

let playGame = (userMove) => {
  const computerMove = getcomputerMove();
  urMove.textContent = `You choose ${userMove}`;
  cpMove.textContent = `Computer Choose ${computerMove}`;
  if (userMove === computerMove) {
    display.textContent = "You Tie";
    Ties++;
  } else if (
    (userMove === "rock" && computerMove === "scissor") ||
    (userMove === "scissor" && computerMove === "paper") ||
    (userMove === "paper" && computerMove === "rock")
  ) {
    display.textContent = "you Win ";
    Wins++;
  } else {
    display.textContent = "You Lose ";
    Losses++;
  }
  updateScore();
};

const getcomputerMove = () => {
  let randomNumber = Math.random();
  if (randomNumber < 1 / 3) {
    return "rock";
  } else if (randomNumber < 2 / 3) {
    return "paper";
  } else {
    return "scissor";
  }
};

updateScore = () => {
  score.textContent = `Wins : ${Wins} | Losses :${Losses}  | Ties ${Ties}`;
};
