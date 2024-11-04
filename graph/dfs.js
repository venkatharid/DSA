function dfs(graph, node, visited) {
    // Mark the current node as visited
    visited[node] = true;

    // Process the current node (you can modify this to do whatever you need)
    console.log(`Visited node: ${node}`);

    // Recur for all the neighbors of this node
    for (const neighbor of graph[node]) {
        if (!visited[neighbor]) {
            dfs(graph, neighbor, visited); // Recursively visit unvisited neighbors
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

// Array to track visited nodes
const visited = new Array(graph.length).fill(false);

// Start DFS from node 0
dfs(graph, 0, visited);
