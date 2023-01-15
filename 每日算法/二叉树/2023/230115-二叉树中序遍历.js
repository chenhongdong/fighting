/* 
2023/01/15 
给定一个二叉树的根节点 root ，返回 它的 中序遍历 。

1
  \
   3
  /
2 
示例 1：
输入：root = [1,null,2,3]
输出：[1,3,2]

示例 2：
输入：root = []
输出：[]

示例 3：
输入：root = [1]
输出：[1]
*/
const inorderTraversal = root => {
    const res = []
    order(root, res)

    function order(root, res) {
        if (!root) return
        order(root.left)
        res.push(root.val)
        order(root.right)
    }

    return res
}


const inorderTraversalStack = root => {
    const res = []
    const stack = []

    while (root || stack.length) {
        while (root) {
            stack.push(root)
            root = root.left
        }
        root = stack.pop()
        res.push(root.val)
        root = root.right
    }

    return res
}