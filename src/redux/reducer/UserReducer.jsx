import { POST_USER, Sign } from "./Action/Type";

const initialState = {
  user: null,
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_USER:
      state.user = action.payload;
      return { ...state };
    case Sign:
      state.user = action.payload;
      return { ...state };
    case "LOG_OUT":
      console.log(action);
      state.user = action.payload;
      return { ...state };
    default:
      return state;
  }
};
export default UserReducer;
