import axios from 'axios'
import {reset, stopSubmit} from 'redux-form'
import history from '../history'
import {tokenConfig} from './auth'
import {
    GET_GOOD,
    GET_GOODS,
    DELETE_GOOD,
    EDIT_GOOD,
    ADD_GOOD,
    GET_CATEGORIES,
    ADD_CATEGORIES,
    EDIT_CATEGORIES,
    DELETE_CATEGORIES,
    GET_CATEGORY,
    SEARCH_GOODS,
    SORT_GOODS
} from './types'


export const getGoods = (catId) => async (dispatch, getState) => {

    const q = catId ? `?category=${catId}` : ''
    const res = await axios.get(`/api/goods/${q}`, tokenConfig(getState))
    dispatch({
        type: GET_GOODS,
        payload: res.data
    })
}

export const getGood = id => async (dispatch, getState) => {
    const res = await axios.get(`/api/goods/${id}/`, tokenConfig(getState))
    dispatch({
        type: GET_GOOD,
        payload: res.data
    })
}

export const searchGoods = query => async (dispatch, getState) => {
    let q = ''
    if (query) {
        if (query.match(/^\d+$/)) {
            q = `?id=${query}`
        } else {
            q = `?title=${query}`
        }
    }
    const res = await axios.get(`/api/goods/${q}`, tokenConfig(getState))
    dispatch({
        type: SEARCH_GOODS,
        payload: res.data
    })
}


export const sortGoods = (filterValue, asc) => async (dispatch, getState) => {
    let q = ''
    if(filterValue){
        q = `?${filterValue}=${asc?'asc':'desc'}`
    }

    const res = await axios.get(`/api/goods/${q}`, tokenConfig(getState))

    dispatch({
        type: SORT_GOODS,
        filterValue: filterValue,
        asc: asc,
        payload: res.data
    })
}

export const addGood = formValues => async (dispatch, getState) => {
    try {
        const res = await axios.post(
            '/api/goods/',
            {...formValues},
            tokenConfig(getState)
        )
        dispatch({
            type: ADD_GOOD,
            payload: res.data
        })
        dispatch(reset('goodForm'))
        history.push('/goods')
    } catch (err) {
        dispatch(stopSubmit('goodForm', err.response.data))
    }
}


export const deleteGood = id => async (dispatch, getState) => {
    await axios.delete(`/api/goods/${id}/`, tokenConfig(getState))
    dispatch({
        type: DELETE_GOOD,
        payload: id
    })
}

export const editGood = (id, formValues) => async (dispatch, getState) => {
    try {
        const res = await axios.patch(
            `/api/goods/${id}/`,
            formValues,
            tokenConfig(getState)
        )
        dispatch({
            type: EDIT_GOOD,
            payload: res.data
        })
        history.push('/goods')
    } catch (err) {
        dispatch(stopSubmit('goodForm', err.response.data))
    }
}

export const getCategory = id => async (dispatch, getState) => {
    const res = await axios.get(`/api/goods/category/${id}/`, tokenConfig(getState))
    dispatch({
        type: GET_CATEGORY,
        payload: res.data
    })
}

export const getCategories = () => async (dispatch, getState) => {
    const res = await axios.get(`/api/goods/category/`, tokenConfig(getState))
    dispatch({
        type: GET_CATEGORIES,
        payload: res.data
    })
}

export const addCategory = (formValues) => async (dispatch, getState) => {
    try {
        const res = await axios.post(
            '/api/goods/category/',
            {...formValues},
            tokenConfig(getState)
        )
        dispatch({
            type: ADD_CATEGORIES,
            payload: res.data
        })
        dispatch(reset('categoryForm'))
        history.push('/goods/category')
    } catch (err) {
        dispatch(stopSubmit('categoryForm', err.response.data))
    }
}

export const deleteCategory = id => async (dispatch, getState) => {
    await axios.delete(`/api/goods/category/${id}/`, tokenConfig(getState))
    dispatch({
        type: DELETE_CATEGORIES,
        payload: id
    })
}

export const editCategory = (id, formValues) => async (dispatch, getState) => {
    try {
        const res = await axios.patch(
            `/api/goods/category/${id}/`,
            formValues,
            tokenConfig(getState)
        )
        dispatch({
            type: EDIT_CATEGORIES,
            payload: res.data
        })
        dispatch(reset('categoryForm'))
        history.push('/goods/category')
    } catch (err) {
        dispatch(stopSubmit('categoryForm', err.response.data))
    }
}