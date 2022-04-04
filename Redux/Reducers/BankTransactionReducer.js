import { GET_Back_DETAILS, GET_WITHDRAWALS } from "../Types/type";

const initialState = {
  bankDetails: [],
  withdrawHistory: [],
};

const BankTransactionReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_Back_DETAILS:
      return {
        ...state,
        bankDetails: action.payload,
      };
    case GET_WITHDRAWALS:
      return {
        ...state,
        withdrawHistory: action.payload,
      };
    default:
      return state;
  }
};

export default BankTransactionReducer;
