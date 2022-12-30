import React, { Component } from "react";



// setState - 三点特性：不可变值，可能是异步更新，可能会被合并

class StateUse extends Component {
    constructor(props) {
        super(props)
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

    increase = (e) => {
        // 第三，setState 可能是异步更新（要可能是同步更新）
        /* this.setState({
            count: this.state.count + 1
        }, () => {
            // 类似 vue的 $nextTick
            console.log('setState回调函数获取最新值', this.state.count)
        }) */
        // 异步，拿不到最新的值
        // console.log('count: ', this.state.count)


        // setTimeout，v18目前还是异步拿不到最新值
        // setTimeout(() => {
        //     this.setState({ count: this.state.count + 1 })
        //     console.log('定时器', this.state.count)
        // }, 100)


        // 自己定义的 DOM 事件，setState 也是异步的。在 componentDidMount 中，从v18开始

        // 注意：v18版本，setTimeout和DOM事件也都是异步更新
        // Automatic Batching 自动批处理
    }

    bodyClickHandle = () => {
        this.setState({ count: this.state.count + 1 })
        console.log('DOM事件', this.state.count)
    }

    componentDidMount() {
        document.addEventListener('click', this.bodyClickHandle)
    }


    componentWillUnmount() {
        document.removeEventListener('click', this.bodyClickHandle)
    }
}


export default StateUse