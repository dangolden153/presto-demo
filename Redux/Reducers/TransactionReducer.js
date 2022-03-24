import {
  GET_TRANSACTION,
  BTC_TRANSACTION,
  USDT_TRANSACTION,
  CARD_RATE,
  CRPTO_RATE,
  USDT_ADD,
  BTC_ADD,
} from "../Types/type";

const initialState = {
  transaction: [],
  btcTransaction: [],
  usdtTransaction: [],
  getCardRate: [],
  getCyptoRate: [],
  getUSDTAddress: [],
  getBTCAddress: [],
};

const TransactionReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TRANSACTION:
      return {
        ...state,
        transaction: action.payload,
      };
    case BTC_TRANSACTION:
      return {
        ...state,
        btcTransaction: action.payload,
      };
    case USDT_TRANSACTION:
      return {
        ...state,
        usdtTransaction: action.payload,
      };

    case CARD_RATE:
      return {
        ...state,
        getCardRate: action.payload,
      };

    case CRPTO_RATE:
      return {
        ...state,
        getCyptoRate: action.payload,
      };
    case USDT_ADD:
      return {
        ...state,
        getUSDTAddress: action.payload,
      };
    case BTC_ADD:
      return {
        ...state,
        getBTCAddress: action.payload,
      };
    default:
      return state;
  }
};

export default TransactionReducer;
