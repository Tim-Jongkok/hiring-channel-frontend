import { actions } from "../actions/actionTypes";

const initialState = {
  id: null,
  firstName: "",
  lastName: "",
  corporateName: "",
  image: "",
  type_id: null,
  token: "",
  msgErrPassword: "",
  msgErrEmailReady: "",
  isLogin: false,
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actions.addMsgErrPassword:
      return {
        ...state,
        msgErrPassword: "username or password is wrong..!",
      };
    case actions.addMsgEmailReady:
      return {
        ...state,
        msgErrEmailReady: "email is ready..?",
      };
    case actions.clearMsg:
      return {
        ...state,
        msgErrPassword: "",
        msgErrEmailReady: "",
      };
    case actions.addDataLogin:
      return {
        ...state,
        id: payload.id,
        firstName: payload.first_name,
        lastName: payload.last_name,
        corporateName: payload.corporate_name,
        image: payload.image,
        type_id: payload.type_id,
        token: payload.token,
        isLogin: true,
      };
    case actions.logoutUser:
      sessionStorage.clear();
      return {
        state: initialState,
      };
    default:
      return state;
  }
};

export default authReducer;
