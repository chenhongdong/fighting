/* 
2023/01/13 10:15
假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

示例：
输入：n = 3
输出：3
解释：有三种方法可以爬到楼顶。

1 阶 + 1 阶 + 1 阶
1 阶 + 2 阶
2 阶 + 1 阶
*/
const climbStairs = n => {
    const memo = Array(n + 1).fill(0)
    memo[0] = memo[1] = 1
    for (let i = 2; i <= n; i++) {
        memo[i] = memo[i - 1] + memo[i - 2]
    }
    return memo[n]
}



// test case
console.log(climbStairs(3));