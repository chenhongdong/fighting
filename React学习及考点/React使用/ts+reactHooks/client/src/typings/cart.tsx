import { ILesson } from "./lesson";

// 购物车里其中一项的类型
export interface ICartItem {
    lesson: ILesson
    count: number
    checked: boolean    // 是否被选中
}

// 购物车的类型
export type CartState = ICartItem[]