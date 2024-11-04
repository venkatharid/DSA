

function firstNegativeInteger(arr, k) {

    let queue = [];
    let result =[];

    for(let i=0;i<arr.length;i++){
        if(queue.length>0 && queue[0]< i-k+1){
            queue.shift()
        }

        if(arr[i]<0){
            queue.push(i)
        }

        if(i>=k-1){
            if(queue.length>0){
                result.push(arr[queue[0]])
            }else{
                result.push(0)
            }
        }
    }
    return result;
}


console.log(firstNegativeInteger([12, -1, -7, 8, -15, 30, 16, 28], 3))