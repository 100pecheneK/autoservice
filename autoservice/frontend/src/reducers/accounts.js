import _ from "lodash"
import {
    GET_ACCOUNTS,
    GET_ACCOUNT,
    DELETE_ACCOUNT,
    UPDATE_ACCOUNT,
    ADD_ACCOUNT,
} from '../actions/types'

export default (state = {}, action) => {
    switch (action.type) {
        case GET_ACCOUNTS:
            return {
                ...state,
                ..._.mapKeys(action.payload, 'id')
            }
        case GET_ACCOUNT:
        case UPDATE_ACCOUNT:
        case ADD_ACCOUNT:
            return {
                ...state,
                [action.payload.id]: action.payload
            }
        case DELETE_ACCOUNT:
            return _.omit(state, action.payload)
        default:
            return state
    }
}