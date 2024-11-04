
function rainWaterTrapping (heights) {
let left =0;
let right =heights.length -1;
let leftMax=0;
let rightMax=0;
let water =0;

while(left<right){
    if(heights[left]<heights[right]){
        if(heights[left]> leftMax){
            leftMax = heights[left]
        }else {
            water+= leftMax - heights[left]
        }
        left++
    }else{
        if(heights[right]>=rightMax){
            rightMax = heights[right]
        }else{
            water+=rightMax - heights[right]
        }
        right--;
    }
}
return water;
}


console.log(rainWaterTrapping([0,1,0,2,1,0,1,3,2,1,2,1]))