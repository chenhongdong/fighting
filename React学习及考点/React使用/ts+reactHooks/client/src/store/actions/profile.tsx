import * as types from '../action-types'
import { login, register, validate } from '@/api/profile'
import { push } from 'connected-react-router'
import { ILoginPayload, IRegisterPayload } from '@/typings/profile'
import { message } from 'antd'
import { ILoginData, IRegisterData } from '@/typings/response'

export default {
    validate() {
        return {
            type: types.VALIDATE,
            payload: validate()
        }
    },
    logout() {
        return function(dispatch: any) {
            sessionStorage.removeItem('access_token')
            dispatch(push('/login'))
        }
    },
    register(values: IRegisterPayload) {
        return function(dispatch: any, getState: any) {
            (async function() {
                try {
                    const res: IRegisterData = await register<IRegisterData>(values)

                    if (res.success) {
                        dispatch(push('/login'))
                    } else {
                        message.error('注册失败了！！！')
                    }
                } catch (err) {
                    message.error('注册失败')
                }
            })()
        }
    },
    login(values: ILoginPayload) {
        return function(dispatch: any) {
            (async function() {
                try {
                    const res: ILoginData = await login<ILoginData>(values)

                    if (res.success) {
                        // 把token值写入sesstionStorage里
                        sessionStorage.setItem('access_token', res.data)
                        // 跳到profile页面会获取token调用验证接口
                        dispatch(push('/profile'))
                    } else {
                        message.error('登录失败，请重试')
                    }
                    
                } catch (err) {
                    message.error('登录失败')
                }
            })()
        }
    }
}