/* 
2022/11/23 22:41
给你一个含 n 个整数的数组 nums ，其中 nums[i] 在区间 [1, n] 内。请你找出所有在 [1, n] 范围内但没有出现在 nums 中的数字，并以数组的形式返回结果。

示例 1：
输入：nums = [4,3,2,7,8,2,3,1]
输出：[5,6]

示例 2：
输入：nums = [1,1]
输出：[2]


https://leetcode.cn/problems/find-all-numbers-disappeared-in-an-array/
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findDisappearedNumbers = nums => {
    const len = nums.length
    const res = []

    for (let i of nums) {
        let index = (i - 1) % len
        nums[index] += len
    }

    for (let i = 0; i < len; i++) {
        if (nums[i] <= len) {
            res.push(i + 1)
        }
    }

    return res
}



// test case
console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]));
console.log(findDisappearedNumbers([1,1]));