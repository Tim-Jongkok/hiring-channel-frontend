import Axios from "axios";

export const fetchAllData = (url)=>{
    return Axios.get(process.env.REACT_APP_API_URL+url);
}

export const getUserDataById = (url, config)=>{
    return Axios.get(process.env.REACT_APP_API_URL+url,config);
}

export const getUserDetail = (url,config)=>{
    return Axios.get(process.env.REACT_APP_API_URL+url,config);
}

export const register = (url, data)=>{
    return Axios.post(process.env.REACT_APP_API_URL+url,data);
}

export const login = (url, data)=>{
    return Axios.post(process.env.REACT_APP_API_URL+url,data);
}

export const updateUserData = (url,data,config)=>{
    return Axios.patch(process.env.REACT_APP_API_URL+url,data,config);
}

export const deleteUserData = (url,config)=>{
    return Axios.delete(process.env.REACT_APP_API_URL+url,config);
}