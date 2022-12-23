import { useState } from "react"


export default function useAnimation(baseClass, activeClass) {
    const [className, setClassName] = useState(baseClass)

    const toggleClass = () => {
        if (className === baseClass) {
            setClassName(baseClass + ' ' +activeClass)
        } else {
            setClassName(baseClass)
        }
    }

    return [className, toggleClass]
}