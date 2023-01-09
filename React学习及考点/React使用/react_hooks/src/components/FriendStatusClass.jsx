import React, { Component } from "react";

class FriendStatusClass extends Component {
    constructor(props) {
        super(props)

        this.state = {
            status: 'true'
        }
    }

    render() {
        return <div>
            好友 {this.props.friendId} 在线状态：{this.state.status}
        </div>
    }

    componentDidMount() {
        console.log(`开始监听${this.props.friendId}的在线状态`);
    }
    // friendId 更新
    componentDidUpdate(preProps) {
        console.log(`结束监听${preProps.friendId}`);
        console.log(`开始监听${this.props.friendId}状态`);
    }

    componentWillUnmount() {
        console.log(`结束监听${this.props.friendId}的在线状态`);
    }
}


export default FriendStatusClass