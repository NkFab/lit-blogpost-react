import * as types from '../actionTypes';
import fetch from '../../helpers/fetch';

export const clearSignupForm = () => ({
  type: types.CLEAR_SIGNUP_FORM,
});

export const handleSignUpForm = ({ field, value }) => ({
  type: types.SIGNUP_FORM,
  payload: { field, value },
});

export const submitSignUpForm = payload => ({
  type: types.SIGNUP_FORM_SUBMIT,
  payload,
});

export const signUpSuccess = payload => ({
  type: types.SIGNUP_SUCCESS,
  payload,
});

export const signUpFailure = payload => ({
  type: types.SIGNUP_FAILURE,
  payload,
});

export const signUp = ({
  firstName, lastName, password, email,
}) => (dispatch) => {
  dispatch(submitSignUpForm({ submitting: true }));
  return fetch('/auth/signup', {
    method: 'POST',
    body: {
      user: {
        firstName,
        lastName,
        password,
        email,
      },
    },
  })
    .then((data) => {
      dispatch(clearSignupForm());
      localStorage.setItem('token', data.user.token);
      return data;
    })
    .catch((err) => {
      dispatch(signUpFailure({ message: err.message }));
      return err;
    });
};
