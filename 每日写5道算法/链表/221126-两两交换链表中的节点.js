/* 
2022/11/26 01:26
给你一个链表，两两交换其中相邻的节点，并返回交换后链表的头节点。你必须在不修改节点内部的值的情况下完成本题（即，只能进行节点交换）。

示例：
https://assets.leetcode.com/uploads/2020/10/03/swap_ex1.jpg
输入：head = [1,2,3,4]
输出：[2,1,4,3]

https://leetcode.cn/problems/swap-nodes-in-pairs/
*/

const swapPairs = head => {
    const dummy = new ListNode(0)
    dummy.next = head
    let pre = dummy, cur = head

    while (cur && cur.next) {
        const next = cur.next
        pre.next = next
        cur.next = next.next
        next.next = cur
        pre = cur
        cur = cur.next
    }

    return dummy.next
}