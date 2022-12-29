import { createAction } from "./"

/**
 * 
 * @param {*} typePrefix 动作类型前缀
 * @param {*} payloadCreator 函数，接收参数并返回一个数据请求的promise
 * @returns 
 */
function createAsyncThunk(typePrefix, payloadCreator) {
    // todos/list/pending
    let pending = createAction(typePrefix + '/pending', payload => ({ payload}))
    // todos/list/fulfilled
    let fulfilled = createAction(typePrefix + '/fulfilled', payload => ({ payload }))
    // todos/list/rejected
    let rejected = createAction(typePrefix + '/rejected', error => ({ error }))


    function actionCreator(args) {
        // thunk中间件，负责执行此函数
        return function(dispatch, getState) {
            dispatch(pending())
            let abort
            const abortedPromise = new Promise((resolve, reject) => {
                abort = () => reject({ message: '任务已经取消' })
            })

            let promise = payloadCreator(args)
            // 正确请求的promise和取消请求的promise通过race去比较
            Promise.race([promise, abortedPromise]).then(value => {
                return dispatch(fulfilled(value))
            }, err => {
                return dispatch(rejected(err))
            })
            return Object.assign(promise, { abort })
        }
    }

    return Object.assign(actionCreator, {
        pending,
        fulfilled,
        rejected
    })
}


export default createAsyncThunk