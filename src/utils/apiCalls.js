import Axios from "axios";

export const fetchAllData = (url) => {
  return Axios.get(process.env.REACT_APP_API_URL + url);
};

export const getUserDataById = (url, config) => {
  return Axios.get(process.env.REACT_APP_API_URL + url, config);
};

export const getUserDetail = (url, config) => {
  return Axios.get(process.env.REACT_APP_API_URL + url, config);
};

export const register = (data) => {
  const API = `http://localhost:8000/auth/register`;
  return Axios.post(API, data);
};

export const login = (data) => {
  const API = `http://localhost:8000/auth/login`;
  return Axios.post(API, data);
};

export const updateUserData = (url, data, config) => {
  return Axios.patch(process.env.REACT_APP_API_URL + url, data, config);
};

export const deleteUserData = (url, config) => {
  return Axios.delete(process.env.REACT_APP_API_URL + url, config);
};
