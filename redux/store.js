import { useMemo } from 'react';
import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducer';
import { createWrapper } from 'next-redux-wrapper'



// store plugin to check requests to server and store
const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
           // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;


const middleware = [thunk];

const enhancer = composeEnhancers(
    applyMiddleware(...middleware)
);

const initialState = {};

const initStore = () => {
    return createStore(rootReducer, initialState, enhancer);
};

export const wrapper = createWrapper(initStore);

// let store;
//
// const initialState = {};
//
// const initStore = (preloadedState = initialState) => createStore(
//   rootReducer,
//   preloadedState,
//   composeWithDevTools(applyMiddleware(thunk))
// );
//
// export const initializeStore = (preloadedState) => {
//   let _store = store ?? initStore(preloadedState)
//
//   // After navigating to a page with an initial Redux state, merge that state
//   // with the current state in the store, and create a new store
//   if (preloadedState && store) {
//     _store = initStore({
//       ...store.getState(),
//       ...preloadedState,
//     })
//     // Reset the current store
//     store = undefined
//   }
//
//   // For SSG and SSR always create a new store
//   if (typeof window === 'undefined') return _store
//   // Create the store once in the client
//   if (!store) store = _store
//
//   return _store
// }
//
// export const useStore = (initialState) => {
//   const store = useMemo(() => initializeStore(initialState), [initialState])
//   return store
// }
