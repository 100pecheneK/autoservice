import {combineReducers} from 'redux'

import {reducer as formReducer} from 'redux-form'
import auth from "./auth"
import tablesReducer from "./tables"

import {LOGOUT_SUCCESS} from "../actions/types"

const appReducer = combineReducers({
    form: formReducer,
    auth,
    tablesReducer
});

const rootReducer = (state, action) => {
    if (action.type === LOGOUT_SUCCESS) {
        state = undefined
    }
    return appReducer(state, action)
};

export default rootReducer

// const appReducer = combineReducers({
//     form: formReducer,
//     todos,
//     auth
// });
//
// const rootReducer = (state, action) => {
//     // if (action.type === LOGOUT_SUCCESS) {
//     //     state = undefined;
//     // }
//     return appReducer(state, action);
// };

// export default rootReducer;
