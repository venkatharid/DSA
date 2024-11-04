

function maxAreaRectangle(matrix){

    if(matrix.length === 0) return 0;

    const n= matrix[0].length;
    let height = new Array(n).fill(0);
    let max_area = 0;

    for(let i=0; i<matrix.length ;i++){
        for(let j=0; j<n; j++){
            if(matrix[i][j]===0){
                height[j]=0
            }else{
                height[j]+=1;
            }
        }
        max_area = Math.max(max_area, areaHistogram(height));
    }

    return max_area;
}

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


console.log(maxAreaRectangle([
    [1, 0, 1, 0, 0],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 0, 0, 1, 0]
])
);
