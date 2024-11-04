//subset sum Problem you are given an arr and a target you have to find the sub set whose sum is target



function subSetSum(arr, target){
    const n= arr.length;
    const t= new Array(n+1).fill().map(()=> Array(target+1).fill(false))

    for(let j=0; j<=n; j++){
        t[j][0] = true;
    }

    for(let i=1; i<=n; i++){
        for(let j=1; j<= target; j++){
            if(arr[i-1]<= j){
                t[i][j] = t[i-1][j-arr[i-1]] || t[i-1][j]
            }else{
                t[i][j] = t[i-1][j]
            }
        }
    }

    return t[n][target]
}


console.log(subSetSum([2,3,6,7], 7));
