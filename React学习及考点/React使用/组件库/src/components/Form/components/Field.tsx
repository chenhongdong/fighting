import React, { cloneElement, Component } from "react";
import FieldContext from "./FieldContext";


interface Props {
    name: string
    children: any
}

class Field extends Component<any> {
    static contextType = FieldContext

    componentDidMount() {
        (this.context as any).registerField(this)
    }

    getControled = (childProps: any) => {
        const { getFieldValue, setFieldValue } = this.context as any
        const { name } = this.props
        return {
            ...childProps,
            value: getFieldValue(name),
            onChange: (e: Event) => {
                setFieldValue(name, (e.target as HTMLInputElement).value)
            }
        }
    }

    onStoreChange = () => {
        this.forceUpdate()
    }

    render() {
        const children = this.props.children

        return cloneElement(children, this.getControled(children.props))
    }
}


export default Field