import { RouterState } from 'connected-react-router'
import { IHomeState } from './home'

export interface IMineState {

}

// 当前用户信息
export interface User {
    username: string
    email: string
    avatar: string,
    id?: string
}
// 枚举
export enum LOGIN_TYPES {
    UN_VALIDATE = 'UN_VALIDATE',     // 尚未验证登录状态
    LOGINED = 'LOGINED',             // 已经登录
    UN_LOGINED = 'UN_LOGINED'         // 的确没有登录
}

export interface IProfileState {
    loginState: LOGIN_TYPES    // 当前登录状态
    user: User | null    // 当前的登录用户
    error: string | null    // 当前错误信息
}

export interface RootState {
    home: IHomeState
    mine: IMineState
    profile: IProfileState
    router: RouterState
}

