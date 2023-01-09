# Q1. 为什么会有Hooks，它解决了哪些问题？

# Q2. Hooks如何模拟组件生命周期？
useEffect钩子可以模拟生命周期


# Q3. 如何自定义Hook？

# Q4. Hooks性能优化？

# Q5. 使用Hooks遇到哪些坑？

# Q6. Hooks相比HOC和Render Prop有哪些优点？




## useState使用
- useState(0)传入初始值，返回数组[state, setState]
- 通过state获取值
- 通过setState(123)修改值

## Hooks命名规范
- 规定所有的Hooks都use开头，如useEffect
- 自定义Hook也要以use开头

## useEffect使用
- 模拟`DidMount` -> useEffect依赖[]
- 模拟`DidUpdate` -> useEffect无依赖，或者依赖[a,b,c]
- 模拟`WillUnmount` -> useEffect中返回一个函数
- 不写第二个参数，是直接模拟`DidMount`和`DidUpdate`两个生命周期
- 在返回函数的时候，如果有props变化了，会先之前返回函数里的逻辑再执行下一次的effect

### useEffect让纯函数有了副作用
- 默认情况下，执行纯函数，输入参数，返回结果，无副作用
    - 纯函数：不影响外部变量变化的函数
- 副作用，就是对函数之外造成影响，如设置全局定时任务
- 而组件需要副作用，所以需要useEffect钩到纯函数中



## useRef
获取DOM节点使用


## useReducer
```
const [state, dispatch] = useReducer(reducer, initialState)
```
- useReducer是 useState的代替方案，用于state复杂变化
- 根本区别useReducer是单个组件的状态管理，组件通讯还需要props
- 而redux是全局的状态管理，多组件共享数据


## useMemo使用做优化
- React默认会更新所有子组件
- 类组件使用SCU和PureComponent做优化
- 函数组件使用memo和useMemo，优化原理都是相同的，浅层比较优化


## useCallback做优化
- useMemo 缓存数据
- useCallback 缓存函数



# Hooks使用规范
- 只能用于React函数组件和自定义Hook中
- 只能用于顶层代码，不能在循环、判断中使用Hooks
- eslint插件eslint-plugin-react-hooks可以提示帮忙



# 类组件逻辑复用