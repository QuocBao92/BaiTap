class Apple {
    constructor(){
        this.weight = 10;
    }

    eatApple (){
        return this.weight--
    }

    isEmpty(){
        return (this.weight <= 0) ? false : true;
    }

    getWeight(){
        return this.weight
    }
}

class Human {
    constructor (name, gender , weight ){
        this.name = name;
        this.gender = gender; 
        this.weight = weight;
    }

    Speak(msg){
        console.log(msg);
    }

    eat(apple){
        if(apple.isEmpty()){
            apple.weight--;
            this.weight++;
        } else {
            alert('Không còn gì để ăn')
        }
    }
        
}