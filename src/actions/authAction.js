import { AUTH_LOGIN, AUTH_LOGOUT, SET_AUTH } from "../constants/action-types";

export const authLogin = (userName, password) => ({
    type: AUTH_LOGIN,
    payload: {
        userName, 
        password
    }
})

export const setAuth = (userName) => ({
    type: SET_AUTH,
    payload: {
        userName
    }
})

export const authLogout = () => ({
    type: AUTH_LOGOUT,
})