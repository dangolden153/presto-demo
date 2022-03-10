import {
  GET_TRANSACTION,
  BTC_TRANSACTION,
  USDT_TRANSACTION,
  CARD_RATE
} from "../Types/type";

const initialState = {
  transaction: [],
  btcTransaction: [],
  usdtTransaction: [],
  getCardRate: []
};

const TransactionReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TRANSACTION:
      return {
        ...state,
        transaction: action.payload
      };
    case BTC_TRANSACTION:
      return {
        ...state,
        btcTransaction: action.payload
      };
    case USDT_TRANSACTION:
      return {
        ...state,
        usdtTransaction: action.payload
      };

    case CARD_RATE:
      return {
        ...state,
        getCardRate: action.payload
      };
    default:
      return state;
  }
};

export default TransactionReducer;
