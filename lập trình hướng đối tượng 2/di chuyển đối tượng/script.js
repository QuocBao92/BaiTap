
class Hero{
  constructor(image, top, left, size){
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;
    this.speedright = 60;
    this.speedbottom = 40;
  }
  
  getHeroElement (){
    return '<img width="'+ this.size + '"' +
      ' height="'+ this.size + '"' +
      ' src="' + this.image +'"' +
      ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
  }

  move(){
    
    this.left += this.speedright;
    this.top += this.speedbottom;
    console.log('ok: ' + this.left);
  }

  checkCollision() {
    if (this.left <= 0 || this.left >= (window.innerWidth - this.size)) 
      this.speedright = -(this.speedright);
    if (this.top <= 0 || this.top >= (window.innerHeight - this.size)) 
      this.speedbottom = -(this.speedbottom);
    console.log(this.speedright + " " + this.speedbottom);
}

}

var nobita = new Hero('nobita.jpg', 20, 30, 200);
function gameStart(){
  let a = setInterval(start,500);
  //clearInterval(a);
}

function start(){
  nobita.move();
  nobita.checkCollision();
  document.getElementById('game').innerHTML = nobita.getHeroElement();
}
    
gameStart();