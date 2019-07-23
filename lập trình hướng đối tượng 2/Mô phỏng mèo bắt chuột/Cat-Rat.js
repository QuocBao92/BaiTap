class Rat {
    constructor(name, weight, speed, live){
        this.name = name;
        this.weight = weight;
        this.speed = speed;
        this.live = true;
    }
    sound(){
        soundRat.play();
    }
}

class Cat {
    constructor(name, weight, speed, live){
        this.name = name;
        this.weight = weight;
        this.speed = speed;
        this.live = true;
    }
    sound(){
        soundCat.play();
    }
}