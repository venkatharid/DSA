// This problem can be solved using dynamic programming. The idea is that for each house, you have two choices:

// Either rob the current house, and skip the previous one (add the current house's value to the best solution excluding the previous house).
// Or skip the current house and inherit the best solution from the previous house.

function houseRobber(nums) {
    const n = nums.length;

    if (n === 0) return 0;
    if (n === 1) return nums[0];
    
    // Initialize the DP array to store max robbed amount up to each house
    const t = new Array(n).fill(0);
    
    // Base cases
    t[0] = nums[0]; // If there's only one house, rob it
    t[1] = Math.max(nums[0], nums[1]); // Choose the maximum between the first and second house

    // Build the table iteratively
    for (let i = 2; i < n; i++) {
        t[i] = Math.max(nums[i] + t[i - 2], t[i - 1]);
    }

    return t[n - 1]; // The last entry contains the maximum amount we can rob
}

console.log(houseRobber([1, 2, 3, 1]));  // Output: 4
console.log(houseRobber([2, 7, 9, 3, 1]));  // Output: 12


// Time Complexity:
// O(n) where n is the number of houses (nums.length).
// Space Complexity:
// O(n) for the DP table t.