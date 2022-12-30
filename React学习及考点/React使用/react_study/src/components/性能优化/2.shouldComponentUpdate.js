import { Component } from "react";
import PropTypes from 'prop-types'
import _ from 'lodash'

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


class List extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { list } = this.props
        return <ul>
            {
                list.map((item) => (
                    <li key={item.id}>{item.id} - {item.title}</li>
                ))
            }
        </ul>
    }

    shouldComponentUpdate(newProps, newState) {
        if (_.isEqual(newProps.list, this.props.list)) {
            return false
        }
        console.log('渲染');
        return true
    }
}
List.propTypes = {
    list: PropTypes.arrayOf(PropTypes.object).isRequired
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
            ]
        }
    }

    render() {
        const { list } = this.state
        return <div>
            <InputUse submitText={this.onSubmitText} />
            <List list={list} />
        </div>
    }

    onSubmitText = (title) => {
        this.setState({
            list: [...this.state.list, { id: this.state.list.length + 1, title }]
        })
    }
}





export default SCU