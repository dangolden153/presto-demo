import { USER_DATA, USER_TOKEN, Fetch_BANKS } from "../Types/type";

const initialState = {
  user: null,
  userToken: null,
  allBanks: [],
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_DATA:
      return {
        ...state,
        user: action.payload,
      };

    case USER_TOKEN:
      return {
        ...state,
        userToken: action.payload,
      };

    case Fetch_BANKS:
      return {
        ...state,
        allBanks: action.payload,
      };

    default:
      return state;
  }
};

export default UserReducer;
