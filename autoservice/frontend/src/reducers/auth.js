import {
    USER_LOADING,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS, USER_IS_SUPER_USER, USER_IS_NOT_SUPER_USER
} from '../actions/types'

const initialState = {
    isLoading: false,
    isAuthenticated: null,
    isSuperuser: true,
    user: null,
    token: localStorage.getItem('token')
}

export default function (state = initialState, action) {
    switch (action.type) {
        case USER_LOADING:
            return {
                ...state,
                isLoading: true
            }
        case USER_LOADED:
            return {
                ...state,
                isLoading: false,
                isAuthenticated: true,
                user: action.payload
            }
        case USER_IS_NOT_SUPER_USER:
            return {
                ...state,
                isSuperuser: false
            }
        case USER_IS_SUPER_USER:
            return {
                ...state,
                isSuperuser: true
            }
        case LOGIN_SUCCESS:
            localStorage.setItem('token', action.payload.token)
            return {
                ...state,
                isLoading: false,
                isAuthenticated: true,
                ...action.payload
            }
        case AUTH_ERROR:
        case LOGIN_FAIL:
        case LOGOUT_SUCCESS:
            localStorage.removeItem('token')
            return {
                ...state,
                isLoading: false,
                isAuthenticated: false,
                user: null,
                token: null
            }
        default:
            return state
    }
}