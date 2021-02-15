import {httpPost} from "./index";

export const API_calculateConfigurator = (data) => httpPost({
   url: '/calculate',
   params: {},
   data
});