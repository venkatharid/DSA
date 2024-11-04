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
        if(!node.left && !node.right){
            return node.value
        }

        let leftMax = node.left? height(node.left):0;
        let rightMax = node.right ? height(node.right):0;

        if(node.left && node.right) {
            maxSum = Math.max(maxSum, leftMax+rightMax+node.value)
            return Math.max(leftMax, rightMax) + node.value;
        }

        
        return (node.left? leftMax: rightMax)+node.value;
        
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

/*Time Complexity: O(n), where 
𝑛
n is the number of nodes in the tree.
Space Complexity: O(h), where 
ℎ
h is the height of the tree. In the worst case, O(n); in the best case (balanced tree), O(\log n).*/