class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

var invertTree = function(root) {
    if (root === null) return null;

    // Swap the left and right subtrees
    [root.left, root.right] = [root.right, root.left];

    // Recursively invert the left and right subtrees
    invertTree(root.left);
    invertTree(root.right);

    return root;
};


/*Time Complexity:
O(n): Where n is the number of nodes in the tree. Each node is visited once.
Space Complexity:
O(h): Where h is the height of the tree. The space is used by the recursive call stack, which can go as deep as the height of the tree (O(log n) for balanced trees and O(n) for skewed trees).*/