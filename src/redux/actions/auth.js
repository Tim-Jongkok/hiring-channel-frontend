import * as apiCalls from "../../utils/apiCalls";
import {actions} from "./actionTypes";

export const register = (url, data) => {
  return {
    type: actions.userRegister,
    payload: apiCalls.register(url, data),
  };
};

export const login = (url, data) => {
  return {
    type: actions.userLogIn,
    payload: apiCalls.login(url, data),
  };
};

export const logout = () => {
  return {
    type: actions.userLogOut,
  };
};
