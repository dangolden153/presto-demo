import { GET_TRANSACTION, BTC_TRANSACTION, USDT_TRANSACTION } from "../Types/type";

const initialState = {
    transaction: [],
    btcTransaction: [],
    usdtTransaction: []

}


const TransactionReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TRANSACTION:
            return {
                ...state,
                transaction: action.payload
            }
        case BTC_TRANSACTION:
            return {
                ...state,
                btcTransaction: action.payload
            }
        case USDT_TRANSACTION:
            return {
                ...state,
                usdtTransaction: action.payload
            }
        default:
            return state;
    }
}

export default TransactionReducer

