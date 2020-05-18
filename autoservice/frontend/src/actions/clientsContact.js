import axios from 'axios'
import {tokenConfig} from './auth'
import {
    GET_CLIENT_CONTACT_FULL,
    GET_CLIENTS_CONTACT,
    CLEAR_CLIENT_CONTACT_FULL
} from "./types"

export const getClientsContact = () => async (dispatch, getState) => {
    const res = await axios.get('/api/clients/contact', tokenConfig(getState))
    dispatch({
        type: GET_CLIENTS_CONTACT,
        payload: res.data
    })
}

export const getClientContactFull = id => async (dispatch, getState) => {
    const res = await axios.get(`/api/clients/${id}/`, tokenConfig(getState))
    const payload = {
        ...res.data,
        client_id: res.data.id
    }
    dispatch({
        type: GET_CLIENT_CONTACT_FULL,
        payload: payload
    })
}

export const clearClientContactFull = () => dispatch => {
    dispatch({
        type: CLEAR_CLIENT_CONTACT_FULL
    })
}