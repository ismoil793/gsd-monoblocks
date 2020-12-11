import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
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
}, {});

export default combineReducers({
  handleAuth,
});
