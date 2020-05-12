import axios from 'axios'
import {reset} from 'redux-form'
import history from '../history'
import {tokenConfig} from './auth'
import {
    GET_CLIENTS,
    GET_CLIENT,
    ADD_CLIENT,
    DELETE_CLIENT,
    EDIT_CLIENT
} from './types'

export const getClients = () => async (dispatch, getState) => {
    const res = await axios.get('/api/clients/', tokenConfig(getState))
    dispatch({
        type: GET_CLIENTS,
        payload: res.data
    })
}

export const getClient = id => async (dispatch, getState) => {
    const res = await axios.get(`/api/clients/${id}/`, tokenConfig(getState))
    dispatch({
        type: GET_CLIENT,
        payload: res.data
    })
}

export const addClient = formValues => async (dispatch, getState) => {
    const res = await axios.post(
        '/api/clients/',
        {...formValues},
        tokenConfig(getState)
    )
    dispatch({
        type: ADD_CLIENT,
        payload: res.data
    })
    dispatch(reset('clientForm'))
    history.push('/clients')
}

export const deleteClient = id => async (dispatch, getState) => {
    await axios.delete(`/api/clients/${id}/`, tokenConfig(getState))
    dispatch({
        type: DELETE_CLIENT,
        payload: id
    })
}

export const editClient = (id, formValues) => async (dispatch, getState) => {
    const res = await axios.patch(
        `/api/clients/${id}/`,
        formValues,
        tokenConfig(getState)
    )
    dispatch({
        type: EDIT_CLIENT,
        payload: res.data
    })
    history.push('/clients')
}
