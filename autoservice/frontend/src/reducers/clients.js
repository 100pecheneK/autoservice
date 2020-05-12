import _ from 'lodash'
import {
    GET_CLIENTS,
    GET_CLIENT,
    ADD_CLIENT,
    DELETE_CLIENT,
    EDIT_CLIENT
} from '../actions/types'

export default (state = {}, action) => {
    switch (action.type) {
        case GET_CLIENTS:
            return {
                ...state,
                ..._.mapKeys(action.payload, 'id')
            }
        case GET_CLIENT:
        case ADD_CLIENT:
        case EDIT_CLIENT:
            return {
                ...state,
                [action.payload.id]: action.payload
            }
        case DELETE_CLIENT:
            return _.omit(state, action.payload)
        default:
            return state
    }
};
