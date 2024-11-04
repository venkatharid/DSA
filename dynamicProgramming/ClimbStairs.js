//You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 step or 2 steps. 
//In how many distinct ways can you climb to the top?
/*The problem can be solved using dynamic programming or a Fibonacci sequence approach because the number of ways to reach the nth step is the sum of 
the ways to reach the (n-1)th and (n-2)th steps (since you can get to the nth step by either taking 1 step from n-1 or taking 2 steps from n-2).*/


var climbStairs = function(n) {
    if (n === 1) return 1;
    if (n === 2) return 2;

    let dp = new Array(n + 1);
    dp[1] = 1;  // 1 way to reach the first step
    dp[2] = 2;  // 2 ways to reach the second step

    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];  // current step is the sum of previous two
    }

    return dp[n];
};


//Time Complexity: O(n) since we calculate the number of ways for each step up to n.

//Space Complexity: O(n) for the array storing the results.