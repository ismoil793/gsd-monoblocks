import {httpGet, httpPost} from "./index";


export const API_getSubscriptions = () => httpGet({
   url: '/user/subscriptions'
});

export const API_getSingleSubscription = (id) => httpGet({
   url: `/user/subscription/details/${id}`
});