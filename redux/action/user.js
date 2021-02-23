import * as actions from '../actionTypes'
import {
   userInfoAPI,
   userInfoUpdateAPI,
   userLoginAPI, userLogoutAPI,
   userRefreshToken, userRegisterAPI,
} from "../../api/auth";
import {notifyError, notifySuccess} from "../../helpers/NotifyBtn";
import Cookies from "universal-cookie";

const cookies = new Cookies();

export function authLogin(data) {
   return async dispatch => {
      await userLoginAPI(data)
          .then(response => {
             const today = new Date();
             const days30 = new Date();
             days30.setDate(today.getDate() + 28);
             cookies.set('access_token', response.data.token, {
                path: '/',
                expires: days30
             });
             notifySuccess(response.data.message);
             dispatch({
                type: actions.AUTH_LOGIN,
                payload: true
             })
          })
          .catch(e => {
             notifyError(e.data.message, 4000)
          })
   }
}

export function authRegister(data) {
   return async dispatch => {
      dispatch({
         type: actions.AUTH_REGISTER,
         payload: {
            isRegistering: true,
            regSuccess: false
         }
      });
      await userRegisterAPI(data)
          .then(response => {
             notifySuccess(response.data.message, 4000);
             dispatch({
                type: actions.AUTH_REGISTER,
                payload: {
                   isRegistering: false,
                   regSuccess: true
                }
             })
          })
          .catch(e => {
             dispatch({
                type: actions.AUTH_REGISTER,
                payload: {
                   isRegistering: false,
                   regSuccess: false
                }
             });
             if (e.data) {
                if (e.data.errors && Object.keys(e.data.errors).length) {
                   for(const [key, value] of Object.entries(e.data.errors)) {
                      notifyError(value, 4000)
                   }
                } else if (e.data.message) {
                   notifyError(e.data.message, 4000)
                }
             } else {
                notifyError(`Something went wrong...`, 4000)
             }
          })
   }
}

export function refreshToken(refr_token) {
   return async dispatch => {
      await userRefreshToken(refr_token)
          .then(response => {
             const cookies = new Cookies();
             const today = new Date();
             const days14 = new Date();
             const days15 = new Date();
             days14.setDate(today.getDate() + 14);
             days15.setDate(today.getDate() + 15);
             cookies.set('access_token', response.data.access_token, {
                path: '/',
                expires: days14
             });
             cookies.set('refresh_token', response.data.refresh_token, {
                path: "/",
                expires: days15
             });
             dispatch({
                type: actions.REFRESH_TOKEN,
                payload: true
             })
          })
          .catch(e => {
             const cookies = new Cookies();
             cookies.remove('refresh_token');
             cookies.remove('user_id');
             notifyError(e.data.message, 3000)
          })
   }
}

export function authLogout() {
   const cookies = new Cookies();
   return async dispatch => {
      await userLogoutAPI(cookies.get('device_token'))
          .then(response => {
             cookies.remove("access_token", {path: "/"});
             cookies.remove("refresh_token", {path: "/"});
             cookies.remove("user_id", {path: "/"});

             notifySuccess(response.data.message);
             dispatch({
                type: actions.AUTH_LOGOUT,
                payload: false
             });

          }).catch(e => notifyError(e.data.message));
   }
}

export function clearUserRegister() {
   return async dispatch => {
      dispatch({
         type: actions.CLEAR_REGISTER,
         payload: false
      })
   }
}

export function userInfo() {
   return async dispatch => {

      await userInfoAPI().then(response => {
         dispatch({
            type: actions.FETCH_USER,
            payload: response.data.data
         })
      }).catch(e => console.log(e));
   }
}

export function updateUserInfo(data) {
   return async dispatch => {
      await userInfoUpdateAPI(data).then(res => {
         dispatch({
            type: actions.USER_UPDATE,
            payload: res.data.data
         });
         notifySuccess('Your details have been updated successfully')
      }).catch(e => notifyError(e.data.message));
   }
}

export function userInfoClean() {
   return async dispatch => {
      dispatch({
         type: actions.CLEAN_USER_INFO,
         payload: {}
      })
   }
}