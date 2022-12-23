import React, { useCallback } from "react";
import useForm from '../hooks/useForm'


const Form = () => {
    const [formData, setFormValue, resetValues] = useForm({ username: '', email: '' })
    // useCallback  会避免{() => {}}这种渲染的时候，每次创建新的函数，一种优化
    const usernameChange = useCallback(e => setFormValue('username', e.target.value), [])
    const emailChange = useCallback(e => setFormValue('email', e.target.value), [])


    return (
        <form>
            <div className="form-group">
                <label>用户名</label>
                <input
                    className="form-control"
                    placeholder="用户名"
                    value={formData.username}
                    onChange={usernameChange}
                />
            </div>
            <div className="form-group">
                <label>邮箱</label>
                <input
                    className="form-control"
                    placeholder="邮箱"
                    value={formData.email}
                    onChange={emailChange}
                />
            </div>
            <button type="button" className="btn btn-primary" onClick={() => console.log(formData)}>提交</button>
            <button type="button" className="btn btn-danger" onClick={() => resetValues()}>重置</button>
        </form>
    )
}


export default Form