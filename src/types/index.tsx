import * as constants from '../constants';

export interface Todo {
  id: string;
  text: string;
  created: string;
  updated: string;
  isCompleted: boolean;
  urgency: number;
}

export interface AddTodoAction {
  type: constants.ADD_TODO;
  todo: object;
}

export interface ToggleTodoAction {
  type: constants.TOGGLE_TODO;
  id: string;
}

export interface SetTodosAction {
  type: constants.SET_TODOS;
  todos: object;
}

export type TodoAppActions = AddTodoAction | ToggleTodoAction | SetTodosAction