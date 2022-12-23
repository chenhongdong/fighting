import React from "react";
import useAnimation from '../hooks/useAnimation'
import './animation.css'

const Animation = () => {
    const [className, toggleClass] = useAnimation('circle', 'active')

    return (
        <div className={className} onClick={toggleClass}></div>
    )
}


export default Animation