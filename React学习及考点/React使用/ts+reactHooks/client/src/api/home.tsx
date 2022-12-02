import { ISliderData } from '@/typings'
import request from './index'

export function getSliders() {
    return request.get<ISliderData, ISliderData>('/slider/list')
}


/**
 * 
 * @param category 要获取哪个分类下面的课程列表，默认是all
 * @param offset 偏移量，第几页
 * @param limit 每页显示多少条
 * @returns 
 */
export function getLessons<T>(category: string = 'all', offset: number, limit: number) {
    return request.get<T, T>(`/lesson/list?category=${category}&offset=${offset}&limit=${limit}`)
}