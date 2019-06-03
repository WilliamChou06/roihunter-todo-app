import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const devTools =
  // @ts-ignore
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export default () => {
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(thunk),
      devTools
    )
  );
  return store;
};
