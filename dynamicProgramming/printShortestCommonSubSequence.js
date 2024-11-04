//print shortest common subsequence 

function LCS(str1, str2, m,n) {

    const t= new Array(m+1).fill(null).map(()=>Array(n+1).fill(0))

    for(let i=1; i<m+1; i++){
        for(let j=1; j<n+1;j++){
            if(str1[i-1]=== str2[j-1]){
                t[i][j] = 1 + t[i-1][j-1]
            }else{
                t[i][j] = Math.max(t[i-1][j], t[i][j-1])
            }
        }
    }
    return t[m][n]
}


function scs(str1,str2){
    let m= str1.length;
    let n= str2.length;

    let scs= m+n - LCS(str1, str2, m, n)

    return scs;
}

console.log(scs("aggtab", "gxtxayb"));
