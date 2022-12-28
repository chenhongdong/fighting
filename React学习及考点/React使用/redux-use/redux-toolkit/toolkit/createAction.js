

function createAction(type, prepareAction) {
    function actionCreator(payload) {
        if (prepareAction) {
            let prepared = prepareAction(payload)
            return {
                type,
                ...prepared
            }
        }

        return {
            type,
            payload
        }
    }
    actionCreator.type = type
    return actionCreator
}

export default createAction