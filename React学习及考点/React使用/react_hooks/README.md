# 自定义hook
1. 是个以 use开头的函数
2. 调用react自带的hooks
3. 返回数组的形式

# 自定义hook能做什么
1. 封装通用的功能
2. 开发和使用第三方hooks
3. 自定义hook带来了无限的扩展性，解耦代码




# 拖拽基础
## 触摸事件
| 事件名称 |  描述|  是否包含touches数组
| --- | --- | --- 
|  touchstart  | 触摸开始  | 是
|  touchmove  | 滑动时接触点改变  | 是
|  touchend  | 手指离开屏幕时触摸结束  | 是

## 触摸列表
| 参数 |  描述|
| --- | --- |
|  touches  | 当前位于屏幕上的所有手指的列表
|  targetTouches  | 位于当前DOM元素上手指的列表

## Touch对象
| 参数 |  描述|
| --- | --- |
|  clientX  | 触摸目标在视口中的x坐标
|  clientY  | 触摸目标在视口中的y坐标
|  pageX  | 触摸目标在页面中的x坐标
|  pageY  | 触摸目标在页面中的y坐标