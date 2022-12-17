/* 
2022/11/30 
给定一个含有 n 个正整数的数组和一个正整数 target 。
找出该数组中满足其和 ≥ target 的长度最小的 连续子数组 [numsl, numsl+1, ..., numsr-1, numsr] ，并返回其长度。如果不存在符合条件的子数组，返回 0 。

示例 1：
输入：target = 7, nums = [2,3,1,2,4,3]
输出：2
解释：子数组 [4,3] 是该条件下的长度最小的子数组。

示例 2：
输入：target = 4, nums = [1,4,4]
输出：1

示例 3：
输入：target = 11, nums = [1,1,1,1,1,1,1,1]
输出：0

https://leetcode.cn/problems/minimum-size-subarray-sum/description/
*/

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
const minSubArrayLen = (target, nums) => {
    // 利用滑动窗口的思路
    let l = 0, r = -1
    const len = nums.length
    // 长度最小的子数组个数，取一个超大的值
    let min = len + 1
    // 计算总和
    let sum = 0
    // 遍历整个数组
    while (l < len) {
        // 如果sum还小于目标值
        if (sum < target) {
            // 就让右指针向后移动，sum加上其所对应的数值
            sum += nums[++r]
        } else {
            // 否则就让左指针l向右移动，sum减去对应的值
            sum -= nums[l++]
        }
        // 直到sum大于等于目标值的时候，才开始去比较长度最小的子数组个数
        if (sum >= target) {
            // r - l + 1为滑动窗口计算出的符合目标值的范围
            min = Math.min(min, r - l + 1)
        }
    }
    // 如果min还等于初始值，就表示没找到满足的条件，返回0
    if (min === len + 1) return 0
    // 返回长度最小子数组的个数
    return min
}


