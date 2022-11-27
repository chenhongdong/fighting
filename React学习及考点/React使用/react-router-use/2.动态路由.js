import React from "react";
import { Link, useParams } from 'react-router-dom'

function Project() {
    // 获取 url 参数，如 '/project/1111'
    const { id } = useParams()
    console.log('url param id', id)

    return (
        <div>
            <Link to="/">首页</Link>
        </div>
    )
}