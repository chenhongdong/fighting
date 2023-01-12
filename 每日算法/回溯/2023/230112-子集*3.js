/* 
2023/01/12 21:51
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



const subsets2 = nums => {
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



const subsets3 = nums => {
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



// test case
console.log(subsets([1, 2, 3]))
console.log(subsets([1]))