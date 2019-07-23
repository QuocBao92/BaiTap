let apple = new Apple();
let Adam = new Human('Adam','Male',50);
let Eva = new Human('Eva', 'Female', 45);



let appleHtml = document.getElementById("apple");
    appleHtml.innerHTML ='Táo còn: '+ apple.weight + ' Miếng';
    
let wadam = document.getElementById("wAdam");
let weva = document.getElementById("wEva");
console.log(wadam)
wadam.innerHTML = Adam.weight+ ' Kg';
weva.innerHTML = Eva.weight + ' Kg'; 
console.log(apple)
function adamEat() {
    console.log(apple)
    Adam.eat(apple);
    appleHtml.innerHTML = 'Táo còn: ' + apple.weight +' Miếng';
    wadam = document.getElementById("wAdam");
    wadam.innerHTML = Adam.weight + ' Kg' ;
    Adam.Speak("'Nhăm Nhăm! Tôi mới cắn một miếng!' Adam said");
}

function evaEat() {
   
    Eva.eat(apple);
    appleHtml.innerHTML ='Táo còn: ' + apple.weight +' Miếng';
    weva = document.getElementById("wEva");
    weva.innerHTML = Eva.weight  + ' Kg';
    Eva.Speak("'Nhăm Nhăm! Tôi mới cắn một miếng!' Eva said");
}