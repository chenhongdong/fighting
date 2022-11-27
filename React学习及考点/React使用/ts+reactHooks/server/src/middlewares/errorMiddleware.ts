import { Request, Response } from 'express'
import HttpException from '../exception/HttpException'
import { INTERNAL_SERVER_ERROR } from 'http-status-codes'
// 中间件就是个函数
// 正常中间件的参数只有(req, res, next)
// 只有错误处理中间件才有4个参数且第一个参数为err，(err,req,res,next)

const errorMiddleware = (err: HttpException, _req: Request, res: Response) => {
    let result: any = {
        success: false,
        message: err.message
    }
    if (err.errors && Object.keys(err.errors).length) {
        result.errors = err.errors
    }
    res.status(err.status || INTERNAL_SERVER_ERROR).json(result)
}

export default errorMiddleware