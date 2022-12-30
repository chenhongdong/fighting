import React, { Component } from "react";
import FieldContext from "./FieldContext";


/**
 * 字段的组件
 * 类组件是如何获取上下文对象的值呢
 * 
 * 实现双向数据绑定
 * input的值显示的是 formInstance.store对应字段的值
 * 当input的值发生改变的时候要把值放到formInstance.store上
 */
class Field extends Component {
    static contextType = FieldContext    // this.context获取 Provider里的value了

    // 当组件挂载完成后
    componentDidMount() {
        this.context.registerField(this)
    }

    getControlled = (childProps) => {
        let { getFieldValue, setFieldValue } = this.context    // formInstance
        const { name } = this.props

        return {
            ...childProps,
            value: getFieldValue(name),
            onChange: e => {
                setFieldValue(name, e.target.value)
            }
        }
    }

    onStoreChange = () => {
        // 由于自己加了value和onChange，就是受控组件了，需要自己去更新
        this.forceUpdate()  // 调用react自带的强制刷新方法
    }

    render() {
        let children = this.props.children      // 获取原来的儿子 <input placeholder="用户名" />
        return React.cloneElement(children, this.getControlled(children.props))
    }

}


export default Field