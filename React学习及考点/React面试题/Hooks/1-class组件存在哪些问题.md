# 函数组件的特点
- 没有组件实例
- 没有生命周期
- 没有state和setState，只能接收props

# class组件的问题
- 大型组件很难拆分和重构，很难测试(即class不易拆分)
- 相同业务逻辑，分散到各个方法中，逻辑混乱
- 复用逻辑变的复杂，如Mixins(已废弃)、HOC(高阶组件)、Render Prop

# React组件更易用函数表达
- React提倡函数式编程，view = fn(props)
- 函数更灵活，更易拆分，更易测试
- 但函数组件太简单，需要增强能力————Hooks