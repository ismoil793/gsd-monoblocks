import * as actions from "../actionTypes";
import {API_addToCart, API_getCart} from "../../api/cart";
import {notifySuccess} from "../../helpers/NotifyBtn";

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