
import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import * as actions from '../action/index';

const handleMonoblocks = handleActions({
  [actions.isInitialDataLoaded](state){
    return {
      ...state,
      isInitialDataLoaded: true,
    }
  },
  [actions.initialData](state, {payload}){
    return {
      ...state,
      monoblocks: payload
    }
  }
}, {
  isInitialDataLoaded: false
});

export default combineReducers({
  handleMonoblocks
});