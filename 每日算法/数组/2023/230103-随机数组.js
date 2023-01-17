/* 
2023/1/3 14:45
将数组元素进行随机打乱
*/
const randomArr = (arr) => {
    const len = arr.length

    for (let i = 0; i < len; i++) {
        const index = Math.floor(Math.random() * len)
        const tmp = arr[index]
        arr[index] = arr[i]
        arr[i] = tmp
    }

    return arr
}



// test case
// const allQuesitions = require('../questions')

// console.log(randomArr(allQuesitions))   // 每次选取前三道随机的题目来做

export default randomArr