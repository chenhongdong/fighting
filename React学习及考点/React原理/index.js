/* 
    React 原理  掌握2/8原则，考察重点，不是考察细节
    
    1. 函数式编程
        纯函数
        不可变值

    2. vdom 和 diff
        h 函数
            传入tag,props,children，返回一个vnode数据结构
        vnode 数据结构
            {}
        patch 函数
            把vnode结构渲染到dom节点中
            以及把新的vnode结构更新到旧的vnode结构上

    3. JSX本质
        就是createElement函数，执行生成vnode，通过patch(ele, vnode)和patch(ele, newVnode)更新渲染到页面

    4. 合成事件
        所有事件都挂载到 root 上
        event不是原生的，是SyntheticBaseEvent合成事件对象
        和vue事件以及dom事件不相同

    5. setState  batchUpdate机制

    6. 组件渲染过程
        
*/