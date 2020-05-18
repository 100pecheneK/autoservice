import _ from 'lodash'
import {
    GET_CLIENTS_CONTACT,
    GET_CLIENT_CONTACT_FULL,
    CLEAR_CLIENT_CONTACT_FULL
} from "../actions/types"

const initialState = {
    contact: {},
    selectedContactFull: {}
}
export default (state = initialState, action) => {
    switch (action.type) {
        case GET_CLIENTS_CONTACT:
            return {
                ...state,
                contact: {..._.mapKeys(action.payload, 'id')}
            }
        case GET_CLIENT_CONTACT_FULL:
            return {
                ...state,
                selectedContactFull: {
                    ...action.payload
                }
            }
        case CLEAR_CLIENT_CONTACT_FULL:
            return {
                ...state,
                selectedContactFull: {}
            }
        default:
            return state
    }
};
