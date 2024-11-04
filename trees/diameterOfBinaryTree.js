//calculae the diameter of binary tree

class TreeNode {
    constructor(node){
        this.value= node;
        this.left= null;
        this.right = null;
    }
}


function calculateDiameter(root){

    let diameter = 0;

    function height(node){
        if(!node){
            return 0;
        }

        let left = height(node.left)
        let right = height(node.right)

        diameter = Math.max(diameter, left+ right)
        return Math.max(left, right) +1
    }

    height(root);
    return diameter
}


const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right= new TreeNode(3)
root.left.left = new TreeNode(4);
root.right.right = new TreeNode(5);
root.left.left.right = new TreeNode(8);


console.log(calculateDiameter(root))
