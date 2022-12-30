/* 
    用于组件公共逻辑的抽离
    
    HOC高阶组件 vs Render Props
    1. HOC：模式简单，但会增加组件层级，增加透传的成本以及透传过程中是否会有属性覆盖问题，维护会风险大些
    2. Render Props：代码简洁，学习成本较高些
*/

import { Component } from 'react'
import PropTypes from 'prop-types'


class Mouse extends Component {
    constructor(props) {
        super(props)
        this.state = { x: 0, y: 0 }
    }

    handleMouseMove = (e) => {
        this.setState({
            x: e.clientX,
            y: e.clientY
        })
    }

    render() {
        return (
            <div style={{height:'500px'}} onMouseMove={this.handleMouseMove}>
                {/* 将 state传递给 props的render (render是个函数组件) */}
                {this.props.render(this.state)}
            </div>
        )
    }
}
Mouse.propTypes = {
    render: PropTypes.func.isRequired
}

const App = (props) => (
    <div style={{ height: '500px' }}>
        <p>年份：{props.year}</p>
        <Mouse render={
            /* render 是一个函数组件 */
            ({ x, y }) => <h1>鼠标位置是 ({x}, {y})</h1>
        } />
    </div>
)


export default App


