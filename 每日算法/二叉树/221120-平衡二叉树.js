/* 
2022/11/20 14:27
给定一个二叉树，判断它是否是高度平衡的二叉树。
本题中，一棵高度平衡二叉树定义为：
一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1 。

示例：
输入：root = [3,9,20,null,null,15,7]
输出：true
*/
const isBalanced = root => {
    // 如果是空的树，也算高度平衡的
    if (!root) return true
    
    function helper(root) {
        if (!root) return 0
        const left = helper(root.left)
        const right = helper(root.right)

        if (left === -1 || right === -1 || Math.abs(left - right) > 1) {
            return -1
        }

        return Math.max(left, right) + 1
    }

    return helper(root) !== -1
}