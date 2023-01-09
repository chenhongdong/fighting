# 单向数据流概述
1. dispatch(action)
action其实就是一个普通对象，由于不能直接修改state，所以需要告诉dispatch一个action行为对象
来对state进行修改操作
2. reducer -> newState
reducer是把(state, action) 转换为 newState的纯函数
描述了action如何把state转成一个 newState
3. subscribe 触发通知




