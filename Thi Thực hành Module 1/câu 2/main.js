function tryRemoveFromArray(arr,index){
    let arr1 = [];
    if(index >= 0 && index < arr.length){
        for(let i = 0; i< arr.length; i++){
            if(i !== index){
                arr1.push(arr[i]);               
            }
        }return arr1;
    }else return arr;
}