let myColor = ["Red", "Green","White", "Black"]
function convert(){
    let result = '';
    for (let i = 0; i< myColor.length ; i++){
        result += myColor[i] + ',';
    }
    document.getElementById('result').innerHTML = result;
}
let num; 
function number(){
    let num = prompt('Nhập số : ');
    // console.log(num);
    let result = num.split("");
    console.log(result);
    
    const kq = [result[0]];
    for (let i = 0;i< result.length-1; i++){
        if ((result[i] % 2 == 0) && (result[i+1] % 2 == 0)){
            kq.push('-',result[i+1])  ;
        }else kq.push(result[i+1]);
    }
    document.getElementById('result2').innerHTML = kq.join('');
}

function bai3(){
    let UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let LOWER ='abcdefghijklmnopqrstuvwxyz';
    let str = prompt('Nhập chuỗi');
    let result = [];
    for (let x=0; x< str.length; x++){
        if (UPPER.includes(str[x])){
            result.push(str[x].toLocaleLowerCase());
        }else if (LOWER.includes(str[x])){
            result.push(str[x].toLocaleUpperCase());
        } else {
            result.push(str[x]);
        }
    }
    document.getElementById('reverseArr').innerHTML = result.join("");
}
    
        
    




