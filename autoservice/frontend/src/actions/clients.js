import axios from 'axios'
import {reset} from "redux-form"
import history from "../history"
import {tokenConfig} from "./auth"
import {
    GET_CLIENTS,
    GET_CLIENT,
    ADD_CLIENT,
    DELETE_CLIENT,
} from './types'


export const addClient = formValues => async (dispatch, getState) => {
    const res = await axios.post('/api/clients/', {...formValues}, tokenConfig(getState))
    dispatch({
        type: ADD_CLIENT,
        payload: res.data
    })
    dispatch(reset('costForm'))
    history.push('/')
}

