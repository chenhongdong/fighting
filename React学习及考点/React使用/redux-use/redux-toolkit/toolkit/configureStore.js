import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunk from 'redux-thunk'


function isPlainObject(value) {
    if (typeof value !== 'object' || value === null) {
        return false
    }
    return Object.getPrototypeOf(value) === Object.prototype
}

/**
 * // 内置redux-thunk中间件
 * @param {*} options 
 * @returns 
 */
function configureStore(options = {}) {
    let { reducer, middleware = [thunk], preloadedState } = options
    let rootReducer

    if (typeof reducer === 'function') {
        rootReducer = reducer
    } else if (isPlainObject(reducer)) {
        rootReducer = combineReducers(reducer)
    }

    // 中间件处理
    middleware = typeof middleware === 'function' ? middleware(() => [thunk]) : middleware

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose

    return createStore(rootReducer, preloadedState, composeEnhancers(applyMiddleware(...middleware)))
}


export default configureStore