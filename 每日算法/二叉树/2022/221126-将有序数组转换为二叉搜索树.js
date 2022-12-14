/* 
2022/11/26 01:59
给你一个整数数组 nums ，其中元素已经按 升序 排列，请你将其转换为一棵 高度平衡 二叉搜索树。

高度平衡 二叉树是一棵满足「每个节点的左右两个子树的高度差的绝对值不超过 1 」的二叉树。

示例：
        
            0
           / \
         -3   9
        /    /
      -10   5

输入：nums = [-10,-3,0,5,9]
输出：[0,-3,9,-10,null,5]
解释：[0,-10,5,null,-3,null,9] 也将被视为正确答案

https://leetcode.cn/problems/convert-sorted-array-to-binary-search-tree/description/
*/

const sortedArrayToBST = (nums) => {
    const mid = Math.floor(nums.length / 2)
    const root = new TreeNode(nums[mid])
    root.left = sortedArrayToBST(nums.slice(0, mid))
    root.right = sortedArrayToBST(nums.slice(mid + 1))

    return root
}