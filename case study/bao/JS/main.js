const cvs = document.getElementById('myCanvas');
const ctx = cvs.getContext('2d');

//GAME LET AND CONST
const WIDTH_CANVAS = 400;
const HEIGHT_CANVAS = 500;
let frames = 0;

//ADD IMAGE

let sprite = new Image();
sprite.src = "img/sprite.png"; 

//LOAD SOUNDS
let die_s = new Audio();
die_s.src = "audio/die.wav";

let flap_s = new Audio();
flap_s.src = "audio/flap.wav";

let score_s = new Audio();
score_s.src = "audio/point.wav";

let hit_s = new Audio();
hit_s.src = "audio/hit.wav";

let swhooshing_s = new Audio();
swhooshing_s.src = "audio/swooshing.wav";




let background = new Background(sprite, 0, 0, 275, 226, 0, 1);
let foreground = new Background(sprite, 276, 0, 224, 112, 0, 2 );
let bird = new Bird(sprite, 50, 150, 34, 26, 12, 0.25, 4.3);
let getReady = new StatusGame (sprite, 0, 228, 173, 152, 80);
let gameOver = new StatusGame(sprite, 175, 228, 225, 202, 90);
let pipes = new Pipes(sprite, -150, 85, 2, 53, 400);
let score = new Score(0, 0);


//CONTROL THE GAME
const state = {
    current : 0,
    getReady: 0,
    game : 1 ,
    over : 2      
}

const startButton = {
    x: 160,
    y: 263,
    w: 83,
    h: 29,
}

moveup = () =>{
    if(state.current == state.game){
        flap_s.play();
        bird.speed = -bird.jump; 
    } else {
        state.current = state.over;
    }
}

cvs.addEventListener('click',(evt) =>{
    switch(state.current){
        case state.getReady :
            state.current = state.game;
            swhooshing_s.play();
            break;
        case state.game :
            document.addEventListener("keydown",moveup);
            bird.flap();
            flap_s.play();
            break;
        case state.over:
            let rect = cvs.getBoundingClientRect();
            // console.log(rect)        
            let clickX = evt.clientX - rect.left;
            let clickY = evt.clientY - rect.top;
            // console.log(clickX)
            if(clickX >= startButton.x && clickX <= startButton.x + startButton.w && clickY >= startButton.y && clickY <= startButton.y + startButton.h){
            state.current = state.getReady;
            pipes.reset();
            bird.speedReset();
            score.reset();   
            }
            break;
    }
});

//DRAW

draw = () =>{
    ctx.fillStyle = "#70c5ce";
    ctx.fillRect(0, 0, cvs.width, cvs.height);
    background.draw(ctx);
    pipes.draw(ctx);
    foreground.draw(ctx);
    bird.draw(ctx);
    getReady.drawGetReady(ctx);
    gameOver.drawGameOver(ctx);
    score.draw(ctx);
    
}

update = () =>{
    bird.update();
    foreground.update();
    background.update();
    pipes.update();
}

loop = ()=>{
    update();
    draw();
    frames++;
    requestAnimationFrame(loop)
}
loop();

