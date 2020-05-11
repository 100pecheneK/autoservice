import axios from 'axios'


import {GET_TABLE_DATA} from "./types"
import {tokenConfig} from "./auth"

export const getAccounts = () => async (dispatch, getState) => {
    const res = await axios.get('/api/accounts/', tokenConfig(getState))
    dispatch({
        type: GET_TABLE_DATA,
        payload: res.data
    })
}
