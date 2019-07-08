function convertCtoF() {
    let c = parseFloat(document.getElementById('1').value );
    let result = (c*9)/5 +32;
    alert(result+ ' Độ F');
}

function convertMtoF() {
    let c = parseFloat(document.getElementById('2').value );
    let result = c* 3.2808;
    alert (result + ' feet');
}

function square() {
    let a = parseFloat(document.getElementById('3').value );
    let result = a*a;
    alert ('Diện tích hình vuông là: '+result);
}
 
function rectangle() {
    let a = parseFloat(document.getElementById('4a').value );
    let b = parseFloat(document.getElementById('4b').value );
    let result = a*b;
    alert ('Diện tích hình chữ nhật là: '+result);
}

function triangle() {
    let a = parseFloat(document.getElementById('5a').value );
    let b = parseFloat(document.getElementById('5b').value );
    let result = a*b/2;
    alert ('Diện tích hình tam giác là: '+result);
}


function ptBac1() {
    let a = parseFloat(document.getElementById('6a').value );
    let b = parseFloat(document.getElementById('6b').value );
    let result = (a==0) ? (b==0)? 'Phương trình vô số nghiệm!' : 'Phương trình vô nghiệm!'
                            : 'phương trình có nghiệm: '+(-b/a);
    alert(result);
    
}

function ptBac2() {
    let a = parseFloat(document.getElementById('7a').value );
    let b = parseFloat(document.getElementById('7b').value );
    let c = parseFloat(document.getElementById('7c').value );
    let delta = (b*b - 4*a*c);
    if (a == 0) alert( (b == 0) ? (c == 0) ?  'Phương trình vô số nghiệm!'
                                                : 'Phương trình vô nghiệm'
                                                : 'Phương trình có nghiệm' +(-b/c));


    let result = (delta < 0) ? 'Phương trình vô nghiệm!' 
                                : (delta == 0) ? 'Phương trình có nghiệm kép x1=x2=' +(-b/(2*a)) 
                                                : "Phương trình có 2 nghiệm phân biệt : x1="+((-b+Math.sqrt(delta))/(2*a))+ "và x2="+((-b-Math.sqrt(delta))/(2*a))

    alert(result);
    
}
function checkYearOld() {
    let a = +(document.getElementById('8').value );
    let result = (a => 0 && a <= 120 ) ? 'Là độ tuổi người' : 'Không phải là độ tuổi người' 
                            
    alert(result);
}

function checkTriangle() {
    let a = parseFloat(document.getElementById('9a').value );
    let b = parseFloat(document.getElementById('9b').value );
    let c = parseFloat(document.getElementById('9c').value );
    let result = (a > 0 && b > 0 && c > 0 && (a+b) >c && (a+c) > b && (b+c) > a) ? 'a,b,c Là cạnh của tam giác' : 'a,b,c Không phải là cạnh của tam giác'
    
    alert(result);
}

function electricity() {
    let a = parseFloat(document.getElementById('10').value );
    let result = (a > 401) ? a * 2587 : (a >= 301) ? a * 2503 : (a >= 201) ? a * 2242 : (a >= 101) ? a * 1768 : (a >= 51) ? a * 1533 : a * 1484;
    alert ('Số tiền trả là: ' +result+' Đồng !');

}


