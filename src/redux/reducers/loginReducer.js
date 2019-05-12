import * as types from '../actionTypes';
import { login as initialState } from '../initialState';

const loginReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.CLEAR_LOGIN_FORM:
      return initialState;
    case types.SUBMIT_LOGIN_FORM:
      return { ...state, submitting: true };
    case types.LOGIN_FAILURE:
      return {
        ...state,
        error: {
          ...state.error,
          message: payload.message,
        },
        submitting: false,
      };
    case types.HANDLE_LOGIN_INPUT_FORM:
      return {
        ...state,
        credentials: {
          ...state.credentials,
          [payload.field]: payload.value,
        },
      };
    case types.INPUT_FORM_VALIDATION_FAILURE:
      return {
        ...state,
        error: {
          ...state.error,
          ...payload.response,
        },
      };
    case types.INPUT_FORM_VALIDATION_SUCCESS:
      return { ...state, error: undefined };
    default:
      return state;
  }
};

export default loginReducer;
