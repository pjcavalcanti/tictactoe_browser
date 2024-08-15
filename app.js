let turnPointer = 0;
let points_cross = document.querySelector("#p2 .points");
let points_circle = document.querySelector("#p1 .points");
let points = [points_cross, points_circle];

const cross = document.querySelector(".shapes .cross").outerHTML;
const circle = document.querySelector(".shapes .circle").outerHTML;
const turnShapes = [cross, circle];

const squares = document.querySelectorAll(".square");

function highlightSquare(event) {
  event.target.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
}
function deHighlightSquare(event) {
  event.target.style.backgroundColor = "rgba(0, 0, 0, 0.0)";
}
function checkWin(square) {
  let mark;
  if (turnPointer == 0) {
    mark = "cross";
  } else {
    mark = "circle";
  }

  let i = +square.id.slice(1)[0];
  let j = +square.id.slice(1)[1];

  let won = true;
  for (let col = 0; col < 3; col++) {
    if (!squares[col + i * 3].innerHTML.includes(mark)) {
      won = false;
    }
  }
  if (won) {
    return won;
  }
  won = true;
  for (let row = 0; row < 3; row++) {
    if (!squares[j + row * 3].innerHTML.includes(mark)) {
      won = false;
    }
  }
  if (won) {
    return won;
  }

  won = true;
  for (let diag = 0; diag < 3; diag++) {
    if (!squares[diag + diag * 3].innerHTML.includes(mark)) {
      won = false;
      break;
    }
  }
  if (won) {
    return won;
  }

  won = true;
  for (let offset = 0; offset < 3; offset++) {
    if (!squares[(offset) + (2 - offset) * 3].innerHTML.includes(mark)) {
      won = false;
      break;
    }
  }
  return won;
}

function makePlay(event) {
  let square = event.target;
  if (square.children.length > 0) {
    return;
  }
  square.innerHTML = turnShapes[turnPointer]; // put shape in place
  console.log("i win: ", checkWin(square));
  if (checkWin(square)) {
    points[turnPointer].innerHTML = 1 + parseInt(points[turnPointer].innerHTML, 10);
    for (let square of squares) {
      square.innerHTML = "";
    }
  }
  turnPointer = (turnPointer + 1) % 2; // change player turns
}

for (let square of squares) {
  if (square.classList.length != 1) {
    continue;
  }
  square.addEventListener("mouseenter", highlightSquare);
  square.addEventListener("mouseleave", deHighlightSquare);
  square.addEventListener("click", makePlay);
}
