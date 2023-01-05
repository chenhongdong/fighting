// 动态规划题目
const dp = [
    '零钱兑换',
    '不同路径',
    '乘积最大子数组',
    '买卖股票的最佳时机',
    '爬楼梯',
    '最长递增子序列',
    '整数拆分',
    '打家劫舍',
    '买卖股票的最佳时机II',
    '接雨水',
    '盛最多水的容器',
    '最大子数组和',
    '最长回文子串'
]
// 二叉树题目
const binaryTree = [
    '平衡二叉树',
    '二叉树层序遍历',
    '二叉树后序遍历',
    '将有序数组转换为二叉搜索树',
    '二叉搜索树的最近公共祖先',
    '路径总和II',
    '求根节点到叶节点数字之和',
    '路径总和III',
    '二叉搜索树的后序遍历序列',
    '二叉树的中序遍历',
    '二叉树的所有路径',
    '二叉树的右视图',
    '路径总和',
    '对称二叉树',
    '二叉树的最大深度'
]
// 哈希表题目
const hashTable = [
    '罗马数字转整数',
    '两个数组的交集II',
    '数组中出现次数超过一半的数字',
    'LRU缓存',
    '两数之和',
    '存在重复元素II',
    '重复的DNA序列'
]
// 回溯题目
const backtrack = [
    '全排列',
    '子集',
    '组合总和',
    '分割回文串',
    '组合'
]
// 链表题目
const listNode = [
    '删除链表的倒数第N个结点',
    '删除排序链表中的重复元素',
    '回文链表',
    '两两交换链表中的节点',
    '反转链表II',
    '链表求和',
    '环形链表II',
    '反转链表',
    '环形链表',
    '合并两个有序链表',
    '删除链表的节点',
    '链表中倒数第k个节点'
]
// 排序题目
const sort = [
    '排序数组',
    '数组中的第K个最大元素',
    '合并区间'
]
// 数组题目
const array = [
    '移除元素',
    '找到所有数组中消失的数字',
    '移动零',
    '加一',
    '螺旋矩阵',
    '整数反转',
    '0～n-1中缺失的数字',
    '下一个更大元素III'
]
// 双指针|二分法题目
const doublePointer = [
    '长度最小的子数组',
    '二分查找',
    '搜索插入位置',
    '三数之和',
    '和为target的所有子序列',
    '合并两个有序数组',
    '旋转数组的最小数字',
    '两数之和II',
    'x的平方根',
    '无重复字符的最长子串'
]
// 贪心题目
const greed = [
    '分发饼干'
]
// 栈题目
const stack = [
    '有效的括号',
    '右侧第一个大于它的数',
    '有效的括号字符串',
    '包含min函数的栈',
    '用栈实现队列'
]
// 字符串题目
const string = [
    '比较版本号',
    '最长公共前缀',
    '字符的最短距离',
    '字符串相加'
]

const allQuesitions = [
    ...dp,
    ...binaryTree,
    ...hashTable,
    ...backtrack,
    ...listNode,
    ...sort,
    ...array,
    ...doublePointer,
    ...greed,
    ...stack,
    ...string
]


export default allQuesitions

// module.exports = allQuesitions