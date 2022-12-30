import React, { Component } from "react";

class FormUse extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '小白',
            age: 7,
            city: '北京',
            gender: '男',
            flag: true
        }
    }

    inputChange = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    textareaChange = (e) => {
        this.setState({
            city: e.target.value
        })
    }

    selectChange = (e) => {
        this.setState({
            gender: e.target.value
        })
    } 

    checkboxChange = (e) => {
        this.setState({
            flag: !this.state.flag
        })
    }

    radioChange = (e) => {
        this.setState({
            gender: e.target.value
        })
    }

    render() {
        // 1.受控组件  -  input的值受到state里的值来控制
        // return <div>
        //     <p>{this.state.name}</p>
        //     <label htmlFor="inputName">姓名：</label> {/* 用htmlFor 代替 label中的 for属性 */}
        //     <input id="inputName" value={this.state.name} onChange={this.inputChange}/>
        // </div>

        // 2. textarea - 使用 value
        // return <div>
        //     <textarea value={this.state.city} onChange={this.textareaChange}></textarea>
        //     <p>{this.state.city}</p>
        // </div>


        // 3. select - 使用 value
        // return <div>
        //     <select value={this.state.gender} onChange={this.selectChange}>
        //         <option value="男">男</option>
        //         <option value="女">女</option>
        //         <option value="保密">保密</option>
        //     </select>
        //     <p>{this.state.gender}</p>
        // </div>


        // 4. checkbox - checked
        // return <div>
        //     <input type="checkbox" checked={this.state.flag} onChange={this.checkboxChange} />
        //     <p>{this.state.flag.toString()}</p>
        // </div>


        // 5. radio - checked
        return <div>
            男 <input type="radio" name="gender" value="男" checked={this.state.gender === '男'} onChange={this.radioChange} />
            女 <input type="radio" name="gender" value="女" checked={this.state.gender === '女'} onChange={this.radioChange} />
            <p>{this.state.gender}</p>
        </div>
    }
}


export default FormUse