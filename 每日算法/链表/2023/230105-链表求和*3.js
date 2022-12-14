/* 
2023/01/05 18:08
给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。

请你将两个数相加，并以相同形式返回一个表示和的链表。

你可以假设除了数字 0 之外，这两个数都不会以 0 开头。

示例 ：
2   ->   4    ->    3
5   ->   6    ->    4
---------------------
7   ->   0    ->    8
输入：l1 = [2,4,3], l2 = [5,6,4]
输出：[7,0,8]
解释：342 + 465 = 807.
*/
const addTwoNumbers3 = (l1, l2) => {
    let head = null, cur = null, carry = 0

    while (l1 || l2) {
        const x = l1 ? l1.val : 0
        const y = l2 ? l2.val : 0
        const sum = x + y + carry

        if (!head) {
            head = new ListNode(sum % 10)
            cur = head
        } else {
            cur.next = new ListNode(sum % 10)
            cur = cur.next
        }
        carry = Math.floor(sum / 10)
        if (l1) l1 = l1.next
        if (l2) l2 = l2.next
    }

    if (carry) {
        cur.next = new ListNode(carry)
    }

    return head
}



const addTwoNumbers2 = (l1, l2) => {
    let head = null, cur = null, carry = 0

    while (l1 || l2) {
        const x = l1 ? l1.val : 0
        const y = l2 ? l2.val : 0
        const sum = x + y + carry

        if (!head) {
            head = new ListNode(sum % 10)
            cur = head
        } else {
            cur.next = new ListNode(sum % 10)
            cur = cur.next
        }
        carry = Math.floor(sum / 10)
        if (l1) l1 = l1.next
        if (l2) l2 = l2.next
    }

    if (carry) {
        cur.next = new ListNode(carry)
    }
    return head
}



const addTwoNumbers1 = (l1, l2) => {
    let head = null, cur = null, carry = 0

    while (l1 && l2) {
        let x = l1.val ? l1.val : 0
        let y = l2.val ? l2.val : 0
        let sum = x + y + carry

        if (!head) {
            head = new ListNode(sum % 10)
            cur = head
        } else {
            cur.next = new ListNode(sum % 10)
            cur = cur.next
        }

        carry = Math.floor(sum / 10)
        if (l1) {
            l1 = l1.next
        }
        if (l2) {
            l2 = l2.next
        }
    }
    if (carry) {
        cur.next = new ListNode(carry)
    }

    return head
}