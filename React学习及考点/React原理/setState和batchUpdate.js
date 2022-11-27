/* 
    setState
    - 有时异步(普通使用)，有时同步(setTimeout、DOM事件)

    - 有时合并(参数为对象)，有时不合并(参数为函数)

*/

/* 
    核心要点
    1. setState 主流程
        this.setState(newState)
                ↓
                ↓
        newState 存入 pending 队列
                ↓
                ↓
        是否处于 batch update
                ↓
                ↓
        ↓  ←  ← ↓ →  →  ↓
        ↓  Y         N  ↓
        ↓               ↓
    保存组件于         遍历所有的dirtyComponents     
  dirtyComponents       调用updateComponent
                    更新 pending state or props

    2. batchUpdate 机制
        判断 isBatchingUpdates 变量是true还是false

    3. transaction 事务机制
    伪代码
    transaction.initialize = () => { console.log('开始') }
    transaction.close = () => { console.log('结束') }
    function anyMethod() { console.log('方法') }
    
    transaction.perform(anyMethod)  -> 最终输出顺序为 开始 -> 方法 -> 结束
    
*/


import { Component } from 'react'

class ListDemo extends Component {
    constructor(props) {
        super(props)
        this.state = { count: 0 }
    }
    render() {
        return <div>
            <button onClick={this.increase}>点击1</button>
            <button onClick={this.increase2}>点击2</button>
        </div>
    }

    increase = () => {
        // 开始： 处于 batchUpdate
        // isBatchingUpdates = true
        this.setState({
            count: this.state.count + 1
        })
        console.log('异步', this.state.count)   // 0
        // 结束
        // isBatchingUpdates = false
    }

    increase2 = () => {
        // 开始： 处于 batch update
        // isBatchingUpdates = true
        setTimeout(() => {
            // 此时 isBatchingUpdates 是 false
            this.setState({
                count: this.state.count + 1
            })
            console.log('定时器可同步', this.state.count)   // 1
        })
        // 结束
        // isBatchingUpdates = false
    }

    componentDidMount() {
        // 开始： 处于 batch update
        // isBatchingUpdates = true
        document.addEventListener('click', () => {
            // 此时 isBatchingUpdates 是 false
            this.setState({ count: this.state.count + 1 })
            console.log('DOM事件可同步', this.state.count)   // 1
        })
        // 结束
        // isBatchingUpdates = false
    }
}