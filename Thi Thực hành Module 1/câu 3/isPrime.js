function checkNum(i){
    if (!isNaN(i)) {
        return true;
    }else alert('Không phải số. Nhập lại');
}

function isPrime(num){
    if(checkNum(num)){
        if (num < 2) return false;
        for ( let i = 2; i <= Math.sqrt(num); i++){
            if ( num % i === 0) return false;
        }
        return true; 
    }
}