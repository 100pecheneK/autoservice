import _ from 'lodash'
import {
    GET_ORDERS,
    GET_ORDER,
    ADD_ORDER,
    DELETE_ORDER,
    EDIT_ORDER
} from '../actions/types'


export default (state = {}, action) => {
    switch (action.type) {
        case GET_ORDERS:
            return {
                ...state,
                ..._.mapKeys(action.payload, 'id')
            }
        case GET_ORDER:
        case ADD_ORDER:
        case EDIT_ORDER:
            return {
                ...state,
                [action.payload.id]: action.payload
            }
        case DELETE_ORDER:
            return _.omit(state, action.payload)
        default:
            return state
    }
}

