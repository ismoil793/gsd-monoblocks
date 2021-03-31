import * as actions from "../actionTypes";
import {API_fetchGoods} from "../../api/goods";

export function fetchGoods() {
   return async dispatch => {
      await API_fetchGoods()
          .then(response => {
             dispatch({
                type: actions.FETCH_GOODS,
                payload: response.data.data
             })
          }).catch(e => console.log(e));
   }
}