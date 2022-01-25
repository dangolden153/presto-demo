import { USER_DATA ,USER_TOKEN} from "../Types/type";

const initialState = {
    user :null,
    userToken:null
}


const UserReducer =(state =initialState, action) => {
    switch (action.type) {
        case USER_DATA:
            return{
                ...state,
                user: action.payload
            }

            case USER_TOKEN:
            return{
                ...state,
                userToken: action.payload
            }
    
    
        default:
            return state;
    }
}

export default  UserReducer