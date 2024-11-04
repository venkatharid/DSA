// In a perfect binary tree, each node has either two children or none, and all leaf nodes are at the same level.

// Approach:

// You can use a level-by-level approach, starting from the root and connecting children at each level directly.
// Since it's a perfect binary tree, you can link nodes without additional space.

class TreeNode {
    constructor(val = 0, left = null, right = null, next = null) {
        this.val = val;
        this.left = left;
        this.right = right;
        this.next = next;
    }
}

function connect(root) {
    if (!root) return null;
    
    let leftMost = root; // Start with the root node
    
    while (leftMost.left) {
        let current = leftMost;
        
        while (current) {
            current.left.next = current.right;
            if (current.next) {
                current.right.next = current.next.left;
            }
            current = current.next; // Move to the next node at the same level
        }
        
        leftMost = leftMost.left; // Move to the next level
    }
    
    return root;
}

// Example usage:
let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

connect(root);
//Time Complexity: O(n), where n is the number of nodes in the tree.
//Space Complexity: O(1), constant extra space.