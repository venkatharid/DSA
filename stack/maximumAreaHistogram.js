

function areaHistogram(height){
    const n = height.length;
    const left = new Array(n).fill(-1)
    const right = new Array(n).fill(n);

    const stack = [];

    for(let i=0; i<n; i++){

        const curr = height[i];
        while(stack.length>0 && stack[stack.length -1] >= curr){
            stack.pop()
        }

        if(stack.length>0){
            left[i] =stack[stack.length-1]
        }

        stack.push(curr);
    }

    for(let i=n-1; i>=0; i--){

        const curr = height[i];
        while(stack.length>0 && stack[stack.length -1] >= curr){
            stack.pop()
        }

        if(stack.length>0){
            right[i] =stack[stack.length-1]
        }

        stack.push(curr);
    }

    let max_area = 0
    for(let i=0; i<n; i++) {
        width = right[i] - left[i] - 1;
        area = height[i] * width;
        max_area = Math.max(area, max_area) 
    }

    return max_area;

}

console.log(areaHistogram([6,2,5,4,5,1,6]));
