/* 
    vdom是什么
    h 函数
        传入tag,props,children，返回一个vnode数据结构
    vnode 数据结构
        
    patch 函数
        把vnode结构渲染到dom节点中
        以及把新的vnode结构更新到旧的vnode结构上
*/

// vnode 数据结构
{
    tag: 'div',
    props: {
        className: 'container',
        id: 'wrapper'
    },
    children: [
        {
            tag: 'p',
            children: 'vdom'
        },
        {
            tag: 'ul',
            props: {
                style: 'font-size: 20px;color:#0cc;'
            },
            children: [
                {
                    tag: 'li',
                    children: 'a'
                },
                {
                    tag: 'li',
                    children: 'b'
                }
            ]
        }
    ]
}


/* 
    diff
    只比较同一层级，不跨级比较
    
    tag不相同，则直接删掉，不再深度比较

    tag和key，两者都相同，则认为是相同节点，不再深度比较

*/