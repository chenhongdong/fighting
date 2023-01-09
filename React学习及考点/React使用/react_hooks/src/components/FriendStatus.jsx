import React, { useEffect, useState, useRef } from "react";


function FriendStatus({ friendId }) {
    const [status, setStatus] = useState(false)
    const btnRef = useRef() // 

    console.log('未绑定前：', btnRef.current)   // undefined

    useEffect(() => {
        // 获取DOM节点
        console.log(btnRef.current)
        console.log(btnRef.current.innerHTML)


        console.log(`开始监听${friendId}的在线状态`);
        // 此处并不完全等同于willUnmount
        // props更新了，也会执行结束监听
        // 返回的函数，会在下一次effect执行之前先执行
        return () => {
            console.log(`结束监听${friendId}在线状态`);
        }
    })

    return <div>
        好友 {friendId} 在线状态：{status.toString()}
        <button ref={btnRef}>点击</button>
    </div>
}


export default FriendStatus