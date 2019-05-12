import * as types from '../actionTypes';
import fetch from '../../helpers/fetch';

export const clearLoginForm = payload => ({
  type: types.CLEAR_LOGIN_FORM,
  payload,
});

export const submitLoginForm = payload => ({
  type: types.SUBMIT_LOGIN_FORM,
  payload,
});

export const loginFailure = payload => ({
  type: types.LOGIN_FAILURE,
  payload,
});

export const loginUser = user => (dispatch) => {
  dispatch(submitLoginForm());
  return fetch('/auth/login', {
    method: 'POST',
    body: { user: { ...user } },
  })
    .then((data) => {
      dispatch(clearLoginForm(data));
      localStorage.setItem('token', data.user.token);
      return data;
    })
    .catch((err) => {
      dispatch(loginFailure(err));
      return err;
    });
};

export const inputHandler = ({ field, value }) => ({
  type: types.HANDLE_LOGIN_INPUT_FORM,
  payload: {
    value,
    field,
  },
});

export const validationResponse = (payload, type = types.INPUT_FORM_VALIDATION_FAILURE) => ({
  type,
  payload,
});

export const validateCredentials = ({ username, password }) => dispatch => new Promise((resolve) => {
  if (username.length === 0 && password.length === 0) {
    const payload = {
      response: {
        message: 'All fields are required',
      },
    };
    dispatch(validationResponse(payload));
    return resolve(payload.response);
  }
  if (username.length === 0) {
    const payload = {
      response: {
        usernameRequired: 'Required',
        message: undefined,
      },
    };
    dispatch(validationResponse(payload));
    return resolve(payload.response);
  }
  if (password.length === 0) {
    const payload = {
      response: {
        passwordRequired: 'Required',
        usernameRequired: undefined,
        message: undefined,
      },
    };
    dispatch(validationResponse(payload));
    return resolve(payload.response);
  }
  if (username.length < 6 || password.length < 6) {
    const payload = {
      response: {
        message: "Username and password don't match",
        passwordRequired: undefined,
        usernameRequired: undefined,
      },
    };
    dispatch(validationResponse(payload));
    return resolve(payload.response);
  }
  const payload = {
    response: {
      message: 'Ok',
      passwordRequired: undefined,
      usernameRequired: undefined,
    },
  };
  dispatch(validationResponse(payload, types.INPUT_FORM_VALIDATION_SUCCESS));
  return resolve(payload.response);
});
