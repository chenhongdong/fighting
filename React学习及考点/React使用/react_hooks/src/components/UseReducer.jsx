import React, { useReducer } from "react";


const initialState = {
    star: 9999,
    publish: 2022
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD':
            return { ...state, star: state.star + 1 }
        case 'MINUS':
            return { ...state, star: state.star - 1 }
        case 'RESET':
            return { ...state, star: action.payload }
        default:
            return state
    }
}

function init(initialState) {
    console.log('初始参数', initialState)
    return { star: initialState.star, year: 2022, album:'最伟大的作品', song: '粉色海洋' }
}

function UseReducer() {
    const [state, dispatch] = useReducer(reducer, initialState, init)

    console.log(state)

    return <div>
        <p>
            支持周杰伦的新专辑《{state.album}》
            当前点赞数为{state.star}
        </p>
        <p>目前正在播放歌曲为<b>《{state.song}》</b></p>
        <button onClick={() => dispatch({ type: 'ADD' })}>增加</button>
        <button onClick={() => dispatch({ type: 'MINUS' })}>减少</button>
        <button onClick={() => dispatch({ type: 'RESET', payload: initialState.star })}>重置</button>
    </div>
}


export default UseReducer