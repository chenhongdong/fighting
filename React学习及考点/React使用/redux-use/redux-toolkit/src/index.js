// import { configureStore, createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import { configureStore, createSlice, createAsyncThunk } from '../toolkit'

// createAsyncThunk用来发送数据请求

/**
 * createAsyncThunk是一个函数
 * 接收两个参数
 *      参数1： 接收redux的动作类型
 *      参数2： 返回promise的函数
 * 返回一个actionCreator
 * 它会基于你传递的动作类型前缀生成promise生命周期的动作类型
 *              promise生命周期： pending fulfilled rejected
 *          todos/list/pending
 *          todos/list/fulfilled
 *          todos/list/rejected
 */
const getTodoList = createAsyncThunk('todos/list', async (id) => {
    return await axios.get('http://localhost:9000/todos/list')   // 请求列表

    // return await axios.get(`http://localhost:9000/todos/detail/${id}`)  // 可以传参id
})
// 定义初始状态
const initialState = {
    todos: [],
    loading: false,
    error: null
}


const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {},   // 它会接收action，返回新的状态
    extraReducers: {    // 不会自己加前缀，需要手写
        [getTodoList.pending.type]: (state, action) => { // type: todos/list/pending
            state.loading = true
        },
        [getTodoList.fulfilled.type]: (state, action) => {  // type: todos/list/fulfilled
            state.todos = action.payload.data
            state.loading = false
        },
        [getTodoList.rejected.type]: (state, action) => {    // type: todos/list/rejected
            state.loading = false
            state.error = action.error.message
        }
    }
})


const { reducer } = todoSlice
// 创建仓库
const store = configureStore({ reducer })

// 派发
const p = store.dispatch(getTodoList(1))   // 会返回promise
// 取消请求
p.abort()
p.then(data => {
    console.log('成功', data)
    setTimeout(() => {
        console.log('请求成功', store.getState());
    }, 1000);
}).catch(err => {
    console.log('失败', err)
    setTimeout(() => {
        console.log('请求失败', store.getState());
    }, 1000);
})