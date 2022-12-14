/* 
给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
请必须使用时间复杂度为 O(log n) 的算法。

示例 1:
输入: nums = [1,3,5,6], target = 5
输出: 2
示例 2:
输入: nums = [1,3,5,6], target = 2
输出: 1

https://leetcode.cn/problems/search-insert-position/
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = (nums, target) => {
    let l = 0, r = nums.length

    while (l < r) {
        let mid = Math.floor((l + r) / 2)

        if (nums[mid] >= target) {
            r = mid
        } else {
            l = mid + 1
        }
    }

    return r
}



// test case
console.log(searchInsert([1,3,5,6], 2));
console.log(searchInsert([1,3,5,6], 5));