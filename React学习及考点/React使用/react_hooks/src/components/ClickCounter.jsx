import React, { useState, useEffect } from "react";

function ClickCounter() {
    // 数组的解构
    const [count, setCount] = useState(0)

    // 模拟componentDidMount、componentDidUpdate
    useEffect(() => {
        console.log('在此发送ajax请求');
    })  // 不写依赖项的话，每次都会执行

    // 模拟componentDidMount
    useEffect(() => {
        console.log('加载完成');
    }, [])  // 只执行一次，第二个参数是[]

    // 模拟componentDidUpdate
    useEffect(() => {
        console.log('更新了');
    }, [count])

    
    useEffect(() => {
        let timer = setInterval(() => {
            console.log(+new Date);
        }, 1000)
        // 模拟componentWillUnmount
        return () => {
            clearInterval(timer)
            console.log('卸载完成')
        }
    }, [])

    return <div>
        <p>你点击了{count}次</p>
        <button onClick={() => setCount(count + 1)}>点击</button>
    </div>
}

export default ClickCounter