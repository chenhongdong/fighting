/* 
    Portals 传送门
    1. 组件默认会按照既定层级嵌套渲染
    2. 如何让组件渲染到父组件以外？
        ReactDOM.createPortal(要渲染的元素内容， 要放置的DOM节点)

    使用场景 - 子组件脱离父组件，一般都是css样式的问题处理
    1. overflow: hidden
    2. 父组件 z-index 值太小
    3. fixed 需要放置在 body 第一层级
*/


import { Component } from "react";
// 只能引入react-dom中，react中的ReactDOM没有createPortal方法
import ReactDOM from 'react-dom' 
import './style.css'

class PortalsUse extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        // 正常渲染
        // return <div className="modal">
        //     {this.props.children}
        // </div>


        // 使用 Portals 渲染到 #modal-box 元素内
        // fixed 模态框 放在 #modal-box 内，有更好的浏览器兼容性
        return ReactDOM.createPortal(
            <div className="modal">{this.props.children}</div>,
            document.getElementById('modal-box')    // DOM元素
        )
    }
}


export default PortalsUse