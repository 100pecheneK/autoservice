import {
    GET_TABLE_DATA
} from '../actions/types'

const initialState = {
    tableData: [
        {
            id: '',
            first_name: '',
            last_name: '',
            generic_name: '',
            username: '',
            email: '',
            phone_number: '',
            status: ''
        },
    ]
}

const tablesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TABLE_DATA:
            return {
                ...state,
                tableData: action.payload
            }
        default:
            return state;
    }
}

export default tablesReducer