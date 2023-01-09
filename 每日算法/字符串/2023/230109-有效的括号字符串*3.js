/* 
给定一个只包含三种字符的字符串：（ ，） 和 *，写一个函数来检验这个字符串是否为有效字符串。有效字符串具有如下规则：

任何左括号 ( 必须有相应的右括号 )。
任何右括号 ) 必须有相应的左括号 ( 。
左括号 ( 必须在对应的右括号之前 )。
* 可以被视为单个右括号 ) ，或单个左括号 ( ，或一个空字符串。
一个空字符串也被视为有效字符串。

示例 1:
输入: "()"
输出: True

示例 2:
输入: "(*))"
输出: True
*/
const checkValidString3 = s => {
    const stack = []
    let star = 0

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '*') {
            stack.push(s[i])
            star++
        } else {
            const len = stack.length
            if (!len) return false
            let see = false

            for (let i = len - 1; i >= 0; i--) {
                if (stack[i] === '(') {
                    see = true
                    stack.splice(i, 1)
                    break
                }
            }

            if (!see) {
                stack.pop()
                star--
            }
        }
    }

    const len = stack.length
    star = 0
    for (let i = len - 1; i >= 0; i--) {
        if (stack[i] === '(') {
            if (star <= 0) return false
            star--
        } else {
            star++
        }
    }

    return true
}



const checkValidString2 = s => {
    const stack = []
    let star = 0

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '*') {
            stack.push(s[i])
            star++
        } else {
            const len = stack.length
            if (!len) return false
            let see = false
            for (let i = len - 1; i >= 0; i--) {
                if (stack[i] === '(') {
                    see = true
                    stack.splice(i, 1)
                    break
                }
            }

            if (!see) {
                stack.pop()
                star--
            }
        }
    }

    const len = stack.length
    star = 0
    for (let i = len - 1; i >= 0; i--) {
        if (stack[i] === '(') {
            if (star <= 0) return false
            star--
        } else {
            star++
        }
    }

    return true
}




const checkValidString = s => {
    const stack = []
    let star = 0

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '*') {
            stack.push(s[i])
            star++
        } else {
            const len = stack.length
            if (!len) return false
            let see = false

            for (let i = len - 1; i >= 0; i--) {
                if (stack[i] === '(') {
                    see = true
                    stack.splice(i, 1)
                    break
                }
            }

            if (!see) {
                stack.pop()
                star--
            }
        }
    }

    const len = stack.length
    star = 0
    for (let i = len - 1; i >= 0; i--) {
        if (stack[i] === '(') {
            if (star <= 0) return false
            star--
        } else {
            star++
        }
    }
    return true
}



// test case
console.log(checkValidString3('()'));
console.log(checkValidString3('(*))'));
console.log(checkValidString3('(**('));
console.log(checkValidString3('*))'));