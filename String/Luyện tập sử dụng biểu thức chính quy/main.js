function bai1(){
    let date = prompt('Nhập vào ngày tháng: định dạng dd/mm/yyyy')
    let regexp = /^(0?[1-9]|[12][0-9]|[3][01])[\/\-](0?[1-9]|[1][12])[\/\-]([0-9]{4})$/
    isDate(regexp, date);
}
function isDate(regexp, date){
    if(regexp.test(date)){
        alert('is Date')
    }else alert('Not Date')
}

function bai2(){
    let str = prompt('Nhập chuỗi: ');
    let str1 = str.trim();
    if(str1 != ""){
        console.log(str1)
        let patt = / /g;
        let result = str1.match(patt);
        let count = 0;
        if(result != null){
            count = result.length + 1;
            for(let i = 0; i< str1.length-1; i++){
                if(str1[i] === " " && str1[i+1] === " "){
                    count--;
                }
            }
            alert('Số từ trong chuỗi vừa nhập là: '+ count);
        }else alert('Chuỗi nhập vào có 1 ký tự');
    }else alert('Không có ký tự nào');
}

function is_Vowel(str){
    let regexp = /^[aăâeêioôơuưy]$/i;
    if (regexp.test(str)){
        return true;
    }else 
        return false;
}

function bai3(){
    let str = prompt('Nhập vào chuỗi ');
    console.log(str);
    let songuyenam = 0;
    let sophuam = 0;
    for(let i=0; i<str.length; i++){
        if(is_Vowel(str[i])){
            songuyenam++;
        }else if(str[i] != " ")
            sophuam++;
    }
    alert('Số nguyên âm trong chuỗi: '+songuyenam);
    alert('Số phụ âm trong chuỗi: '+sophuam)
}

function bai4(){
    let str = prompt('Nhập pass:(6 số) ');
    let regexp = /^[0-9]{6}$/;
    is_Pass(regexp,str);
}

function is_Pass(regexp, str){
    if(regexp.test(str))
       alert('Pass right')
    else alert('Pass wrong')
}