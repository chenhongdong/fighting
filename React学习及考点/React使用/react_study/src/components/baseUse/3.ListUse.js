import React, { Component } from "react";

class ListUse extends Component {
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
        return <div>
            <h3>世界杯B组排名</h3>
            <ul>
                {
                    this.state.list.map((item, index) => {
                        return <li key={item.id}><b>{item.id}</b>{item.title}</li>
                    })
                }
            </ul>
        </div>
    }
}


export default ListUse