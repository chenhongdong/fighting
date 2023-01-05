/* 
给你一个正整数n ，请你找出符合条件的最小整数，其由重新排列 n 中存在的每位数字组成，并且其值大于 n 。如果不存在这样的正整数，则返回 -1 。

注意 ，返回的整数应当是一个 32 位整数 ，如果存在满足题意的答案，但不是 32 位整数 ，同样返回 -1 。
提示： 1 <= n <= 2^31 - 1

示例 1：
输入：n = 1243
输出：1324

示例 2：
输入：n = 21
输出：-1

https://leetcode.cn/problems/next-greater-element-iii/description/
*/

/**
 * @param {number} n
 * @return {number}
 */
const nextGreaterElement = (n) => {
    let arr = (n + '').split('')
    const len = arr.length
    let i = len - 1
    for (; i >= 0; i--) {
        if (arr[i] < arr[i + 1]) break
    }
 
    if (i < 0) return -1

    for (let j = len - 1; j > i; j--) {
        if (arr[i] < arr[j]) {
            [arr[i], arr[j]] = [arr[j], arr[i]]
            break
        }
    }

    const left = arr.slice(0, i + 1).join('')
    const right = arr.slice(i + 1).reverse().join('')
    const val = left + right - ''

    return val <= Math.pow(2, 31) - 1 ? val : -1
}



// test case
console.log(nextGreaterElement(1243))
console.log(nextGreaterElement(1234))
console.log(nextGreaterElement(21))
console.log(nextGreaterElement(969))