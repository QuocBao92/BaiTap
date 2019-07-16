function square(x){
    return x*x;
}

function bai1(){
    let i = +prompt('Nhập số');
    if (!isNaN(i)){
        let result = square(i);
        alert('Bình phương số đó là : '+ result);
    }else alert('Không phải số !! Nhập lại.');
}

function acreageCirle(r){
    return r*r*3.14;
}

function perimeterCirle(r){
    return r*2*3.14;
}

function bai2(){
    let r = prompt('Nhập bán kính đường tròn: ');
    if (!isNaN(r)){
        if (r>0){
            let s = acreageCirle(r);
            let d = perimeterCirle(r);
            alert('Diện tích hình tròn là: '+s);
            alert('Chu vi hình tròn là : '+d);
        }else alert('Bán kính là số dương ! Nhập lại');
    }else alert('Không phải số ! Nhập lại')
}

function calculateFactorial(x){
    let sum = 1;
    for(let i=1 ; i<=x;i++){
        sum *=i
    }
    return sum;
}

function bai3(){
    let num = prompt('Nhập số cần tính : ');
    if(checkNum(num)){
        if(num>0){
        let result = calculateFactorial(num);
        alert('Giai thừa số đó là: '+result);
        }else alert('giai thừa là số nguyên dương. Nhập lại!')
    }else alert('Không phải số! Nhập lại')
}

function checkNum(i){
    if (!isNaN(i)){
        return true;
    }else return false;
}

function bai4(){
    let num = prompt('Nhập số: ');
    if (checkNum(num)) alert('Là 1 số !');
    else alert('Không phải số');
}

function checkMin(a,b,c){
    let min = a;
    if (min > b) min = b;
    if (min > c) min = c;
    return min;
}

function bai5(){
    let x = prompt('Nhập 3 số nguyên bất kỳ - Số 1 là :');
    let y = prompt('  Số 2 là :');
    let z = prompt(' Số 3 là :');
    if (checkNum(x) && checkNum(y) && checkNum(z)){
        let min = checkMin(x,y,z)
        alert ('Số nguyên nhỏ nhất là: '+min);
    }else alert ('Không phải số ! Nhập lại');
}


function checkInteger(i){
    if ((!isNaN(i))&& (i>0)) return true;
    else return false;
}

function bai6(){
    let i = prompt('Nhập vào 1 số');
    if(checkInteger(i)) alert('Là số nguyên dương!');
    else alert('Nhập lại !');
}

function swap(a,b){
    let result = ""
    let c = a;
    a = b;
    b = c;
    result += a+" "+b;
    return result;
}

function bai7(){
    let i = prompt('Nhập số 1: ');
    let j = prompt('Nhập số 1: ');
    if(checkNum(i)&&checkNum(j)){
        alert('Hàm trước khi đổi chỗ '+i+ " "+ j);
        let result = swap (i,j);
        alert('Hàm sau khi đổi chỗ '+result);
    }else alert('Không phải số !');
}


function bai8(){
    let str = prompt('Nhập số: ');
    let arr = new Array();
    for( let i=0; i< str.length; i++){
        arr.push(str[i]);
    }
    alert('Số trước khi đảo là : '+arr.join(""));
    let result = arr.reverse("") ;
    alert('số sau khi đảo là: '+result.join(""));
}

function bai9(){
    let str = prompt('nhập mảng');
    let word = prompt('nhập ký tự');
     
    let arr = new Array();
    for( let i=0; i< str.length; i++){
        arr.push(str[i]);
    }
    console.log(word);
    console.log(arr);
    
    let count = findWord(arr,word);
    if (count == -1)
    {
        alert('Not found!');
    }
    else
    {
        alert('There is :'+count +' time');
    }
}

function findWord(arr,keyword){
    let count = 0;
    for( i= 0;i< arr.length;i++)
    {   
        if (keyword[0] === arr[i])
        {
            count ++;
        }
    }
    if (count>0) return count;
    else return -1;
}