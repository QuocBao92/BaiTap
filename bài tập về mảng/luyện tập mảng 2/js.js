function bai1(){
    let a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
    result = "";
    for (i in a){
        result += "row "+i + "</br>";
        for (j in a[i]){
            result += a[i][j]+ "</br>" ;
        }
    }
    document.getElementById('result1').innerHTML = result;

}

function bai2(){
    let arr1 = ["c","s","c","2","6","1"];
    arr1.reverse();
    arr1.join(" ")
    document.getElementById('result2').innerHTML= arr1.join("");
    
}

function bai3(){
    let count  = +prompt("Nhập kích thước mảng :");
    let mang = [];
    for (let i = 0; i < count ; i++){
        mang [i] = prompt('Nhập mảng : ');
        console.log(mang);
    }

}





