/* 
2023/01/18 20:34
给你一个整数数组 nums ，判断是否存在三元组 [nums[i], nums[j], nums[k]] 满足 i != j、i != k 且 j != k ，同时还满足 nums[i] + nums[j] + nums[k] == 0 。请
你返回所有和为 0 且不重复的三元组。
注意：答案中不可以包含重复的三元组。

示例 1：
输入：nums = [-1,0,1,2,-1,-4]
输出：[[-1,-1,2],[-1,0,1]]
解释：
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0 。
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0 。
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0 。
不同的三元组是 [-1,0,1] 和 [-1,-1,2] 。
注意，输出的顺序和三元组的顺序并不重要。

示例 2：
输入：nums = [0,1,1]
输出：[]
解释：唯一可能的三元组和不为 0 。

示例 3：
输入：nums = [0,0,0]
输出：[[0,0,0]]
解释：唯一可能的三元组和为 0 。
*/
const threeSum = nums => {
    const res = []
    const len = nums.length

    nums.sort((a, b) => a - b)

    for (let i = 0; i < len; i++) {
        if (i > 0 && nums[i - 1] === nums[i]) continue

        let l = i + 1, r = len - 1

        while (l < r) {
            const sum = nums[i] + nums[l] + nums[r]
            if (sum === 0) {
                res.push([nums[i], nums[l], nums[r]])
                while (l < r && nums[l] === nums[l + 1]) l++
                while (l < r && nums[r] === nums[r - 1]) r--
                l++
                r--
            } else if (sum < 0) {
                l++
            } else {
                r--
            }
        }
    }

    return res
}



const threeSum2 = nums => {
    const res = []
    const len = nums.length

    nums.sort((a, b) => a - b)

    for (let i = 0; i < len; i++) {
        if (i > 0 && nums[i - 1] === nums[i]) continue

        let l = i + 1, r = len - 1
        while (l < r) {
            const sum = nums[i] + nums[l] + nums[r]
            if (sum === 0) {
                res.push([nums[i], nums[l], nums[r]])
                while (l < r && nums[l] === nums[l + 1]) l++
                while (l < r && nums[r] === nums[r - 1]) r--
                l++
                r--
            } else if (sum < 0) {
                l++
            } else {
                r--
            }
        }
    }
    return res
}



const threeSum3 = nums => {
    const res = []
    const len = nums.length
    nums.sort((a, b) => a - b)

    for (let i = 0; i < len; i++) {
        if (i > 0 && nums[i - 1] === nums[i]) continue

        let l = i + 1, r = len - 1
        while (l < r) {
            const sum = nums[i] + nums[l] + nums[r]
            if (sum === 0) {
                res.push([nums[i], nums[l], nums[r]])
                while (l < r && nums[l] === nums[l + 1]) l++
                while (l < r && nums[r] === nums[r - 1]) r--
                l++
                r--
            } else if (sum < 0) {
                l++
            } else {
                r--
            }
        }
    }

    return res
}



// test case
console.log(threeSum([-1, 0, 1, 2, -1, -4]))
console.log(threeSum([0, 1, 1]))
console.log(threeSum([0, 0, 0]))