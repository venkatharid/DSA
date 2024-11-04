//from given array you have to find 2 sumset whose difference is minimum for example arr[1,2,3,9] 2 sub set will be {1,2,3} {9} = 6-9 = 3;



function minsubSetSum(arr){
    const n= arr.length;
    const totalSum = arr.reduce((sum, num) => sum + num, 0)
    const target = Math.floor(totalSum/2)
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

   let min_diff= Infinity;
   for(let j=target; j>=0; j--) {
    if(t[n][j]) { // Check if a subset sum `j` is possible
        min_diff = totalSum - 2*j;
        break;
    }
   }

   return min_diff;
}


console.log(minsubSetSum([3, 1, 4, 1, 5, 9, 2]));
