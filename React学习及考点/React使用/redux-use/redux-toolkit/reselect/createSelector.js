function createSelector(selectors, callback) {
    let lastValue, lastState
    return (state) => {
        if (lastState === state) {
            return lastValue
        }
        let values = selectors.map(selector => selector(state))
        lastValue = callback(...values)
        lastState = state
        return lastValue
    }
}

export default createSelector