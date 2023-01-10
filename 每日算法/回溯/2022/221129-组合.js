/* 
2022/11/29 23:38
给定两个整数 n 和 k，返回范围 [1, n] 中所有可能的 k 个数的组合。
你可以按 任何顺序 返回答案。

示例：
输入：n = 4, k = 2
输出：
[[2,4], [3,4], [2,3], [1,2], [1,3], [1,4]]

https://leetcode.cn/problems/combinations/
*/

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
const combine = (n, k) => {
    const res = []

    backtrack(n, k, 1, [])

    function backtrack(n, k, index, path) {
        if (k === 0) {
            res.push([...path])
            return
        }
        for (let i = index; i <= n; i++) {
            path.push(i)
            backtrack(n, k - 1, i + 1, path)
            path.pop()
        }
    }

    return res
}



// test case
console.log(combine(4, 2))