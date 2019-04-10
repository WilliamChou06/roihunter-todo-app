let todoId = 0;
export const addTodo = text => ({
  type: 'ADD_TODO',
  id: todoId++,
  text
});

export const deleteTodo = () => ({
  type: 'DELETE_TODO'
});

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
});

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
});

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
};
