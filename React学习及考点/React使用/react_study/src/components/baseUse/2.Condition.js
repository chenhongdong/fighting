import React, { Component } from "react";

class Condition extends Component {
    constructor(props) {
        super(props)
        this.state = {
            theme: 'black'
        }
    }

    render() {
        const blackBtn = <button className="btn-black">black btn</button>
        const whiteBtn = <button className="btn-white">white btn</button>

        // 1. if else
        // if (this.state.theme === 'black') {
        //     return blackBtn
        // } else {
        //     return whiteBtn
        // }


        // 2. 三目运算符
        // return <div>
        //     {this.state.theme === 'white' ? blackBtn : whiteBtn}
        // </div>


        // 3. &&符
        return <div>
            { this.state.theme === 'black' && blackBtn}
        </div>
    }
}


export default Condition