/* 
给你一棵二叉树的根节点 root ，返回其节点值的 后序遍历 。
示例1：
https://assets.leetcode.com/uploads/2020/08/28/pre1.jpg
输入：root = [1,null,2,3]
输出：[3,2,1]

示例 2：
输入：root = []
输出：[]


https://leetcode.cn/problems/binary-tree-postorder-traversal/
*/

// 递归
const postorderTraversal = root => {
    const res = []
    helper(root)

    function helper(root) {
        if (!root) return
        helper(root.left)
        helper(root.right)
        res.push(root.val)
    }

    return res
}



// 栈
const postorderTraversal2 = root => {
    const res = []
    const stack = []
    let prevAccess

    while (root || stack.length) {
        while (root) {
            stack.push(root)
            root = root.left
        }
        root = stack.pop()

        if (!root.right || prevAccess === root.right) {
            res.push(root.val)
            prevAccess = root
            root = null
        } else {
            stack.push(root)
            root = root.right
        }
    }

    return res
}