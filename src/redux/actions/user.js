import * as apiCalls from "../../utils/apiCalls";
import { actions, _pending, _fulfilled, _rejected } from "./actionTypes";

// fetch all data
const fetchAllDataRequest = (req) => {
  return {
    type: actions.fetchAllData + _pending,
    payload: { req: req },
  };
};

const fetchAllDataSuccess = ({ data, pageInfo }) => {
  return {
    type: actions.fetchAllData + _fulfilled,
    payload: { users: data, pageInfo: pageInfo },
  };
};

const fetchAllDataError = (msg) => {
  return {
    type: actions.fetchAllData + _rejected,
    payload: { msg },
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
        console.log(err);
        const msg = "Request error";
        dispatch(fetchAllDataError(msg));
      });
  };
};

// search user
const searchUserRequest = (req) => {
  return {
    type: actions.searchUser + _pending,
    payload: { req: req },
  };
};

const searchUserSuccess = ({ data, pageInfo }) => {
  return {
    type: actions.searchUser + _fulfilled,
    payload: { users: data, pageInfo: pageInfo },
  };
};

const SearchUserError = (msg) => {
  return {
    type: actions.searchUser + _rejected,
    payload: { msg },
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
        const msg = "Request error";
        dispatch(SearchUserError(msg));
      });
  };
};

// update history
const updateUserDataRequest = (req) => {
  return {
    type: actions.updateUserData + _pending,
    payload: { req: req },
  }
};

const updateUserDataSuccess = (data) => {
  return {
    type: actions.updateUserData + _fulfilled,
    payload: { users: data }
  }
};

const updateUserDataError = (msg) => {
  return {
    type: actions.updateUserData + _rejected,
    payload: { msg }
  }
};

export const updateUserData = (url, req, data, config) => {
  return (dispatch) => {
    dispatch(updateUserDataRequest(req));
    apiCalls.updateUserData(url, data, config)
      .then((res) => {
        dispatch(updateUserDataSuccess(res.data));
        dispatch(getUserDetail(url));
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        const msg = "Request error..!";
        dispatch(updateUserDataError(msg));
      })
  };
};

// get history
const getHistoryByIdRequest = (req) => {
  return {
    type: actions.getHistoryById + _pending,
    payload: { req: req },
  }
};

const getHistoryByIdSuccess = (data) => {
  return {
    type: actions.getHistoryById + _fulfilled,
    payload: { users: data }
  }
};

const getHistoryByIdError = (msg) => {
  return {
    type: actions.getHistoryById + _rejected,
    payload: { msg }
  }
};

const getHistoryById = (url, req) => {
  return (dispatch) => {
    dispatch(getHistoryByIdRequest(req));
    apiCalls.getHistoryById(url)
      .then((res) => {
        dispatch(getHistoryByIdSuccess(res.data));
      })
      .catch((err) => {
        console.log(err);
        const msg = "Request error..!";
        dispatch(getHistoryByIdError(msg));
      })
  };
};

// add history
// const addHistoryRequest = (req) => {
//   return {
//     type: actions.addHistory + _pending,
//     payload: { req: req },
//   }
// };

const addHistorySuccess = (payload) => {
  return {
    type: actions.addHistory + _fulfilled,
    payload: payload,
  }
};

const addHistoryError = (msg) => {
  return {
    type: actions.addHistory + _rejected,
    payload: { msg }
  }
};

export const addHistory = (data) => {
  return (dispatch) => {
    apiCalls.addHistory(data)
      .then((res) => {
        console.log(res);
        const payload = {
          user_id: res.data.data.user_id,
          corporate_id: res.data.data.corporate_id,
          rating: res.data.data.rating,
        }
        dispatch(addHistorySuccess(payload));
      })
      .catch((err) => {
        console.log(err);
        const msg = "Request error..!";
        dispatch(addHistoryError(msg));
      })
  };
};

// get user detail
const getUserDetailRequest = (req) => {
  return {
    type: actions.getUserDetail + _pending,
    payload: { req: req },
  }
};

const getUserDetailSuccess = (data) => {
  return {
    type: actions.getUserDetail + _fulfilled,
    payload: { users: data }
  }
};

const getUserDetailError = (msg) => {
  return {
    type: actions.getUserDetail + _rejected,
    payload: { msg }
  }
};

export const getUserDetail = (url, req) => {
  return (dispatch) => {
    dispatch(getUserDetailRequest(req));
    apiCalls.getUserDetail(url)
      .then((res) => {
        dispatch(getUserDetailSuccess(res.data));
        dispatch(getHistoryById(url.replace("user", "history")));
      })
      .catch((err) => {
        console.log(err);
        const msg = "Request error..!";
        dispatch(getUserDetailError(msg));
      })
  };
};

