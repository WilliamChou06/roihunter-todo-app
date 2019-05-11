import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';
import auth from './auth';

export default combineReducers({
  todos,
  visibilityFilter,
  auth
})