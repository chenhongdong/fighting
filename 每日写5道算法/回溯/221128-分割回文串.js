/* 
2022/11/28 23:41
给你一个字符串 s，请你将 s 分割成一些子串，使每个子串都是 回文串 。返回 s 所有可能的分割方案。
回文串 是正着读和反着读都一样的字符串。

示例 ：
输入：s = "aab"
输出：[["a","a","b"],["aa","b"]]

https://leetcode.cn/problems/palindrome-partitioning/
*/

/**
 * @param {string} s
 * @return {string[][]}
 */
const partition = s => {
    const res = []

    backtrack(s, 0, [])

    function backtrack(s, index, path) {
        if (s.length === index) {
            res.push([...path])
            return
        }

        for (let i = index + 1; i <= s.length; i++) {
            const str = s.slice(index, i)

            if (isPalindrome(str)) {
                path.push(str)
                backtrack(s, i, path)
                path.pop()
            }
        }
    }


    function isPalindrome(str) {
        let l = 0, r = str.length - 1
        while (l < r) {
            if (str[l] !== str[r]) return false
            l++
            r--
        }
        return true
    }

    return res
}



// test case
console.log(partition('aab'))