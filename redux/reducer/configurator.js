import * as actions from '../actionTypes';

const initialState = {
   payments: [],
   minimum: 0
};

const configurator = (state = {...initialState}, action) => {
   switch (action.type) {
      case actions.CHANGE_CONFIGURATOR:
         return {
            ...state,
            payments: action.payload.payments,
            minimum: action.payload.minimum
         };
      default:
         return state;
   }
};

export default configurator;