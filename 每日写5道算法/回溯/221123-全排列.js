/* 
2022/11/23 22:55
给定一个不含重复数字的数组 nums ，返回其所有可能的全排列 。你可以 按任意顺序 返回答案。

示例 1：
输入：nums = [1,2,3]
输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

示例 2：
输入：nums = [0,1]
输出：[[0,1],[1,0]]


https://leetcode.cn/problems/permutations/
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = (nums) => {
    const res = []
    const len = nums.length
    const visited = Array(len).fill(0)
    backtrack(nums, 0, [])

    function backtrack(nums, index, path) {
        if (len === index) {
            res.push([...path])
            return
        }

        for (let i = 0; i < len; i++) {
            if (!visited[i]) {
                path.push(nums[i])
                visited[i] = 1
                backtrack(nums, index + 1, path)
                visited[i] = 0
                path.pop()
            }
        }
    }

    return res
}




// test case
console.log(permute([1,2,3]))
console.log(permute([1,2]))