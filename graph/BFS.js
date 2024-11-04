function bfs(graph, startNode) {
    const n = graph.length;
    const visited = new Array(n).fill(false);  // Array to track visited nodes
    const queue = [startNode];  // Queue for BFS, initialized with the start node

    visited[startNode] = true;  // Mark the start node as visited

    while (queue.length > 0) {
        const currentNode = queue.shift();  // Dequeue the first node in the queue

        // Process the current node (you can modify this to do whatever you need)
        console.log(`Visited node: ${currentNode}`);

        // Visit all the neighbors of the current node
        for (const neighbor of graph[currentNode]) {
            if (!visited[neighbor]) {
                visited[neighbor] = true;  // Mark the neighbor as visited
                queue.push(neighbor);  // Enqueue the neighbor
            }
        }
    }
}

// Example graph as an adjacency list
const graph = [
    [1, 2],    // Neighbors of node 0
    [0, 3, 4], // Neighbors of node 1
    [0, 4],    // Neighbors of node 2
    [1, 5],    // Neighbors of node 3
    [1, 2],    // Neighbors of node 4
    [3]        // Neighbors of node 5
];

// Start BFS from node 0
bfs(graph, 0);


// Time Complexity:
// O(V + E), where V is the number of vertices (nodes) and E is the number of edges. Each node is visited once, and each edge is traversed once.
// Space Complexity:
// O(V) for storing the visited array and the queue.