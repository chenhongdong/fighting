/* 
2022/11/28 23:33
给你一个整数数组 nums，请你将该数组升序排列，请写出快速排序。

示例 1：
输入：nums = [5,2,3,1]
输出：[1,2,3,5]

示例 2：
输入：nums = [5,1,1,2,0,0]
输出：[0,0,1,1,2,5]

https://leetcode.cn/problems/sort-an-array/
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortArray = nums => {
    quickSort(nums, 0, nums.length - 1)
    return nums
}

function quickSort(nums, l, r) {
    if (l >= r) return

    const p = partition(nums, l, r)
    quickSort(nums, l, p - 1)
    quickSort(nums, p + 1, r)
}

function partition(nums, l, r) {
    const v = nums[l]
    let j = l
    
    for (let i = j + 1; i <= r; i++) {
        if (nums[i] < v) {
            swap(nums, i, j + 1)
            j++
        }
    }

    swap(nums, j, l)

    return j
}

function swap(arr, i, j) {
    const tmp = arr[i]
    arr[i] = arr[j]
    arr[j] = tmp
}



// test case
console.log(sortArray([5,2,3,1]))
console.log(sortArray([5,1,1,2,0,0]))