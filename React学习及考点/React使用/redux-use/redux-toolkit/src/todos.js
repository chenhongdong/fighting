// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { createApi, fetchBaseQuery } from '../toolkit/query/react'
import axios from 'axios'

axios.interceptors.response.use(res => res.data, (error) => ({error: {error: error.message}}))
const axiosBaseQuery = ({ baseUrl }) => (
    async (url) => {
        try {
            const res = await axios({ url: baseUrl + url })
            return res
        } catch (error) {
            return error
        }
    }
)

const todoApi = createApi({
    reducerPath: 'todosApi',    // reducer路径
    baseQuery: axiosBaseQuery({ baseUrl: 'http://localhost:9000' }),  // 查询的方法基于fetch
    endpoints: (builder) => ({  // 定义一些接口
        getTodo: builder.query({ query: (id) => `/todos/detail/${id}` }),
        // list: builder.query({ query: () => '/todos/list' })
    })
})

// todoApi.reducerPath  reducer的key
// todoApi.reducer      处理器，根据action来定义默认状态，修改状态
// todoApi.middleware   发请求，派发动作
// endpoints            自定义hook

export default todoApi