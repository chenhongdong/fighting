// redux 中间件 - 示例
import { createStore, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'
const logger = createLogger()

const store = createStore(
    reducer,
    applyMiddleware(thunk, logger)
)


// redux 中间件 - logger 实现  (伪代码)

// 自己修改 dispatch，增加 logger
let next = store.dispatch
store.dispatch = function dispathAndLog(action) {
    console.log('dispatching', action)
    next(action)
    console.log('next state', store.getState())
}



Promise.all([1,3,2]).then(data => {
    console.log('all: ', data)
})