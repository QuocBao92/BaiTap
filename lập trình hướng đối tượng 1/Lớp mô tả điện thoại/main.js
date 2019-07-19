let nokia = new Mobile('Nokia', 40);
let iphone = new Mobile('Iphone', 20, false);

let nokiaStatus = document.getElementById('nokiaStatus');
let nokiaBatery = document.getElementById('nokiaBatery');
let nokiaMessage = document.getElementById('nokiaMessage');
let inboxNokia = document.getElementById('inboxNokia');
let outboxNokia = document.getElementById('outboxNokia');

let iphoneStatus = document.getElementById('iphoneStatus');
let iphoneBatery = document.getElementById('iphoneBatery');
let iphoneMessage = document.getElementById('iphoneMessage');
let inboxIphone = document.getElementById('inboxIphone');
let outboxIphone = document.getElementById('outboxIphone');

function showInfo() {
    nokiaStatus.innerHTML = "Trạng Thái : " + nokia.getStatus();
    nokiaBatery.innerHTML = "Pin: " + nokia.getBattery();
    nokiaMessage.value = nokia.message;
    inboxNokia.innerHTML = "Inbox ("+ nokia.messageInbox.length +")";
    outboxNokia.innerHTML = "Outbox ("+ nokia.messageSend.length +")";

    iphoneStatus.innerHTML = "Trạng Thái : " + iphone.getStatus();
    iphoneBatery.innerHTML = "Pin: " + iphone.getBattery();
    iphoneMessage.value = iphone.message;
    inboxIphone.innerHTML = "Inbox ("+ iphone.messageInbox.length +")";
    outboxIphone.innerHTML = "Outbox ("+ iphone.messageSend.length +")";
}

showInfo();

function onOFFNokia() {
    nokia.onOFF();
    showInfo();
}

function onOFFIphone() {
    iphone.onOFF();
    showInfo();
}

function sendMessageNokia() {
    if(nokia.isOFF()) alert('phone is off');
    else {
        nokia.message = nokiaMessage.value;
        nokia.sendMessage(nokia.message);
        iphone.pushInboxMessage(nokia.message);
        nokia.useBattery();
        nokia.message = '';
        }
    showInfo();
}

function readInboxNokia() {
    if(nokia.isOFF()) alert('phone is off');
    else {
        if(nokia.isMessageInbox()){
            alert('Không có tin nhắn đến')
        }else {
            nokia.message = nokia.messageInbox[0];
            nokia.shiftInboxmessage();
            nokia.useBattery();
        }
    }
    showInfo();
}

function reaOutboxNokia(){  
    if(nokia.isOFF()) alert('phone is off');
    else {
        if(nokia.isMessageSend()) {
            alert("Không có tin nhắn gửi");
        } else {
            nokia.message = nokia.messageSend[0];
            nokia.shiftOutboxMessage();
        }
}
    showInfo();
}

function chargeNokia(){
    nokia.batteryCharge();
    showInfo();
}

function sendMessageIphone() {
    if(iphone.isOFF()) alert('phone is off');
    else {
        iphone.message = iphoneMessage.value;
        iphone.sendMessage(iphone.message);
        console.log(nokia.messageInbox.length);
        nokia.pushInboxMessage(iphone.message);
        iphone.message = '';
        iphone.useBattery();
    }
    showInfo();
}

function readInboxIphone() {
    if(iphone.isOFF()) alert('phone is off');
    else {
        if(iphone.isMessageInbox()){
            alert('Không có tin nhắn đến')
        }else {
            iphone.message = iphone.messageInbox[0];
            iphone.shiftInboxmessage();
            iphone.useBattery();
            showInfo();
        }
    }
}

function reaOutboxIphone(){
    if(iphone.isOFF()) alert('phone is off');
    else {
        if(iphone.isMessageSend()) {
            alert("Không có tin nhắn gửi");
        } else {
            iphone.message = iphone.messageSend[0];
            iphone.shiftOutboxMessage();;
            iphone.useBattery();
            showInfo();
        }
    }
}

function chargeIphone(){
    setInterval( iphone.batteryCharge(),300)
    
    showInfo();
}