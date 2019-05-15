import * as actions from '../../actions';
import * as constants from '../../constants';

it('should create an action to add a todo ', () => {
  const todo = {
    text: 'Do homework',
    urgency: 5
  };
  const expectedAction = {
    type: constants.ADD_TODO,
    todo
  }
  expect(actions.addTodo(todo)).toEqual(expectedAction);
})

it('should toggle a todo', () => {
  const id = 'asd123';
  const expectedAction = {
    type: constants.TOGGLE_TODO,
    id
  }
  expect(actions.toggleTodo(id)).toEqual(expectedAction);
})

it('should set todos', () => {
  const todos = {
    "3d819eda-72a1-47f1-bc1c-80db442f4720": {
      "id": "3d819eda-72a1-47f1-bc1c-80db442f4720",
      "text": "Go fishing",
      "created": "2019-05-14T21:02:27.404Z",
      "updated": "2019-05-14T21:02:27.404Z",
      "isCompleted": true,
      "urgency": 3
    },
    "6a753006-61ab-4d25-8b0a-4513812f8ec4": {
      "id": "6a753006-61ab-4d25-8b0a-4513812f8ec4",
      "text": "Go to sleep",
      "created": "2019-05-15T17:15:53.008Z",
      "updated": "2019-05-15T17:15:53.008Z",
      "isCompleted": true,
      "urgency": 4
    }
  };
  const expectedAction = {
    type: constants.SET_TODOS,
    todos
  }
  expect(actions.setTodos(todos)).toEqual(expectedAction);
})

