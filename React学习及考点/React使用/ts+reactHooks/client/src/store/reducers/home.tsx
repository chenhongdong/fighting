import { AnyAction } from 'redux'
import { IHomeState } from '@/typings/state'
import * as types from '@/store/action-types'

const initialState: IHomeState = {
    currentCategory: 'all'
}

export default function (state: IHomeState = initialState, action: AnyAction): IHomeState {
    switch(action.type) {
        case types.SET_CURRENT_CATEGORY:
            return { ...state, currentCategory: action.payload }
        default:
            return state
    }
}