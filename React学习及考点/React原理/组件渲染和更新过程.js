/* 
    JSX如何渲染为页面
    - props state
    - createElement 生成 vnode
    - patch(ele, vnode)

    setState之后如何更新页面
    - setState(newState) -> dirtyComponents(可能子组件)
    - createElement 生成 newVnode
    - patch(ele, newVnode)


    更新的两个阶段： reconciliation commit
    - reconciliation阶段：执行diff算法，纯js计算
    - commit阶段：DOM渲染到页面
*/