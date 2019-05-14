import { TodoStore } from './../types/index';

const todoDefaultState  = [];

const todoReducer = (state : TodoStore = todoDefaultState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.todo];
    case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.id === action.id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo
      );
    case 'SET_TODOS':
      const todos = [];
      for (let i in action.todos) {
        todos.push(action.todos[i]);
      }
      return todos;
    default:
      return state;
  }
};

export default todoReducer;
