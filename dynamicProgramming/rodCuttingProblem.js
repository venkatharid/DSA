//the goal is to cut the rod in such a way that you get highest price

function rodCutting(arr, price, n) {

    const t= new Array(n+1).fill(0);
    for(let i=1; i<=n;i++){
        let maxPrice= -Infinity;
        for(let j=0; j<i; j++){
            maxPrice = Math.max(maxPrice, price[j]+ t[i-j-1])
        }
        t[i]= maxPrice
    }

    return t[n];
}


console.log(rodCutting([1,2,3,4,5,6,7,8],[1,5,8,9,10,17,17,20],8))