// Given a string s and an array of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words. Otherwise, return false.

// You may assume the dictionary does not contain duplicate words.

function wordBreak(s, wordDict) {
    const n = s.length;
    const dp = new Array(n + 1).fill(false);
    const wordSet = new Set(wordDict); // Convert wordDict to a Set for O(1) lookups

    dp[0] = true; // Base case: an empty string can always be segmented

    // Build the dp table
    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < i; j++) {
            if (dp[j] && wordSet.has(s.slice(j, i))) {
                dp[i] = true;
                break; // No need to check further if we found a valid segmentation
            }
        }
    }

    return dp[n]; // The last entry tells us if the entire string can be segmented
}

console.log(wordBreak("leetcode", ["leet", "code"])); // Output: true
console.log(wordBreak("applepenapple", ["apple", "pen"])); // Output: true
console.log(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"])); // Output: false
