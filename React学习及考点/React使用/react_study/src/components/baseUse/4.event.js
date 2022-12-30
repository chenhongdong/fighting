import React, { Component } from "react";

class EventUse extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '小白',
            list: [
                { id: 1, title: '英格兰' },
                { id: 2, title: '威尔士' },
                { id: 3, title: '美国' },
                { id: 4, title: '伊朗' }
            ]
        }

        // 修改方法的 this 指向，只执行一次
        this.clickHandler1 = this.clickHandler1.bind(this)
    }

    clickHandler1() {
        console.log('clickHandler1', this)  // this 默认是undefined，所以需要修改 this指向
        this.setState({
            name: '白小白'
        })
    }
    // 静态方法 this 指向当前实例
    clickHandler2 = () => {  
        this.setState({
            name: '小黑'
        })
    }

    clickHandler3 = (e) => {
        e.preventDefault()
        e.stopPropagation()
        // 指向当前元素，即当前元素触发
        console.log('target', e.target)
        // 指向当前元素
        console.log('current target', e.currentTarget)
        // React封装的模拟原生事件
        console.log('event', e)

        // 原生 event 
        console.log('nativeEvent', e.nativeEvent)
        console.log('nativeEvent target', e.nativeEvent.target)
        // 指向 div#root
        console.log('nativeEvent current target', e.nativeEvent.currentTarget)

        /* 
            1. e 是 SyntheticBaseEvent，模拟出来 Dom 事件的所有能力
            2. e.nativeEvent 是原生事件对象
            3. 所有的事件，都被挂载到 根元素 div#root 上
            4. 和 Dom 事件不一样，和 Vue 事件也不一样
        */
    }

    clickHandler4(idx, title, e) {
        e.preventDefault()
        e.stopPropagation()
        console.log(idx, title)
        console.log(e)
    }

    render() {
        console.log('render', this)  // 在render中执行 bind，会执行两次修改，render渲染两次
        // 1.this - 使用 bind
        // return <p onClick={this.clickHandler1}>
        //     {this.state.name}
        // </p>


        // 2.this - 使用静态方法
        // return <p onClick={this.clickHandler2}>
        //     {this.state.name}
        // </p>


        // 3.event
        return <ol>
            {
                this.state.list.map(item => (
                    <li key={item.id}>
                        <a href="https://www.so.com/" onClick={this.clickHandler3}>{item.title}</a>
                    </li>
                ))
            }
        </ol>


        // 4. 传参 - 用 bind(this, a, b, c)
        // return <ol>
        //     {
        //         this.state.list.map((item, i) => (
        //             <li key={item.id}>
        //                 <a href="https://www.so.com/" onClick={this.clickHandler4.bind(this,i, item.title)}>{item.title}</a>
        //             </li>
        //         ))
        //     }
        // </ol>
    }
}


export default EventUse