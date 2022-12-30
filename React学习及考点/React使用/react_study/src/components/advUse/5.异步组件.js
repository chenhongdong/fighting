/* 
    异步组件
    1. import() vue中是这样使用
    2. React用什么加载异步组件？
        2.1. React.lazy
        2.2. React.Suspense

    使用场景 - 常见性能优化方案之一
    1. 组件比较大
    2. 路由懒加载
*/

import { Component, lazy, Suspense } from "react";

// 懒加载 ContextUse 组件
const ContextUse = lazy(() => import('./4.context'))


class AsyncComponent extends Component {
    constructor(props) {
        super(props)
    }


    render() {

        return <div>
            <p>引入一个动态组件</p>
            <hr />
            <Suspense fallback={<div>正在加载...</div>}>
                <ContextUse />
            </Suspense>
        </div>
    }
}


export default AsyncComponent