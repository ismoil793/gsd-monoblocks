import { HYDRATE } from 'next-redux-wrapper';

const mainReducer = (state = { }, action) => {
  let specRedHyd = action.payload;
  switch (action.type) {
    case HYDRATE:
      return { ...state, hello3: specRedHyd.reducer1.test };
    case 'getDragons':
      return { ...state, test: action.one }
    default:
      return state
  }
}

export default mainReducer;