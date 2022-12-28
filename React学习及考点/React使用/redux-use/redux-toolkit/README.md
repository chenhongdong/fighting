# 安装包
```
npm i redux redux-logger redux-thunk @reduxjs/toolkit express cors axios



```
- redux 状态管理 核心包
- redux-logger 日志中间件
- redux-thunk 函数中间件
- @reduxjs/toolkit 工具包
- express
- cors express的跨域中间件
- axios 发请求

# 使用
1. 先看看老写法
2. 然后一步步变成新写法

## redux老写法的问题
- action creator 增加代码量
- `const ADD = 'ADD'` 冗余
- `switch` 结构不清晰