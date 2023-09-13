import { LOGIN_SUCCESS } from "./actionTypes";

const initialState = {
  signupData: null,
  isAuth: false,
};

export const reducer = (state = initialState, action) => {
  console.log("Action", action);
  switch (action.type) {
    case LOGIN_SUCCESS: {
      return {
        ...state,
        signupData: action.payload,
        isAuth: true,
      };
    }
    default:
      return state;
  }
};
