// import { createStore } from 'redux'

import { configureStore, createAction, createReducer, createSlice } from '@reduxjs/toolkit'
// import { configureStore, createAction, createReducer, createSlice } from '../toolkit'
import thunk from 'redux-thunk'
import logger from 'redux-logger'


/* 
// action type  动作类型
const ADD = 'ADD'
const MINUS = 'MINUS'

// actionCreator
function add() {
    return { type: ADD }
}
function minus() {
    return { type: MINUS }
}
*/

// createAction完成action creator
const add = createAction('ADD')
const minus = createAction('MINUS', (amount) => {
    return { payload: amount * 10 }
})


/* function reducer(state = { number: 0 }, action) {
    switch(action.type) {
        case add.type:
            return { number: state.number + 1 }
        case minus.type:
            return { number: state.number - action.payload }
        default:
            return state
    }
} */

const reducer = createReducer({ number: 0 }, {
    [add.type]: (state, action) => ({ number: state.number + 1 }),
    [minus.type]: (state, action) => ({ number: state.number - action.payload })
})


let store = configureStore({
    reducer,
    middleware: [thunk, logger],
    preloadedState: { number: 0 }
})

let valueEle = document.querySelector('#value')

function render() {
    valueEle.innerHTML = store.getState().number
}

render()

store.subscribe(render)

document.querySelector('#add').addEventListener('click', () => {
    store.dispatch(add())
})
document.querySelector('#minus').addEventListener('click', () => {
    store.dispatch(minus(2))
})

document.querySelector('#async-add').addEventListener('click', () => {
    store.dispatch((dispatch) => {
        // toolkit的configureStore内置了redux-thunk中间件
        // 可以使dispatch接收一个函数
        setTimeout(() => {
            dispatch(add())
        }, 1000)
    })
})