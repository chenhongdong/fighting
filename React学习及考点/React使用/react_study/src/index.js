import React from "react";
import { render } from 'react-dom'

// import Form, { Field } from 'rc-field-form'
import Form, { Field } from './rc-field-form'

// 自定义的校验函数，实现判断用户名是否重复，调接口异步请求
let uniqueUsername = (rule, value) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            if (value === 'admin') {
                resolve('用户名已被占用')
            } else {
                resolve('')
            }
        }, 2000)
    })
}

render(
    <Form
        initialValues={{ username: '', password: '' }}
        onFinish={values => console.log('成功', values)}
        onFinishFailed={error => console.log('失败', error)}
    >
        <Field name="username" rules={[{ required: true }, { validate: uniqueUsername }]}>
            <input placeholder="用户名" />
        </Field>
        <Field name="password" rules={[{ required: true, min: 6, max: 10 }]}>
            <input placeholder="密码" type="password" />
        </Field>
        <button>提交</button>
    </Form>,
    document.querySelector('#root')
)