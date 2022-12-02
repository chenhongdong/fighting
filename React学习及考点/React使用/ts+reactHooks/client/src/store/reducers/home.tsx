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
        case types.GET_LESSONS:
            state.lessons.loading = action.payload

            return state
            // return {
            //     ...state,
            //     lessons: {
            //         ...state.lessons,
            //         loading: action.payload
            //     }
            // }
        case types.SET_LESSONS:
            return {
                ...state,
                lessons: {
                    ...state.lessons,
                    loading: false,
                    list: [...state.lessons.list, ...action.payload.list],
                    ismore: action.payload.ismore,
                    offset: state.lessons.offset + action.payload.list.length
                }
            }
        default:
            return state
    }
}