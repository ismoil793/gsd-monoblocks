import { createAction } from 'redux-actions';
import { message } from 'antd';
import api from '../../apiRoutes';
import axios from 'axios';

export const getMonoblocksRequest = createAction('GET_MONOBLOCK_REQUEST');
export const getMonoblocksFailed = createAction('GET_MONOBLOCK_FAILED');
export const getMonoblocksSuccess = createAction('GET_MONOBLOCK_SUCCESS');

export const getMonoblocks = ({ page, per_page }) => async (dispatch) => {
  console.log('api: ', api);
  dispatch(getMonoblocksRequest());
  try {
    const response = await axios.get(api.monoblocks(), {
      params: {
        page,
        per_page,
      }
    });
    dispatch(getMonoblocksSuccess(response.data));
  } catch (error) {
    dispatch(getMonoblocksFailed());
  }
};
