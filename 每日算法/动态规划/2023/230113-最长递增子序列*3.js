/* 
2023/01/13 10:01
给你一个整数数组 nums ，找到其中最长严格递增子序列的长度。
子序列 是由数组派生而来的序列，删除（或不删除）数组中的元素而不改变其余元素的顺序。例如，[3,6,2,7] 是数组 [0,3,1,6,2,2,7] 的子序列。
 
示例 ：
输入：nums = [10,9,2,5,3,7,101,18]
输出：4
解释：最长递增子序列是 [2,3,7,101]，因此长度为 4 。
*/
const lengthOfLIS = nums => {
    const len = nums.length
    const memo = Array(len).fill(1)
    for (let i = 0; i < len;i++) {
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                memo[i] = Math.max(memo[i], memo[j] + 1)
            }
        }
    }
    return Math.max(...memo)
}



const lengthOfLIS2 = nums => {
    const len = nums.length
    const memo = Array(len).fill(1)
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                memo[i] = Math.max(memo[i], memo[j] + 1)
            }
        }
    }
    return Math.max(...memo)
}



const lengthOfLIS3 = nums => {
    const len = nums.length
    const memo = Array(len).fill(1)

    for (let i = 1; i < len; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                memo[i] = Math.max(memo[i], memo[j] + 1)
            }
        }
    }

    return Math.max(...memo)
}



// test case
console.log(lengthOfLIS([10,9,2,5,3,7,101,18]));