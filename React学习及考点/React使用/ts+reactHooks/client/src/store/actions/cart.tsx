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
    }
}