import React, { Component } from "react";
import { render } from 'react-dom'

class App extends Component {
    state = { list: [] }


    handleClick = () => {
        this.timeSlice(531)
    }

    timeSlice = (times) => {
        // requestAnimationFrame 每次浏览器渲染前执行的
        /* requestAnimationFrame(() => {
            let minus = times > 100 ? 100 : times
            
            this.setState({
                list: [...this.state.list, ...Array(minus).fill(0)]
            }, () => {
                times -= minus
                if (times > 0) {
                    this.timeSlice(times)
                }
            })
        }) */


        // requestIdleCallback在浏览器空闲的时候执行，不会阻塞你优先级较高的工作
        requestIdleCallback(() => {
            let minus = times > 100 ? 100 : times
            
            this.setState({
                list: [...this.state.list, ...Array(7000).fill(0)]
            }, () => {
                times -= minus
                if (times > 0) {
                    this.timeSlice(times)
                }
            })
        })
    }

    render() {
        return (
            <ul>
                <input />
                <button onClick={this.handleClick}>加载</button>
                <ul>
                    {
                        this.state.list.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))
                    }
                </ul>
            </ul>
        )
    }
}


render(<App />, document.querySelector('#root'))