import { createStore } from 'redux';
import todoReducer from '../reducers/todoReducer';

export default () => {
  const store = createStore(todoReducer);
  return store;
};
