//count the number of subset whouse difference will be given difference
function countLongestSubSequence(arr, sum) {
    const n= arr.length;
    const t= new Array(n+1).fill().map(()=> Array(sum+1).fill(0))

    for(let j=0; j<=n;j++){
        t[j][0] = 1;
    }

    for(let i=1; i<=n; i++){
        for(let j=1; j<=sum; j++) {
            if(arr[i-1]<= j){
                if(arr[i-1] === 0){
                    t[i][j] = t[i-1][j]
                }else{
                    t[i][j] = t[i-1][j] + t[i-1][j-arr[i-1]]
                }
            }else {
                t[i][j] = t[i-1][j]
            }
        }
    }
    return t[n][sum]
}

function countSubset(arr,diff) {

    const sum = arr.reduce((acc,curr)=>acc+curr, 0)

    const s1 = (sum+diff)/2;

    return countLongestSubSequence(arr, sum);
}

console.log(countSubset([1,1,2,3],1))