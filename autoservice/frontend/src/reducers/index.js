import {combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'

import auth from "./auth"
import clients from "./clients"
import {LOGOUT_SUCCESS} from "../actions/types"

const appReducer = combineReducers({
    form: formReducer,
    auth,
    clients
})

const rootReducer = (state, action) => {
    if (action.type === LOGOUT_SUCCESS) {
        state = undefined
    }
    return appReducer(state, action)
}

export default rootReducer