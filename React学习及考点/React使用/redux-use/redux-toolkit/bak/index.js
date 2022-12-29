import { configureStore, createAction, createReducer, createSlice } from '@reduxjs/toolkit'
// import { configureStore, createAction, createReducer, createSlice, createSelector } from '../toolkit'


// createAction完成action creator
const counter1Slice = createSlice({
    name: 'counter1',    // 命名空间
    initialState: { number: 0 },
    reducers: {
        add: (state, action) => {
            state.number += 1
        },
        minus: (state, action) => {
            state.number -= action.payload
        }
    }
})
const { actions: actions1, reducer: counter1Reducer } = counter1Slice

const counter2Slice = createSlice({
    name: 'counter2',    // 命名空间
    initialState: { number: 0 },
    reducers: {
        add: (state, action) => state.number += 1,
        minus: (state, action) => state.number -= action.payload
    },
    
})
const { actions: actions2, reducer: counter2Reducer } = counter2Slice



let store = configureStore({
    reducer: { counter1: counter1Reducer, counter2: counter2Reducer }
})




// 
let valueEle = document.querySelector('#value')
let valueEle2 = document.querySelector('#value2')
let sumEle = document.querySelector('#sum')

const selectCounter1 = state => state.counter1
const selectCounter2 = state => state.counter2

const totalSelector = createSelector(
    [selectCounter1, selectCounter2],
    (counter1, counter2) => {
        console.log('计算总和');
        return counter1.number + counter2.number
    }
)


function render() {
    valueEle.innerHTML = store.getState().counter1.number
    valueEle2.innerHTML = store.getState().counter2.number
    sumEle.innerHTML = totalSelector(store.getState())
}

render()

store.subscribe(render)

document.querySelector('#add').addEventListener('click', () => {
    store.dispatch(actions1.add())
})
document.querySelector('#minus').addEventListener('click', () => {
    store.dispatch(actions1.minus(2))
})
document.querySelector('#async-add').addEventListener('click', () => {
    store.dispatch((dispatch) => {
        // toolkit的configureStore内置了redux-thunk中间件
        // 可以使dispatch接收一个函数
        setTimeout(() => {
            dispatch(actions1.add())
        }, 1000)
    })
})


document.querySelector('#add2').addEventListener('click', () => {
    store.dispatch(actions2.add())
})
document.querySelector('#minus2').addEventListener('click', () => {
    store.dispatch(actions2.minus(2))
})
document.querySelector('#async-add2').addEventListener('click', () => {
    store.dispatch((dispatch) => {
        // toolkit的configureStore内置了redux-thunk中间件
        // 可以使dispatch接收一个函数
        setTimeout(() => {
            dispatch(actions2.add())
        }, 1000)
    })
})