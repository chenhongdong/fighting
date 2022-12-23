import { useEffect, useRef, useState, useLayoutEffect } from "react";

export default function useDrag() {
    // dom元素的位置
    const positionRef = useRef({
        currentX: 0,    // 当前位置
        currentY: 0,
        lastX: 0,       // 上一次位置
        lastY: 0
    })

    // 要让哪个dom元素进行移动
    const domRef = useRef(null)
    // 用来让组件刷新
    const [, forceUpdate] = useState({})

    // dom操作一般使用 useLayoutEffect的hook，它是微任务，会在渲染前执行
    // useEffect 是宏任务，会在渲染后执行
    useLayoutEffect(() => {
        // 拖拽开始的x坐标和y坐标
        let startX, startY
        const  touchstart = (e) => {
            const { clientX, clientY } = e.touches[0]
            startX = clientX
            startY = clientY
            console.log('你好', e)
            domRef.current.addEventListener('touchmove', touchmove)
            domRef.current.addEventListener('touchend', touchend)
        }

        const touchmove = (e) => {
            const { clientX, clientY } = e.touches[0]
            positionRef.current.currentX = positionRef.current.lastX + (clientX - startX)
            positionRef.current.currentY = positionRef.current.lastY + (clientY - startY)
            // 调用forceUpdate组件会刷新
            forceUpdate({})
        }

        const touchend = (e) => {
            positionRef.current.lastX = positionRef.current.currentX
            positionRef.current.lastY = positionRef.current.currentY

            domRef.current.removeEventListener('touchmove', touchmove)
            domRef.current.removeEventListener('touchend', touchend)
        }


        domRef.current.addEventListener('touchstart', touchstart)
        
    }, [])  // 依赖项为空数组，就只会执行一次

    

    const style = { x: positionRef.current.currentX, y: positionRef.current.currentY }    

    return [style, domRef]
}