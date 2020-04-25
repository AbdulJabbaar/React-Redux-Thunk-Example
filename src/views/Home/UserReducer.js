import { actionTypes } from '../../config/ActionTypes';

const { USER_ACTIONS } = actionTypes;

const INITIAL_STATE = {
    users: []
};

const { GET_SUCCESS } = USER_ACTIONS;

export default (state = INITIAL_STATE, action) => {
    const { type, payload } = action;
    switch (type) {
        case GET_SUCCESS:
            return {
                ...state,
                users: payload
            };
        default:
            return state;
    }
};