import { Lesson, LessonDocument } from '../models'
import { Request, Response } from 'express'


export const list = async (req: Request, res: Response) => {
    let { category = 'all', offset, limit } = req.query
    console.log('课程', req.query, category, offset, limit)

    // 查询符合条件的总条数
    let total: number = await Lesson.count({ category })

    const list: LessonDocument[] = await Lesson.find({
        category
    }).sort({order:1}).skip(Number(offset)).limit(Number(limit))

    setTimeout(() => {
        res.json({
            success: true,
            data: {
                list,
                ismore: total > Number(offset) + Number(limit)
            }
        })
    }, 500)
}


export const getLesson = async (req: Request, res: Response) => {
    const id = req.params.id
    const lesson = await Lesson.findById(id)

    res.json({
        success: true,
        data: lesson
    })
}