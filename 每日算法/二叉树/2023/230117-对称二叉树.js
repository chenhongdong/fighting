/* 
2023/01/17 16:45
给你一个二叉树的根节点 root ， 检查它是否轴对称。

       7
     /   \
    9     9
   / \   / \
  5  8  8   5
*/
const isSymmetric = root => {
    if (!root) return true
    
    function helper(l, r) {
        if (!l && !r) return true
        if ((l && !r) || (!l && r) || l.val !== r.val) {
            return false
        }
        return helper(l.left, r.right) && helper(l.right, r.left)
    }

    return helper(root.left, root.right)
}