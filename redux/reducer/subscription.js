import * as actions from '../actionTypes';

const initialState = {
   subscriptions: [],
   subscription: {}
};

const subscription = (state = {...initialState}, action) => {
   switch (action.type) {
      case actions.FETCH_SUBSCRIPTIONS:
         return {...state, subscriptions: action.payload.reverse()};

      case actions.FETCH_SUBSCRIPTION:
         return {...state, subscription: action.payload};

      default:
         return state;
   }
};

export default subscription;