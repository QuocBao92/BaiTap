class Lamp {
    constructor(){
        this.status = false;
    }
}

class SwitchButton {
    constructor(){
        this.status = false
    }
    switchOnOff(lamp){
        if(this.status === false) lamp.status = false;
        if(this.status === true) lamp.status = true;
    }
}