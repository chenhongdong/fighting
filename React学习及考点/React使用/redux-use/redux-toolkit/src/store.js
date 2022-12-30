import { configureStore } from '@reduxjs/toolkit'
import todoApi from './todos'

const store = configureStore({
    reducer: {
        [todoApi.reducerPath]: todoApi.reducer
    },
    // 如果不想干掉默认的中间件(thunk)，而是想扩展中间件，可以写成一个函数的形式
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(todoApi.middleware)
    }
})


export default store