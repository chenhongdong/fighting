import express, { Express, NextFunction, Request, Response } from 'express'   // 启服务
import mongoose from 'mongoose'    // 连接数据库的
import cors from 'cors'    // 处理跨域
import morgan from 'morgan'    // 用来输出访问日志
import helmet from 'helmet'     // 用来进行安全过滤的(csrf,xss等)
import multer from 'multer'     // 上传头像
import 'dotenv/config'      // 读取.env文件然后写入process.env
import path from 'path'
import errorMiddleware from './middlewares/errorMiddleware'
import HttpException from './exception/HttpException'
import * as userController from './controller/user'
import * as sliderController from './controller/slider'
import * as lessonController from './controller/lesson'
import { Slider, Lesson } from './models'


import { slidersData, lessonsData } from './mock'


// 指定头像上传的存储空间
const storage = multer.diskStorage({
    destination: path.join(__dirname, 'public', 'uploads'),
    filename(_req: Request, file: Express.Multer.File, callback) {
        // callback第一个参数是error错误对象
        // 第二个参数是 文件名  时间戳+扩展名  (如：时间戳.png)
        callback(null, Date.now() + path.extname(file.originalname))
    },
})
const upload = multer({ storage })


const app: Express = express()



app.use(cors())   // 使用跨域中间件
app.use(morgan('dev'))     // 使用打印日志中间件
app.use(helmet())   // 使用安全过滤中间件
app.use(express.static(path.join(__dirname, 'public')))    // 静态文件根目录为public
app.use(express.json())     // 类似bodyParser.json()
app.use(express.urlencoded({ extended: true }))


// 设置 根路由
app.get('/', (_req, res, _next) => {
    res.json({
        success: true,
        data: 'hello world'
    })
})

app.post('/user/register', userController.register)
app.post('/user/login', userController.login)
// 客户端把token传回服务器，服务器返回当前用户信息。如果token过期or不合法，则返回null
app.get('/user/validate', userController.validate)
// upload.single 当服务器接收到上传文件请求时，处理单文件上传，字段名叫avatar
// 上传后，会在req上添加个file属性， req.file
app.post('/user/uploadAvatar', upload.single('avatar'), userController.uploadAvatar)

// 轮播图列表路由
app.get('/slider/list', sliderController.list)

// 访问课程列表路由
app.get('/lesson/list', lessonController.list)
app.get('/lesson/:id', lessonController.getLesson)


// 如果说没有匹配到路由，则会创建一个自定义404错误对象并传递给错误处理中间件
app.use((_req: Request, _res: Response, next: NextFunction) => {
    const error: HttpException = new HttpException(404, '尚未为此路径分配路由')
    next(error)
})
// 错误处理中间件
app.use(errorMiddleware)


!(async () => {
    // await mongoose.set('useNewUrlParser', true)
    // await mongoose.set('useUnifiedTopology', true)
    const MONGODB_URL = process.env.MONGODB_URL || 'mongodb://localhost/classroomapp'
    await mongoose.connect(MONGODB_URL)    // 连接mongodb数据库
    // 初始化轮播图数据
    await createInitialSliders()
    // 初始化课程数据
    await createInitialLessons()

    const PORT = process.env.PORT || 8001
    app.listen(PORT, () => {
        console.log(`Running on http://localhost:${PORT}`);
    })
})()


async function createInitialSliders() {
    const sliders = await Slider.find()
    if (sliders.length === 0) {
        const data = slidersData

        await Slider.create(data)
    }
}

async function createInitialLessons() {
    const lessons = await Lesson.find()
    if (lessons.length === 0) {
        const data = lessonsData
        await Lesson.create(data)
    }
}