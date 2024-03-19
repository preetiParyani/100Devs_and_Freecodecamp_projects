let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset");
let turnO = true;
const winPatterns = [
  [0, 1, 2],
  [0, 4, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box got clicked");
    if (turnO === true) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    

    CheckWinner();
  });
});

const CheckWinner = () => {
  for (pattern of winPatterns) {
    let Pos1Val = boxes[pattern[0]].innerText;
    let Pos2Val = boxes[pattern[1]].innerText;
    let Pos3Val = boxes[pattern[2]].innerText;

    if (Pos1Val != "" && Pos2Val != "" && Pos3Val != "") {
      if (Pos1Val === Pos2Val && Pos2Val === Pos3Val) {
        console.log(Pos2Val + " is the winner");
      } else {
        console.log("Draw");
      }
    }
  }
};
