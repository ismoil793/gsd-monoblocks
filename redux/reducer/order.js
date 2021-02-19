import * as actions from '../actionTypes';

const initialState = {
   orderCreated: false,
   orders: []
};

const order = (state = {...initialState}, action) => {
   switch (action.type) {
      case actions.CREATE_ORDER:
         return {...state, orderCreated: action.payload};

      case actions.CLEAR_CREATED_ORDER:
         return {...state, orderCreated: action.payload};

      case actions.FETCH_ORDERS:
         return {...state, orders: action.payload};

      default:
         return state;
   }
};

export default order;