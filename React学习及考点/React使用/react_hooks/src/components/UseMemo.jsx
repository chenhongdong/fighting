import React, { memo, useMemo, useState } from "react";


// 子组件
// function Child({ userInfo }) {
//     console.log('子组件', userInfo)

//     return <div>
//         <p>这是子组件{userInfo.name} {userInfo.age}</p>
//     </div>
// }
// memo类似class PureComponent，对props进行浅层比较
const Child = memo(({ userInfo }) => {
    console.log('子组件', userInfo)

    return <div>
        <p>这是子组件{userInfo.name} {userInfo.age}</p>
    </div>
})



// 父组件
function UseMemo() {
    console.log('父组件')

    const [count, setCount] = useState(0)
    const [name, setName] = useState('小白')
    // const userInfo = { name, age: 7 }
    // 用 useMemo 缓存数据，有依赖
    const userInfo = useMemo(() => {
        return { name, age: 8 }
    }, [name])

    return <div>
        <p>useMemo count: {count} <button onClick={() => setCount(count + 1)}>点击</button></p>
        <Child userInfo={userInfo} />
    </div>
}


export default UseMemo