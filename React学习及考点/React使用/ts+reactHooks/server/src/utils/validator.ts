import validator from "validator";
import { UserDocument } from '../models'


// Partial会让接口里的字段都变为可选
export interface IRegisterInput extends Partial<UserDocument> {
    confirmPassword?: string
}

export interface IRegisterInputResult {
    valid: boolean
    errors: IRegisterInput
}

// 校验注册用户提交数据合法性
export const validateRegisterInput = (username: string, password: string, confirmPassword: string, email: string): IRegisterInputResult => {
    let errors: IRegisterInput = {}
    if (!username || !username.length) {
        errors.username = '用户名不能为空'
    }
    if (!password || !password.length) {
        errors.password = '密码不能为空'
    }
    if (!confirmPassword || !confirmPassword.length) {
        errors.confirmPassword = '确认密码不能为空'
    }
    if (password !== confirmPassword) {
        errors.confirmPassword = '密码和确认密码不相同'
    }
    if (!email || !email.length) {
        errors.email = '邮箱不能为空'
    }
    if (!validator.isEmail(email)) {
        errors.email = '邮箱格式不正确'
    }

    return {
        valid: Object.keys(errors).length == 0,
        errors
    }
}