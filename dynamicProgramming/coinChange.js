/*You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.*/


function coinChange(arr, target) {
    const n = arr.length;
    const t = new Array(n + 1).fill().map(() => Array(target + 1).fill(Infinity));

    // Base case: 0 coins are required to make amount 0
    for (let i = 0; i <= n; i++) {
        t[i][0] = 0;
    }

    // Build the table in bottom-up manner
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= target; j++) {
            if (arr[i - 1] <= j) {
                // Use the current coin or don't use it (whichever gives minimum coins)
                t[i][j] = Math.min(t[i][j - arr[i - 1]] + 1, t[i - 1][j]);
            } else {
                // If the coin can't be used, inherit the value from the previous row
                t[i][j] = t[i - 1][j];
            }
        }
    }

    // If the amount can't be reached, return -1
    return t[n][target] === Infinity ? -1 : t[n][target];
}

console.log(coinChange([1, 2, 5], 11));  // Output: 3


// Time Complexity:
// O(n * target) where n is the number of coins and target is the target amount.
// Space Complexity:
// O(n * target) for the 2D table.