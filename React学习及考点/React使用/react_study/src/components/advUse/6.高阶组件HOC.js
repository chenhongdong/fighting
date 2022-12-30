import { Component } from 'react'


// 高阶组件不是一种功能，而是一种模式
/* const HOCFactory = (component) => {
    class HOC extends Component {
        // 在此定义多个组件的公共逻辑
        render() {
            return <component {...this.props} />  // 返回拼装的结果
        }
    }

    return HOC
}

const com1 = HOCFactory(WrappedComponent1)
const com2 = HOCFactory(WrappedComponent2) */



// 高阶组件 Demo
const withMouse = (Com) => {
    class withMouseComponent extends Component {
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
                <div style={{ height: '500px' }} onMouseMove={this.handleMouseMove}>
                    {/* 1. 透传所有 props  2. 增加 mouse 属性 */}
                    {/* 组件当标签时，首字母必须是大写 */}
                    <Com mouse={this.state} {...this.props} />
                </div>
            )
        }
    }

    return withMouseComponent
}

const App = (props) => {
    console.log('HOC传入的props', props);
    const { x, y } = props.mouse
    const { a, b } = props.pos
    const slogan = props.slogan
    console.log('---------------', a, b);
    return (
        <div style={{ height: '500px' }}>
            <h1>鼠标位置是 ({x}, {y})</h1>
            <p>{a} - {b}</p>
            <em>{slogan}</em>
        </div>
    )
}


export default withMouse(App)   // 返回高阶组件