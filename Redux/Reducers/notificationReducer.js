import { GET_NOTIFICATION } from "../Types/type";

const initialState = {
  notifications: [],
};

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_NOTIFICATION:
      return {
        ...state,
        notifications: action.payload,
      };

    default:
      return state;
  }
};

export default notificationReducer;
