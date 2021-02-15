import * as actions from "../actionTypes";
import {API_calculateConfigurator} from "../../api/configurator";

export function calculateConfigurator(data) {
   return async dispatch => {
      await API_calculateConfigurator(data)
          .then(response => {
             dispatch({
                type: actions.CHANGE_CONFIGURATOR,
                payload: {
                   payments: response.data.payments,
                   minimum: response.data.minimum
                }
             })
          }).catch(e => console.log(e));
   }
}