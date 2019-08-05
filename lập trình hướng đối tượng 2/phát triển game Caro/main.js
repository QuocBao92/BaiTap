const DEFAULT_COLS = 20;
const DEFAULT_ROWS = 20;
function play(x, y) {
   gameBoard.play(x, y);
}

function start() {
    gameBoard = new GameBoard(DEFAULT_ROWS, DEFAULT_COLS, "myBoard");
    gameBoard.draw();
}
var gameBoard;
start();