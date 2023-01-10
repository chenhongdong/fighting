/* 
2023/01/10 22:27
给定一个target值，求出数组中所有和为target的所有子序列

示例 ：
输入：arr = [1, 2, 3, 4, 5, 5, 6], target = 9
输出：[ 2, 3, 4, 4, 5 ]
解释：[2,3,4]可以得到和为 9， [4,5]也可以得到和为 9
*/
const subArray = (arr, target) => {
    let l = 0, r = -1, sum = 0
    const res = []

    while (l < arr.length) {
        if (sum < target) {
            sum += arr[++r]
        } else {
            sum -= arr[l++]
        }

        if (sum === target) {
            for (let i = l; i <= r; i++) {
                res.push(arr[i])
            }
        }
    }

    return res
}



// test case
console.log(subArray([1, 2, 3, 4, 5, 5, 6], 9));