let lamp1 = new Lamp ();
let switchButton = new SwitchButton();
let button = document.getElementById('btm-on-off');

button.innerHTML = 'OFF'

function turnOnOffLamp(){
    if(switchButton.status === false){
        switchButton.status = true;
        button.innerHTML = 'ON';
        switchButton.switchOnOff(lamp1);
        let lamp = document.getElementById('lamp');
        lamp.src = "https://www.w3schools.com/js/pic_bulbon.gif";
    } 
    else {
        switchButton.status = false;
        button.innerHTML = 'OFF';
        switchButton.switchOnOff(lamp1);
        let lamp = document.getElementById('lamp');
        lamp.src = "https://www.w3schools.com/js/pic_bulboff.gif";
    }
}