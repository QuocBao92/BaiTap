class Pipes {
    constructor(sprite, maxYPos, gap, dx, width, heigth){
        this.sprite = sprite;
        this.maxYPos = maxYPos;
        this.gap = gap;
        this.dx = dx;
        this.width = width;
        this.heigth = heigth;
        this.position = [];
        this.top = {
            sX: 553,
            sY: 0
        }
        this.bottom = {
            sX: 502,
            sY:0,
        }
        this.w = 53;
        this.h = 400;
    }
    //DRAW PIPES
    draw(ctx){
        for(let i = 0; i< this.position.length; i++){
            let p = this.position[i];
            let topYPos = p.y;
            let bottomYPos = p.y + this.h + this.gap;
            //top pipe
            ctx.drawImage(sprite, this.top.sX, this.top.sY, this.w, this.h, p.x, topYPos, this.width, this.heigth);
            //bottom pipe
            ctx.drawImage(sprite, this.bottom.sX, this.bottom.sY, this.w, this.h, p.x, bottomYPos, this.width, this.heigth);
        }
    }
    //MOVE THE PIPES
    update(){
        if(state.current !== state.game) return;
 
        if(frames % 100 == 0){
            this.position.push({
                x: WIDTH_CANVAS,
                y: this.maxYPos * (Math.random() + 1),
            });
        }
        for( let i = 0; i < this.position.length; i++){
            let p = this.position[i];
           
            let bottomPipesYpos = p.y + this.heigth + this.gap;

            if(bird.x + bird.radius > p.x && bird.x - bird.radius < p.x + this.width 
            && bird.y + bird.radius > p.y && bird.y - bird.radius < p.y + this.heigth){
                state.current = state.over;
                hit_s.play();
            }
            if(bird.x + bird.radius > p.x && bird.x - bird.radius < p.x + this.width 
            && bird.y + bird.radius > bottomPipesYpos && bird.y - bird.radius < bottomPipesYpos + this.heigth){
                state.current = state.over;
                hit_s.play();
            }
            
            p.x -= this.dx;
             

            if(p.x + this.width <= 0){
                this.position.shift();
                score.value +=1;
                score_s.play();
                score.best = Math.max(score.value, score.best)
                localStorage.setItem("best", score.best);
            }
        }
    }

    reset(){
        this.position = [];
    }
}