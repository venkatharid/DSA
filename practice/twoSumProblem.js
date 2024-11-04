function twoSum (arr, target) {
const obj ={};

for(let i=0;i<arr.length; i++) {
    const n= arr[i];
    if(obj[target-n] >=0) {
        return [obj[target-n], i]
    }else {
        obj[n]=i
    }
}
}


console.log(twoSum([2,3,1,4], 6));
