/* 
2023/01/11 23:23
给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。

示例:
输入: 1->2->3->4->5->NULL
输出: 5->4->3->2->1->NULL
*/
const reverseList = head => {
    let pre = null, cur = head

    while (cur) {
        const next = cur.next
        cur.next = pre
        pre = cur
        cur = next
    }
    return pre
}