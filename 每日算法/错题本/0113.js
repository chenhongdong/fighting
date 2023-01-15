/* 
1. 最长递增子序列
给你一个整数数组 nums ，找到其中最长严格递增子序列的长度。
子序列 是由数组派生而来的序列，删除（或不删除）数组中的元素而不改变其余元素的顺序。例如，[3,6,2,7] 是数组 [0,3,1,6,2,2,7] 的子序列。
 
示例 ：
输入：nums = [10,9,2,5,3,7,101,18]
输出：4
解释：最长递增子序列是 [2,3,7,101]，因此长度为 4 。
*/
const lengthOfLIS = nums => {
    const len = nums.length
    const dp = Array(len).fill(1)

    for (let i = 1; i < len; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                dp[i] = Math.max(dp[i], dp[j] + 1)
            }
        }
    }
    return Math.max(...dp)
}
console.log(lengthOfLIS([10,9,2,5,3,7,101,18]));

/* 
2. 路径总和II
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