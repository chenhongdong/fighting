import React, { useReducer } from "react";


const initialState = { count: 0 }

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 }
        case 'decrement':
            return { count: state.count - 1 }
        default:
            return state
    }
}


function UseReducer() {
    const [state, dispatch] = useReducer(reducer, initialState)

    return <div>
        count: {state.count}
        <button onClick={() => dispatch({type:'increment'})}>增加</button>
        <button onClick={() => dispatch({type:'decrement'})}>减少</button>
    </div>
}


export default UseReducer