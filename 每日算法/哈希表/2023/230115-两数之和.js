/* 
2023/01/15 
给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。

你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。

你可以按任意顺序返回答案。

输入：nums = [2,7,11,15], target = 9
输出：[0,1]
解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
*/
const twoSum = (nums, target) => {
    const map = new Map()

    for (let i = 0; i < nums.length; i++) {
        const val = target - nums[i]
        if (map.has(val)) {
            return [map.get(val), i]
        }
        map.set(nums[i], i)
    }
}



// test case
console.log(twoSum([2,7,11,15], 9));