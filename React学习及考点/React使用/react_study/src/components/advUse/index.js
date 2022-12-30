/* 
    知识点
    1. 函数组件
    2. 非受控组件
    3. Portals
    4. context
    5. 异步组件
    6. 性能优化
    7. 高阶组件 HOC
    8. Render Props
*/


import React, {Component} from "react";
import UnControlUse from "./2.非受控组件";
import PortalsUse from "./3.portals";
import ContextUse from "./4.context";
import AsyncComponent from "./5.异步组件";
import HOC from './6.高阶组件HOC'
import RenderProps from './7.RenderProps'

class AdvUseDemo extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <div>
            {/* <UnControlUse />
            <PortalsUse>Modal 内容</PortalsUse>
            <ContextUse /> 
            <AsyncComponent />
            <HOC pos={{a:1, b:110}} slogan="高阶组件很好" /> */}
            <RenderProps year="2022" />
        </div>
    }
}


export default AdvUseDemo