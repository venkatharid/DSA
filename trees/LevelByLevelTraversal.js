class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function levelOrderTraversal(root) {
    if (!root) return [];

    const result = [];
    const queue = [root]; // Initialize the queue with the root node

    while (queue.length > 0) {
        const levelSize = queue.length; // Number of nodes at the current level
        const currentLevel = [];

        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift(); // Dequeue the front node
            currentLevel.push(node.val); // Process the node

            // Enqueue the left child if it exists
            if (node.left) {
                queue.push(node.left);
            }
            // Enqueue the right child if it exists
            if (node.right) {
                queue.push(node.right);
            }
        }

        result.push(currentLevel); // Add the current level to the result
    }

    return result;
}


// Building a sample binary tree
let root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);

// Getting the level order traversal
console.log(levelOrderTraversal(root)); // Output: [[3], [9, 20], [15, 7]]
