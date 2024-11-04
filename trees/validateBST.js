class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function isValidBST(root) {
    function validate(node, low = -Infinity, high = Infinity) {
        // An empty tree is a valid BST
        if (!node) return true;

        // The current node's value must be within the range defined by low and high
        if (node.val <= low || node.val >= high) {
            return false;
        }

        // Recursively check the subtrees with updated ranges
        return validate(node.left, low, node.val) && validate(node.right, node.val, high);
    }

    return validate(root);
}

// Example Usage:
let root = new TreeNode(2);
root.left = new TreeNode(1);
root.right = new TreeNode(3);

console.log(isValidBST(root));  // Output: true

root = new TreeNode(5);
root.left = new TreeNode(1);
root.right = new TreeNode(4);
root.right.left = new TreeNode(3);
root.right.right = new TreeNode(6);

console.log(isValidBST(root));  // Output: false

//O(n), where n is the number of nodes in the tree.
//Space Complexity: O(h), where h is the height of the tree. In the worst case, O(n); in the best case (balanced tree), O(log(n)).