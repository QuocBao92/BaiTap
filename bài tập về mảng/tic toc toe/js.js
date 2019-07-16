let b = document.getElementById("dauvao");
let board = [];
for (let i = 0; i < 9; i++) {
    board[i] = new Array(".", ".", ".", ".", ".", ".",);
}

var player = "X";
taoBanco();
function taoBanco() {
    var data = "";
    data += "<table style='margin:0px auto' border='1' width='300' cellspacing='0' cellpadding='3'>"
    for (let i = 0; i < 6; i++) {
        data += "<tr>";
        for (let j = 0; j < 6; j++) {
            data += "<td>"+board[i][j]+ "</td>" ;
        }
        data += "</tr>"
    }
    data += "</table>" 
    b.innerHTML = data + "<br/><br/>";
}

function playGame() {
    let diemX = +prompt('X: ');
    let diemY = +prompt('Y: ');

    if(checkXY(diemX) && checkXY(diemY)) {

        choiXO(diemX, diemY);
    }  else {
        alert('nhap lai');
        return ;
    }

    
}

function choiXO(d1, d2) {
    board[d1-1][d2-1] = player;
    player = player === 'X' ? 'O' : 'X';
    taoBanco();
}


function checkXY(diem) {
    if(diem < 1 || diem > 6 ) return false;
    diem
    return true;
}
function checkXO(d1,d2){
    board[d1-1][d2-1] = check ;
    
}

