import { AnyAction } from 'redux'
import { IProfileState, LOGIN_TYPES } from '@/typings/state'
import * as types from '../action-types'

// 初始值
const initialState: IProfileState = {
    loginState: LOGIN_TYPES.UN_VALIDATE,
    user: null,
    error: null
}

export default function (state: IProfileState = initialState, action: AnyAction): IProfileState {
    switch (action.type) {
        case types.VALIDATE:
            if (action.payload.success) {
                return {
                    loginState: LOGIN_TYPES.LOGINED,
                    user: action.payload,
                    error: null
                }
            } else {
                return {
                    loginState: LOGIN_TYPES.UN_LOGINED,
                    user: null,
                    error: action.payload
                }
            }
        case types.LOGOUT:
            return {
                loginState: LOGIN_TYPES.UN_LOGINED,
                user: null,
                error: null
            }
        default:
            return state
    }
}