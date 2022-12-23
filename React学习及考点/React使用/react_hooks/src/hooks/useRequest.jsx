import { useState, useEffect } from 'react'
import axios from '@/api'


export default function useRequest(url) {
    // 查询参数
    const [options, setOptions] = useState({
        current: 1,
        pageSize: 5
    })
    // 接口返回的数据
    const [data, setData] = useState({
        totalPage: 0,
        list: []
    })

    // 调用接口，返回数据
    function getData() {
        let { current, pageSize } = options
        axios.get(`${url}?current=${current}&pageSize=${pageSize}`)
             .then(res => {
                setData({...res})
             })
    }


    useEffect(getData, [options, url])

    return [data, options, setOptions]
}

