import { ReducersMapObject, AnyAction, Reducer  } from 'redux'
import { connectRouter } from 'connected-react-router'
import home from "./home";
import mine from "./mine";
import profile from "./profile";
import history from '@/history';
import { RootState } from '@/typings'
import produce from 'immer'
import { combineReducers } from 'redux-immer'
import cart from './cart'


let reducers: ReducersMapObject<RootState, AnyAction> = {
    home,
    mine,
    profile,
    cart,
    router: connectRouter(history)
}

const rootReducer: Reducer<RootState, AnyAction> = combineReducers<RootState>(produce, reducers)

export default rootReducer