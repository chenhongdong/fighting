const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve(1)
        reject(1)
    }, 1000)
})
const p2 = new Promise((resolve, reject) => {
    reject(2)
})
const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(3)
    })
})

// Promise.any方法有点像race，只要有一个是 fulfilled就直接返回该值
// 当所有都是 rejected时候才返回所有错误的数组

/**
 * param [Array] 多个Promise实例的数组
 */
Promise.any([p1,p3,p2]).then(value => {
    console.log('any ok', value)
}, (reason) => {
    console.log('any fail', reason)
})