import axios from 'axios'
import {reset, stopSubmit} from 'redux-form'
import history from '../history'
import {tokenConfig} from './auth'
import {
    GET_ORDERS,
    ADD_ORDER,
    DELETE_ORDER,
    EDIT_ORDER,
    CLEAR_CLIENT_CONTACT_FULL,
    GET_CLIENT_CONTACT_FULL
} from './types'

export const getOrders = () => async (dispatch, getState) => {
    const res = await axios.get('/api/orders/', tokenConfig(getState))
    dispatch({
        type: GET_ORDERS,
        payload: res.data
    })
}

export const getOrder = id => async (dispatch, getState) => {
    const res = await axios.get(`/api/orders/${id}/`, tokenConfig(getState))
    dispatch({
        type: GET_CLIENT_CONTACT_FULL,
        payload: res.data
    })
}

export const addOrder = formValues => async (dispatch, getState) => {
    try {
        if (!formValues.client_id) {
            formValues.client_id = ''
        }
        const res = await axios.post(
            '/api/orders/',
            {...formValues},
            tokenConfig(getState)
        )
        dispatch({
            type: ADD_ORDER,
            payload: res.data
        })
        dispatch({
            type: CLEAR_CLIENT_CONTACT_FULL
        })
        dispatch(reset('orderForm'))
        history.push('/orders')
    } catch (err) {
        dispatch(stopSubmit('orderForm', err.response.data))
    }
}


export const deleteOrder = id => async (dispatch, getState) => {
    await axios.delete(`/api/orders/${id}/`, tokenConfig(getState))
    dispatch({
        type: DELETE_ORDER,
        payload: id
    })
}

export const editOrder = (id, formValues) => async (dispatch, getState) => {
    try {
        const res = await axios.patch(
            `/api/orders/${id}/`,
            formValues,
            tokenConfig(getState)
        )
        dispatch({
            type: EDIT_ORDER,
            payload: res.data
        })
        history.push('/orders')
    } catch (err) {
        dispatch(stopSubmit('orderForm', err.response.data))
    }
}
