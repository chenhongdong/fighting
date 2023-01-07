/* 
2022/11/20 14:48
给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
示例1：
image
输入：head = [1,2,3,4,5], n = 2
输出：[1,2,3,5]

示例2：
输入：head = [1,2], n = 1
输出：[1]

https://leetcode.cn/problems/remove-nth-node-from-end-of-list/description/
*/

const removeNthFromEnd = (head, n) => {
    const dummy = new ListNode(null)
    dummy.next = head
    // 快慢指针
    let fast = dummy, slow = dummy
    // 让快指针先移动n个位置，和慢指针保持n个位置的间距
    for (let i = 0; i <= n; i++) {
        fast = fast.next
    }
    // 遍历快指针到底，快慢指针共同向后移动
    while (fast) {
        fast = fast.next
        slow = slow.next
    }
    // 慢指针下一个指针就是待删除的节点了
    const del = slow.next
    slow.next = del.next

    return dummy.next
}