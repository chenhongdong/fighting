import { NextFunction, Request, Response } from "express";
import HttpException from "../exception/HttpException";
import { User, UserDocument } from '../models'
import { validateRegisterInput } from '../utils/validator'
import { UNPROCESSABLE_ENTITY, UNAUTHORIZED } from 'http-status-codes'
import jwt from 'jsonwebtoken'
import { UserPayload } from '../typings/payload'

// 注册
export const register = async (req: Request, res: Response, next: NextFunction) => {
    const { username, password, confirmPassword, email } = req.body
    console.log('第一', username, password, confirmPassword, email);
    try {
        const { valid, errors } = validateRegisterInput(username, password, confirmPassword, email)

        if (!valid) {
            throw new HttpException(UNPROCESSABLE_ENTITY, '用户提交的数据不正确', errors)
        }
        // 查找用户名是否重复
        let oldUser: UserDocument | null = await User.findOne({ username })
        if (oldUser) {
            throw new HttpException(UNPROCESSABLE_ENTITY, '用户名已存在', errors)
        }
        // 创建User文档
        const user: UserDocument = new User({ username, password, confirmPassword, email })

        // 保存插入数据库
        await user.save()

        // 返回数据
        res.json({
            success: true,
            data: user.toJSON()
        })
    } catch (e) {
        next(e)
    }
}

/* 
    优化
    1. 增加用户输入合法性校验
    2. 增加异常处理
*/

// 登录
export const login = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { username, password } = req.body
        let user = await User.login(username, password)

        if (user) {
            // jwt一般都是客户端保存，服务端不用保存，节省服务器
            let access_token = user.getToken()
            res.json({
                success: true,
                data: access_token
            })
        } else {
            throw new HttpException(UNAUTHORIZED, '登录失败')
        }
    } catch (e) {
        next(e)
    }
}


// 验证token
// 客户端会把token放在请求头里发给服务器
export const validate = async (req: Request, res: Response, next: NextFunction) => {
    const authorization = req.headers.authorization

    if (authorization) {
        const access_token = authorization.split(' ')[1]    // token值
        if (access_token) {
            try {
                const payload: UserPayload = jwt.verify(access_token, process.env.JWT_SECRET_KEY || 'classroomapp') as UserPayload
                
                const user: UserDocument | null = await User.findById(payload.id)
                
                if (user) {
                    res.json({
                        success: true,
                        data: user.toJSON()
                    })
                } else {
                    next(new HttpException(UNAUTHORIZED, '用户未找到'))
                }
            } catch (error) {
                next(new HttpException(UNAUTHORIZED, 'token不合法'))
            }
        } else {
            next(new HttpException(UNAUTHORIZED, 'token未提供'))
        }
    } else {
        next(new HttpException(UNAUTHORIZED, 'authorization未提供'))
    }
}


export const uploadAvatar = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { userId } = req.body
        // 协议://域名/uploads/文件名
        const avatar = `${req.protocol}://${req.headers.host}/uploads/${req.file?.filename}`
        
        await User.updateOne({ _id: userId}, { avatar })
        // 处理上传的文件，然后更新数据库中，此用户对应的avatar字段，回真实的图片路径
        
        res.json({
            success: true,
            data: avatar
        })
    } catch (err) {
        next(err)
    }
}