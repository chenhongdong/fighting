/* 
2022/11/23 22:26
给定一个已按照升序排列 的有序数组，找到两个数使得它们相加之和等于目标数。
函数应该返回这两个下标值 index1 和 index2，其中 index1 必须小于 index2。
说明:
返回的下标值（index1 和 index2）不是从零开始的。 你可以假设每个输入只对应唯一的答案，而且你不可以重复使用相同的元素。 示例:

示例 1：
输入: numbers = [2, 7, 11, 15], target = 9
输出: [1,2]
解释: 2 与 7 之和等于目标数 9 。因此 index1 = 1, index2 = 2

示例 2：
输入：numbers = [2,3,4], target = 6
输出：[1,3]
解释：2 与 4 之和等于目标数 6 。因此 index1 = 1, index2 = 3 。返回 [1, 3] 

https://leetcode.cn/problems/two-sum-ii-input-array-is-sorted/
*/

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
    let l = 0, r = nums.length - 1

    while (l < r) {
        if (nums[l] + nums[r] === target) {
            return [l + 1, r + 1]
        }
        
        if (nums[l] + nums[r] < target) {
            l++
        } else {
            r--
        }
    }
}



// test case
console.log(twoSum([2, 7, 11, 15], 9))
console.log(twoSum([2, 3, 4], 6))