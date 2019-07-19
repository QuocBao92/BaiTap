class Battery {
    constructor(){

    }
    setEnergy (energy){
        this.energy = energy;
    }

    getEnergy(){
        return this.energy;
    }
    decreaseEnergy (){
        if (this.energy > 0){
            this.energy-- ;
        }
    }
}

class FlashLamp {
    constructor(){
        
    }
    setBattery(battery){
        this.battery = battery
    }

    getBatteryInfo (){
        return this.battery.getEnergy();
    }

    light(){
        if(this.status){
            alert("Lighting");
        }else {
            alert('Not Lightning');
        }
    }

    turnOn(){
        this.status = true;
    }

    turnOFF(){
        this.status = false;
    }

}   