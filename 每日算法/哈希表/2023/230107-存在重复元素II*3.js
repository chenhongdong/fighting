/* 
2023/01/07 21:11
给你一个整数数组nums 和一个整数k ，判断数组中是否存在两个 不同的索引i和j ，满足 nums[i] == nums[j] 且 abs(i - j) <= k 。如果存在，返回 true ；否则，返回 false 。

示例 1：
输入：nums = [1,2,3,1], k = 3
输出：true

示例 2：
输入：nums = [1,2,3,1,2,3], k = 2
输出：false
*/
const containsNearbyDuplicate3 = (nums, k) => {
    const map = new Map()

    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            if (Math.abs(i - map.get(nums[i])) <= k) {
                return true
            }
        }
        map.set(nums[i], i)
    }

    return false
}




const containsNearbyDuplicate2 = (nums, k) => {
    const map = new Map()

    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            if (Math.abs(i - map.get(nums[i])) <= k) {
                return true
            }
        }
        map.set(nums[i], i)
    }

    return false
}



const containsNearbyDuplicate = (nums, k) => {
    const map = new Map()

    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            if (Math.abs(map.get(nums[i]) - i) <= k) {
                return true
            }
        }

        map.set(nums[i], i)
    }

    return false
}



// test case
console.log(containsNearbyDuplicate([1,2,3,1], 3));
console.log(containsNearbyDuplicate([1,2,3,1,2,3], 2));