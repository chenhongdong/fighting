/* 
2022/11/26 01:36
给你一个整数数组 nums，请你找出数组中乘积最大的非空连续子数组（该子数组中至少包含一个数字），并返回该子数组所对应的乘积。
测试用例的答案是一个32-位 整数。
子数组 是数组的连续子序列。

示例 1:
输入: nums = [2,3,-2,4]
输出: 6
解释:子数组 [2,3] 有最大乘积 6。

示例 2:
输入: nums = [-2,0,-1]
输出: 0
解释:结果不能为 2, 因为 [-2,-1] 不是子数组。

https://leetcode.cn/problems/maximum-product-subarray/
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
const maxProduct = (nums) => {
    let num = nums[0], max = num, min = num

    for (let i = 1; i < nums.length; i++) {
        const a = max * nums[i], b = min * nums[i]
        max = Math.max(nums[i], a, b)
        min = Math.min(nums[i], a, b)
        num = Math.max(num, max)
    }

    return num
}



// test case
console.log(maxProduct([2,3,-2,4]))
console.log(maxProduct([-2,0,-1]))