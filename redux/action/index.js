import { createAction } from 'redux-actions';
import axios from 'axios';
import api from '../../static/apiRoutes';
import { message } from 'antd';

export {
  getMonoblocks,
  getMonoblocksSuccess,
} from './homePage';

export {
  addToCart,
} from './cart';

export const setPage = createAction('SET_PAGE');

export const signUpRequest = createAction('SIGN_UP_REQUEST');
export const signUpFailed = createAction('SIGN_UP_FAILED');
export const signUpSuccess = createAction('SIGN_UP_SUCCESS');

export const signUp = ({ user }) => async (dispatch) => {
  dispatch(signUpRequest());
  console.log('user: ', user);
  try {
    const response = await axios.post(api.signUp(), user);
    console.log('response: ', response);
    dispatch(signUpSuccess(response));
  } catch (error) {
    dispatch(signUpFailed());
  }
};

export const verifyRequest = createAction('VERIFY_REQUEST');
export const verifyFailed = createAction('VERIFY_FAILED');
export const verifySuccess = createAction('VERIFY_SUCCESS');

export const verify = (id, kamrKotGey, push) => async (dispatch) => {
  dispatch(verifyRequest());
  try {
    await axios.get(api.verify(id), {
      params: kamrKotGey
    });
    push('/login');
    message.success('You successfully verified your email 🌝')
  } catch (error) {
    console.log(error);
    push('/login');
    message.error('There were an issue in verifying your email 🐷')
    dispatch(verifyFailed());
  }
}