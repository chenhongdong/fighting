import React, { useEffect, useState } from 'react'
import './index.less'
import { RouteComponentProps } from 'react-router-dom'
import { connect } from 'react-redux'
import { RootState, IProfileState, LOGIN_TYPES } from '@/typings/state'
import mapDispatchToProps from '@/store/actions/profile'
import Nav from '@/components/Nav'
import { Alert, Button, Descriptions, Upload, Icon, message } from 'antd'
import { RcFile, UploadChangeParam } from 'antd/lib/upload'

type IProfileProps = RouteComponentProps & ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps

function Profile(props: IProfileProps) {
    let [uploading, setUploading] = useState(false)
    useEffect(() => {
        props.validate()
    }, [])

    let content

    if (props.loginState === LOGIN_TYPES.UN_VALIDATE) {
        content = null
    } else if (props.loginState === LOGIN_TYPES.LOGINED) {
        const uploadButton = (
            <div>
                <Icon type={uploading ? 'loading' : 'plus'} />
                <div className="ant-upload-text">上传</div>
            </div>
        )

        const handleChange = (info: UploadChangeParam) => {
            if (info.file.status === 'uploading') {  // 上传中
                setUploading(true)
            } else if (info.file.status === 'done') {
                // response 是上传接口返回的响应体，data是服务端返回的图片路径
                const { success, data } = info.file.response
                
                if (success) {
                    setUploading(false)
                    props.setAvatar(data)
                } else {
                    message.error('上传图片失败，请重试')
                }
            }
        }

        content = (
            <div className='user-info'>
                <Descriptions title="当前用户">
                    <Descriptions.Item label="用户名">{props.user.username}</Descriptions.Item>
                    <Descriptions.Item label="邮箱">{props.user.email}</Descriptions.Item>
                    <Descriptions.Item label="头像">
                        <Upload
                            name="avatar"   // 往服务器端上传头像的时候应该用哪个字段名上传
                            listType="picture-card"
                            className="avatar-uploader"
                            showUploadList={false}  // 是否显示上传列表
                            action="http://localhost:8001/user/uploadAvatar"
                            beforeUpload={beforeUpload}
                            data={{ userId: props.user.id }}
                            onChange={handleChange}
                        >
                            {/* crossOrigin="anonymous" 用来处理跨域图片资源不显示的问题 */}
                            {
                                props.user.avatar ? <img width="100%" crossOrigin="anonymous" src={props.user.avatar} /> : uploadButton
                            }
                        </Upload>
                    </Descriptions.Item>
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


// 工具方法，提出来写
function beforeUpload(file: RcFile) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'

    if (!isJpgOrPng) {
        message.error('只允许上传jpeg或png图片格式')
    }

    const isLess2M = file.size / 1024 / 1024 < 2
    if (!isLess2M) {
        message.error('图片必须小于2M')
    }
    return isJpgOrPng && isLess2M
}