import { combineReducers, ReducersMapObject, AnyAction, Reducer  } from 'redux'
import { connectRouter } from 'connected-react-router'
import home from "./home";
import mine from "./mine";
import profile from "./profile";
import history from '@/history';
import { RootState } from '@/typings'


let reducers: ReducersMapObject<RootState, AnyAction> = {
    home,
    mine,
    profile,
    router: connectRouter(history)
}

const rootReducer: Reducer<RootState, AnyAction> = combineReducers<RootState>(reducers)

export default rootReducer