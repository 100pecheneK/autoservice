import axios from 'axios'
import {stopSubmit} from 'redux-form'

import {
    USER_LOADING,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    USER_IS_SUPER_USER, USER_IS_NOT_SUPER_USER,
} from './types'

// LOAD USER
export const loadUser = () => async (dispatch, getState) => {
    dispatch({type: USER_LOADING})
    try {
        const res = await axios.get('/api/accounts/auth/user', tokenConfig(getState))
        if (!res.data.is_superuser) {
            dispatch({
                type: USER_IS_NOT_SUPER_USER
            })
        }
        dispatch({
            type: USER_LOADED,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: AUTH_ERROR
        })
    }
}

// LOGIN USER
export const login = ({username, password}) => async dispatch => {
    // Headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    // Request Body
    const body = JSON.stringify({username, password})

    try {
        const res = await axios.post('/api/accounts/auth/login', body, config)
        if (!res.data.user.is_superuser) {
            dispatch({
                type: USER_IS_NOT_SUPER_USER
            })
        }
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: LOGIN_FAIL
        })
        dispatch(stopSubmit('loginForm', err.response.data))
    }
}

export const logout = () => async (dispatch, getState) => {
    await axios.post('/api/accounts/auth/logout', null, tokenConfig(getState))
    dispatch({
        type: LOGOUT_SUCCESS
    })
}

// helper function
export const tokenConfig = getState => {
    const token = getState().auth.token
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    if (token) {
        config.headers['Authorization'] = `Token ${token}`
    }
    return config
}