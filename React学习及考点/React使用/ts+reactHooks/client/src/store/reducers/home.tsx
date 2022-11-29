import { AnyAction } from 'redux'
import { IHomeState } from '@/typings/'
import * as types from '@/store/action-types'

const initialState: IHomeState = {
    currentCategory: 'all',
    sliders: []
}

export default function (state: IHomeState = initialState, action: AnyAction): IHomeState {
    switch(action.type) {
        case types.SET_CURRENT_CATEGORY:
            return { ...state, currentCategory: action.payload }
        case types.GET_SLIDERS:
            return { ...state, sliders: action.payload.data }
        default:
            return state
    }
}