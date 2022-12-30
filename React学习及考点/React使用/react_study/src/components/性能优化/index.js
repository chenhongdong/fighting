/* 
    性能优化
    1. shouldComponentUpdate - 简称 SCU
        SCU 默认返回true，即 React 默认重新渲染所有子组件
        必须配合“不可变值”一起使用
        可先不用SCU，有性能问题时再考虑使用

    2. PureComponent 和 React.memo
    3. 不可变值 immutable.js
*/

import { Component } from "react"
import SCU from "./2.shouldComponentUpdate"

class Optmization extends Component {
    
    render() {
        return <div>
            <SCU />
        </div>
    }
}


export default Optmization