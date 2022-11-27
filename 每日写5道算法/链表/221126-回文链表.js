/* 
2022/11/26 01:50
给你一个单链表的头节点 head ，请你判断该链表是否为回文链表。如果是，返回 true ；否则，返回 false 。

示例1：
输入：head = [1,2,2,1]
输出：true

示例2：
输入：head = [1,2]
输出：false

https://leetcode.cn/problems/palindrome-linked-list/
*/

const isPalindrome = head => {
    let fast = head, slow = head

    while (fast) {
        fast = fast.next.next
        slow = slow.next
    }
    if (fast) {
        slow = slow.next
    }
    slow = reverse(slow)
    fast = head

    while (slow) {
        if (slow.val !== fast.val) return false
        slow = slow.next
        fast = fast.next
    }

    return true
}


function reverse(head) {
    let pre = null, cur = head
    while (cur) {
        const next = cur.next
        cur.next = pre
        pre = cur
        cur = next
    }
    return pre
}