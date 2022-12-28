import React, { Component } from "react";
import { PureComponent, memo } from './utils'

/**
 * shouldComponentUpdate来优化我们的项目
 * PureComponent React.memo immutable.js  可视化工具
 */
class App extends Component {
    constructor() {
        super()
        this.state = { title: '计数器', number: 0 }
    }

    render() {
        console.log('App渲染')
        return (
            <div>
                <button onClick={() => this.setState({ number: this.state.number + 1 })}>+1</button>
                <button onClick={() => this.setState({ number: this.state.number + 0 })}>+0</button>
                <Counter number={this.state.number} />
                <ClassTitle title={this.state.title} />
                <MemoFunctionTitle title={this.state.title} />
            </div>
        )
    }
}


// React.PureComponent是组件的状态值没有变化的时候，就不会重新渲染子组件
// 只要属性不更新，不需要重新渲染
class Counter extends PureComponent {
    render() {
        console.log('Counter渲染');
        return <p>Counter: {this.props.number}</p>
    }
}

class ClassTitle extends PureComponent {
    render() {
        console.log('ClassTitle渲染');
        return <p>ClassTitle: {this.props.title}</p>
    }
}


// 函数组件使用React.memo可以达到 和 React.PureComponent一样的效果
const FunctionTitle = (props) => {
    console.log('FunctionTitle渲染');
    return <p>FunctionTitle: {props.title}</p>
}
const MemoFunctionTitle = memo(FunctionTitle)


export default App