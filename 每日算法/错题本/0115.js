/* 
1. 路径总和II
给你二叉树的根节点 root 和一个整数目标和 target ，找出所有 从根节点到叶子节点 路径总和等于给定目标和的路径。
叶子节点 是指没有子节点的节点。

示例1：
输入：root = [5,4,8,11,null,13,4,7,2,null,null,5,1], target = 22
输出：[[5,4,11,2],[5,8,4,5]]

示例2：
输入：root = [1,2,3], target = 5
输出：[]
*/
const pathSum = (root, target) => {
    const res = []

    find(root, target, [])

    function find(root, target, path) {
        if (!root) return
        path.push(root.val)
        target -= root.val
        if (!root.left && !root.right && target === 0) {
            res.push([...path])
        }
        find(root.left, target, path)
        find(root.right, target, path)
        path.pop()
    }

    return res
}