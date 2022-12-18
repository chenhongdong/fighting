import React, { useRef } from "react"
import FieldContext from "./FieldContext"
import useForm from "../hooks/useForm"

interface Props {
    initialValues: any
    onFinish: any
    children: any
    onFinishFailed: any
}


const Form = ({ initialValues, onFinish, children, onFinishFailed }: Props) => {
    let [formInstance] = useForm()

    formInstance.setCallbacks({ onFinish, onFinishFailed })

    const mountRef: any = useRef()
    formInstance.setInitialValues(initialValues, mountRef.current)
    if (!mountRef.current) {
        mountRef.current = true
    }

    return (
        <form onSubmit={
            e => {
                e.preventDefault()
                e.stopPropagation()
                formInstance.submit()
            }
        }>
            <FieldContext.Provider value={formInstance}>
                {children}
            </FieldContext.Provider>
        </form>
    )
}


export default Form