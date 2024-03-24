const playBoard = document.querySelector(".play-board");

let foodX, foodY;
let snakeX = 5,
  snakeY = 10,
  snakeBody = [];
let velocityX = 0,
  velocityY = 0;

//   For randomly changing food's position

const changeFoodPosition = (e) => {
  // Food will be between 1 and 30
  foodX = Math.floor(Math.random() * 30) + 1;
  foodY = Math.floor(Math.random() * 30) + 1;
};
// Changing Velocity on press of arrow keys
const changeDirection = (e) => {
  if (e.key === "ArrowUp") {
    velocityX = 0;
    velocityY = -1;
  } else if (e.key === "ArrowDown") {
    velocityX = 0;
    velocityY = 1;
  } else if (e.key === "ArrowRight") {
    velocityX = 1;
    velocityY = 0;
  } else if (e.key === "ArrowLeft") {
    velocityX = -1;
    velocityY = 0;
  }

  initGame();
};

// game is initialized as we put food inside the playboard
const initGame = () => {
  let htmlMarkup = `<div class="food" style="grid-area:  ${foodY}/ ${foodX}"></div>`;

  // Changing food  position everytime after snake's and food's position become same
  if (snakeX == foodX && snakeY == foodY) {
    changeFoodPosition();
    snakeBody.push([foodX, foodY]); //Pushing food position to snake's body array
    console.log(snakeBody);
  }

  for (let i = snakeBody.length - 1; i > 0; i--) {
    snakeBody[i] = snakeBody[i - 1]; // Shifting elements in snake's body array one step forward
  }

  snakeBody[0] = [snakeX, snakeY]; //Setting first element of snake body to current position of snake

  //Updating snake head's position based on the current velocity
  snakeX += velocityX;
  snakeY += velocityY;

  for (let i = 0; i < snakeBody.length; i++) {
    htmlMarkup += `<div class="head" style="grid-area:  ${snakeBody[i][1]}/ ${snakeBody[i][0]}"> </div> `;
  }

  playBoard.innerHTML = htmlMarkup;
};
changeFoodPosition();
// initGame();
setInterval(initGame, 100);
document.addEventListener("keydown", changeDirection);
// const scoreElement = document.querySelector(".score");
// const highScoreElement = document.querySelector(".high-score");
// const controls = document.querySelectorAll(".controls i");

// let gameOver = false;
// let foodX, foodY;
// let snakeX = 5, snakeY = 5;
// let velocityX = 0, velocityY = 0;
// let snakeBody = [];
// let setIntervalId;
// let score = 0;

// // Getting high score from the local storage
// let highScore = localStorage.getItem("high-score") || 0;
// highScoreElement.innerText = `High Score: ${highScore}`;

// const changeDirection = e => {
//     // Changing velocity value based on key press
//     if(e.key === "ArrowUp" && velocityY != 1) {
//         velocityX = 0;
//         velocityY = -1;
//     } else if(e.key === "ArrowDown" && velocityY != -1) {
//         velocityX = 0;
//         velocityY = 1;
//     } else if(e.key === "ArrowLeft" && velocityX != 1) {
//         velocityX = -1;
//         velocityY = 0;
//     } else if(e.key === "ArrowRight" && velocityX != -1) {
//         velocityX = 1;
//         velocityY = 0;
//     }
// }

// // Calling changeDirection on each key click and passing key dataset value as an object
// controls.forEach(button => button.addEventListener("click", () => changeDirection({ key: button.dataset.key })));
