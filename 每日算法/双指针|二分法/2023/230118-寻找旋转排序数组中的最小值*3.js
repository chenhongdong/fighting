/* 
2023/01/18 
把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。
给你一个可能存在 重复 元素值的数组 numbers ，它原来是一个升序排列的数组，并按上述情形进行了一次旋转。请返回旋转数组的最小元素。例如，数组 [3,4,5,1,2] 为 [1,2,3,4,5] 的一次旋转，该数组的最小值为 1。  
注意，数组 [a[0], a[1], a[2], ..., a[n-1]] 旋转一次 的结果为数组 [a[n-1], a[0], a[1], a[2], ..., a[n-2]] 。

示例：
输入：nums = [3,4,5,1,2]
输出：1
*/
const findMin = nums => {
    let l = 0, r = nums.length - 1
    let mid = 0

    while (nums[l] >= nums[r]) {
        if (r - l === 1) {
            mid = r
            break
        }
        mid = Math.floor((l + r) / 2)
        if (nums[l] <= nums[mid]) {
            l++
        } else if (nums[mid] <= nums[r]) {
            r--
        }
    }

    return nums[mid]
}



const findMin2 = nums => {
    let l = 0, r = nums.length - 1
    let mid = 0

    while (nums[l] >= nums[r]) {
        if (r - l === 1) {
            mid = r
            break
        }
        mid = Math.floor((l + r) / 2)

        if (nums[l] <= nums[mid]) {
            l++
        } else if (nums[mid] <= nums[r]) {
            r--
        }
    }

    return nums[mid]
}



const findMin3 = nums => {
    const len = nums.length
    let l = 0, r = len - 1
    let mid = 0

    while (nums[l] >= nums[r]) {
        if (r - l === 1) {
            mid = r
            break
        }
        mid = Math.floor((l + r) / 2)

        if (nums[l] <= nums[mid]) {
            l++
        } else if (nums[mid] <= nums[r]) {
            r--
        }
    }

    return nums[mid]
}



// test case
console.log(findMin([3,4,5,1,2]))
console.log(findMin([6,7,8,9,10,3,4,5]))