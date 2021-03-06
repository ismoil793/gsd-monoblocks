import {httpGet, httpPost} from "./index";

export const API_createOrder = (data) => httpPost({
   url: '/checkout',
   data
});

export const API_getOrders = () => httpGet({
   url: '/user/orders'
});

export const API_getSingleOrder = (id) => httpGet({
   url: `/user/order/details/${id}`
});