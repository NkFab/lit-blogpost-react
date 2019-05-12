import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import initialState from '../initialState';
import login from '../reducers/loginReducer';
import signUp from '../reducers/signupReducer';

const reducers = combineReducers({ login, signUp });
const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(thunk)));
export default store;
