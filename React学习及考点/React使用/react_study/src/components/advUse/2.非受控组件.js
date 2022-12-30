/* 
    非受控组件
    1. ref
    2. defaultValue  defaultChecked
    3. 手动操作 DOM 元素

    使用场景
    1. 必须手动操作DOM，setState实现不了
    2. 如文件上传 <input type="file" />
    3. 某些富文本编辑器，需要传入DOM元素


    受控组件 vs 非受控组件
    1. 优先使用受控组件，符合React设计原则，通过state来控制视图渲染，满足数据驱动视图
    2. 必须操作 DOM 时，就使用非受控组件
*/

import { Component, createRef } from "react";

class UnControlUse extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '小白',
            sleep: false
        }
        // 创建 ref
        this.nameInputRef = createRef()
        this.fileInputRef = createRef()
    }

    render() {
        // 非受控组件属于是 input里的值 不受 state里的值控制，只是用state来赋个初始值而已
        // 1. input defaultValue
        // return <div>
        //     {/* 使用defultValue 而不是 value， 使用 ref */}
        //     <input defaultValue={this.state.name} ref={this.nameInputRef} />
        //     {/* state 不会随之改变 */}
        //     <span>姓名： {this.state.name}</span>
        //     <br />
        //     <button onClick={this.alertName}>弹出</button>
        // </div>


        // 2. checkbox defaultChecked
        // return <div>
        //     是否睡着了？
        //     <input type="checkbox" defaultChecked={this.state.sleep} />
        //     <i>{this.state.sleep.toString()}</i>
        // </div>



        // 3. file 非受控组件使用场景，什么时候你必须操作DOM，不能通过state完成工作就必须用非受控组件
        return <div>
            <input type="file" ref={this.fileInputRef} />
            <button onClick={this.alertFile}>弹出文件</button>
        </div>
    }


    alertName = () => {
        const ele = this.nameInputRef.current
        alert(ele.value)
    }

    alertFile = () => {
        const ele = this.fileInputRef.current
        alert(ele.files[0].name)
    }
}


export default UnControlUse