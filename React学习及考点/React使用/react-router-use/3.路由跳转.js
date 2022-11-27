import React from "react";
import { useHistory } from 'react-router-dom'

function Project() {
    const history = useHistory()

    function jumpUrl() {
        history.push('/')
    }

    return (
        <Button onClick={jumpUrl}>跳转</Button>
    )
}