import { Component } from "react";



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

    increase = () => {
        // 第四， state 异步更新的话，更新前会被合并

        // setState 传入对象，会被合并(类似 Object.assign({count:1},{count:1}))。执行结果只有一次 +1 
        // this.setState({ count: this.state.count + 1 })
        // this.setState({ count: this.state.count + 1 })
        // this.setState({ count: this.state.count + 1 })
        // console.log('合并后的count: ', this.state.count);


        // setState 传入函数，不会被合并（函数是可执行的代码，不像对象可以合并处理）。执行结果是 +3
        this.setState((prevSatet, props) => {
            return {
                count: prevSatet.count + 1
            }
        })
        this.setState((prevSatet, props) => {
            return {
                count: prevSatet.count + 1
            }
        })
        this.setState((prevSatet, props) => {
            return {
                count: prevSatet.count + 1
            }
        })
    }
}


export default StateUse