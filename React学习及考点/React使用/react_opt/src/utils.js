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