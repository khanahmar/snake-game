const board = document.querySelector(".board");

let direction = { x: 0, y: 0 };
let speed = 2;
let lasPaintTime = 0;
let snakeArr = [{ x: 14, y: 15 }];
// Game functions
function main(ctime) {
  window.requestAnimationFrame(main);
  //   console.log(ctime);
  if ((ctime - lasPaintTime) / 1000 < 1 / speed) {
    return;
  }
  lasPaintTime = ctime;
  gameEngine();
}
function gameEngine() {
  // part 1 : updating the snake array and food

  // part 2 : display the snake and food
  board.innerHtml = "";
  snakeArr.forEach((e, index) => {
    let snakeElement = document.createElement("div");
    snakeElement.style.gridRowStart = e.y;
    snakeElement.style.gridColumnStart = e.x;
    snakeElement.classList.add("food");
    board.appendChild(snakeElement);
  });
}
// Main logic starts here
window.requestAnimationFrame(main);
