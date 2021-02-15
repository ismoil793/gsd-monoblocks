import {httpGet, httpPost} from "./index";

export const API_addToCart = (data) => httpPost({
   url: '/cart/add',
   params: {},
   data
});

export const API_getCart = () => httpGet({
   url: '/cart'
});

