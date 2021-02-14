import {httpGet, httpPost} from "./index";

export const userRegisterAPI = (data) => httpPost({
   url: '/auth/user/register/',
   params: {},
   data
});

export const userLoginAPI = (data) => httpPost({
   url: '/auth/user/login/',
   data
});

export const userRefreshToken = (rt) => httpPost({
   url: '/api/auth/refresh/token/',
   data: {
      refresh_token: rt,
      provider: 'users'
   }
});

export const userLogoutAPI = (dt) => httpGet({
   url: '/auth/user/logout',
   headers: {
      'Device-Token': dt
   }
});

export const userInfoAPI = () => httpGet({
   url: '/user'
});

export const userInfoUpdateAPI = (data) => httpPost({
   url: '/user',
   data
});

export const userOrdersHistoryAPI = () => httpGet({
   url: '/api/user/orders'
});