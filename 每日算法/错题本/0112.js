/* 
1. 零钱兑换
给你一个整数数组 coins ，表示不同面额的硬币；以及一个整数 amount ，表示总金额。
计算并返回可以凑成总金额所需的 最少的硬币个数 。如果没有任何一种硬币组合能组成总金额，返回 -1 。
你可以认为每种硬币的数量是无限的。

示例 1：
输入：coins = [1, 2, 5], amount = 11
输出：3
解释：11 = 5 + 5 + 1
*/
const coinChange = (coins, amount) => {
    const dp = Array(amount + 1).fill(-1)
    dp[0] = 0
    for (let i = 1; i <= amount; i++) {
        for (let j = 0; j < coins.length; j++) {
            if (coins[j] <= i && dp[i - coins[j]] !== -1) {
                if (dp[i] === -1 || dp[i] > dp[i - coins[j]] + 1) {
                    dp[i] = dp[i - coins[j]] + 1
                }
            }
        }
    }
    return dp[amount]
}

console.log(coinChange([1, 2, 5], 11))


/* 
2. 子集
给你一个整数数组 nums ，数组中的元素 互不相同 。返回该数组所有可能的子集（幂集）。
解集 不能 包含重复的子集。你可以按 任意顺序 返回解集。

示例 1：
输入：nums = [1,2,3]
输出：[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

示例 2：
输入：nums = [0]
输出：[[],[0]]
*/
const subsets = nums => {
    const res = []
    backtrack(nums, 0, [])

    function backtrack(nums, index, path) {
        res.push([...path])

        for (let i = index; i < nums.length; i++) {
            path.push(nums[i])
            backtrack(nums, i + 1, path)
            path.pop()
        }
    }
    return res
}

console.log(subsets([1,2,3]))
console.log(subsets([1,2]))
console.log(subsets([1]))