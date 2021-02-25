import * as actions from "../actionTypes";
import {API_getSubscriptions, API_getSingleSubscription} from "../../api/subscription";
import {notifyError} from "../../helpers/NotifyBtn";


export function getSubscriptions() {
   return async dispatch => {
      await API_getSubscriptions()
          .then(response => {
             dispatch({
                type: actions.FETCH_SUBSCRIPTIONS,
                payload: response.data.data
             })
          }).catch(e => notifyError(e.data.message));
   }
}

export function getSingleSubscription(id) {
   return async dispatch => {
      await API_getSingleSubscription(id)
          .then(response => {
             dispatch({
                type: actions.FETCH_SUBSCRIPTION,
                payload: response.data.data
             })
          }).catch(e => notifyError(e.data.message));
   }
}