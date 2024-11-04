// You are given a 2D grid of integers image representing a picture, where image[i][j] represents the pixel value at position (i, j).

// You are also given three integers sr, sc, and newColor. Start at the pixel image[sr][sc], and replace all pixels connected 4-directionally to the starting pixel that 
// have the same color as the starting pixel, with the new color.


function floodFill(image, sr, sc, newColor) {
    const rows = image.length;
    const cols = image[0].length;
    const oldColor = image[sr][sc];  // The original color of the starting pixel
    
    // If the new color is the same as the old color, no need to proceed
    if (oldColor === newColor) return image;
    
    // Helper function for DFS
    function dfs(r, c) {
        // Base case: check boundaries and if the pixel is the original color
        if (r < 0 || r >= rows || c < 0 || c >= cols || image[r][c] !== oldColor) {
            return;
        }
        
        // Change the color of the current pixel
        image[r][c] = newColor;
        
        // Explore the 4 directions: up, down, left, right
        dfs(r + 1, c); // down
        dfs(r - 1, c); // up
        dfs(r, c + 1); // right
        dfs(r, c - 1); // left
    }
    
    // Start the DFS from the starting pixel
    dfs(sr, sc);
    
    return image;
}

// Example usage:
const image = [[1,1,1],[1,1,0],[1,0,1]];
const sr = 1, sc = 1, newColor = 2;
console.log(floodFill(image, sr, sc, newColor));


// Space Complexity:
// DFS: The space complexity is O(m * n) due to the recursion stack in the worst case (if all pixels are connected).
// BFS: The space complexity is O(m * n) because of the queue that stores the pixels to be processed.