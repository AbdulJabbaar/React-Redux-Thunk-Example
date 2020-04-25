import axios from 'axios';
import { actionTypes } from '../../config/ActionTypes';

const { USER_ACTIONS } = actionTypes;
const { GET_SUCCESS } = USER_ACTIONS;

const setUsers = (dispatch, data) => {
    dispatch({
        type: GET_SUCCESS,
        payload: data
    });
};

export const getUsers = () => async dispatch => {
    try {
        const result = await axios.get('https://reqres.in/api/users');
        debugger
        setUsers(dispatch, result.data.data);
    }
    catch (err) {
        throw new Error(err);
    }
};
