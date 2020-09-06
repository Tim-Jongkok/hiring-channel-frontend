import userReducer from "./user.reducer";
import authReducer from "./auth.reducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  userState: userReducer,
  authState: authReducer,
});

export default allReducers;
