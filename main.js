//mark the cell with X||O
//check the pattern for win
//check for tie

const boxes = document.querySelectorAll(".box");
const gameOver = document.querySelector(".game-over");
const result = document.querySelector(".result");
const resetBtn = document.querySelector(".reset ");
const instructor = document.querySelector(".instructor");

let player1 = true;

let count = 0;

function startGame() {
  boxes.forEach((box) => {
    box.addEventListener("click", executeGame, { once: true });
  });
}

function executeGame() {
  this.innerText = player1 ? "X" : "O";
  count++;

  let col1 = boxes[0].innerText;
  let col2 = boxes[1].innerText;
  let col3 = boxes[2].innerText;
  let col4 = boxes[3].innerText;
  let col5 = boxes[4].innerText;
  let col6 = boxes[5].innerText;
  let col7 = boxes[6].innerText;
  let col8 = boxes[7].innerText;
  let col9 = boxes[8].innerText;

  if (
    (col1 != "" && col1 == col2 && col2 == col3) ||
    (col4 != "" && col4 == col5 && col5 == col6) ||
    (col7 != "" && col7 == col8 && col8 == col9) ||
    (col1 != "" && col1 == col4 && col4 == col7) ||
    (col2 != "" && col2 == col5 && col5 == col8) ||
    (col3 != "" && col3 == col6 && col6 == col9) ||
    (col1 != "" && col1 == col5 && col5 == col9) ||
    (col3 != "" && col3 == col5 && col5 == col7)
  ) {
    gameOver.style.display = "flex";
    result.innerText = player1 ? " X WINS!!" : "O WINS!!";
    return;
  }

  if (count == 9) {
    result.innerText = "It's a tie";
    gameOver.style.display = "flex";
    return;
  }

  player1 = !player1;

  // if (player1) {
  //   instructor.innerText = "Player X turn";
  // } else {
  //   instructor.innerText = "Player O turn";
  // }
}

// //event listener
// resetBtn.addEventListener("click", resetGame);

resetBtn.addEventListener("click", resetGame);

function resetGame() {
  gameOver.style.display = "none";
  boxes.forEach((box) => {
    box.innerText = "";
  });
  startGame();
  player1 = true;
  count = 0;

  // instructor.innerText = "It's your turn";
}

startGame();
