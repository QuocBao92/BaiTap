function bai1(){
    alertMessage();
}

let x;
function bai2(){
    x = +prompt('Nhập số');
    let y = increaseNumber(x);
    console.log(y);
    alert('Kết quả sau khi gọi hàm : '+y);
}

function bai3(){
    let i = +prompt('Nhập số thứ nhất : ');
    let j = +prompt('Nhập số thứ hai: ');
    compare(i,j);
}

function bai4(){
    let string = prompt('Nhập chuỗi: ');
    count(string);
}

function bai5() {
    let result = 0;
    alert ('giá trị result trước khi thay đổi: ' + result);
    result = addNumber();
    alert ('Giá trị result sau khi thay đổi: '+result); 
}

function bai6(){
    let star = ["Polaris", "Aldebaran", "Deneb", "Vega"," Altair", "Dubhe", "Regulus"];
    let constellation = ["Ursa Minor", "Tarurus", "Cygnus", "Lyra", "Aquila", "Ursa Major" ," Leo"];
    let enterStar = prompt('Nhập tên ngôi sao: ');
    let t = findStar(enterStar,star);
    console.log(t);
    if (t >= 0 ){
        alert("Chòm sao tương ứng là : "+constellation[t]);
    }else {
        alert ('Không có chòm sao tương ứng nào !!Thử lại.')
    }
}

function alertMessage(){
    alert('Xin chào!');
}

function increaseNumber(x){
    x++ ;
    console.log(x);
    return x;
}

function compare(a,b){
    let total = 0;
    if (a>b) {
        alert ('Số thứ nhất lớn hơn số thứ hai ! Nhập lại');
    }
    else {
        total = a+b;
        alert (' Tổng 2 tham số là '+total);
    }
}


function count(string){
    let number = 1;
    for (let i= 0 ;i < string.length-1; i++){
        if (string[i] == " " && string[i+1] !=" "){       
            number ++;
        }
    }
    alert ('Số từ trong chuỗi là :'+number)
}

function addNumber(){
    let firstNum = 4;
    let secondNum = 8;
    let result = firstNum + secondNum;
    return result;
}

function findStar(value,star){
    
    for (i=0; i< star.length; i++){
        if (value === star[i]){
            return i;
        }
    } return i = -1 ;
}





