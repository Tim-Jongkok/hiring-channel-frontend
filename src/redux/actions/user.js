import * as apiCalls from "../../utils/apiCalls";
import { actions, _pending, _fulfilled, _rejected } from "./actionTypes";

// fetch all data
const fetchAllDataRequest = (req) => {
  return {
    type: actions.fetchAllData + _pending,
    payload: { req: req},
  };
};

const fetchAllDataSuccess = ({ data, pageInfo }) => {
  return {
    type: actions.fetchAllData + _fulfilled,
    payload: { users: data, pageInfo: pageInfo},
  };
};

const fetchAllDataError = (msg) => {
  return {
    type: actions.fetchAllData + _rejected,
    payload: {msg},
  };
};

export const fetchAllUserData = (url, req) => {
  return (dispatch) => {
    dispatch(fetchAllDataRequest(req));
    apiCalls
      .fetchAllData(url)
      .then((res) => {
        dispatch(fetchAllDataSuccess(res.data));
      })
      .catch((err) => {
        const msg="Request error";
        dispatch(fetchAllDataError(msg));
      });
  };
};

// search user
const searchUserRequest = (req) => {
  return {
    type: actions.searchUser + _pending,
    payload: { req: req},
  };
};

const searchUserSuccess = ({ data, pageInfo }) => {
  return {
    type: actions.searchUser + _fulfilled,
    payload: { users: data, pageInfo: pageInfo},
  };
};

const SearchUserError = (msg) => {
  return {
    type: actions.searchUser + _rejected,
    payload: {msg},
  };
};

export const searchUser = (url, req) => {
  return (dispatch) => {
    dispatch(searchUserRequest(req));
    apiCalls
      .fetchAllData(url)
      .then((res) => {
        dispatch(searchUserSuccess(res.data));
      })
      .catch((err) => {
        console.log(err);
        const msg="Request error";
        dispatch(SearchUserError(msg));
      });
  };
};