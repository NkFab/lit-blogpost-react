import * as types from '../actionTypes';
import { signUp as initialState } from '../initialState';

const signupReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.CLEAR_SIGNUP_FORM:
      return initialState;
    case types.SIGNUP_FORM_SUBMIT:
      return {
        ...state,
        submitting: payload.submitting,
      };
    case types.SIGNUP_FORM:
      return {
        ...state,
        [payload.field]: payload.value,
        errors: [],
        message: '',
      };
    case types.SIGNUP_SUCCESS:
      return {
        ...state,
        successMessage: payload.message,
        submitting: false,
      };
    case types.SIGNUP_FAILURE:
      return {
        ...state,
        message: payload.message,
        errors: payload.errors || [],
        submitting: false,
      };
    default:
      return state;
  }
};

export default signupReducer;
