import { combineReducers } from "redux";
import UserReducer from './Reducers/UserReducer'
import TransactionReducer from './Reducers/TransactionReducer'

export const reducers = combineReducers({
    UserReducer,
    TransactionReducer
})