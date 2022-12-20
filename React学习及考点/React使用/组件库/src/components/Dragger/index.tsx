import React, { PropsWithChildren, useRef, MutableRefObject, useEffect, useState } from "react";
import './index.less'
import { Progress, Card } from 'antd'

import axios from "../../api";


const { Meta } = Card


// PropsWithChildren表示拥有children属性的props
// 在此基础上多了个children属性的作用
// type一般就是个别名，不像interface一样会产生个真实的属性类型
// 一个类型是通过别的类型计算出来的一般都用type
export type DragProps = PropsWithChildren<{
    onChange: any   // 状态变更函数
    name: string    // 上传服务器的字段名
    action: string  // 上传服务器的时候上传的服务器地址
}>

// 每个上传的文件都有这样的一个对象，记录上传的过程
export interface UploadFile {
    file: File          // 上传的文件
    percent: number     // 上传进度百分比
    url?: string         // 上传成功后返回的文件地址
    status: string      // 上传时的状态，有4个状态： initial uploading error done
}

const Dragger: React.FC<DragProps> = function (props: DragProps): JSX.Element {
    // { current: 指向真正要引用的元素(元素类型是个HTMLDivElement或者undefined) }
    // 第一次渲染时current默认值是个null，第二次渲染就指向真实的DOM元素并且之后指向就不再改变了
    const draggerRef: MutableRefObject<HTMLDivElement | undefined> = useRef<HTMLDivElement | undefined>()

    const [uploadFiles, setUploadFiles] = useState<Array<UploadFile>>([])


    // 函数名:(e: DragEvent) => any，表示函数的声明：e是函数的参数，any表示函数的返回值类型
    const onDragEnter: (e: DragEvent) => any = (e: DragEvent): any => {
        e.preventDefault()
        e.stopPropagation()
    }
    const onDragOver: (e: DragEvent) => any = (e: DragEvent): any => {
        e.preventDefault()
        e.stopPropagation()
    }
    const onDragLeave: (e: DragEvent) => any = (e: DragEvent): any => {
        e.preventDefault()
        e.stopPropagation()
    }
    const onDrop: (e: DragEvent) => any = (e: DragEvent): any => {
        e.preventDefault()
        e.stopPropagation()
        let dataTransfer: DataTransfer | null = e.dataTransfer

        if (dataTransfer && dataTransfer.files) {
            upload(dataTransfer.files)
        }
    }

    function upload(files: FileList) {
        console.log('打印', files)
        for (let i = 0; i < files.length; i++) {
            const file = files[i]
            const formData = new FormData()
            formData.append('filename', file.name)
            formData.append(props.name, file)

            // AJAX
            const xhr: XMLHttpRequest = new XMLHttpRequest()
            xhr.open('POST', props.action, true)
            xhr.responseType = 'json'

            const uploadFile: UploadFile = { file, percent: 0, status: 'uploading' }
            uploadFiles.push(uploadFile)

            // 处理进度
            const onUploadProgress = (e: ProgressEvent) => {
                if (e.lengthComputable) {
                    // 当上传的过程中，会不停的触发onprogress事件
                    let precent: number = parseInt(((e.loaded / e.total) * 100).toFixed(0))
                    uploadFile.percent = precent

                    if (precent >= 100) {
                        uploadFile.status = 'done'
                    }
                    setUploadFiles([...uploadFiles])
                }
            }
            xhr.onprogress = onUploadProgress
            xhr.upload.onprogress = onUploadProgress

            // 处理错误
            xhr.onerror = () => {
                uploadFile.status = 'error'
                // 这里需要用[...uploadFiles]的方式
                // 因为hooks无法监听变化，必须用一个新的数组改变引用地址后才能监听到
                setUploadFiles([...uploadFiles])
            }

            // 处理超时
            xhr.timeout = 10000
            xhr.ontimeout = () => {
                uploadFile.status = 'error'
                setUploadFiles([...uploadFiles])
            }


            // 处理响应
            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    uploadFile.url = xhr.response.url
                    props.onChange(uploadFile)
                    setUploadFiles([...uploadFiles])
                }
            }
            // 发送数据
            xhr.send(formData)
        }
    }

    // useEffect中的函数会在组件挂载完成，真实DOM挂载完成后执行，或者更新完成后执行
    useEffect(() => {
        // DOM绑定事件
        draggerRef.current.addEventListener('dragenter', onDragEnter)
        draggerRef.current.addEventListener('dragover', onDragOver)
        draggerRef.current.addEventListener('dragleave', onDragLeave)
        draggerRef.current.addEventListener('drop', onDrop)

        // useEffect 会返回一个函数，它会在组件卸载的时候执行
        return () => {  // 类似在做componentWillUnmount的事情
            // DOM解绑事件
            draggerRef.current.removeEventListener('dragenter', onDragEnter)
            draggerRef.current.removeEventListener('dragover', onDragOver)
            draggerRef.current.removeEventListener('dragleave', onDragLeave)
            draggerRef.current.removeEventListener('drop', onDrop)
        }
    }, [])  // 第二个参数为空数组表示只执行一次，默认是每次都会执行。数组里有变量，如果变量变化了才会继续下次执行


    return (
        <>
            <div className="dragger-container" ref={draggerRef}>
                {props.children}
            </div>
            {
                uploadFiles.map((item: UploadFile, index: number) => (
                    <div key={index}>
                        <div>
                            <span style={{ marginLeft: 10 }}>{item.file.name}</span>
                        </div>
                        <Progress
                            status={item.status === 'error' ? 'exception' : undefined}
                            percent={item.percent}
                        />
                    </div>
                ))
            }
            {
                uploadFiles.map((item: UploadFile, index: number) => (
                    item.url ? <Card
                        key={index}
                        hoverable
                        style={{ width: 240 }}
                        cover={<img src={item.url} />}
                    >
                        <Meta title={item.file.name} />
                    </Card> : null
                ))
            }
        </>
    )
}


export default Dragger