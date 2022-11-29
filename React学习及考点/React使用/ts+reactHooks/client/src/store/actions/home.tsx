import { getSliders } from '@/api/home'
import * as types from '../action-types'

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
    }
}