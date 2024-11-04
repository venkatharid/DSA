function missingNumber(arr) {
const n = arr.length;
//const sortedArray = arr.sort((a,b)=> a-b)

for(let i=1; i<n;i++){
    if(!arr.includes(i)){
        return i;
    }
}
return -1
}


console.log(missingNumber([6,4,2,3]))