import * as actions from "../actionTypes";
import {API_createOrder, API_getOrders} from "../../api/order";
import {notifyError, notifySuccess} from "../../helpers/NotifyBtn";

export function createOrder(data) {
   return async dispatch => {
      await API_createOrder(data)
          .then(response => {
             notifySuccess(response.data.message);
             dispatch({
                type: actions.CREATE_ORDER,
                payload: true
             })
          }).catch(e => notifyError(e.data.message));
   }
}

export function clearCreatedOrder() {
   return {
      type: actions.CLEAR_CREATED_ORDER,
      payload: false
   }
}

export function getOrders() {
   return async dispatch => {
      await API_getOrders()
          .then(response => {
             dispatch({
                type: actions.FETCH_ORDERS,
                payload: response.data.data
             })
          }).catch(e => notifyError(e.data.message));
   }
}