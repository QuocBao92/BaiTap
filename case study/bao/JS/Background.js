class Background {
    constructor (sprite, sX, sY,w, h, x , dx){
        this.sX = sX;
        this.sY = sY;
        this.w = w;
        this.h = h;
        this.x = x;
        this.y = HEIGHT_CANVAS - h;
        this.dx = dx;
        this.sprite = sprite;
    }

    draw(ctx){
        ctx.drawImage(this.sprite, this.sX, this.sY, this.w, this.h, this.x, this.y, this.w, this.h )
        ctx.drawImage(this.sprite, this.sX, this.sY, this.w, this.h, this.x + this.w, this.y, this.w, this.h )
    }
    
    update(){
        if(state.current == state.game){
            this.x = (this.x - this.dx) % (this.w/5)
        }
    }
}
