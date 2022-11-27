/* 
2022/11/23 22:31
给定一个二叉树，返回其按层次遍历的节点值。 （即逐层地，从左到右访问所有节点）。
例如:
给定二叉树: [3,9,20,null,null,15,7]

        3
       / \
      9  20
        /  \
       15   7

返回其层次遍历结果：
    [
      [3],
      [9,20],
      [15,7]
    ]


https://leetcode.cn/problems/binary-tree-level-order-traversal/
*/

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const levelOrder = (root) => {
    const res = []

    helper(root, 0)

    function helper(root, level) {
        if (res.length === level) {
            res.push([])
        }
        res[level].push(root.val)

        if (root.left) {
            helper(root.left, level + 1)
        }
        if (root.right) {
            helper(root.right, level + 1)
        }
    }

    return res
}