import {GET_TRANSACTION} from "../Types/type";

const initialState = {
    transaction:[]
}


const TransactionReducer =(state =initialState, action) => {
    switch (action.type) {
        case GET_TRANSACTION:
            return{
                ...state,
                transaction: action.payload
            }
    
        default:
            return state;
    }
}

export default TransactionReducer

