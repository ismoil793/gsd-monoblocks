import * as actions from '../actionTypes';

const initialState = {
   links: []
};

const footer = (state = {...initialState}, action) => {
   switch (action.type) {

      case actions.FETCH_FOOTER:
         return { ...state, links: action.payload };
      default:
         return state;
   }
};

export default footer;