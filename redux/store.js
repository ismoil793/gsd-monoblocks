import { composeWithDevTools } from 'redux-devtools-extension'
import { IntlReducer as Intl, IntlProvider } from 'react-redux-multilingual';
import {
  applyMiddleware,
  createStore,
  compose,
  combineReducers,
} from 'redux';
import {createWrapper, HYDRATE} from 'next-redux-wrapper';
import thunk from 'redux-thunk';
import reducer1 from './reducer/index';
import reducer2 from './reducer/reducer2';

const rootReducer = combineReducers({
  reducer1,
  reducer2
});
const makeStore = context => {

  return createStore(rootReducer, composeWithDevTools());
}

export const wrapper = createWrapper(makeStore);
