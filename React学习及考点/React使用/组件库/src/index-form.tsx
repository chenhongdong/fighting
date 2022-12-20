import React from "react";
import { render } from 'react-dom'
import Tree from './components/Tree'
import data from './data'   // 数据源


import Form, { Field } from './components/Form'


const uniqueUsername = (rule: any, val: string) => {
    return new Promise(resolve => {
        setTimeout(() => {
            if (val === 'admin') {
                resolve(`${val}已经存在了`)
            } else {
                resolve('')
            }
        }, 1000)
    })
}


render(
    <Form
        initialValues={{ username: '', password: '' }}
        onFinish={(values: any) => console.log('成功', values)}
        onFinishFailed={(error: any) => console.log('失败', error)}
    >
        <Field name="username" rules={[{ required: true, min: 3 }, {validate: uniqueUsername}]}>
            <input placeholder="用户名" />
        </Field>
        <Field name="password" rules={[{ required: true, min: 6, max: 10 }]}>
            <input placeholder="密码" type="password" />
        </Field>
        <button>提交</button>
    </Form>
    , document.getElementById('root')
)