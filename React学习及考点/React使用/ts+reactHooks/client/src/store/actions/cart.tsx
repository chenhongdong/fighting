import { ILesson } from "@/typings";
import { message } from "antd";
import { StoreDispatch } from "..";
import * as types from '../action-types'

export default {
    addCartItem(lesson: ILesson) {
        return function (dispatch: StoreDispatch) {
            dispatch({
                type: types.ADD_CART_ITEM,
                payload: lesson
            })
            message.info('添加购物车成功')
        }
    },
    changeCartItemCount(id: string, count: number) {
        return {
            type: types.CHANGE_CART_ITEM_COUNT,
            payload: { id, count }
        }
    },
    removeCartItem(id: string) {
        return {
            type: types.REMOVE_CART_ITEM,
            payload: id
        }
    },
    changeCheckedCartItems(keys: string[]) {
        return {
            type: types.CHANGE_CHECKED_CART_ITEMS,
            payload: keys
        }
    },
    clearCartItem() {
        return {
            type: types.CLEAR_CART_ITEM
        }
    },
    settle() {
        return {
            type: types.SETTLE
        }
    }
}