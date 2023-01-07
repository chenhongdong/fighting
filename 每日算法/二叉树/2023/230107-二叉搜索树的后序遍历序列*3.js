/* 
2023/01/07 
输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历结果。如果是则返回 true，否则返回 false。假设输入的数组的任意两个数字都互不相同。

参考以下这颗二叉搜索树：
     5
    / \
   2   6
  / \
 1   3

示例 1：
输入: [1,6,3,2,5]
输出: false

示例 2：
输入: [1,3,2,6,5]
输出: true


https://leetcode.cn/problems/er-cha-sou-suo-shu-de-hou-xu-bian-li-xu-lie-lcof/
*/
const verifyPostorder3 = arr => {
    const len = arr.length
    const root = arr[len - 1]
    let i = 0
    for (; i < len - 1; i++) {
        if (arr[i] > root) break
    }
    for (let j = i; j < len - 1; j++) {
        if (arr[j] < root) return false
    }
    let iLeft = true
    if (i > 0) {
        iLeft = verifyPostorder(arr.slice(0, i))
    }
    if (i < len - 1) {
        iRight = verifyPostorder(arr.slice(i , len - 1))
    }

    return iLeft && iRight
}



const verifyPostorder2 = arr => {
    const len = arr.length
    const root = arr[len - 1]
    let i = 0
    for (; i < len - 1; i++) {
        if (arr[i] > root) break
    }
    for (let j = i; j < len - 1; j++) {
        if (arr[j] < root) return false
    }
    let iLeft = true
    if (i > 0) {
        iLeft = verifyPostorder(arr.slice(0, i))
    }
    let iRight = true
    if (i < len - 1) {
        iRight = verifyPostorder(arr.slice(i, len - 1))
    }
    return iLeft && iRight
}



const verifyPostorder = arr => {
    const len = arr.length
    const root = arr[len - 1]
    let i = 0

    for (; i < len - 1; i++) {
        if (arr[i] > root) break
    }
    for (let j = i; j < len - 1; j++) {
        if (arr[j] < root) return false
    }
    let iLeft = true
    if (i > 0) {
        iLeft = verifyPostorder(arr.slice(0, i))
    }
    let iRight = true
    if (i < len - 1) {
        iRight = verifyPostorder(arr.slice(i, len - 1))
    }

    return iLeft && iRight
}



// test case
console.log(verifyPostorder([1,6,3,2,5]))
console.log(verifyPostorder([1,3,2,6,5]))