import {
  actions,
  _pending,
  _fulfilled,
  _rejected,
} from "../actions/actionTypes";

const initialState = {
  allUsers: [],
  hasMoreData: false,
  loading: false,
  error: false,
  apiRequest: {
    lastReq: "GET_ALL_USERS",
    currReq: "GET_ALL_USERS",
  },
  msg: "",
  pageInfo: {
    prevPage: "",
    currentPage: 1,
    nextPage: "",
  },
  userDetail: {},
  userHistory: [],
};

export default function userReducer(state = initialState, action) {
  const dataFromPayload = action.payload;
  switch (action.type) {
    case actions.fetchAllData + _pending:
      return {
        ...state,
        hasMoreData: true,
        apiRequest: {
          ...state.apiRequest,
          currReq: dataFromPayload.req,
        },
        loading: true,
        error: false,
        msg: "loading",
      };
    case actions.fetchAllData + _fulfilled:
      if (dataFromPayload.pageInfo.prevPage === "") {
        return {
          ...state,
          allUsers: [...dataFromPayload.users],
          hasMoreData: true,
          apiRequest: {
            ...state.apiRequest,
            lastReq: state.apiRequest.currReq,
          },
          loading: false,
          error: false,
          msg: "done",
          pageInfo: {
            prevPage: dataFromPayload.pageInfo.prevPage,
            currentPage: Number(dataFromPayload.pageInfo.currentPage),
            nextPage: dataFromPayload.pageInfo.nextPage,
          },
        };
      }
      if (dataFromPayload.pageInfo.nextPage !== "") {
        const newArr = [...state.allUsers];
        newArr.push(...dataFromPayload.users);
        return {
          ...state,
          allUsers: [...newArr],
          hasMoreData: true,
          apiRequest: {
            ...state.apiRequest,
            lastReq: state.apiRequest.currReq,
          },
          loading: false,
          error: false,
          msg: "done",
          pageInfo: {
            prevPage: dataFromPayload.pageInfo.prevPage,
            currentPage: Number(dataFromPayload.pageInfo.currentPage),
            nextPage: dataFromPayload.pageInfo.nextPage,
          },
        };
      } else {
        const newArr = [...state.allUsers];
        newArr.push(...dataFromPayload.users);
        return {
          ...state,
          allUsers: [...newArr],
          hasMoreData: false,
          apiRequest: {
            ...state.apiRequest,
            lastReq: state.apiRequest.currReq,
          },
          loading: false,
          error: false,
          msg: "Yay! You have seen it all",
          pageInfo: {
            currentPage: 1,
          },
        };
      }

    case actions.fetchAllData + _rejected:
      return {
        ...state,
        hasMoreData: false,
        loading: false,
        error: true,
        msg: dataFromPayload.msg,
      };

    case actions.searchUser + _pending:
      return {
        ...state,
        hasMoreData: true,
        apiRequest: {
          ...state.apiRequest,
          currReq: dataFromPayload.req,
        },
        loading: true,
        error: false,
        msg: "loading",
      };
    case actions.searchUser + _fulfilled:
      if (dataFromPayload.pageInfo.nextPage === "") {
        return {
          ...state,
          allUsers: dataFromPayload.users,
          hasMoreData: false,
          apiRequest: {
            ...state.apiRequest,
            lastReq: state.apiRequest.currReq,
          },
          loading: false,
          error: false,
          msg:
            dataFromPayload.users.length === 0
              ? "Oh no, no user found!"
              : "Yay! You have seen it all",
          pageInfo: {
            prevPage: dataFromPayload.pageInfo.prevPage,
            currentPage: Number(dataFromPayload.pageInfo.currentPage),
            nextPage: dataFromPayload.pageInfo.nextPage,
          },
        };
      } else {
        return {
          ...state,
          allUsers: dataFromPayload.users,
          hasMoreData: true,
          apiRequest: {
            ...state.apiRequest,
            lastReq: state.apiRequest.currReq,
          },
          loading: false,
          error: false,
          msg: "Yay! You have seen it all",
          pageInfo: {
            prevPage: dataFromPayload.pageInfo.prevPage,
            currentPage: Number(dataFromPayload.pageInfo.currentPage),
            nextPage: dataFromPayload.pageInfo.nextPage,
          },
        };
      }

    case actions.searchUser + _rejected:
      return {
        allUsers: [],
        hasMoreData: false,
        loading: false,
        error: true,
        msg: "Oh no, no user found!",
      };

    // user detail
    case actions.getUserDetail + _pending:
      return {
        ...state,
        hasMoreData: true,
        apiRequest: {
          ...state.apiRequest,
          currReq: dataFromPayload.req,
        },
        loading: true,
        error: false,
        msg: "loading",
      };

    case actions.getUserDetail + _fulfilled:
      return {
        ...state,
        userDetail: dataFromPayload.users.data[0],
        hasMoreData: true,
        apiRequest: {
          ...state.apiRequest,
          lastReq: state.apiRequest.currReq,
        },
        loading: false,
        error: false,
        msg: "Success..!",
      };

    case actions.getUserDetail + _rejected:
      return {
        userHistory: "",
        hasMoreData: false,
        loading: false,
        error: true,
        msg: "Error request..!",
      };

    // user history
    case actions.getHistoryById + _pending:
      return {
        ...state,
        hasMoreData: true,
        apiRequest: {
          ...state.apiRequest,
          currReq: dataFromPayload.req,
        },
        loading: true,
        error: false,
        msg: "loading",
      };

    case actions.getHistoryById + _fulfilled:
      return {
        ...state,
        userHistory: dataFromPayload.users.data,
        // hasMoreData: true,
        apiRequest: {
          ...state.apiRequest,
          lastReq: state.apiRequest.currReq,
        },
        loading: false,
        error: false,
        msg: "Success..!",
      };

    case actions.getHistoryById + _rejected:
      return {
        userHistory: "",
        hasMoreData: false,
        loading: false,
        error: true,
        msg: "Error request..!",
      };

    //add history
    case actions.addHistory + _pending:
      return {
        ...state,
        // hasMoreData: true,
        apiRequest: {
          ...state.apiRequest,
          currReq: dataFromPayload.req,
        },
        loading: true,
        error: false,
        msg: "loading",
      };

    case actions.addHistory + _fulfilled:
      return {
        ...state,
        // userHistory: dataFromPayload.users.data,
        // hasMoreData: true,
        apiRequest: {
          ...state.apiRequest,
          lastReq: state.apiRequest.currReq,
        },
        loading: false,
        error: false,
        msg: "Success..!",
      };

    case actions.addHistory + _rejected:
      return {
        // userHistory: "",
        hasMoreData: false,
        loading: false,
        error: true,
        msg: "Error request..!",
      };

    // update user
    case actions.updateUserData + _pending:
      return {
        ...state,
        hasMoreData: true,
        apiRequest: {
          ...state.apiRequest,
          currReq: dataFromPayload.req,
        },
        loading: true,
        error: false,
        msg: "loading",
      };

    case actions.updateUserData + _fulfilled:
      return {
        ...state,
        apiRequest: {
          ...state.apiRequest,
          lastReq: state.apiRequest.currReq,
        },
        loading: false,
        error: false,
        msg: "Success..!",
      };

    case actions.updateUserData + _rejected:
      return {
        // userHistory: "",
        hasMoreData: false,
        loading: false,
        error: true,
        msg: "Error request..!",
      };

    default:
      return { ...state };
  }
}
