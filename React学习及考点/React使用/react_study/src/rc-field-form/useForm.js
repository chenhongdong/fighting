import { useRef, useState } from "react"
import Schema from './async-validator'

class FormStore {
    constructor(forceRootRender) {
        this.store = {}     // 非常重要，用来存放表单值的对象
        this.callbacks = {}
        this.forceRootRender = forceRootRender
        this.fieldEntities = []
    }
    // 注册字段
    registerField = (fieldEntity) => {
        this.fieldEntities.push(fieldEntity)
    }

    setFieldsValue = (newStore) => {
        this.store = { ...this.store, ...newStore }     // 把newStore里的属性都赋值给this.store
        this._notify()
    }

    setFieldValue = (name, value) => {
        this.store[name] = value
        this._notify()
    }
    // 通知字段刷新
    _notify = () => {
        this.fieldEntities.forEach(entity => entity.onStoreChange())
    }

    getFieldsValue = () => {
        return this.store
    }

    getFieldValue = (name) => {
        return this.store[name]     // 获取store中某个属性名称的值
    }

    setCallbacks = (callbacks) => {
        this.callbacks = callbacks
    }

    setInitialValues = (initialValues, mounted) => {
        if (!mounted) {
            this.store = { ...initialValues }
        }
    }

    submit = () => {
        this.validateFields().then(values => {
            const { onFinish } = this.callbacks

            onFinish && onFinish(values)
        }).catch(err => {
            const { onFinishFailed } = this.callbacks

            onFinishFailed && onFinishFailed(err)
        })
    }
   
    // 校验表单的值
    validateFields = () => {
        let values = this.getFieldsValue()
        let descriptor = this.fieldEntities.reduce((descript, entity) => {
            let rules = entity.props.rules      // 如：[{required: true}, {min: 6}, {max: 12}]
            if (rules && rules.length > 0) {
                // {required: true, min: 6, max: 12}
                let config = rules.reduce((total, rule) => {
                    total = { ...total, ...rule }
                    return total
                }, {})

                descript[entity.props.name] = config
            }
            return descript
        }, {})
        console.log('描述: ', descriptor)

        return new Schema(descriptor).validate(values)
    }

    getForm = () => {
        return {
            setFieldsValue: this.setFieldsValue,
            getFieldValue: this.getFieldValue,
            setCallbacks: this.setCallbacks,
            submit: this.submit,
            setFieldValue: this.setFieldValue,
            getFieldsValue: this.getFieldsValue,
            setInitialValues: this.setInitialValues,
            registerField: this.registerField
        }
    }
}

// 自定义hooks 就是 一个用use开头的函数，里面用到了其他的hooks(如:useState等)
export default function useForm() {
    // 返回一个对象 { current: null }，可以在多次组件渲染的时候保持current不变
    let formRef = useRef()

    // value没用在这里，只用到了forceUpdate
    // 强行刷新组件的方法，函数组件特定使用
    let [value, forceUpdate] = useState({})

    if (!formRef.current) {
        const forceReRender = () => {
            forceUpdate({})     // 调用此方法可以让组件刷新
        }
        const formStore = new FormStore(forceReRender)
        const formInstance = formStore.getForm()

        formRef.current = formInstance
    }
    // 一般来说自定义hooks都要返回数组，因为方便扩展
    return [formRef.current]
}