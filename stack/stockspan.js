//Given a list of daily stock prices, the span of a stock's price for a given day is defined as the maximum number of 
//consecutive days (including the current day) the price of the stock has been less than or equal to its price on that day.

function stockSpan(arr){

    const n= arr.length;
    const stack =[];
    const span= new Array(n).fill(0);

    for(let i=0; i<n; i++) {
        while(stack.length> 0 && arr[stack[stack.length -1]]<=arr[i]){
            stack.pop()
        }

        span[i] = stack.length === 0 ? i+1: i-stack[stack.length-1]

        stack.push(i)
    }

    return span;
}


console.log(stockSpan([100,80,60,70,60,75,85]))