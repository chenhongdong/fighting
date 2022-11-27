import mongoose, { Schema, Model, Document } from "mongoose"
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { UserPayload } from "../typings/payload"

export interface UserDocument extends Document {
    username: string
    password: string
    avatar: string
    email: string
    getToken: () => string
    _doc: UserDocument
}

const UserSchema: Schema<UserDocument> = new Schema({
    username: {
        type: String,
        required: [true, '用户名不能为空'],
        minlength: [6, '最小长度不能小于6位'],
        maxlength: [12, '最大长度不能大于12位']
    },
    password: String,
    avatar: String,
    email: {
        type: String,
        // validate: {
        //     validator: validator.isEmail
        // },
        trim: true      // 去除首尾空格
    }
}, { 
    timestamps: true,  // 使用时间戳，会自动添加两个字段createAt和updateAt
    toJSON: {
        transform: function(_doc: any, res: any) {
            res.id = res._id
            // 删除不想暴露返回的字段
            delete res._id
            delete res.__v
            delete res.password
            delete res.createdAt
            delete res.updatedAt
            return res
        }
    }
})

// 在每次保存文档之前执行操作，处理密码加密
UserSchema.pre<UserDocument>('save', async function (next: any) {
    // 优化，密码没有改变就直接next，不用重新修改密码
    if (!this.isModified('password')) {
        return next()
    }
    try {
        this.password = await bcryptjs.hash(this.password, 10)
        next()
    } catch (error) {
        next(error)
    }
})


// 给 User这个模型，扩展一个login方法，用来检测用户名和密码是否正确
UserSchema.static('login', async function (this: any, username: string, password: string): Promise<UserDocument | null> {
    const user: UserDocument | null = await this.model('User').findOne({ username })

    if (user) {
        // 判断用户输入的密码和数据库里存的密码是否能匹配
        const matched = await bcryptjs.compare(password, user.password)
        return matched ? user : null
    } else {
        return null
    }
})

interface UserModel<T extends Document> extends Model<T> {
    login: (username: string, password: string) => UserDocument | null
}

// 给User模型的实例，扩展getToken方法
UserSchema.methods.getToken = function (this: UserDocument): string {
    let payload: UserPayload = { id: this._id }    // 在jwt token里存放的数据

    return jwt.sign(payload, process.env.JWT_SECRET_KEY || 'classroomapp', { expiresIn: '1h' })
}

export const User: UserModel<UserDocument> = mongoose.model<UserDocument, UserModel<UserDocument>>('User', UserSchema)

