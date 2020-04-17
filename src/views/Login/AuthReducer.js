import { actionTypes } from '../../config/ActionTypes';

const { AUTH_ACTIONS } = actionTypes;

const INITIAL_STATE = {
    isLoggedIn: false,
    loginError: '',
    userInfo: null
};

const { LOGIN_SUCCESS, LOGIN_FAILURE } = AUTH_ACTIONS;

export default (state = INITIAL_STATE, action) => {
    const { type, payload } = action;
    switch (type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                userInfo: payload
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                isLoggedIn: false,
                userInfo: null,
                loginError: payload.errorMessage
            }
        default:
            return state;
    }
};