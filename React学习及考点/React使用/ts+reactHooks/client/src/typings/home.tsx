import { ILesson } from './lesson'
import { ISlider } from './slider'

export interface ILessons {
    loading: boolean    // 如果正在加载中的话，loading为true
    list: ILesson[]
    ismore: boolean     // 一开始为true，表示还有更多数据
    offset: number      // 下次取数据，表示的偏移量
    limit: number       // 每页可展示的条数
}

export interface IHomeState {
    currentCategory: string
    sliders: ISlider[]  // 轮播图列表
    lessons: ILessons
}