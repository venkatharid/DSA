class TreeNode {
    constructor(node){
        this.value= node;
        this.left= null;
        this.right = null;
    }
}


function calculateMaxPath(root){

    let maxSum = 0;

    function height(node){
        if(!node){
            return 0;
        }

        let leftMax = Math.max(0,height(node.left))
        let rightMax = Math.max(0,height(node.right))

        maxSum = Math.max(maxSum, leftMax+rightMax+node.value)
        return Math.max(leftMax, rightMax) + node.value;
    }

    height(root);
    return maxSum
}


const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right= new TreeNode(3)
root.left.left = new TreeNode(4);
root.right.right = new TreeNode(5);
root.left.left.right = new TreeNode(8);


console.log(calculateMaxPath(root))