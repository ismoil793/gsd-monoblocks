import * as actions from "../actionTypes";
import {API_addToCart, API_deleteCartItem, API_getCart, API_minusCartItem, API_plusCartItem} from "../../api/cart";
import {notifyError, notifySuccess} from "../../helpers/NotifyBtn";

export function addToCart(data) {
   return async dispatch => {
      await API_addToCart(data)
          .then(response => {
             notifySuccess(response.data.message);
             dispatch({
                type: actions.ADD_TO_CART,
                payload: response.data
             })
          }).catch(e => console.log(e));
   }
}


export function getCart() {
   return async dispatch => {
      await API_getCart()
          .then(response => {
             dispatch({
                type: actions.FETCH_CART,
                payload: response.data.data
             })
          }).catch(e => console.log(e));
   }
}

export function minusCartItem(id) {
   return async dispatch => {
      await API_minusCartItem({subscription_id: id})
          .then(response => {
             notifySuccess(response.data.message);
             dispatch({
                type: actions.DECREASE_CART_ITEM,
                payload: response.data
             })
          })
   }
}
export function plusCartItem(id) {
   return async dispatch => {
      await API_plusCartItem({subscription_id: id})
          .then(response => {
             notifySuccess(response.data.message);
             dispatch({
                type: actions.INCREASE_CART_ITEM,
                payload: response.data
             })
          })
   }
}

export function removeFromCart(id) {
   return async dispatch => {
      await API_deleteCartItem({subscription_id: id})
          .then(response => {
             notifyError(response.data.message);
             dispatch({
                type: actions.REMOVE_FROM_CART,
                payload: response.data
             })
          })
   }
}
