import * as actions from '../actionTypes';

const initialState = {
   cartItems: {},
   cartCount: 0
};

const cart = (state = {...initialState}, action) => {
   switch (action.type) {
      case actions.ADD_TO_CART:
         return {...state, addCart: action.payload};

      case actions.FETCH_CART:
         const cartCount = action.payload.subscriptions.reduce((acc, cur) => {
            return acc + cur.quantity
         }, 0);
         return {...state, cartItems: action.payload, cartCount};

      case actions.CLEAR_CART:
         return {...state, cartItems: action.payload, cartCount: 0}

      case actions.DECREASE_CART_ITEM:
         return {...state, minus: action.payload};

      case actions.INCREASE_CART_ITEM:
         return {...state, plus: action.payload};
      default:
         return state;
   }
};

export default cart;