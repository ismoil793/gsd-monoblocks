import { handleActions } from 'redux-actions';
import * as actions from '../action/homePage';

const handleHomePage = handleActions({
  [actions.getMonoblocksRequest] (state) {
    return {
      ...state,
      getMonoblockListStatus: 'request',
    };
  },
  [actions.getMonoblocksFailed] (state) {
    return {
      ...state,
      getMonoblockListStatus: 'failed',
    };
  },
  [actions.getMonoblocksSuccess] (state, { payload }) {
    console.log('payloaddd: ', payload);
    const { data, meta } = payload;
    return {
      ...state,
      monoblockList: data,
      monoblockTotal: meta.total,
      monoblockCurrentPage: meta.current_page,
    };
  },
}, {
  monoblockList: [],
  monoblockCurrentPage: 1,
});

export default handleHomePage;

