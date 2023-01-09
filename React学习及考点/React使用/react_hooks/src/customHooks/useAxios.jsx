import { useState, useEffect } from 'react'
import axios from 'axios'


/**
 * 封装 axios 发送网络请求的自定义hook
 * @param {*} url 
 */
function useAxios(url) {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState({
        list: [],
        totalPage: 0,
        current: 1,
        pageSize: 5
    })
    const [error, setError] = useState()


    useEffect(() => {
        console.log('没打印');
        // 利用axios发送网络请求
        setLoading(true) 

        axios.get(url)
            .then(res => {
                console.log('请求成功返回值：', res)
                setData(res)
            })
            .catch(err => setError(err))
            .finally(() => setLoading(false))
    }, [url])


    return [loading, data, error]
}


export default useAxios