import * as actions from "../actionTypes";
import {httpGet} from "../../api";

export function footerLinks() {
   return async dispatch => {
      await httpGet({url: '/monoblocks', params: {per_page: 4}})
          .then(response => {
             dispatch({
                type: actions.FETCH_FOOTER,
                payload: response.data.data
             })
          }).catch(e => console.log(e));
   }
}