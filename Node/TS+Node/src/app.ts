import express, { Express, NextFunction, Request, Response } from 'express'
import indexRouter from './routes'
import usersRouter from './routes/users'
import createHttpError from 'http-errors'
import { StatusCodes } from 'http-status-codes'
// import logger from 'morgan'


const app: Express = express()

// 解析请求体
app.use(express.json()) // 解析JSON格式的请求体
app.use(express.urlencoded({ extended: true })) // 解析表单格式的请求

// 打印请求日志
// app.use(logger('dev'))

// 路由
app.use('/', indexRouter)
app.use('/users/', usersRouter)

// 错误处理
app.use((_req: Request, _res: Response, next: NextFunction) => {
    next(createHttpError(StatusCodes.NOT_FOUND))
})
app.use((error: any, _req: Request, res: Response, _next: NextFunction) => {
    res.status(error.status || StatusCodes.INTERNAL_SERVER_ERROR)
    res.json({
        errno: 500,
        error
    })
})

export default app