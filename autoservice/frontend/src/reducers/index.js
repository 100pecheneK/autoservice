import {combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'

import auth from "./auth"
import clients from "./clients"
import clientsContact from "./clientsContact"
import accounts from "./accounts"
import orders from "./orders"
import goods from "./goods"

import {LOGOUT_SUCCESS} from "../actions/types"

const appReducer = combineReducers({
    form: formReducer,
    auth,
    accounts,
    clients,
    clientsContact,
    orders,
    goods
})

const rootReducer = (state, action) => {
    if (action.type === LOGOUT_SUCCESS) {
        state = undefined
    }
    return appReducer(state, action)
}

export default rootReducer