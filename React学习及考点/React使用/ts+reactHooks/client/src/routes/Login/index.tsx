import { IProfileState, RootState } from "@/typings/state";
import { Form, Icon, Input, Button, message } from "antd";
import React, { FormEvent } from "react";
import { connect } from "react-redux";
import './index.less'
import actions from '@/store/actions/profile'
import { Link, RouteComponentProps } from "react-router-dom";
import { FormComponentProps } from 'antd/lib/form'
import Nav from "@/components/Nav";


// RouteComponentProps路由组件属性，可以拿到history,location,match等属性
type Props = RouteComponentProps & ReturnType<typeof mapStateToProps> & typeof actions & FormComponentProps


function Login(props: Props) {
    const { getFieldDecorator } = props.form

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // 验证字段对不对
        props.form.validateFieldsAndScroll(async (err: any, values) => {
            // 如果err有值，则表示有某些字段校验不通过
            if (err) {
                message.error('登录不合法')
            } else {
                props.login(values)
            }
        })
    }

    return (
        <>
            <Nav history={props.history}>用户登录</Nav>
            <Form className="login-form" onSubmit={handleSubmit}>
                <Form.Item>
                    {
                        getFieldDecorator('username', {
                            rules: [
                                { required: true, message: '用户名不能为空' }
                            ]
                        })(<Input placeholder="用户名" prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} />)
                    }
                </Form.Item>
                <Form.Item>
                    {
                        getFieldDecorator('password', {
                            rules: [
                                { required: true, message: '密码不能为空' }
                            ]
                        })(<Input type="password" placeholder="密码" prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} />)
                    }
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">登录</Button>
                    或者 <Link to="/register">注册</Link>
                </Form.Item>
            </Form>
        </>
    )
}

const WrappedLogin = Form.create({ name: '登录表单' })(Login)

const mapStateToProps = (state: RootState): IProfileState => state.profile

export default connect(
    mapStateToProps,
    actions
)(WrappedLogin)