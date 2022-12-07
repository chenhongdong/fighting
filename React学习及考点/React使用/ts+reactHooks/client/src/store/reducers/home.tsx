import { AnyAction } from 'redux'
import { IHomeState } from '@/typings/'
import * as types from '@/store/action-types'

const initialState: IHomeState = {
    currentCategory: 'all',
    sliders: [],
    lessons: {
        loading: false,
        list: [],
        ismore: true,
        offset: 0,
        limit: 5
    }
}

export default function (state: IHomeState = initialState, action: AnyAction): IHomeState {
    switch (action.type) {
        case types.SET_CURRENT_CATEGORY:
            return { ...state, currentCategory: action.payload }
        case types.GET_SLIDERS:
            if (action.error) {
                console.error(action.payload)
                return state
            } else {
                return { ...state, sliders: action.payload.data }
            }
        case types.SET_LESSONS_LOADING:
            state.lessons.loading = action.payload
            return state
        case types.SET_LESSONS:
            // 通过immer可以直接这样写，也不会修改老的值
            state.lessons.loading = false
            state.lessons.list = [...state.lessons.list, ...action.payload.list]
            state.lessons.ismore = action.payload.ismore
            state.lessons.offset = state.lessons.offset + action.payload.list.length
            return state
        case types.REFRESH_LESSONS:
            state.lessons.loading = false
            state.lessons.list = action.payload.list
            state.lessons.ismore = action.payload.ismore
            state.lessons.offset = action.payload.list.length
            return state
        default:
            return state
    }
}