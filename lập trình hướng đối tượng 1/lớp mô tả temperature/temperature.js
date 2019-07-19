function Temperature(c){
    this.c = c;
    this.CtoF = function() {
        return (this.c*1.8)+32;
    }
    this.CtoK = function(){
        return this.c + 273.15;
    }   
}


function convertCtoF(){
    let c = +document.getElementById('c').value;
    console.log(c);
    let newC = new Temperature(c);
    let f = newC.CtoF();
    console.log(f);
    document.getElementById('resultCtoF').innerHTML ='Độ C sang độ F: '+ f;
}

function convertCtoK(){
    let c = +document.getElementById('c').value;
    console.log(c);
    let newC = new Temperature(c);
    let k = newC.CtoK();
    console.log(k);
    document.getElementById('resultCtoK').innerHTML ='Độ C sang độ K: '+ k;
}
