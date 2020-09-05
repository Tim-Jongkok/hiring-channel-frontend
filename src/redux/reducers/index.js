import userReducer from "./user.reducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  userState: userReducer,
});

export default allReducers;
