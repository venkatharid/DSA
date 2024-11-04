//print the longest sub sequence 



function printLongestSubSequence(str1, str2, m, n){

    const t= new Array(m+1).fill(null).map(()=>Array(n+1).fill(0))

    for(let i=1; i<m+1; i++){
        for(let j=1; j<n+1;j++){
            if(str1[i-1]=== str2[j-1]){
                t[i][j] = 1 + t[i-1][j]
            }else{
                t[i][j] = Math.max(t[i-1][j], t[i][j-1])
            }
        }
    }

    let i= m, j=n;
    let lcs = [];

    while(i>0 && j>0){
        if(str1[i-1]===str2[j-1]){
            lcs.unshift(str1[i-1])
            i--;
            j--;
        }else if(t[i][j-1]> t[i-1][j]){
            j--;
        }else{
            i--;
        }
    }
    return lcs.join('')

}

console.log(printLongestSubSequence("abcde", "abgde", 5,5));