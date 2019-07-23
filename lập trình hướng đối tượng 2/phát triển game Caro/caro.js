const VALUE_EMPTY = 1;
const VALUE_X = 2;
const VALUE_O = 3;
const DEFAULT_COLS = 10;
const DEFAULT_ROWS = 10;
const DEFAULT_CELL_SIZE = 40;
class Cell {
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.value = VALUE_EMPTY;
    }
    getHtml() {
        let top = x * DEFAULT_CELL_SIZE;
        let left = y * DEFAULT_CELL_SIZE;    
        let cellHtml = '<div id="cell-'+x+'-'+y+'" onclick="play('+x+','+y+')" class="cell" style="position: absolute; width: '+
                        DEFAULT_CELL_SIZE+'px; height:'+
                        DEFAULT_CELL_SIZE+'px; left:'+
                        left+'px; top:'+
                        top+'px; line-height: '+
                        DEFAULT_CELL_SIZE+'px;"></div>';
        return cellHtml;
    }
    draw(){
        this.draw = function () {
            let cellDiv = document.getElementById("cell-"+x+"-"+y);
            switch (this.value){
                case VALUE_X:
                    cellDiv.innerHTML = "X";
                    break;
                case VALUE_O:
                    cellDiv.innerHTML = "O";
                    break;
                default:
                    cellDiv.innerHTML = "";
                    break;
            }
        }
    }
}

class GameBoard {
    constructor (rows, cols, elemenId){
        this.rows = rows;
        this.cols = cols;
        this.elemenId = elemenId;
        this.turn = VALUE_O;
        this.cell = [];
        this.isOver = false;
    }
    draw(){
        var gameBoardDiv = document.getElementById(this.elementId);
        gameBoardDiv.innerHTML = "";
        for(var i = 0; i < this.rows; i++){
            var row = [];
            this.cells.push(row);
            for(var j = 0; j < this.cols; j++){
                var cell = new Cell(i, j);
                row.push(cell);
                gameBoardDiv.innerHTML += cell.getHtml();
            }
        }
    } 
    play (x,y){
        if(this.isOver){
            return;
        }
        
    }  
}