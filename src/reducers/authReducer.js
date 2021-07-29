import { AUTH_LOGIN, AUTH_LOGOUT, SET_AUTH } from "../constants/action-types";

const initialState = {
    auth: false,
    userName: null
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case AUTH_LOGIN:
            if (payload.userName && payload.password) {
                localStorage.setItem("auth", true)
                localStorage.setItem("userName", payload.userName)
                return { ...state, auth: true, userName: payload.userName }
            }
        case SET_AUTH:
            localStorage.setItem("auth", true)
            localStorage.setItem("userName", payload.userName)
            return { ...state, auth: true, userName: payload.userName }

        case AUTH_LOGOUT:
            localStorage.clear()
            return { auth: false, userName: null }

        default:
            return state
    }
}
