import { IProfileState, RootState } from "@/typings";
import { Form, Icon, Input, Button } from "antd";
import React, { FormEvent } from "react";
import { connect } from "react-redux";
import './index.less'
import actions from '@/store/actions/profile'
import { Link, RouteComponentProps } from "react-router-dom";
import { FormComponentProps } from 'antd/lib/form'
import Nav from "@/components/Nav";


// RouteComponentProps路由组件属性，可以拿到history,location,match等属性
type Props = RouteComponentProps & ReturnType<typeof mapStateToProps> & typeof actions & FormComponentProps


function Register(props: Props) {
    const { getFieldDecorator } = props.form

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // 验证字段对不对
        props.form.validateFieldsAndScroll(async (err: any, values) => {
            // 如果err有值，则表示有某些字段校验不通过
            if (err) {
                console.error('注册信息不合法')
            } else {
                console.log('values', values);
                
                props.register(values)
            }
        })
    }

    return (
        <>
            <Nav history={props.history}>用户注册</Nav>
            <Form className="register-form" onSubmit={handleSubmit}>
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
                    {
                        getFieldDecorator('confirmPassword', {
                            rules: [
                                { required: true, message: '确认密码不能为空' }
                            ]
                        })(<Input type="password" placeholder="确认密码" prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} />)
                    }
                </Form.Item>
                <Form.Item>
                    {
                        getFieldDecorator('email', {
                            rules: [
                                { required: true, message: '邮箱不能为空' },
                                { pattern: /@/, message: '邮箱格式不正确' }
                            ]
                        })(<Input placeholder="邮箱" prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} />)
                    }
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="register-form-button">注册</Button>
                    或者 <Link to="/login">登录</Link>
                </Form.Item>
            </Form>
        </>
    )
}

const WrappedRegister = Form.create({ name: '注册表单' })(Register)

const mapStateToProps = (state: RootState): IProfileState => state.profile

export default connect(
    mapStateToProps,
    actions
)(WrappedRegister)