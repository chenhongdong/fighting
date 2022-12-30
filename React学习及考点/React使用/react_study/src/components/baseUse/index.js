/*
    知识点
    1. JSX基本使用
    2. 条件
    3. 列表
    4. 事件
    5. 表单
    6. 组件和props
    7. setState
    8. 生命周期
*/ 



import React from 'react'
import JsxBase from './1.JsxUse'
import Condition from './2.Condition'
import ListUse from './3.ListUse'
import EventUse from './4.event'
import FormUse from './5.form'
import TodoListUse from './6.componentUse'
import StateUse from './8.setState'
import UseState from './10.state'


class BaseUseDemo extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <div>
            {/* <JsxBase />
            <Condition />
            <ListUse />
            <EventUse />
            <FormUse />
            <StateUse />
            <UseState />
            <TodoListUse /> */}
            <StateUse />
        </div>
    }
}


export default BaseUseDemo