import { handleActions } from 'redux-actions';
import * as actions from '../action';

const handleCart = handleActions({
  [actions.addToCart] (state) {
    return {
      ...state,
      itemsNumber: state.itemsNumber + 1,
    };
  },
}, {
  itemsNumber: 0,
});

export default handleCart;

