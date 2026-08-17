function lastOccurence(arr,k){
    let n = arr.length;
    let start = 0;
    let end = n-1;
    let result = -1;

    while(start<=end){
        let mid = Math.floor((start+end)/2)
        if(arr[mid]=== k){
            result = mid
            start= mid+1;
        }
        else if(arr[mid]<k){
            start = mid + 1
        }else{
            end = mid -1
        }
    }
    return result
    
}
console.log(lastOccurence([1,2,3,4,4,4],4))