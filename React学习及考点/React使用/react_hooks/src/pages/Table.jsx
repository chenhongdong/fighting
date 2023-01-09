import React from "react";
import useRequest from '../hooks/useRequest'
import useAxios from "../customHooks/useAxios";


// 请求的接口地址，此接口可以实现分页请求
const URL = '/api/users'

/**
 * 
 * @returns useRequest 自定义hook  用来请求远程接口，用来实现分页数据的获取
 */
function Table() {
    // const [data, options, setOptions] = useRequest(URL)
    // current=当前页  totalPage=总页数  list=本页数据(数组)
    // const { current, totalPage, list } = data

    const url = 'http://localhost:9001/api/users'
    const [loading, data, error] = useAxios(url)
    console.log('可乐', loading, data, error)
    const { current, totalPage, list } = data

    console.log('值：', list, totalPage)


    // return <div>你好</div>

    return (
        <>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        list.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <nav>
                <ul className="pagination">
                    {
                        Array(totalPage).fill(0).map((item, index) => (
                            <li key={index}>
                                <button onClick={() => setOptions({ ...options, current: index + 1 })} className="btn btn-primary">{index + 1}</button>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </>
    )
}



export default Table