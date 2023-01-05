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
- 模拟`componentDidMount` -> useEffect依赖[]
- 模拟`componentDidUpdate` -> useEffect无依赖，或者依赖[a,b,c]
- 模拟`componentWillUnmount` -> useEffect中返回一个函数

### useEffect让纯函数有了副作用
- 默认情况下，执行纯函数，输入参数，返回结果，无副作用
    - 纯函数：不影响外部变量变化的函数
- 副作用，就是对函数之外造成影响，如设置全局定时任务
- 而组件需要副作用，所以需要useEffect钩到纯函数中