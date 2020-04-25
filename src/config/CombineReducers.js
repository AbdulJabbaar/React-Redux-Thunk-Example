import { combineReducers } from 'redux';

import AuthReducer from '../views/Login/AuthReducer';
import UserReducer from '../views/Home/UserReducer';

const appReducer = combineReducers({
    authReducer: AuthReducer,
    userReducer: UserReducer
});

export default (state, action) => appReducer(state, action);