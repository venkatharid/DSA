class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function lowestCommonAncestor(root, p, q) {
    while (root) {
        // If both p and q are greater than root, move to the right subtree
        if (p.val > root.val && q.val > root.val) {
            root = root.right;
        }
        // If both p and q are less than root, move to the left subtree
        else if (p.val < root.val && q.val < root.val) {
            root = root.left;
        }
        // Otherwise, root is the LCA
        else {
            return root;
        }
    }
    return null;  // In case there is no LCA (shouldn't happen in a valid BST)
}


let root = new TreeNode(6);
root.left = new TreeNode(2);
root.right = new TreeNode(8);
root.left.left = new TreeNode(0);
root.left.right = new TreeNode(4);
root.left.right.left = new TreeNode(3);
root.left.right.right = new TreeNode(5);
root.right.left = new TreeNode(7);
root.right.right = new TreeNode(9);

// Nodes p and q
let p = root.left;  // Node with value 2
let q = root.right;  // Node with value 4

// Finding LCA
let lca = lowestCommonAncestor(root, p, q);
console.log(`LCA of ${p.val} and ${q.val} is: ${lca.val}`); 