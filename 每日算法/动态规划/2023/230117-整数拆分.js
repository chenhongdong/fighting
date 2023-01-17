/* 
2023/01/17 
给定一个正整数 n，将其拆分为至少两个正整数的和，并使这些整数的乘积最大化。 返回你可以获得的最大乘积。

示例 1:
输入: 2
输出: 1
解释: 2 = 1 + 1, 1 × 1 = 1。

示例 2:
输入: 10
输出: 36
解释: 10 = 3 + 3 + 4, 3 × 3 × 4 = 36。

提示: 2 <= n <= 58
*/
const integerBreak = n => {
    const memo = Array(n + 1).fill(0)

    function splitNum(n) {
        if (memo[n]) {
            return memo[n]
        }
        // 求n的最大值，就要分解求1到n-1的最大值
        for (let i = 1; i < n; i++) {
            memo[n] = Math.max(memo[n], i * (n - i), i * splitNum(n - i))
        }
        return memo[n]
    }

    return splitNum(n)
}



const integerBreak2 = n => {
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



const integerBreak3 = n => {
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



// test case
console.log(integerBreak(2))
console.log(integerBreak(6))
console.log(integerBreak(10))