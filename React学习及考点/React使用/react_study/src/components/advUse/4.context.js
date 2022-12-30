/* 
    context
    1. 公共信息(语言、主题)如何传递给每个组件？
    2. 用props传递的话，太繁琐层级太多，容易出错
    3. 用redux小题大做
*/

import { Component, createContext } from "react";


// 创建 Context 填入默认值
const ThemeContext = createContext('dark')

class ThemeButton extends Component {
    // 和 ThemeButton.contextType = ThemeContext一样，用es6里的静态属性来写简单
    static contextType = ThemeContext

    render() {
        // React 会往上找到最近的 theme Provider
        const theme = this.context

        return <div>
            <p>按钮主题是 {theme}</p>
        </div>
    }
}
// class组件必须指定 contextType 读取当前的 theme context
// ThemeButton.contextType = ThemeContext

function ThemeLink(props) {
    // 函数组件可以使用 Consumer
    return <ThemeContext.Consumer>
        {data => <p>链接主题是 {data}</p>}
    </ThemeContext.Consumer>
}

function Toolbar(props) {
   
    return (
        <div>
            <ThemeButton />
            <ThemeLink />
        </div>
    )
}


class ContextUse extends Component {
    constructor(props) {
        super(props)
        this.state = {
            theme: 'dark'
        }
    }


    render() {
        return <ThemeContext.Provider value={this.state.theme}>
            <Toolbar />
            <hr />
            <button onClick={this.changeTheme}>换主题</button>
        </ThemeContext.Provider>
    }

    changeTheme = () => {
        this.setState({ theme: this.state.theme === 'dark' ? 'light' : 'dark' })
    }
}


export default ContextUse