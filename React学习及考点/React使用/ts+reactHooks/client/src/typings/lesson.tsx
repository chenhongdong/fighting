import { ILessons } from "./home"


export interface ILesson {
    id: string
    order: number
    title: string
    url: string
    poster: string
    video: string
    price: number
    category: string
}

export interface ILessonData {
    success: boolean
    data: ILessons
}


export interface IGetLessonData {
    success: boolean
    data: ILesson
}