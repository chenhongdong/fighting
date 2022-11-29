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
                    user: action.payload.data,
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
        case types.SET_AVATAR:
            return {
                ...state,
                user: { ...state.user, avatar: action.payload }
            }
        default:
            return state
    }
}