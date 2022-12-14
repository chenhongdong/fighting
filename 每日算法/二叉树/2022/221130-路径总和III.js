/* 
2022/11/30 
给定一个二叉树的根节点 root ，和一个整数 target ，求该二叉树里节点值之和等于 target 的 路径 的数目。
路径 不需要从根节点开始，也不需要在叶子节点结束，但是路径方向必须是向下的（只能从父节点到子节点）。

示例1：
https://assets.leetcode.com/uploads/2021/04/09/pathsum3-1-tree.jpg
输入：root = [10,5,-3,3,2,null,11,3,-2,null,1], target = 8
输出：3
解释：和等于 8 的路径有 3 条，如图所示。

示例2：
输入：root = [5,4,8,11,null,13,4,7,2,null,null,5,1], target = 22
输出：3

https://leetcode.cn/problems/path-sum-iii/description/
*/


/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {number}
 */
const pathSum = (root, target) => {
    if (!root) return 0
    let total = findPath(root, target)
    total += pathSum(root.left, target)
    total += pathSum(root.right, target)

    return total

    function findPath(root, target) {
        if (!root) return 0
        let num = 0
        if (root.val === target) {
            num++
        }
        num += findPath(root.left, target - root.val)
        num += findPath(root.right, target - root.val)
        return num
    }
}