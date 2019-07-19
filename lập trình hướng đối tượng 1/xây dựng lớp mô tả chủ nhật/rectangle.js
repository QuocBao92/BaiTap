function Rectangle (width,height){
    this.width = width;
    this.height = height;
    this.area = function (){
        return width*height;
    }
    this.perimeter = function(){
        return (width+height)*2;
    }
    this.creatRectangle = function(){
        let ctx = document.getElementById('myCanvas').getContext('2d');
        let rectangle1 = new Rectangle(this.width,this.height);
        ctx.beginPath();
        ctx.fillStyle = "#FF0000";
        ctx.fillRect(300,100,this.width,this.height); 
        alert(" rectangular area is: " + rectangle1.area());
        alert(" rectangular perimeter is: " +rectangle1.perimeter());
    
    }
}

let rectangle1 = new Rectangle(200,150);

rectangle1.creatRectangle();




