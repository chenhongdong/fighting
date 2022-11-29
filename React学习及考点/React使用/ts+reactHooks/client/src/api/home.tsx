import { ISliderData } from '@/typings'
import request from './index'

export function getSliders() {
    return request.get<ISliderData, ISliderData>('/slider/list')
}