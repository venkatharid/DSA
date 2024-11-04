//'0 - 1 knapscack


function knapsack(weights, value, capacity, n) {

    const t = new Array(n+1).fill(0).map(()=> Array(capacity+1).fill(0))

    for(let i=1; i<=n; i++){
        for(let w=1; w<=capacity; w++) {
            if(weights[i-1]<=w){
            t[i][w] = Math.max(value[i-1] + t[i-1][w - weights[i-1]] , t[i-1][w])
            }else{
                t[i][w] = t[i-1][w]
            }
        }
    }
    return t[n][capacity]

}

const weights = [1, 3, 4, 5];
const value = [1, 4, 5, 7];
const capacity = 7;
console.log(knapsack(weights, value, capacity, 4));

