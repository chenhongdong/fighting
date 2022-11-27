import * as types from '../action-types'
import { validate } from '@/api/profile'
import { push } from 'connected-react-router'

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
    }
}