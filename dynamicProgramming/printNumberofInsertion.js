

function LCS(str1, str2, m,n){
    const t= new Array(m+1).fill().map(()=>Array(n+1).fill(0))

    for(i=1; i<m+1; i++){
        for(j=1; j<n+1; j++){
            if(str1[i-1] === str2[j-1]){
                t[i][j] = 1+ t[i-1][j-1]
            }else{
                t[i][j] = t[i-1][j]
            }
        }
    }
    return t[m][n]
}

function printInsertion(str1, str2){
    m= str1.length;
    n= str2.length;

    let lcs = LCS(str1, str2, m,n)
     
    return [m-lcs, n-lcs] 
}

console.log(printInsertion("heap", "pea"))