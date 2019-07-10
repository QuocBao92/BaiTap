function bai1(){
    let i = 1;
    let result = " ";
    while (i < 100){
        result += i + " ";
        i++;
    }
    document.getElementById('result').innerHTML = result;
    alert (" Đã hoàn thành !");
}

function bai2(){
    let nhietdo = 1;
    while (nhietdo < 20 || nhietdo > 100) {
        nhietdo = +prompt('Nhập nhiệt độ hiện tại :');
        if (nhietdo < 20) alert('Nên tăng nhiệt độ!');
        else if (nhietdo > 100) alert ('Nên giảm nhiệt độ !');
        else alert('Nhiệt độ bình thường !');
        
    }
}

function fibonacci(n){
    return (n === 1)?1:(n === 2)?2:(fibonacci(n-1) + fibonacci(n-2));
}
function bai3(){
    let i;
    let result = "";
    for (i=1 ; i < 21 ; i++){
        result += " " + fibonacci(i);
    }
    document.getElementById('resultFib').innerHTML = result;
}


function bai4(){
    let fib;
    let i = 1;
    while(1){
        fib = fibonacci(i);
        if (fib % 5 === 0){
            alert("Số fibonacci đầu tiên chia hết cho 5 là: " + fib);
            break;
        }
        i++  
    }
}

function bai5(){
    let sum = 0;
    for ( let i = 1; i <= 20; i++){
        sum += fibonacci(i);

    }
    alert('tổng 20 số fibonacci đầu tiên là: '+ sum);
}

function bai6(){
    let count = 0;
    let i = 0;
    let sum = 0;
    while ( count < 31){
        if (i % 7 === 0){
            sum += i;
            count ++;
        }
        i++;
        
    }
    alert('30 số đầu tiên chia hết cho 7 có tổng là : ' + sum);
}

function bai7(){
    let i;
    let result ='';
    for ( i= 1; i < 101 ; i++){
        if( i % 5 === 0 && i % 3 === 0) 
            result += 'FizzBuzz ';
        else if( i % 3 === 0){
           result += 'Fizz '
        }else if ( i % 5 === 0){
            result += 'Buzz ';
        }else   
            result += i + ' ';
    }
    document.getElementById('resultfizzbuzz').innerHTML = result;
}