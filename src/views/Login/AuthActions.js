import { actionTypes } from '../../config/ActionTypes';
import { LocalStorageNames } from '../../utils/Constants';
import LocalStorage from '../../utils/LocalStorage';

const { AUTH_ACTIONS } = actionTypes;
const { LOGIN_SUCCESS, LOGIN_FAILURE } = AUTH_ACTIONS;

const setUserData = data => {
    LocalStorage.setData(LocalStorageNames.UserInfo, data);
};

const onLoginSuccess = (dispatch, response) => {
    debugger;
    if (response.success) {
        setUserData(response.data);
        dispatch({
            type: LOGIN_SUCCESS,
            payload: response.data
        });
    } else {
        dispatch({
            type: LOGIN_FAILURE,
            payload: {
                errorMessage: response.message
            }
        });
        throw new Error(response.message);
    }
};

export const signMeIn = (userName, password ) => async dispatch => {
    try {
        var response = { success: false, message: 'Login Failed' };
        if (userName === "admin" && password === "admin") {
            response.data = { name: 'Admin' };
            response.message = 'Login Success';
            response.success = true;
        }
        onLoginSuccess(dispatch, response);
        return response;
    } catch (err) {
        throw new Error(err);
    }
};