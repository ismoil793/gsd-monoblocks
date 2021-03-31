import {httpGet} from "./index";

export const API_fetchGoods = () => httpGet({
   url: '/remains'
});