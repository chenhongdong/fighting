const produce = require('immer').default

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

