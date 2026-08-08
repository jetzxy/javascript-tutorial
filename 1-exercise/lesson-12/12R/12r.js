let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

//   if (!score) {
//     score = {
//       wins: 0,
//       losses: 0,
//       ties: 0,
//     };
//   }

updateScoreElement();

let isAutoPlaying = false;
let intervalId;

// Arrow Function
// const autoPlay = () => {

// }

// Regular Function - Easier to read, Hoisting
function autoPlay() {
  if (!isAutoPlaying) {
    intervalId = setInterval(() => {
      const playerMove = pickComputerMove();
      playGame(playerMove);
    }, 1000);
    isAutoPlaying = true;

    document.querySelector(".js-auto-play-button").innerHTML = "Stop Playing";
  } else {
    clearInterval(intervalId);
    isAutoPlaying = false;
    document.querySelector(".js-auto-play-button").innerHTML = "Auto Playing";
  }
}

function resetScore() {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  localStorage.removeItem("score");
  updateScoreElement();
}

// Solution for exercise 12s.
document.querySelector(".js-auto-play-button").addEventListener("click", () => {
  // const btnElement = document.querySelector(".js-auto-play-button");

  // if (btnElement.innerHTML === "Auto Play") {
  //   btnElement.innerHTML = "Stop Playing";
  // } else {
  //   btnElement.innerHTML = "Auto Play";
  // }

  autoPlay();
});

document
  .querySelector(".js-reset-score-button")
  .addEventListener("click", () => {
    showResetConfirmation();
  });

const rockButton = document.querySelector(".js-rock-button");
rockButton.addEventListener("click", () => {
  playGame("rock");
});
const paperButton = document.querySelector(".js-paper-button");
paperButton.addEventListener("click", () => {
  playGame("paper");
});
const scissorsButton = document.querySelector(".js-scissors-button");
scissorsButton.addEventListener("click", () => {
  playGame("scissors");
});

document.body.addEventListener("keydown", (e) => {
  console.log(e.key);
  if (e.key === "r") {
    playGame("rock");
  } else if (e.key === "p") {
    playGame("paper");
  } else if (e.key === "s") {
    playGame("scissors");
  } else if (e.key === "a") {
    autoPlay();
  } else if (e.key === "Backspace") {
    showResetConfirmation();
  }
});

function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = "";

  if (playerMove === "scissors") {
    if (computerMove === "rock") {
      result = "You lose.";
    } else if (computerMove === "paper") {
      result = "You win.";
    } else if (computerMove === "scissors") {
      result = "Tie.";
    }
  } else if (playerMove === "paper") {
    if (computerMove === "rock") {
      result = "You win.";
    } else if (computerMove === "paper") {
      result = "Tie.";
    } else if (computerMove === "scissors") {
      result = "You lose.";
    }
  } else {
    if (computerMove === "rock") {
      result = "Tie.";
    } else if (computerMove === "paper") {
      result = "You lose.";
    } else if (computerMove === "scissors") {
      result = "You win.";
    }
  }

  if (result === "You win.") {
    score.wins += 1;
  } else if (result === "You lose.") {
    score.losses += 1;
  } else if (result === "Tie.") {
    score.ties += 1;
  }

  localStorage.setItem("score", JSON.stringify(score));

  updateScoreElement();

  document.querySelector(".js-result").innerHTML = `${result}`;

  document.querySelector(".js-move").innerHTML =
    `You <img class="move-icon" src="${playerMove}-emoji.png" alt="${playerMove}"/> <img class="move-icon" src="${computerMove}-emoji.png" alt="${computerMove}"/> Computer`;
}

function updateScoreElement() {
  document.querySelector(".js-score").innerHTML =
    `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function pickComputerMove() {
  const randomNumber = Math.random();

  let computerMove = "";

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "scissors";
  }

  return computerMove;
}

function showResetConfirmation() {
  document.querySelector(".js-reset-confirmation").innerHTML = `
    Are you sure you want to reset the score?
    <button class="js-reset-confirm-yes reset-confirm-button">Yes</button>
    <button class="js-reset-confirm-no reset-confirm-button">No</button>
  `;

  document
    .querySelector(".js-reset-confirm-yes")
    .addEventListener("click", () => {
      resetScore();
      hideResetConfirmation();
    });

  document
    .querySelector(".js-reset-confirm-no")
    .addEventListener("click", () => {
      hideResetConfirmation();
    });
}

function hideResetConfirmation() {
  document.querySelector(".js-reset-confirmation").innerHTML = "";
}
