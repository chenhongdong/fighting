import { useContext, useEffect, useReducer } from 'react'
import { ReactReduxContext } from 'react-redux'
import { createSlice } from '../'

/**
 * 通过fetch请求后端接口
 * @param {*} url 
 * @returns 响应体
 */
function fetchBaseQuery({ baseUrl }) {
    return async function (url) {
        return await fetch(baseUrl + url).then(res => res.json())
    }
}


function createApi({ reducerPath, baseQuery, endpoints }) {
    const slice = createSlice({
        name: reducerPath,
        initialState: { data: null, error: null, isLoading: false },
        reducers: {
            setValue(state, action) {
                // 把payload上的属性全部拷贝到state上，就可以改变state状态了
                console.log('状态', state)
                console.log('负载', action);
                for (let key in action.payload) {
                    state[key] = action.payload[key]
                }
            }
        }
    })
    const { reducer, actions: { setValue } } = slice

    // middlewareApi固定参数，可以解构出一个dispatch
    const middleware = ({ dispatch }) => {
        return (next) => {  // 调用下一个中间件或dispatch
            return (action) => {    // 改造后新的dispatch方法
                if (action.type === 'FETCH_DATA') {
                    const { url } = action.payload
                    !(async () => {
                        try {
                            // 请求接口前派发一个动作isLoading=true
                            dispatch(setValue({ isLoading: true }))
                            let data = await baseQuery(url)
                            dispatch(setValue({ isLoading: false, data }))
                        } catch (error) {
                            dispatch(setValue({ isLoading: false, error: { error: error.toString() }}))
                        }
                    })()
                } else {
                    next(action)
                }
            }
        }
    }

    let builder = {
        query(options) {  // options.query参数
            // useQuery是自定义hooks
            function useQuery(id) {
                const { store } = useContext(ReactReduxContext)
                let [, forceUpdate] = useReducer(x => x + 1, 0)
                useEffect(() => {
                    // 监控状态的变化，状态发生变化后执行forceUpdate更新组件
                    const unsubscribe = store.subscribe(forceUpdate)

                    const url = options.query(id)
                    store.dispatch({
                        type: 'FETCH_DATA',
                        payload: { url }
                    })
                    console.log('url地址：', url)
                    return unsubscribe
                }, [])
                return store.getState()[reducerPath]
            }
            return { useQuery }
        }
    }

    let api = {
        reducerPath,
        reducer,
        middleware,
        endpoints: endpoints(builder)
    }

    return api
}

export {
    createApi,
    fetchBaseQuery
}