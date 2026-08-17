// First Occurrence means:

// The index of the first time a target element appears in a sorted array (even if it occurs multiple times).

// 🧠 Example:
// arr = [2, 4, 4, 4, 6, 8];
// target = 4;
// Here, 4 appears three times, but its first occurrence is at index 1.

function firstOccurence(arr,target){
    let n = arr.length;
    let start = 0; 
    let end = n-1;
    let result = -1

    while(start<=end){
        let mid = Math.floor((start+end)/2)
        if(arr[mid]=== target){
            result = mid
            end = mid-1
        }
        else if(arr[mid]<target){
            start = mid + 1
        }else{
            end = mid -1
        }
    }
    return "not found "
}


console.log(firstOccurence([1,1,1,1,2,3],1))