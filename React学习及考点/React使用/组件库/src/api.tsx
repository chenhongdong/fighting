import axios from 'axios'
import qs from 'qs'

axios.defaults.baseURL = 'http://localhost:3000'

export const getChildren = (data: any) => {
    return axios.get(`/getChildren?${qs.stringify({ key: data.key, name: data.name })}`).then(res => res.data.data).catch(err => console.log(err))
}

export default axios