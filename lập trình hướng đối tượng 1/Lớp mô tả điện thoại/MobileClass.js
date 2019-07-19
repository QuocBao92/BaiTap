class Mobile {
    constructor (type, battery, status = true) {
        this.type = type;
        this.battery = battery;
        this.status = status;
        this.messageSend = [];
        this.messageInbox = [];
        this.message = '';
    }

    isOn() {
        return this.status;
    }

    getStatus() {
        if(this.isOn()) {
            return 'ON';
        }
        return 'OFF';
    }

    onOFF() {

        this.status = !this.status;
    }

    batteryCharge() {
        
        this.battery +=1;
    }

    getBattery() {
        return this.battery;
    }

    sendMessage(msg) {
        this.messageSend.push(msg);
    }

    pushInboxMessage(msg) {
        this.messageInbox.push(msg);
    }

    shiftInboxmessage(msg){
        this.messageInbox.shift(msg);
    }

    shiftOutboxMessage(msg){
        this.messageSend.shift(msg);
    }
    
    isMessageInbox() {
        return this.messageInbox.length === 0 ?  true : false;
    }

    useBattery(){
        this.battery--;
    }

    isOFF() {
        return this.status === false ? true : false;
    }
    isMessageSend (){
        return this.messageSend.length === 0 ? true : false;
    }
}