import {httpGet, httpPost} from "./index";

export const API_addToCart = (data) => httpPost({
   url: '/cart/add',
   params: {},
   data
});

export const API_getCart = () => httpGet({
   url: '/cart'
});


export const API_deleteCartItem = (data) => httpPost({
   url: '/cart/delete',
   data
});


export const API_plusCartItem = (data) => httpPost({
   url: '/cart/plus',
   data
});

export const API_minusCartItem = (data) => httpPost({
   url: '/cart/minus',
   data
});