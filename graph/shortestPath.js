function shortestPathLength(graph) {
    const n = graph.length;
    const finalState = (1 << n) - 1;  // All nodes visited state, e.g., 111..1 for n nodes

    // Queue for BFS, each element is [current node, visited nodes bitmask, path length]
    const queue = [];
    const visited = new Array(n).fill().map(() => new Array(1 << n).fill(false));

    // Initialize the queue with all nodes as starting points
    for (let i = 0; i < n; i++) {
        queue.push([i, 1 << i, 0]); // Start with node i, visited state is only node i, path length is 0
        visited[i][1 << i] = true;
    }

    while (queue.length > 0) {
        const [node, mask, dist] = queue.shift();

        // If all nodes have been visited, return the distance (path length)
        if (mask === finalState) return dist;

        // Explore the neighbors
        for (const neighbor of graph[node]) {
            const newMask = mask | (1 << neighbor);  // Add the neighbor to the visited set

            if (!visited[neighbor][newMask]) {
                queue.push([neighbor, newMask, dist + 1]);
                visited[neighbor][newMask] = true;
            }
        }
    }

    return -1; // Should never reach here
}

console.log(shortestPathLength([[1,2,3],[0],[0],[0]])); // Output: 4
console.log(shortestPathLength([[1],[0,2,4],[1,3,4],[2],[1,2]])); // Output: 4


// Time Complexity:
// O(n * 2^n): There are n * 2^n possible states (for each node, we can have 2^n different visited sets), and BFS explores each state once.
// Space Complexity:
// O(n * 2^n) for the visited array and the queue.