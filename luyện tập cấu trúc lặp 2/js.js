function bai1(){
    let so = +prompt ('Nhập số cần tính !');
    let i;
    let giaithua = 1;
    if (so > 0){
        for (i=1; i<= so; i++){
            giaithua *= i;
        }
    }else alert ('Nhập lại!');
    document.getElementById('giaithua').innerHTML ='Giai thừa của '+so+' là ' +giaithua;
}

function bai2(){
    let result1 = "";
    for (let i = 1; i<=6 ; i++){
        
        for (j = 1; j<=i; j++){
            result1 +="*";
        }   
        result1 +="<br>"
        
    }
    document.getElementById('tamgiac1').innerHTML= result1;

    let result2 = "";


    for (let i = 5; i>0 ; i--){
        
        for (j = 1; j<=i; j++){
            result2 +="*";
        }   
        result2 +="<br>"
        
    }
    document.getElementById('tamgiac2').innerHTML= result2;

    let result3 = "";
    for (let i = 1; i<=6 ; i++){
        for (l = 1; l<=(6-i); l++){
            result3 +="&nbsp;&nbsp";
        }
        for (j = 1; j<=i; j++){
            result3 +="*";
        }   
        result3 +="<br>"
        
    }
    document.getElementById('tamgiac3').innerHTML= result3;

    let result4 = "";
    for (let i = 6; i>0; i--){
        for (l = 1; l<=(6-i); l++){
            result4 +="&nbsp;&nbsp";
        }
        for (j = 1; j<=i; j++){
            result4 +="*";
        }   
        result4 +="<br>"
        
    }
    document.getElementById('tamgiac4').innerHTML= result4;
    
}

function bai3(){
    let result = "";
    for (let i=1; i<=5; i++ ){
        for(let j=1; j<=10;j++)
            if (j==1 || j ==10 || i==1 || i == 5){
                result += "*";
            }
            else
                result += "&nbsp;&nbsp";
        result+="<br>"
    }
    document.getElementById('result5').innerHTML= result;
}



