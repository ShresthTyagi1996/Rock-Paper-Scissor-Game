let choices = ["rock", "paper", "scissor"];
const winImage = document.querySelectorAll("img")[0];
const loseImage = document.querySelectorAll("img")[1];
const tryAgain = document.querySelectorAll("img")[2];
const imagePanel = document.querySelectorAll(".status");

// Initially hide all images
winImage.style.display = "none";
loseImage.style.display = "none";
tryAgain.style.display = "none";

function winner(userChoice, compChoice) {
  if (
    (userChoice === "rock" && compChoice === "scissor") ||
    (userChoice === "scissor" && compChoice === "paper") ||
    (userChoice === "paper" && compChoice === "rock")
  ) {
    winImage.style.display = "block";
    console.log("You win!");
  } else if (userChoice === compChoice) {
    tryAgain.style.display = "block";
    console.log("Try again!");
  } else {
    loseImage.style.display = "block";
    console.log("Computer wins!");
  }
}

let userChoice = "";
let compChoice = "";

const choice_rock = document.querySelectorAll("button")[0];
choice_rock.addEventListener("click", function () {
  winImage.style.display = "none";
  loseImage.style.display = "none";
  tryAgain.style.display = "none";
  userChoice = "rock";
  choice_rock.style.backgroundColor = "rgb(162, 225, 225)";
  console.log("User chose " + userChoice);
});
const choice_paper = document.querySelectorAll("button")[1];
choice_paper.addEventListener("click", function () {
  winImage.style.display = "none";
  loseImage.style.display = "none";
  tryAgain.style.display = "none";
  userChoice = "paper";
  choice_paper.style.backgroundColor = "rgb(162, 225, 225)";
  console.log("User chose " + userChoice);
});
const choice_scissor = document.querySelectorAll("button")[2];
choice_scissor.addEventListener("click", function () {
  winImage.style.display = "none";
  loseImage.style.display = "none";
  tryAgain.style.display = "none";
  userChoice = "scissor";
  choice_scissor.style.backgroundColor = "rgb(162, 225, 225)";
  console.log("User chose " + userChoice);
});
const compChoiceButton = document.querySelectorAll("button")[3];
compChoice = compChoiceButton.addEventListener("click", function () {
  compChoiceButton.style.backgroundColor = "rgb(162,225,225)";
  let random = Math.floor(Math.random() * 3);
  compChoice = choices[random];
  console.log("Computer chose " + compChoice);
});
const winnerButton = document.querySelectorAll("button")[4];
winnerButton.addEventListener("click", function () {
  choice_rock.style.backgroundColor = "white";
  choice_paper.style.backgroundColor = "white";
  choice_scissor.style.backgroundColor = "white";
  compChoiceButton.style.backgroundColor = "white";
});
