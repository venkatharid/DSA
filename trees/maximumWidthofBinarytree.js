class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function widthOfBinaryTree(root) {
    if (!root) return 0;

    let maxWidth = 0;
    const queue = [[root, 0]];  // Queue stores [node, index]

    while (queue.length > 0) {
        const levelSize = queue.length;
       // const levelStart = queue[0][1];  // First node's index at the current level

        let first, last;

        for (let i = 0; i < levelSize; i++) {
            const [node, index] = queue.shift();  // Get the node and its index

            if (i === 0) first = index;  // Index of the first node at the current level
            if (i === levelSize - 1) last = index;  // Index of the last node at the current level

            // For children, left child gets index 2 * index, right child gets 2 * index + 1
            if (node.left) queue.push([node.left, 2 * index]);
            if (node.right) queue.push([node.right, 2 * index + 1]);
        }

        // Update the maximum width
        maxWidth = Math.max(maxWidth, last - first + 1);
    }

    return maxWidth;
}

// Example usage:
let root = new TreeNode(1);
root.left = new TreeNode(3);
root.right = new TreeNode(2);
root.left.left = new TreeNode(5);
root.left.right = new TreeNode(3);
root.right.right = new TreeNode(9);

console.log(widthOfBinaryTree(root));  // Output: 4
