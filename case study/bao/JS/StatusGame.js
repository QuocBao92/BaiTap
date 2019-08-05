class StatusGame {
    constructor (sprite, sX, sY,w, h, y){
        this.sprite = sprite;
        this.sX = sX;
        this.sY = sY;
        this.w = w;
        this.h = h;
        this.x = WIDTH_CANVAS/2 - this.w / 2;
        this.y = y;
    }

    drawGetReady(ctx){
        if(state.current == state.getReady) {
            ctx.drawImage(this.sprite, this.sX, this.sY, this.w, this.h, this.x, this.y, this.w, this.h );
            ctx.fillStyle = "black";
            ctx.font = "35px File";
            ctx.fillText("CODEGYM : C0619G1", 55, 440);
            ctx.fillStyle = "green";
            ctx.font = "40px SVN-Goldeye Type";
            ctx.fillText("Nguyễn Quốc Báo", 90, 480);
        }
       
    };
    drawGameOver(ctx){
        if(state.current == state.over) {
            ctx.drawImage(this.sprite, this.sX, this.sY, this.w, this.h, this.x, this.y, this.w, this.h);
            if(score.value >= 5){
                ctx.drawImage(this.sprite,359,159,46,44,this.x+24, 178 ,46,44)
            }
            if(score.value >= 10){
                ctx.drawImage(this.sprite,312,112,46,44,this.x+24, 178 ,46,44)
            }
            if(score.value >= 15){
                ctx.drawImage(this.sprite,312,159,46,44,this.x+24, 178 ,46,44)
            }
        }
    }
}
