let a =[];
let n = "";
a[1]='Y';a[2]='O';a[3]='U';a[4]=' ';a[5]='B';a[6]='Ị';a[7]=' ';a[8]='K';a[9]='H';a[10]='Ù';a[11]='N';a[12]='G';a[13]='!';a[14]='!';a[15]='H';a[16]='A';a[17]='H';a[18]='A';a[19]='H';a[20]='A';a[21]='!';a[22]='!';

function textArea(){
    let t = document.f.text.value ;
    console.log(t);
    let j = t.length;
    if (j>0){
        for (let i =1; i<=j; i++){
            n += a[i];
            if ( i == 22){
                document.f.text.value = "";
                n = "";
            }
        }
    }
    document.f.text.value = n;
    n = "";
    setTimeout("textArea()",1);
}