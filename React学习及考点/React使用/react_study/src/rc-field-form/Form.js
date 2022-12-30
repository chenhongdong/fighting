import React, { useRef } from "react";
import FieldContext from './FieldContext'
import useForm from './useForm'     // 自定义hooks


/**
 * 这是一个最外层的Form组件
 * @param {*} props 属性对象
 * initialValues 初始对象
 * onFinish 完成时的回调函数
 * @returns 
 */
const Form = ({ initialValues, onFinish, children, onFinishFailed }) => {
    let [formInstance] = useForm()

    formInstance.setCallbacks({ onFinish, onFinishFailed })

    const mountRef = useRef(null)
    // 只设置一次初始值
    formInstance.setInitialValues(initialValues, mountRef.current)
    if (!mountRef.current) {
        mountRef.current = true
    }

    return (
        <form
            onSubmit={
                e => {
                    e.preventDefault()
                    e.stopPropagation()
                    // 要调用表单提交的方法
                    formInstance.submit()
                }
            }
        >
            <FieldContext.Provider value={formInstance}>
                {children}
            </FieldContext.Provider>
        </form>
    )
}


export default Form