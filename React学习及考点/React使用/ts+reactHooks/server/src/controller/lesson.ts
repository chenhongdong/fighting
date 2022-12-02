import { Lesson, LessonDocument } from '../models'
import { Request, Response } from 'express'


export const list = async (req: Request, res: Response) => {
    let { category = 'all', offset, limit } = req.query
    console.log('课程', req.query, category, offset, limit)

    // let query = {
    //     category: null
    // }
    // if (category && category !== 'all') {
    //     query.category = category
    // }

    // 查询符合条件的总条数
    let total: number = await Lesson.count({ category })

    const list: LessonDocument[] = await Lesson.find({
        category
    }).sort({order:1}).skip(Number(offset)).limit(Number(limit))
    res.json({
        success: true,
        data: {
            list,
            ismore: total > Number(offset) + Number(limit)
        }
    })
}