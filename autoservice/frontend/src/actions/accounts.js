import axios from 'axios'
import {reset, stopSubmit} from 'redux-form'
import history from '../history'


import {
    GET_ACCOUNTS,
    GET_ACCOUNT,
    DELETE_ACCOUNT,
    UPDATE_ACCOUNT,
    ADD_ACCOUNT,
} from "./types"
import {tokenConfig} from "./auth"

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

export const addAccount = formValues => async (dispatch, getState) => {
    try {
        const res = await axios.post(
            '/api/accounts/',
            {...formValues},
            tokenConfig(getState)
        )
        dispatch({
            type: ADD_ACCOUNT,
            payload: res.data
        })
        dispatch(reset('accountForm'))
        history.push('/accounts')
    } catch (err) {
        dispatch(stopSubmit('accountForm', err.response.data))
    }

}

export const editAccount = (id, formValues) => async (dispatch, getState) => {
    try {
        const res = await axios.patch(
            `/api/accounts/${id}/`,
            formValues,
            tokenConfig(getState)
        )
        dispatch({
            type: UPDATE_ACCOUNT,
            payload: res.data
        })
        history.push('/accounts')
    } catch (err) {
        dispatch(stopSubmit('accountForm', err.response.data))
    }
}