import * as actions from '../actionTypes';

const initialState = {
   goods: []
};

const goods = (state = {...initialState}, action) => {
   switch (action.type) {

      case actions.FETCH_GOODS:
         return { ...state, goods: action.payload };
      default:
         return state;
   }
};

export default goods;