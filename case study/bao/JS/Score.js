class Score {
    constructor(best,value){
        this.best = +(localStorage.getItem('best')) || 0;
        this.value = value;
    }
    draw (ctx){
        ctx.fillStyle = '#FFF';
        ctx.strokeStyle = '#000';
        if(state.current == state.game){
            ctx.lineWidth = 2;
            ctx.font = '35px Teko';
            ctx.fillText(this.value, WIDTH_CANVAS / 2, 50);
            ctx.strokeText (this.value, WIDTH_CANVAS / 2, 50);
        }else if(state.current == state.over){
            ctx.font = '25px Teko';
            ctx.fillText(this.value, 265, 186);
            ctx.strokeText(this.value, 265, 186);
            ctx.fillText(this.best, 265, 228);
            ctx.strokeText(this.best, 265, 228);
        }
    }
    reset(){
        this.value = 0;
    }

}