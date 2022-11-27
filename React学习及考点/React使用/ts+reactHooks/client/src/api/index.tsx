import axios, { AxiosRequestConfig } from 'axios'

axios.defaults.baseURL = 'http://localhost:8001'

axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'

// 请求拦截，处理请求时在请求头上带着token
axios.interceptors.request.use((config: AxiosRequestConfig) => {
    // 把存在sessionStorage里的token取出
    const access_token = sessionStorage.getItem('access_token')

    if (access_token)
        config.headers['Authorization'] = `Bearer ${access_token}`

    return config
}, (err: any) => Promise.reject(err))

// 响应拦截
axios.interceptors.response.use(res => res.data, err => Promise.reject(err))

export default axios