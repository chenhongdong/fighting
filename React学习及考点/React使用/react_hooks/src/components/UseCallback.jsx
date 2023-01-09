import React, { memo, useCallback, useMemo, useState } from "react";


const Child = memo(({userInfo, onChange}) => {
    console.log('子组件渲染', userInfo)

    return <div>
        <p>子组件是{userInfo.name} {userInfo.cat}</p>
        <input onChange={onChange} />
    </div>
})

const UseCallback = (props) => {
    console.log('父组件渲染')

    const [count, setCount] = useState(0)
    const [name, setName] = useState('小白')
    const userInfo = useMemo(() => {
        return { name, cat: '猫咪'}
    }, [name])
    // 给子组件又传了个函数当参数，此时父组件更新又会带着子组件也一起更新了
    // 使用useCallback对函数参数进行缓存
    const onChange = useCallback((e) => {
        console.log(e.target.value)
    }, [])

    return <div>
        useCallback的count:{count}
        <button onClick={() => setCount(count+1)}>点击</button>
        <br />
        <Child userInfo={userInfo} onChange={onChange} />
    </div>
}


export default UseCallback