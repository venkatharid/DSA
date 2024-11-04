// Sliding Window - Maximum Sum sub array

function maxSumSubArray(arr, k) {

    let max_sum = 0;
    let sum = 0;

    for(let i=0;i<k; i++) {
        sum +=arr[i];
    }

    max_sum= sum;

    for(let i=k; i<arr.length; i++ ){
        sum = sum + arr[i] - arr[i-k];
        if(max_sum<sum){
            max_sum = sum;
        }
    }
    return max_sum;
}


console.log(maxSumSubArray([2, 1, 5, 1, 3, 2],3))

