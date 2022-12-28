import { createAction, createReducer } from "./"


function createSlice(options) {
    const { name, initialState, reducers } = options
    let actions = {}

    let prefixReducers = {}

    Object.keys(reducers).forEach(key => {
        const type = getType(name, key)   // counter/add
        actions[key] = createAction(type)    // function actionCreator() { return { type: 'counter/add' }}
        prefixReducers[type] = reducers[key]
    })

    let reducer = createReducer(initialState, prefixReducers)

    return {
        actions,
        reducer
    }
}

function getType(slice, actionKey) {
    return slice + '/' + actionKey
}

export default createSlice