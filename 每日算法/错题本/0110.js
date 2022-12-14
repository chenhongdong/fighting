/* 
1. 字符的最短距离
给你一个字符串 s 和一个字符 c ，且 c 是 s 中出现过的字符。
返回一个整数数组 answer ，其中 answer.length == s.length 且 answer[i] 是 s 中从下标 i 到离它 最近 的字符 c 的 距离 。
两个下标 i 和 j 之间的 距离 为 abs(i - j) ，其中 abs 是绝对值函数。

示例 1：
输入：s = "loveleetcode", c = "e"
输出：[3,2,1,0,1,0,0,1,2,2,1,0]
解释：字符 'e' 出现在下标 3、5、6 和 11 处（下标从 0 开始计数）。
距下标 0 最近的 'e' 出现在下标 3 ，所以距离为 abs(0 - 3) = 3 。
距下标 1 最近的 'e' 出现在下标 3 ，所以距离为 abs(1 - 3) = 2 。
对于下标 4 ，出现在下标 3 和下标 5 处的 'e' 都离它最近，但距离是一样的 abs(4 - 3) == abs(4 - 5) = 1 。
距下标 8 最近的 'e' 出现在下标 6 ，所以距离为 abs(8 - 6) = 2 。

示例 2：
输入：s = "aaab", c = "b"
输出：[3,2,1,0]
*/
const shortestToChar = (s, c) => {
    const res = []
    const len = s.length

    for (let i = 0, idx = -len; i < len; i++) {
        if (s[i] === c) {
            idx = i
        }
        res[i] = i - idx
    }

    for (let i = len - 1, idx = 2 * len; i >= 0; i--) {
        if (s[i] === c) {
            idx = i
        }
        res[i] = Math.min(res[i], idx - i)
    }

    return res
}

console.log(shortestToChar('loveleetcode', 'e'))
console.log(shortestToChar('aaab', 'b'))



/* 
2. 全排列
给定一个不含重复数字的数组 nums ，返回其所有可能的全排列 。你可以 按任意顺序 返回答案。

示例 1：
输入：nums = [1,2,3]
输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

示例 2：
输入：nums = [0,1]
输出：[[0,1],[1,0]]
*/
const permute = nums => {
    const res = []
    const len = nums.length
    const visited = Array(len).fill(0)

    backtrack(nums, 0, [])

    function backtrack(nums, index, path) {
        if (index === len) {
            res.push([...path])
            return
        }

        for (let i = 0; i < len; i++) {
            if (!visited[i]) {
                visited[i] = 1
                path.push(nums[i])
                backtrack(nums, index + 1, path)
                path.pop()
                visited[i] = 0
            }
        }
    }

    return res
}

console.log(permute([1,2,3]))
console.log(permute([0,1]))