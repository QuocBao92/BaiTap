class Bird {
    constructor(sprite, x, y, w, h, radius, gravity, jump){
        this.sprite = sprite;
        this.animation = [
            {sX: 276 , sY: 112 },
            {sX: 276 , sY: 139},
            {sX: 276 , sY: 164},
            {sX: 276 , sY: 139},
        ];
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.radius = radius;
        this.gravity = gravity;
        this.jump = jump;

        this.speed = 0;
        this.frame = 0;
    }
    draw(ctx){
        let bird = this.animation[this.frame];
        ctx.drawImage(this.sprite, bird.sX, bird.sY, this.w, this.h, this.x - this.w/2, this.y - this.h/2, this.w, this.h)
    }
    flap(){
        if(this.y - this.h/2 > 0){
            this.speed = -this.jump;
        }else {
            this.speed = 0;
        }
    }
    update(){
        // Tốc độ bay khi game ready  và khi game start
        this.period = state.current === state.getReady ? 10 : 5;
        // thay đổi frame của bird sau mỗi khung hình 
        this.frame += frames  % this.period == 0 ? 1 : 0;
        this.frame = this.frame % this.animation.length;

        if(state.current == state.getReady){
            this.y = 150;
        } else {
            this.speed += this.gravity;
            this.y += this.speed;
            if (this.y + this.h/2 >= HEIGHT_CANVAS - foreground.h){
                this.y = HEIGHT_CANVAS - foreground.h - this.h/2;
                this.frame = 1;
                if(state.current == state.game){
                    state.current = state.over; 
                    die_s.play();
                }
            }
        }       
    }
    speedReset(){
        this.speed = 0;
    }
}