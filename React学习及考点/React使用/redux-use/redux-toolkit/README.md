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

# redux的使用
1. 先看看老写法
2. 然后一步步变成新写法

## redux老写法的问题
- action creator 增加代码量
- `const ADD = 'ADD'` 冗余
- `switch` 结构不清晰

## Toolkit解决的问题
- 配置redux store 过于复杂
- 必须添加很多软件包才能开始使用redux做事情
- redux有太多样板代码



# Toolkit的使用

## configureStore
- Toolkit工具包有一个 `configureStore` 函数，其中覆盖了`createStore`的功能
- `configureStore`函数 提供简化的配置选项。它可以自己组合切片slice的reducer，添加你提供的任何redux中间件，默认情况下包含`redux-thunk`中间件，并启用Redux DevTools扩展

## createAction
- `createAction` 接受一个 action 类型字符串作为参数，并返回一个使用该类型字符串的 `actionCreator` 函数

## createReducer
- Toolkit包含了一个`createReducer`函数，它让使用“查找表”对象的方式编写 reducer
- 其中对象的每一个key 都是一个 redux action type字符串，value 是 reducer 函数


## createSlice
- createSlice函数允许我们提供一个带有`reducer函数的对象`，并且它讲根据我们列出的 `reducer名称` 自动生成 action type 字符串和 action creator 函数
- createSlice返回一个`分片`对象，该对象包含生成的 `reducer函数` 作为一个名为reducer的字段，以及在一个名为 actions 的对象中生成的 action creator
    - reducers参数： 一个包含case reducer函数的对象，它的key将被用来生成动作类型常量并在派发的时候可见
    - extraReducers参数： 允许createSlice去响应别的slice创建的动作类型，它们不会用来生成actions

## immer不可变数据(Toolkit已内置)
核心实现是利用ES6的proxy，几乎以最小的成本实现了js的不可变数据结构
```javascript
import produce from 'immer'

// 老状态其实是不可变的
let baseState = {
    ids: [1, 2],
    point: {
        x: 100,
        y: 80
    }
}
/**
 * 基于老状态创建新状态
 * baseState 老状态
 * draft 草稿，根据老状态生成新状态的草稿状态
 */
let nextState = produce(baseState, (draft) => {
    draft.ids.push(3)
})

console.log('old', baseState)   // [1, 2]
console.log('new', nextState.ids)   // [1, 2, 3]
console.log(baseState.point === nextState.point)   // true
```

## reselect(Toolkit已内置)
- reselect可以缓存运算结果，`提升性能`
- reselect的原理：只要相关状态不变，就直接使用上一次的缓存结果
```javascript
// reselect中createSelector实现
function createSelector(selectors, callback) {
    let lastState, lastValue
    return (state) => {
        // 状态未改变，走缓存处理
        if (lastState === state) {
            return lastValue
        }
        const values = selectors.map(selector => selector(state))
        lastValue = callback(...values)
        lastState = state
        return lastValue
    }
}
```


## createAsyncThunk
- 接收redux动作类型字符串和一个返回promise回调的函数
- 它会基于你传递的动作类型前缀生成promise生命周期的动作类型
- 并且返回一个thunk动作创建者，这个thunk动作创建者会运行promise回调并派发生命周期动作
- 它抽象了处理异步请求生命周期的标准推荐方法