import React from "react";
import { createRoot } from 'react-dom/client'
import 'antd/dist/antd.css'
import { Upload, message } from 'antd'
// const { Dragger } = Upload


import Dragger, { DragProps, UploadFile } from "./components/Dragger";


const props: DragProps = {
    name: 'file',
    // action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    action: 'http://localhost:9001/upload',
    onChange: (uploadFile: UploadFile) => {   // 当上传状态发生改变的时候会执行回调
        console.log('信息： ', uploadFile)
        const { status } = uploadFile

        if (status === 'done') {
            message.success(`${uploadFile.file!.name}上传成功`)
        } else if (status === 'error') {
            message.error(`${uploadFile.file!.name}上传失败！`)
        }
    }
}


const container = document.querySelector('#root')
const root = createRoot(container)

root.render(<Dragger {...props}>
    <div>拖拽上传</div>
</Dragger>)




