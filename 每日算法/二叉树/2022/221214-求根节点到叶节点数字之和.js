/* 
2022/12/14
给你一个二叉树的根节点 root ，树中每个节点都存放有一个 0 到 9 之间的数字。
每条从根节点到叶节点的路径都代表一个数字：

例如，从根节点到叶节点的路径 1 -> 2 -> 3 表示数字 123 。
计算从根节点到叶节点生成的 所有数字之和 。

叶节点 是指没有子节点的节点。

示例：

		1
	   / \
	  2   3

输入：root = [1,2,3]
输出：25
解释：
从根到叶子节点路径 1->2 代表数字 12
从根到叶子节点路径 1->3 代表数字 13
因此，数字总和 = 12 + 13 = 25

https://leetcode.cn/problems/sum-root-to-leaf-numbers/
*/

const sumNumbers = root => {
	let num = 0
	dfs(root, '')

	function dfs(root, str) {
		if (!root) return 0
		str += root.val
		if (!root.left && !root.right) {
			num += Number(str)
			return
		}
		dfs(root.left, str)
		dfs(root.right, str)
	}

	return num
}