/* 
1. 不同路径
一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。
机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish” ）。
问总共有多少条不同的路径？

示例1：
输入：m = 3, n = 7
输出：28

示例 2：
输入：m = 3, n = 2
输出：3
解释：
从左上角开始，总共有 3 条路径可以到达右下角。

向右 -> 向下 -> 向下
向下 -> 向下 -> 向右
向下 -> 向右 -> 向下
*/
const uniquePaths = (m, n) => {
    const dp = Array(m).fill().map(() => Array(n).fill(1))

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
        }
    }

    return dp[m - 1][n - 1]
}
console.log(uniquePaths(3, 7))
console.log(uniquePaths(3, 2))



/* 
2. 右侧第一个大于它的数
给定一个整型数组，数组元素随机无序的，要求打印出所有元素右边第一个大于该元素的值，如果找不到这样的值就用-1表示

示例1：
输入：[1, 5, 3, 6, 4, 8, 9, 10]
输出：[5, 6, 6, 8, 8, 9, 10, -1]

示例2：
输入：[8, 2, 5, 4, 3, 9, 7, 2, 5]
输出：[9, 5, 9, 9, 9, -1, -1, 5, -1]
*/
const findMaxRight = arr => {
    const res = []
    const stack = []
    let index = 0

    while (index < arr.length) {
        const top = stack[stack.length - 1]
        if (arr[top] < arr[index]) {
            res[stack.pop()] = arr[index]
        } else {
            stack.push(index++)
        }
    }

    while (stack.length) {
        res[stack.pop()] = -1
    }

    return res
}
console.log(findMaxRight([1, 5, 3, 6, 4, 8, 9, 10]))
console.log(findMaxRight([8, 2, 5, 4, 3, 9, 7, 2, 5]))



/* 
3. 整数拆分
给定一个正整数 n，将其拆分为至少两个正整数的和，并使这些整数的乘积最大化。 返回你可以获得的最大乘积。
示例 1:
输入: 2
输出: 1
解释: 2 = 1 + 1, 1 × 1 = 1。

示例 2:
输入: 10
输出: 36
解释: 10 = 3 + 3 + 4, 3 × 3 × 4 = 36。

提示: 2 <= n <= 58。
*/
const integerBreak = n => {
    const memo = Array(n + 1).fill(0)

    function splitNum(n) {
        if (memo[n]) {
            return memo[n]
        }
        for (let i = 1; i < n; i++) {
            memo[n] = Math.max(memo[n], i * (n - i), i * splitNum(n - i))
        }
        return memo[n]
    }

    return splitNum(n)
}
console.log(integerBreak(2))
console.log(integerBreak(10))