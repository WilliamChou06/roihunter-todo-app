import reducer from '../../reducers/todos';
import * as constants from '../../constants';

describe('todos reducer', () => {
  it('should return the initial state', () => {
    // @ts-ignore
    expect(reducer(undefined, {})).toEqual([]);
  });

  it('should handle ADD_TODO', () => {
    const todo = {
      text: 'Do dishes',
      urgency: 5
    };
    expect(
      reducer([], {
        type: constants.ADD_TODO,
        todo
      })
    ).toEqual([todo]);
  });

  it('should handle TOGGLE_TODO', () => {
    expect(
      reducer(
        [
          {
            id: '3d819eda-72a1-47f1-bc1c-80db442f4720',
            text: 'Go fishing',
            created: '2019-05-14T21:02:27.404Z',
            updated: '2019-05-14T21:02:27.404Z',
            isCompleted: true,
            urgency: 3
          }
        ],
        {
          type: constants.TOGGLE_TODO,
          id: '3d819eda-72a1-47f1-bc1c-80db442f4720'
        }
      )
    ).toEqual([
      {
        id: '3d819eda-72a1-47f1-bc1c-80db442f4720',
        text: 'Go fishing',
        created: '2019-05-14T21:02:27.404Z',
        updated: '2019-05-14T21:02:27.404Z',
        isCompleted: !true,
        urgency: 3
      }
    ]);
  });

  it('should handle SET_TODOS', () => {
    const todos = {
      '3d819eda-72a1-47f1-bc1c-80db442f4720': {
        id: '3d819eda-72a1-47f1-bc1c-80db442f4720',
        text: 'Go fishing',
        created: '2019-05-14T21:02:27.404Z',
        updated: '2019-05-14T21:02:27.404Z',
        isCompleted: true,
        urgency: 3
      },
      '6a753006-61ab-4d25-8b0a-4513812f8ec4': {
        id: '6a753006-61ab-4d25-8b0a-4513812f8ec4',
        text: 'Go to sleep',
        created: '2019-05-15T17:15:53.008Z',
        updated: '2019-05-15T17:15:53.008Z',
        isCompleted: true,
        urgency: 4
      }
    };

    expect(
      reducer([], {
        type: constants.SET_TODOS,
        todos
      })
    ).toEqual([
      {
        id: '3d819eda-72a1-47f1-bc1c-80db442f4720',
        text: 'Go fishing',
        created: '2019-05-14T21:02:27.404Z',
        updated: '2019-05-14T21:02:27.404Z',
        isCompleted: true,
        urgency: 3
      },
      {
        id: '6a753006-61ab-4d25-8b0a-4513812f8ec4',
        text: 'Go to sleep',
        created: '2019-05-15T17:15:53.008Z',
        updated: '2019-05-15T17:15:53.008Z',
        isCompleted: true,
        urgency: 4
      }
    ]);
  });
});
