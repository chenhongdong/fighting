import { AnyAction } from 'redux'
import { IMineState } from '@/typings/state'

const initialState: IMineState = {

}

export default function (state: IMineState = initialState, action: AnyAction): IMineState {
    return state
}