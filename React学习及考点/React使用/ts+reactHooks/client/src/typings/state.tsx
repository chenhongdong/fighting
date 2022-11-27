import { RouterState } from 'connected-react-router'

export interface IHomeState {
    currentCategory: string
}

export interface IMineState {

}

// 当前用户信息
interface User {
    username: string
    email: string
    avatar: string
}
// 枚举
export enum LOGIN_TYPES {
    UN_VALIDATE = 'UN_VALIDATE',     // 尚未验证登录状态
    LOGINED = 'LOGINED',             // 已经登录
    UN_LOGINED = 'UN_LOGINED'         // 的确没有登录
}

export interface IProfileState {
    loginState: LOGIN_TYPES
    user: User | null
    error: string | null
}

export interface RootState {
    home: IHomeState
    mine: IMineState
    profile: IProfileState
    router: RouterState
}

