// createStore被redux弃用了，现在要官方推荐使用Redux Toolkit
import { createStore } from 'redux'
import { createSelector } from 'reselect'

const initialState = {
    count: { number: 0 },
    todos: [{ text: '未完成', completed: false }, { text: '完成', completed: true }],
    filter: true
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD':
            return { ...state, count: { ...state.count, number: state.count.number + 1 } }
        default:
            return state
    }
}
const store = createStore(reducer)

const todosSelector = (state) => state.todos
const filterSelector = (state) => state.filter


const visibelTodosSelector = createSelector(
    [todosSelector, filterSelector],
    (todos, filter) => {
        console.log('重新计算');
        return todos.filter(item => item.completed === filter)
    }
)

const render = () => {
    const state = store.getState()  // 获取最新的状态
    console.log('打印', state);
    const state1 = visibelTodosSelector(state)
    console.log('新的', state1)
}

render()
store.subscribe(render)
store.dispatch({ type: 'ADD' })
store.dispatch({ type: 'ADD' })