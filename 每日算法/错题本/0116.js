/* 
1. 反转链表II
给你单链表的头指针 head 和两个整数left 和 right ，其中left <= right 。请你反转从位置 left 到位置 right 的链表节点，返回 反转后的链表 。

示例1：
输入：head = [1,2,3,4,5], left = 2, right = 4
输出：[1,4,3,2,5]

示例2：
输入：head = [5], left = 1, right = 1
输出：[5]
*/
const reverseBetween = (head, left, right) => {
    const dummy = new ListNode(0)
    dummy.next = head
    let pre = dummy
    for (let i = 0; i < left - 1; i++) {
        pre = pre.next
    }
    let cur = pre.next
    for (let i = 0; i < right - left; i++) {
        const next = cur.next
        cur.next = next.next
        next.next = pre.next
        pre.nexg = next
    }
    return dummy.next
}