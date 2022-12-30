import React, { Component } from "react";
import PropTypes from 'prop-types'

class InputUse extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: ''
        }
    }

    render() {
        return <div>
            <input value={this.state.title} onChange={this.titleChange} />
            <button onClick={this.onSubmit}>提交</button>
        </div>
    }

    titleChange = (e) => {
        this.setState({
            title: e.target.value
        })
    }

    onSubmit = (e) => {
        const { submitTitle } = this.props
        submitTitle(this.state.title)

        this.setState({
            title: ''
        })
    }
}

// props 类型检查
InputUse.propTypes = {
    submitTitle: PropTypes.func.isRequired
}


class List extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        const { list } = this.props
        
        return <ul>
            {
                list.map(item => (
                    <li key={item.id}>{item.id} - {item.title}</li>
                ))
            }
        </ul>
    }
}
// List props 类型检查
List.propTypes = {
    list: PropTypes.arrayOf(PropTypes.object).isRequired
}



class TodoListUse extends Component {
    constructor(props) {
        super(props)
        // 状态(数据) 提升
        this.state = {
            list: [
                { id: 1, title: '英格兰' },
                { id: 2, title: '威尔士' },
                { id: 3, title: '美国' },
                { id: 4, title: '伊朗' }
            ]
        }
    }

    render() {
        return <div>
            <InputUse submitTitle={this.onSubmitTitle} />
            <List list={this.state.list} />
        </div>
    }

    onSubmitTitle = (title) => {
        this.setState({
            list: this.state.list.concat({
                id: this.state.list.length + 1,
                title
            })
        })
    }
}

export default TodoListUse