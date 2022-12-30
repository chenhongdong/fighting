

// 组件中只接收了一个 props，去渲染结果
// 没有其他的逻辑，没有state的话，一般可以使用函数组件
// 函数组件可以理解为一个class组件的基本简写形式

function List(props) {
    const { list } = props

    return <ol>
        {
            list.map(item => (
                <li key={item.id}>
                    <span>{item.title}</span>
                </li>
            ))
        }
    </ol>
}

/*
    函数组件
    1. 纯函数，输入props，输出JSX
    2. 没有实例，没有生命周期，没有state
    3. 不能扩展其他方法，要使用的方法只能写在函数内
*/