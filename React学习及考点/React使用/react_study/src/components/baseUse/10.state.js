import { useEffect, useState } from 'react'

function UseState() {
    const [value, setValue] = useState(100)

    function clickHandler() {
        // setValue(value + 1)
        // setValue(value + 1)
        // setValue(value + 1)
        // console.log(value)   // 100 异步 + 合并


        setTimeout(() => {
            setValue(value + 1)
            setValue(value + 1)
            setValue(value + 1)
            console.log(value)  // 100 异步 + 合并
        })
    }

    useEffect(() => {
        // 绑定DOM事件
        document.getElementById('btn').addEventListener('click', () => {
            setValue(value + 1)
            setValue(value + 1)
            setValue(value + 1)
            console.log(value)
        })
    })

    // Automatic Batching 自动批处理，操作一致，更加简单

    return <div>
        <span>{value}</span>
        <button onClick={clickHandler}>点击增加</button>
        <button id="btn">点击增加2</button>
    </div>
}


export default UseState