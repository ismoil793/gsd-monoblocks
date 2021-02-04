import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import handleHomePage from './handleHomePage';
import handleCart from './handleCart';
import * as actions from '../action/index';

const handleAuth = handleActions({
  [actions.signUpRequest](state) {
    return {
      ...state,
      signUpStatus: 'request',
    };
  },
  [actions.signUpFailed](state) {
    return {
      ...state,
      signUpStatus: 'failure',
    };
  },
  [actions.signUpSuccess](state, payload) {
    console.log(payload);
    return {
      ...state,
      signUpStatus: 'success',
    };
  },
  [actions.setPage](state, { payload }) {
    return {
      ...state,
      page: payload,
    }
  },
}, {});

export default combineReducers({
  handleAuth,
  handleHomePage,
  handleCart,
});
