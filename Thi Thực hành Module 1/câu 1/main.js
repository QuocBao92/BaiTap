function findMinScore(arr){
    let min = arr[0];
    for(let i = 0; i < arr.length; i++){
        if(min > arr[i]){
            min = arr[i];
        }
    }
    return min;
}