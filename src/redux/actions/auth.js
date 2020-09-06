import * as apiCalls from "../../utils/apiCalls";
import { actions } from "./actionTypes";

export const register = (data) => {
  return (dispatch) => {
    apiCalls.register(data).then((res) => {
      console.log(res);
      if (res.data.success === false) {
        dispatch(addMsgErrEmail());
      } else {
        const payload = {
          id: res.data.data.data.id,
          first_name: res.data.data.data.first_name,
          last_name: res.data.data.data.last_name,
          corporate_name: res.data.data.data.corporate_name,
          image: res.data.data.data.image,
          type_id: res.data.data.data.type_id,
          token: res.data.data.token,
        };
        dispatch(addDataLogin(payload));
      }
    });
  };
};

export const logout = () => {
  return {
    type: actions.logoutUser,
  };
};

export const login = (data) => {
  return {
    type: actions.userLogIn,
    payload: data,
  };
};

const addMsgErrEmail = () => {
  return {
    type: actions.addMsgEmailReady,
  };
};

const addMsgErrPassword = () => {
  return {
    type: actions.addMsgErrPassword,
  };
};

export const clearMsg = () => {
  return {
    type: actions.clearMsg,
  };
};

const addDataLogin = (payload) => {
  return {
    type: actions.addDataLogin,
    payload: payload,
  };
};

export const loginUser = (data) => {
  return (dispatch) => {
    apiCalls
      .login(data)
      .then((res) => {
        console.log(res);
        if (res.data.success === false) {
          dispatch(addMsgErrPassword());
        } else {
          dispatch(addDataLogin(res.data.data));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
