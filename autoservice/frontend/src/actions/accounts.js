import axios from 'axios'


import {
    GET_ACCOUNTS,
    GET_ACCOUNT,
    DELETE_ACCOUNT,
    UPDATE_ACCOUNT,
    ADD_ACCOUNT,
} from "./types"
import { tokenConfig } from "./auth"

export const getAccounts = () => async (dispatch, getState) => {
    const res = await axios.get('/api/accounts/', tokenConfig(getState))
    dispatch({
        type: GET_ACCOUNTS,
        payload: res.data
    })
}

export const getAccount = id => async (dispatch, getState) => {
    const res = await axios.get(`/api/accounts/${id}`, tokenConfig(getState))
    dispatch({
        type: GET_ACCOUNT,
        payload: res.data
    })
}

export const deleteAccount = id => async (dispatch, getState) => {
    await axios.delete(`/api/accounts/${id}`, tokenConfig(getState))
    dispatch({
        type: DELETE_ACCOUNT,
        payload: id
    })
}
