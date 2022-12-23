import express, { NextFunction, Request, Response } from 'express'
import createHttpError from 'http-errors'
import { StatusCodes } from 'http-status-codes'
import { User } from '../model'
const router = express.Router()

// 获取所有用户 GET /users
router.get('/', async (_req: Request, res: Response) => {
    // 查询所有的用户信息
    const users = await User.findAll()
    res.json({
        errno: 0,
        data: users
    })
})

// 获取某个用户 GET /users/:id
router.get('/:id', async (req: Request, res: Response) => {
    const id = req.params.id
    const user = await User.findByPk(id)

    res.json({
        errno: 0,
        data: user
    })
})

// 添加用户 POST /users
router.post('/', async (req: Request, res: Response) => {
    const user = req.body
    const newUser = await User.create(user) // insert语句插到数据库

    res.json({
        errno: 0,
        data: newUser
    })
})

// 更新用户 PUT /users/:id
router.put('/:id', async (req: Request, res: Response) => {
    const id = req.params.id
    const updateInfo = req.body
    let user = await User.findByPk(id)
    const newUser = await user?.update(updateInfo)  // update users set where id=?
    res.json({
        errno: 0,
        data: newUser
    })
})

// 删除用户 DELETE /users/:id
router.delete('/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id
        const user= await User.findByPk(id)
        if (!user) {
            return next(createHttpError(StatusCodes.INTERNAL_SERVER_ERROR))
        }

        const newUser = await user?.destroy()   // delete from users where id
        
        res.json({
            errno: 0,
            data: newUser
        })
    } catch (err) {
        next(err)
    }
})

export default router