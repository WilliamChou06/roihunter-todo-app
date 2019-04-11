const todoDefaultState = [];

const todoReducer = (state = todoDefaultState, action) => {
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
      for (let key in action.todos) {
        todos.push(action.todos[key]);
      }
      return todos;
    default:
      return state;
  }
};

export default todoReducer;
