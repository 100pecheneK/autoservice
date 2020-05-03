import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

export default combineReducers({
    form: formReducer,
});

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
