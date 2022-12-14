/* 
2022/11/20 15:10
给你一个整数数组 coins ，表示不同面额的硬币；以及一个整数 amount ，表示总金额。
计算并返回可以凑成总金额所需的 最少的硬币个数 。如果没有任何一种硬币组合能组成总金额，返回 -1 。
你可以认为每种硬币的数量是无限的。

示例 1：
输入：coins = [1, 2, 5], amount = 11
输出：3
解释：11 = 5 + 5 + 1

https://leetcode.cn/problems/coin-change/
*/

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
const coinChange = (coins, amount) => {
    let dp = Array(amount + 1).fill(-1)

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



// test case
console.log(coinChange([1, 2, 5], 11))