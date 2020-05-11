import _ from 'lodash'
import {
    ADD_CLIENT,
    GET_CLIENT,
    EDIT_CLIENT,
    DELETE_CLIENT,
    GET_CLIENTS
} from '../actions/types'


export default function (state = {}, action) {
    switch (action.type) {
        case GET_CLIENTS:
            return {
                ...state,
                ..._.mapKeys(action.payload, 'id')
            }
        case GET_CLIENT:
        case EDIT_CLIENT:
        case ADD_CLIENT:
            return {
                ...state,
                [action.payload.id]: action.payload
            }
        case DELETE_CLIENT:
            return _.omit(state, action.payload)
        default:
            return state
    }
}