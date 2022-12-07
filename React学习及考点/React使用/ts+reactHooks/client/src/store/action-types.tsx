
// 设置头部课程分类
export const SET_CURRENT_CATEGORY = 'SET_CURRENT_CATEGORY'

// 验证登录
export const VALIDATE = 'VALIDATE'
// 退出登录
export const LOGOUT = 'LOGOUT'
// 设置头像
export const SET_AVATAR = 'SET_AVATAR'

// 获取轮播图列表
export const GET_SLIDERS = 'GET_SLIDERS'

// 设置课程列表数据到仓库中
export const SET_LESSONS = 'SET_LESSONS'
// 派发一个函数，函数里调用接口返回数据
export const GET_LESSONS = 'GET_LESSONS'
// 把课程分状态的loading设为给定的值
export const SET_LESSONS_LOADING = 'SET_LESSONS_LOADING'
// 下拉刷新
export const REFRESH_LESSONS = 'REFRESH_LESSONS'


// 加购
export const ADD_CART_ITEM = 'ADD_CART_ITEM'
// 减购
export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM'
// 清空购物车
export const CLEAR_CART_ITEM = 'CLEAR_CART_ITEM'
// 修改商品数量
export const CHANGE_CART_ITEM_COUNT = 'CHANGE_CART_ITEM_COUNT'
// 修改选中的商品
export const CHANGE_CHECKED_CART_ITEMS = 'CHANGE_CHECKED_CART_ITEMS'
// 结算，把选中的商品添加到订单，然后从购物车中删除
export const SETTLE = 'SETTLE'