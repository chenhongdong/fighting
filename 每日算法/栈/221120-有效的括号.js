/* 
2022/11/20 15:23
给定一个只包括 '('，')'，'{'，'}'，'\['，']' 的字符串 s ，判断字符串是否有效。
有效字符串需满足：
左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。

示例 1：
输入：s = "()\[]{}"
输出：true

示例 2：
输入：s = "(]"
输出：false

https://leetcode.cn/problems/valid-parentheses/
*/
const isValid = s => {
    const stack = []

    for (let i = 0; i < s.length; i++) {
        const str = s[i]
        if (str === '(' || str === '[' || str === '{') {
            stack.push(str)
        } else {
            if (!stack.length) return false

            const top = stack.pop()
            if (str === ')' && top !== '(') return false
            if (str === ']' && top !== '[') return false
            if (str === '}' && top !== '{') return false
        }
    }

    return stack.length === 0
}