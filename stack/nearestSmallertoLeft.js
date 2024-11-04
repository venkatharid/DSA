

function nereastGreater(arr){
    const n= arr.length;
    const stack = []
    const result = new Array(n).fill(-1)
    for(let i=0; i<n; i++){

        const curr = arr[i];
        while(stack.length>0 && stack[stack.length -1] >= curr){
            stack.pop()
        }

        if(stack.length>0){
            result[i] =stack[stack.length-1]
        }

        stack.push(curr);
    }

    return result
}

console.log(nereastGreater([1,3,2,4]))