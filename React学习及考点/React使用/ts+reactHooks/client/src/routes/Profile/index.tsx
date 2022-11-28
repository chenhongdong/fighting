import React, { useEffect } from 'react'
import './index.less'
import { RouteComponentProps } from 'react-router-dom'
import { connect } from 'react-redux'
import { RootState, IProfileState, LOGIN_TYPES } from '@/typings/state'
import mapDispatchToProps from '@/store/actions/profile'
import Nav from '@/components/Nav'
import { Alert, Button, Descriptions } from 'antd'

type IProfileProps = RouteComponentProps & ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps

function Profile(props: IProfileProps) {
    useEffect(() => {
        props.validate()
    }, [])

    let content

    if (props.loginState === LOGIN_TYPES.UN_VALIDATE) {
        content = null
    } else if (props.loginState === LOGIN_TYPES.LOGINED) {
        content = (
            <div className='user-info'>
                <Descriptions title="当前用户">
                    <Descriptions.Item label="用户名">{props.user.username}</Descriptions.Item>
                    <Descriptions.Item label="邮箱">{props.user.email}</Descriptions.Item>
                </Descriptions>
                <Button type="danger" onClick={props.logout}>退出</Button>
            </div>
        )
    } else {
        content = (
            <div className='user-info'>
                <Alert type="warning" message="未登录" description="你尚未登录，请登录 或 注册" />
                <div style={{ textAlign: 'center', padding: '.5rem' }}>
                    <Button type="dashed" onClick={() => props.history.push('/login')}>登录</Button>
                    <Button type="dashed" onClick={() => props.history.push('/register')}>注册</Button>
                </div>
            </div>
        )
    }

    return (
        <section>
            <Nav history={props.history}>个人中心</Nav>
            {content}
        </section>
    )
}

const mapStateToProps = (state: RootState): IProfileState => state.profile

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Profile)