import _ from 'lodash'
import {
    GET_GOOD,
    GET_GOODS,
    DELETE_GOOD,
    EDIT_GOOD,
    SEARCH_GOODS,
    ADD_GOOD,
    GET_CATEGORIES,
    ADD_CATEGORIES,
    EDIT_CATEGORIES,
    DELETE_CATEGORIES,
    GET_CATEGORY,
    SORT_GOODS,
    ADD_FILTER,
    CLEAR_FILTER,
    RESET_FILTERS,
} from '../actions/types'

const initialState = {
    goods: {},
    categories: {},
    activeCategory: {},
    filters: [
        {key: 'category', value: '1'},
        {key: 'sort_price', value: 'acs'},
    ]
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_GOODS:
        case SEARCH_GOODS:
            return {
                ...state,
                goods: {..._.mapKeys(action.payload, 'id')}
            }
        case SORT_GOODS:
            return {
                ...state,
                goods: _.orderBy(action.payload, action.filterValue, action.asc ? 'asc' : 'desc')
            }
        case GET_GOOD:
        case ADD_GOOD:
        case EDIT_GOOD:
            return {
                ...state,
                goods: {
                    ...state.goods,
                    [action.payload.id]: action.payload
                }

            }
        case DELETE_GOOD:
            return {
                ...state,
                goods: _.omit(state.goods.goods, action.payload)
            }
        case GET_CATEGORIES:
            return {
                ...state,
                categories: {..._.mapKeys(action.payload, 'id')}
            }
        case GET_CATEGORY:
        case ADD_CATEGORIES:
        case EDIT_CATEGORIES:
            return {
                ...state,
                categories: {
                    ...state.categories,
                    [action.payload.id]: action.payload
                }

            }
        case DELETE_CATEGORIES:
            return {
                ...state,
                categories: _.omit(state.categories, action.payload)
            }
        case ADD_FILTER:
            return {
                ...state,
                filters: {
                    ...state.filters,
                    [action.payload.key]: action.payload
                }
            }
        case CLEAR_FILTER:
            return {
                ...state,
                filters: _.omit(state.filters, action.payload)
            }
        case RESET_FILTERS:
            return {
                ...state,
                filters: {}
            }
        default:
            return state
    }
}
