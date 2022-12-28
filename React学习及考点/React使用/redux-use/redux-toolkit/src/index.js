// import { configureStore, createAction, createReducer, createSlice } from '@reduxjs/toolkit'
import { configureStore, createAction, createReducer, createSlice } from '../toolkit'
import thunk from 'redux-thunk'
import logger from 'redux-logger'


// createAction完成action creator
/* const add = createAction('ADD')
const minus = createAction('MINUS', (amount) => {
    return { payload: amount * 10 }
})
const reducer = createReducer({ number: 0 }, {
    [add.type]: (state, action) => ({ number: state.number + 1 }),
    [minus.type]: (state, action) => ({ number: state.number - action.payload })
}) */

const counterSlice = createSlice({
    name: 'counter',    // 命名空间
    initialState: { number: 0 },
    reducers: {
        add: (state, action) => ({ number: state.number + 1}),
        minus: (state, action) => ({ number: state.number - action.payload })
    }
})
const { actions, reducer } = counterSlice

let store = configureStore({
    reducer,
    // middleware: [thunk, logger],
    // preloadedState: { number: 0 }
})

let valueEle = document.querySelector('#value')

function render() {
    valueEle.innerHTML = store.getState().number
}

render()

store.subscribe(render)

document.querySelector('#add').addEventListener('click', () => {
    store.dispatch(actions.add())
})
document.querySelector('#minus').addEventListener('click', () => {
    store.dispatch(actions.minus(2))
})

document.querySelector('#async-add').addEventListener('click', () => {
    store.dispatch((dispatch) => {
        // toolkit的configureStore内置了redux-thunk中间件
        // 可以使dispatch接收一个函数
        setTimeout(() => {
            dispatch(actions.add())
        }, 1000)
    })
})