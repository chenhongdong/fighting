// const { createSelector } = require('reselect')


function createSelector(selectors, callback) {
    let lastValue
    return (state) => {
        if (lastValue) {
            return lastValue
        }
        let values = selectors.map(selector => selector(state))
        lastValue = callback(...values)
        return lastValue
    }
}

const selectCounter1 = state => state.counter1
const selectCounter2 = state => state.counter2

const totalSelector = createSelector(
    [selectCounter1, selectCounter2],
    (counter1, counter2) => {
        console.log('计算总和');
        return counter1.number + counter2.number
    }
)

let state = { counter1: { number: 1 }, counter2: { number: 8 } }
let r1 = totalSelector(state)
let r2 = totalSelector(state)
console.log(r1, r2);