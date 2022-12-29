import produce from "immer"


function createReducer(initialState, reducers = {}) {
    return function(state = initialState, action) {
        // reducer是个函数，可执行
        let reducer = reducers[action.type]

        if (reducer) {
            // produce基于state的老状态，生成一个draft的草稿新状态，不可变的数据
            return produce(state, draft => {
                reducer(draft, action)
            })
        }

        return state
    }
}


createReducer({number: 0,}, {
    [add]: state => state.numbe
})

export default createReducer