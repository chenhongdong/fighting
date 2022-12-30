// setState - 三点特性：不可变值，可能是异步更新，可能会被合并

import React, { Component } from "react";

class StateUse extends Component {
    constructor(props) {
        super(props)

        // 第一，state 要在构造函数中定义
        this.state = {
            count: 0,
            list: [
                { id: 1, title: '英格兰' },
                { id: 2, title: '威尔士' },
                { id: 3, title: '美国' },
                { id: 4, title: '伊朗' }
            ],
            info: {
                name: '小白',
                city: '北京'
            }
        }
    }

    render() {
        

        return <div>
            <p>{this.state.count}</p>
            <button onClick={this.increase}>累加</button>
            <ul>
            {
                this.state.list.map((item) => (
                    <li key={item.id}>{item.id} - {item.title}</li>
                ))
            }
            </ul>
            <p>
                <b>姓名：{this.state.info.name}</b>
                <b>城市：{this.state.info.city}</b>
                {
                    this.state.info.age && <b>年龄：{this.state.info.age}</b>
                }
            </p>
        </div>
    }

    increase = () => {
        // 第二，不要直接修改 state，使用不可变值
        // 通过 setState操作修改数据
        this.setState({ count: this.state.count + 1 })
        console.log(this.state.count)
        this.setState({ count: this.state.count + 1 })
        console.log(this.state.count)



        // 数组 不可变值，修改数组的时候，要用那些返回新数组的 API 来修改，不能改变原来state上数组的值
        // 不能直接对 this.state.list 进行 push pop unshift shift splice 等一系列修改原数组值的api，会违背不可变值
        
        // const listCopy = this.state.list.slice()    // 拷贝副本
        // listCopy.splice(0, 3)   // 操作副本
        
        // this.setState({
            // 追加方式1 concat
            // list: this.state.list.concat({ id: this.state.list.length + 1, title: '德国🇩🇪' })
            // 追加方式2 解构赋值展开运算符
            // list: [ ...this.state.list, { id: this.state.list.length + 1, title: '法国🇫🇷' }]

            // 截取方式 slice
            // list: this.state.list.slice(0, 2)

            // 筛选方式 filter
            // list: this.state.list.filter(item => item.id <= 3)

            // 其他操作 slice创造一个副本，再对副本修改，不影响原数组
            // list: listCopy
        // })



        // 对象 不可变值
        // this.setState({
        //     // 修改对象方式1
        //     // info: Object.assign({}, this.state.info, { age: 7 })

        //     // 修改对象方式2
        //     info: { ...this.state.info, age: 6 }
        // })



        // 第三，setState 可能是异步更新（要可能是同步更新）
        // this.setState({
        //     count: this.state.count + 1
        // })
        // 异步，拿不到最新的值
        // console.log('count: ', this.state.count)
    }
}


export default StateUse