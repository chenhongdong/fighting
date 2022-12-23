import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:9001'


axios.interceptors.response.use(res => res.data, err => Promise.reject(err))


export default axios