let turnPointer = 0;

const cross = document.querySelector(".shapes .cross").outerHTML;
const circle = document.querySelector(".shapes .circle").outerHTML;
const turnShapes = [cross, circle];

const squares = document.querySelectorAll(".square");

console.dir(squares);

function highlightSquare(event) {
  event.target.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
}
function deHighlightSquare(event) {
  event.target.style.backgroundColor = "rgba(0, 0, 0, 0.0)";
}

function toggleTurn() {
  turnPointer = (turnPointer + 1) % 2;
  console.log(turnPointer);
}
function checkWinner(coord) {
  return coord[0] == 0;
}
function makePlay(event) {
  let square = event.target;
  if (square.children.length > 0) {
    return;
  }
  square.innerHTML = turnShapes[turnPointer]; // put shape in place
  turnPointer = (turnPointer + 1) % 2; // change player turns
  console.log(checkWinner(square.id.slice(1))); // check if the player won
}

for (square of squares) {
  if (square.classList.length != 1) {
    continue;
  }
  square.addEventListener("mouseenter", highlightSquare);
  square.addEventListener("mouseleave", deHighlightSquare);
  square.addEventListener("click", putShape);
  console.log(square)
}
