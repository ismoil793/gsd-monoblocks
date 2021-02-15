import * as actions from '../actionTypes';

const initialState = {
   cartItems: {}
};

const cart = (state = {...initialState}, action) => {
   switch (action.type) {
      case actions.ADD_TO_CART:
         return {...state, addCart: action.payload};

      case actions.FETCH_CART:
         return {...state, cartItems: action.payload};
      default:
         return state;
   }
};

export default cart;