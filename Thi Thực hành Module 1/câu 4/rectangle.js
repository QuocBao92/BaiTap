class Rectangle {
    constructor(x, y, width, height, color){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
    };
    render(){
        let cvs = document.getElementById('myCanvas');
        let ctx = cvs.getContext('2d');
        ctx.beginPath();
        ctx.strokeStyle = this.color;
        ctx.rect (this.x, this.y, this.width, this.height);
        ctx.stroke();
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }
}