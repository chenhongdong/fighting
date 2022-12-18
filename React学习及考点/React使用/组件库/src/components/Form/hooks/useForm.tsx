import { useRef, useState } from "react"
import Schema from '../utils/async-validator'

class FormStore {
    private store
    private callbacks
    private entities: any[]
    private formRootRender: any

    constructor(formRootRender: any) {
        this.store = Object.create(null)
        this.callbacks = Object.create(null)
        this.entities = []
        this.formRootRender = formRootRender
    }

    getFieldValue = (name: string): string => {
        return this.store[name]
    }

    setFieldsValue = (newStore: any) => {
        this.store = { ...this.store, ...newStore }
        this._notify()
    }

    setFieldValue = (name: string, value: string) => {
        this.store[name] = value
        this._notify()
    }

    setCallbacks = (callbacks: any) => {
        this.callbacks = callbacks
    }

    submit = () => {
        this.validator().then((values: any) => {
            const { onFinish } = this.callbacks
            onFinish && onFinish(values)
        }).catch((err: any) => {
            const { onFinishFailed } = this.callbacks
            onFinishFailed && onFinishFailed(err)
        })
    }

    getFieldsValue = () => {
        return this.store
    }

    validator = () => {
        const values = this.getFieldsValue()
        const descriptor = this.entities.reduce((describe, entity) => {
            const rules = entity.props.rules
            if (rules && rules.length > 0) {
                const config = rules.reduce((total: any, rule: any) => {
                    total = { ...total, ...rule }
                    return total
                }, {})

                describe[entity.props.name] = config
            }

            return describe
        }, {})

        return new Schema(descriptor).validate(values)
    }

    setInitialValues = (initialValues: any, mount: any) => {
        if (!mount) {
            this.store = { ...initialValues }
        }
    }

    registerField = (entity: any) => {
        this.entities.push(entity)
    }

    _notify = () => {
        this.entities.forEach(entity => entity.onStoreChange())
    }

    getForm = () => {
        return {
            getFieldValue: this.getFieldValue,
            setFieldsValue: this.setFieldsValue,
            setCallbacks: this.setCallbacks,
            submit: this.submit,
            setFieldValue: this.setFieldValue,
            setInitialValues: this.setInitialValues,
            registerField: this.registerField
        }
    }
}

export default function useForm() {
    const formRef = useRef(null)
    const [, forceUpdate] = useState({})

    if (!formRef.current) {
        const formReRender = () => {
            forceUpdate({})
        }
        const formStore = new FormStore(formReRender)
        const formInstance = formStore.getForm()
        formRef.current = formInstance
    }

    return [formRef.current]
}