import axios from 'axios';

export const addTodo = todo => ({
  type: 'ADD_TODO',
  todo
});

export const startAddTodo = todoData => {
  return dispatch => {
    const { text, urgency } = todoData;
    const todo = { text, urgency, isCompleted: false };

    return axios
      .post('http://localhost:9000/api/todos', todo, {
        headers: { sessionId: localStorage.getItem('sessionId') }
      })
      .then(res => dispatch(addTodo(res.data.todo)))
      .catch(err => console.log(err.response));
  };
};

export const deleteTodo = () => ({
  type: 'DELETE_TODO'
});

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
});

export const startToggleTodo = id => {
  return (dispatch, getState) => {
    const state = getState();
    const todo = state.todos.find(todo => todo.id === id);
    console.log(todo);
    return axios
      .patch(
        `http://localhost:9000/api/todos/${id}`,
        { isCompleted: !todo.isCompleted },
        {
          headers: {
            sessionId: localStorage.getItem('sessionId')
          }
        }
      )
      .then(res => dispatch(toggleTodo(id)))
      .catch(err => console.log(err.response));
  };
};

export const setTodos = todos => ({
  type: 'SET_TODOS',
  todos
});

export const startSetTodos = () => {
  return dispatch => {
    return axios
      .get('http://localhost:9000/api/todos', {
        headers: {
          sessionId: localStorage.getItem('sessionId')
        }
      })
      .then(res => dispatch(setTodos(res.data.todos)))
      .catch(err => console.log(err.response));
  };
};

export const getSession = sessionId => ({
  type: 'GET_SESSION',
  sessionId
});

export const startGetSession = () => {
  return dispatch => {
    return axios
      .post('http://localhost:9000/api/session', { errorRate: 0 })
      .then(res => {
        localStorage.setItem('sessionId', res.data.sessionId);
        dispatch(startSetTodos());
      })
      .catch(err => console.log(err.response));
  };
};

export const alterSession = () => ({
  type: 'ALTER_SESSION'
});

export const deleteSession = () => ({
  type: 'DELETE_SESSION'
});

export const startDeleteSession = () => {
  return dispatch => {
    return axios
      .delete('http://localhost:9000/api/session', {
        headers: { sessionId: localStorage.getItem('sessionId') }
      })
      .then(res => {
        localStorage.removeItem('sessionId');
        // dispatch(setTodos());
      })
      .catch(err => console.log(err.response));
  };
};

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
});

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
};
