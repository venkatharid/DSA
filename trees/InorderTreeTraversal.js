
class TreeNode {
    constructor(node){
        this.value= node;
        this.left= null;
        this.right = null;
    }
}

function inOrderTraversal (root) {
    const result = [];
    function inOrder(node) {
        if(!node) return null;

        inOrder(node.left)
        result.push(node.value)
        inOrder(node.right)
    }

    inOrder(root);

    return result;
}


//const root = buildTreeFromArray([1, null, 2, 3]);
console.log(inOrderTraversal(root));