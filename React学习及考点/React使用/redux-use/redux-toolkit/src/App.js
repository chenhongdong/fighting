import React from "react"
import todoApi from "./todos"

function App() {
    const { isLoading, data, error } = todoApi.endpoints.getTodo.useQuery(2) // 可简写为useGetTodoQuery(2)
    console.log('isLoading', isLoading)
    console.log('data', data)
    console.log('error', error)
    if (isLoading) {
        return <div>加载中...</div>
    } else if (data) {
        return <div>数据加载正常： {data.text}</div>
    } else if (error) {
        return <div>数据错误 {error.error}</div>
    } else {
        return null
    }
}


export default App