//equal sum if you divide array in 2 parts both should have same sum

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


function equalSum(arr) {
    const sum = arr.reduce((acc,curr)=> acc+curr,0)
    let result;

    if(sum%2 !== 0) { // if sum is not dividable by 2 there won't be 2 equal sum
        return false
    }else {
        result = subSetSum(arr, sum/2); // sum/2 because we just have to check if arr has a sub set which is half of sum as the other half will eqaul
    }

    return result;
}


console.log(equalSum([1,5,11,6]));
