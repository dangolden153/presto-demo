import { combineReducers } from "redux";
import UserReducer from "./Reducers/UserReducer";
import TransactionReducer from "./Reducers/TransactionReducer";
import notificationReducer from "./Reducers/notificationReducer";
import BankTransactionReducer from "./Reducers/BankTransactionReducer";

export const reducers = combineReducers({
  UserReducer,
  TransactionReducer,
  notificationReducer,
  BankTransactionReducer,
});
