import { combineReducers } from 'redux';

import AuthReducer from '../views/Login/AuthReducer';
const appReducer = combineReducers({
    AuthReducer
});

export default (state, action) => appReducer(state, action);