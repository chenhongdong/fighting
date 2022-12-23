import { useState } from "react";


export default function useForm(initialValues) {
    const [formData, setFormData] = useState(initialValues)

    const setFormValue = (key, val) => {
        setFormData({ ...formData, [key]: val })
    }

    const resetValues = () => {
        setFormData(initialValues)
    }

    return [formData, setFormValue, resetValues]
}