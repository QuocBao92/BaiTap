let battery = new Battery();
battery.setEnergy(10);

let flashlamp = new FlashLamp();
flashlamp.setBattery(battery);

document.write("Battery info: "+ flashlamp.getBatteryInfo() + "</br>");
flashlamp.light();

document.write("Turn on </br>");
flashlamp.turnOn();
flashlamp.light();
document.write("Battery info: "+flashlamp.getBatteryInfo() +"</br>");

document.write("Turn off </br>");
flashlamp.turnOFF();
flashlamp.light();