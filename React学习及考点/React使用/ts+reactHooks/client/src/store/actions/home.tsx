import { getSliders, getLessons } from '@/api/home'
import { ILessonData } from '@/typings'
import * as types from '../action-types'
import { StoreDispatch, StoreGetState } from '../index'

export default {
    setCurrentCategory(currentCategory: string) {
        return {
            type: types.SET_CURRENT_CATEGORY,
            payload: currentCategory
        }
    },
    getSliders() {
        return {
            type: types.GET_SLIDERS,
            payload: getSliders()
        }
    },
    // 获取课程列表数据，获取下一页数据并合并到当前列表中
    getLessons() {
        return function (dispatch: StoreDispatch, getState: StoreGetState) {
            (async () => {
                let { currentCategory, lessons: { ismore, offset, limit, loading } } = getState().home
                if (!loading && ismore) {
                    // 先把loading设为true
                    dispatch({
                        type: types.SET_LESSONS_LOADING,
                        payload: true
                    })
                    // 调接口加载数据
                    let res = await getLessons<ILessonData>(currentCategory, offset, limit)
                    // 再把loading设为false
                    dispatch({
                        type: types.SET_LESSONS,
                        payload: res.data
                    })
                }
            })()
        }
    },
    refreshLessons() {
        return function (dispatch: StoreDispatch, getState: StoreGetState) {
            (async () => {
                let { currentCategory, lessons: { limit, loading } } = getState().home
                if (!loading) {
                    // 先把loading设为true
                    dispatch({
                        type: types.SET_LESSONS_LOADING,
                        payload: true
                    })
                    // 调接口加载数据
                    let res = await getLessons<ILessonData>(currentCategory, 0, limit)
                    // 再把loading设为false
                    dispatch({
                        type: types.REFRESH_LESSONS,
                        payload: res.data
                    })
                }
            })()
        }
    }
}