function bai1(){
    let num = [];
    let count = 0 ;
    let gt = "";
    let vt = "";
    let i ;
    for ( i = 0; i <10 ; i++){
        num[i] = prompt('Nhập số');
        if (!isNaN(num[i])){
        // console.log(num);
            if (num[i] >= 10) {
                count++;
                gt += num[i]+" ";
                vt += i+1 + " ";
            }
        }else {
            alert('không phải số!');
            document.getElementById('result1').innerHTML = 'Nhập lại!';
            break;
        }
        document.getElementById('result1').innerHTML = 'mảng có ' +count+ ' số lớn hơn 10 là ' +gt+ 'tại vị trí ' +vt;
    } 
}

function bai2(){
    let num = [];
    for (let i = 0; i < 10; i++){
        num[i] = +(prompt("Nhập mảng"));
    }
    let max = Math.max.apply(Math, num);
    alert('Giá trị lớn nhất của mảng là : '+max);
    document.getElementById('result2').innerHTML='giá trị lớn nhất: ' + max
}

function bai3(){
    let num = [];
    for (let i = 0; i < 6; i++){
        num[i] = +(prompt("Nhập mảng"));
    }
    let max = Math.max.apply(Math, num);
    let sum = 0;
    for (let i = 0; i< 6;i++){
        sum += num[i];
    }
    tb = sum/6;
    document.getElementById('result3').innerHTML='giá trị lớn nhất: ' + max+' giá trị trung bình của mảng: '+ tb;

}

function bai4(){
    let num = [];
    for (let i = 0; i < 6; i++){
        num[i] = +(prompt("Nhập mảng"));
    }
    alert('mảng trước khi đổi :'+num);
    num.reverse();
    document.getElementById('result4').innerHTML= 'Mảng sau khi  đảo: '+ num.join(" ");
}

function bai5(){
    let num = [];
    for (let i = 0; i < 6; i++){
        num[i] = +(prompt("Nhập mảng"));
    }    
    let count=0;
    for (let i = 0; i < 6; i++){
        if (num[i] < 0) count++;
    }
    document.getElementById('result5').innerHTML= 'Số nguyên âm trong chuỗi là :'+ count;
}

function bai6(){
    let arNum = [];
    for (let i = 0; i < 10; i++){
        arNum[i] = +prompt("Nhập mảng");
    }
    
    let arrV = [+prompt('Nhập Số nguyên :')];
    
    let count = 0;
    for (let i = 0; i < 10; i++){
        if (arNum[i] == arrV){
            count ++;
        }
    }
    console.log(count);
    if(count > 0) alert('V is in the array');
    else alert ('V is not in the array');

}

function bai7(){
    let arrNum = [];
    for (let i = 0; i < 9; i++){
        arrNum[i] = +prompt("Nhập mảng");
    }
    
    let arrV = [+prompt('Nhập Số nguyên :')];
    let t;
    for (let i = 0; i < 9; i++){
        if (arrNum[i] == arrV){
            arrNum.splice(i,1);
        }
    }
    document.getElementById('result7').innerHTML= arrNum.join(',');
}

let arrNum = [];
function bai8(){
     
    for (let i = 0; i < 6; i++){
        arrNum[i] = +prompt("Nhập mảng");
    }
    arrNum.sort(function(a,b){return a-b});
    console.log(arrNum);  
   
    document.getElementById('result8').innerHTML = arrNum.join(",");
}


