/* 
编写一个函数来查找字符串数组中的最长公共前缀。
如果不存在公共前缀，返回空字符串""。

示例：
输入：strs = ["flower","flow","flight"]
输出："fl"

https://leetcode.cn/problems/longest-common-prefix/
*/

/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = (strs) => {
    const len = strs.length
    const wordLen = strs[0].length

    for (let i = 0; i < wordLen; i++) {
        for (let j = 1; j < len; j++) {
            if (strs[0][i] !== strs[j][i]) {
                return strs[0].slice(0, i)
            }
        }
    }

    return strs[0]
}



// test case
console.log(longestCommonPrefix(["flower","flow","flight"]))
console.log(longestCommonPrefix(["dog","racecar","car"]))