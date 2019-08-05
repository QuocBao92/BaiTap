class GameBoard {
    constructor(rows, cols, elementId) {
        this.rows = rows;
        this.cols = cols;
        this.elementId = elementId;
        this.turn = VALUE_O;
        this.cells = [];
        this.isOver = false;
    }

    draw() {
        var gameBoardDiv = document.getElementById(this.elementId);
        gameBoardDiv.innerHTML = "";
        for (var i = 0; i < this.rows; i++) {
            var row = [];
            this.cells.push(row);
            for (var j = 0; j < this.cols; j++) {
                var cell = new Cell(i, j);
                row.push(cell);
                gameBoardDiv.innerHTML += cell.getHtml();
            }
        }
    };

    play(x, y) {
        if (this.isOver) {
            return;
        }
        var cell = this.cells[x][y];
        if (cell.value === VALUE_EMPTY) {
            cell.value = this.turn;
            cell.draw();
            this.check(x, y);
            if (this.turn === VALUE_O) {
                this.turn = VALUE_X;
            } else {
                this.turn = VALUE_O;
            }
        } else {
            alert("Ô đó đã được đánh!");
        }
    };

    check(x, y) {
        var cell = this.cells[x][y];
        //Horizontal
        var count = 1;
        var i = 1;
        while ((y + i < this.cols) && this.cells[x][y + i].value === cell.value) {
            count++;
            i++;
        }
        var i = 1;
        while ((y - i >= 0) && this.cells[x][y - i].value === cell.value) {
            count++;
            i++;
        }
        this.endGame(count);
        //Vertical
        var count = 1;
        var i = 1;
        while ((x + i < this.rows) && this.cells[x + i][y].value === cell.value) {
            count++;
            i++;
        }
        var i = 1;
        while ((x - i >= 0) && this.cells[x - i][y].value === cell.value) {
            count++;
            i++;
        }
        this.endGame(count);
        //Left diagonal
        var count = 1;
        var i = 1;
        var j = 1;
        while ((y + i < this.cols) && (x + i < this.rows) && this.cells[x + i][y + j].value === cell.value) {
            count++;
            i++;
            j++;
        }
        var i = 1;
        var j = 1;
        while ((x - i >= 0) && (y - j >= 0) && this.cells[x - i][y - j].value === cell.value) {
            count++;
            i++;
            j++;
        }
        this.endGame(count);
        //Right diagonal
        var count = 1;
        var i = 1;
        var j = 1;
        while ((y + j < this.cols) && (x - i >= 0) && this.cells[x - i][y + j].value === cell.value) {
            count++;
            i++;
            j++;
        }
        var i = 1;
        var j = 1;
        while ((y - j >= 0) && (x + i < this.rows) && this.cells[x + i][y - j].value === cell.value) {
            count++;
            i++;
            j++;
        }
        this.endGame(count);
    };

    endGame(count) {
        if (count >= 5) {
            this.isOver = true;
            alert("Win!!!");
        }
    };
}