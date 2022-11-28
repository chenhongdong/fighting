import { User } from "./state"

// 注册接口返回的响应体类型
export interface IRegisterData {
    success: boolean
    data: User
}


export interface ILoginData {
    success: boolean
    data: string
}