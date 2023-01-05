/* 
2022/11/29 23:45
给定一个整型数组，数组元素随机无序的，要求打印出所有元素右边第一个大于该元素的值，如果找不到这样的值就用-1表示

示例1：
输入：[1, 5, 3, 6, 4, 8, 9, 10]
输出：[5, 6, 6, 8, 8, 9, 10, -1]

示例2：
输入：[8, 2, 5, 4, 3, 9, 7, 2, 5]
输出：[9, 5, 9, 9, 9, -1, -1, 5, -1]
*/

const findMaxRight = arr => {
    let l = 0
    const res = []
    const stack = []

    while (l < arr.length) {
        const top = stack[stack.length - 1]
        if(stack.length && arr[l] > arr[top]) {
            res[stack.pop()] = arr[l]
        } else {
            stack.push(l++)
        }
    }

    while (stack.length) {
        res[stack.pop()] = -1
    }

    return res
}



// test case
console.log(findMaxRight([1, 5, 3, 6, 4, 8, 9, 10]))
console.log(findMaxRight([8, 2, 5, 4, 3, 9, 7, 2, 5]))