/* 
2023/01/15 
给定一个大小为 n 的数组 nums ，返回其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。
你可以假设数组是非空的，并且给定的数组总是存在多数元素。

示例 1：
输入：nums = [3,2,3]
输出：3

示例 2：
输入：nums = [2,2,1,1,1,2,2]
输出：2
*/
const majorityElement = nums => {
    const map = new Map()
    const len = nums.length
    const half = Math.floor(len / 2)

    for (let i = 0; i < len; i++) {
        const item = nums[i]
        if (map.has(item)) {
            map.set(item, map.get(item) + 1)
        } else {
            map.set(item, 1)
        }
    }

    for (let [k, v] of map) {
        if (v >= half) {
            return k
        }
    }
}



// test case
console.log(majorityElement([3,2,3]))
console.log(majorityElement([2,2,1,1,1,2,2]))