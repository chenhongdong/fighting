import { CartState, ICartItem } from "@/typings";
import { AnyAction } from "redux";
import * as types from '../action-types'

let initialState: CartState = []

export default function(state: CartState = initialState, action: AnyAction): CartState {
    switch (action.type) {
        // 加购 如果购物车中有该商品则数量加1，没有的话就将商品加到购物车中
        case types.ADD_CART_ITEM:  // {type:ADD_CART_ITEM, payload: lesson}
            let oldLesson = state.find(item => item.lesson.id === action.payload.id)
            if (oldLesson) {
                oldLesson.count += 1
            } else {
                state.push({
                    count: 1,
                    checked: false,
                    lesson: action.payload
                })
            }
            return state
        
        // 减购
        case types.REMOVE_CART_ITEM:    // {type:REMOVE_CART_ITEM, payload: id}
            let delIndex = state.findIndex(item => item.lesson.id === action.payload)
            if (delIndex !== -1) {
                state.splice(delIndex, 1)
            }
            return state

        // 清空购物车
        case types.CLEAR_CART_ITEM:
            return []

        // 修改商品数量
        case types.CHANGE_CART_ITEM_COUNT:  // {type:CHANGE_CART_ITEM_COUNT, payload: {id, count}}
            let changeIndex = state.findIndex(item => item.lesson.id === action.payload.id)
            if (changeIndex !== -1) {
                state[changeIndex].count = action.payload.count
            }
            
            return state
        // 修改选中的商品
        case types.CHANGE_CHECKED_CART_ITEMS:  // {type:CHANGE_CHECKED_CART_ITEMS, payload: [1,3,5,7]}
            let checkedIds = action.payload
            return state.map((item: ICartItem) => {
                if (checkedIds.includes(item.lesson.id)) {
                    item.checked = true
                } else {
                    item.checked = false
                }
                return item
            })
        // 结算，把选中的商品添加到订单，然后从购物车中删除
        case types.SETTLE:
            return state.filter((item: ICartItem) => !item.checked)
        default:
            return state
    }
}