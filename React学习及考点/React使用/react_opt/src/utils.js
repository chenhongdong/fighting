import React, { lazy, Suspense, Component } from 'react'

const Loading = () => <div>Loading...</div>


/**
 * 实现路由的分割
 * @param {*} loadComponent   ()=>import('./components/Home')
 */
export function dynamic(loadComponent) {
    const LazyComponent = lazy(loadComponent)

    return () => (
        <Suspense fallback={<Loading />}>
            <LazyComponent />
        </Suspense>
    )
}


/**
 * 自定义lazy函数
 * @param {*} loadComponent 
 */
function mylazy(loadComponent) {
    return class extends Component {
        state = { Component: null }

        componentDidMount() {
            loadComponent().then(res => {
                this.setState({ Component: res.default })
            })
        }

        render() {
            const { Component } = this.state

            return Component && <Component />
        }
    }
}



// 实现PureComponent
export class PureComponent extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        // 只要属性和状态都一样就不更新，有一个不一样就更新
        return !shallowEqual(this.props, nextProps) || !shallowEqual(this.state, nextState)
    }
}


/**
 * shallowEqual 做个浅比较，只比较一层，性能比较高
 * @param {*} obj1 
 * @param {*} obj2 
 * @returns 
 */
function shallowEqual(obj1, obj2) {
    if (obj1 === obj2) return true

    let keys1 = Object.keys(obj1)
    let keys2 = Object.keys(obj2)
    if (keys1.length !== keys2.length) {
        return false
    }

    for (let key of keys1) {
        if (!obj2.hasOwnProperty(key) || obj1[key] !== obj2[key]) {
            return false
        }
    }

    return true
}


// 实现memo，继承PureComponent就完成
export function memo(FnComponent) {
    return class extends PureComponent {
        render() {
            return <FnComponent {...this.props} />
        }
    }
}



// 实现createSelector，有缓存功能
export function createSelector(selectors, callback) {
    let lastValue, lastState
    return (state) => {
        if (lastState === state) {
            return lastValue
        }
        const values = selectors.map(selector => selector(state))
        lastValue = callback(...values)
        lastState = state
        return lastValue
    }
}