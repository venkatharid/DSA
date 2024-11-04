function subSetSum(arr, target){
    const n= arr.length;
    const count =0;
    const t= new Array(n+1).fill().map(()=> Array(target+1).fill(0))

    for(let j=0; j<=n; j++){
        t[j][0] = 1;
    }

    for(let i=1; i<=n; i++){
        for(let j=1; j<= target; j++){
            if(arr[i-1]<= j){
                t[i][j] = t[i][j-arr[i-1]] + t[i-1][j]
            }else{
                t[i][j] = t[i-1][j]
            }
        }
    }

    return t[n][target]
}

console.log(subSetSum([1,2,5], 11));