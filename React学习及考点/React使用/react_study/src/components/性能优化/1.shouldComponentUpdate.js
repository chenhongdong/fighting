import { Component } from "react";
import PropTypes from 'prop-types'

class InputUse extends Component {
    constructor(props) {
        super(props)
        this.state = { title: '' }
    }

    render() {
        return <div>
            <input value={this.state.title} onChange={this.changeText} />
            <button onClick={this.submitHandle}>提交</button>
        </div>
    }

    changeText = (e) => {
        this.setState({
            title: e.target.value
        })
    }

    submitHandle = () => {
        this.props.submitText(this.state.title)

        this.setState({ title: '' })
    }
}
InputUse.propTypes = {
    submitText: PropTypes.func.isRequired
}


function List(props) {
    return <ul>
        {
            props.list.map((item) => (
                <li key={item.id}>{item.id} - {item.title}</li>
            ))
        }
    </ul>
}
List.propTypes = {
    list: PropTypes.arrayOf(PropTypes.object).isRequired
}


class Footer extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { text } = this.props

        return <p>{ text }</p>
    }

    // 默认情况下，React的父组件更新，子组件即使没有值的变化也会更新
    // 性能优化对于 React 更加重要
    componentDidUpdate() {
        console.log('Footer');
    }

    shouldComponentUpdate(newProps, newState) {
        if (newProps.text !== this.props.text
            || newProps.len !== this.props.len) {
                return true    // 可以渲染
        }
        return false    // 不重复渲染
    }
}

class SCU extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [
                { id: 1, title: '英格兰' },
                { id: 2, title: '威尔士' },
                { id: 3, title: '美国' },
                { id: 4, title: '伊朗' }
            ],
            footer: '底部文字'
        }
    }

    render() {
        const { list, footer } = this.state
        return <div>
            <InputUse submitText={this.onSubmitText} />
            <List list={list} />
            <Footer text={footer} len={list.length} />
        </div>
    }

    onSubmitText = (title) => {
        this.setState({
            list: [...this.state.list, { id: this.state.list.length + 1, title }]
        })
    }
}





export default SCU