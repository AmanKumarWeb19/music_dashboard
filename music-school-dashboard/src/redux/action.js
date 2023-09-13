import axios from "axios";
import { LOGIN_SUCCESS } from "./actionTypes";

export const LoginSuccess = (payload) => ({
  type: LOGIN_SUCCESS,
  payload,
});

export const Login = (email, password) => (dispatch) => {
  return axios
    .post(`https://reqres.in/api/login`, { email, password })
    .then((res) => {
      console.log(res.data);
      dispatch(LoginSuccess(res.data));
    })
    .catch((err) => console.log(err));
};
