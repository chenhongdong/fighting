/* 
    1. event 是 SyntheticBaseEvent，模拟出来 Dom 事件的所有能力
    2. event.nativeEvent 是原生事件对象
    3. 所有的事件，都被挂载到 根元素 div#root 上(v17开始，v16绑定到document)
    4. 和 Dom 事件不一样，和 Vue 事件也不一样
*/

/* 
    为何要合成事件机制？
    1、更好的兼容性和跨平台
    2、挂载到 document，减少内存消耗，避免频繁的解绑
    3、方便事件的统一管理（如：事务机制）
*/