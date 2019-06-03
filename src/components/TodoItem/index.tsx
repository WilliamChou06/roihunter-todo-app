import React from 'react';
import { useDispatch } from 'react-redux';
import { startToggleTodo } from '../../actions';
import { Checkbox } from 'antd';
import { Todo, StyledSpan } from './style';

interface Props {
  todoId: string;
  isCompleted?: boolean;
  children: any;
}
const TodoItem: React.FC<Props> = ({ todoId, isCompleted, children }) => {
  const dispatch = useDispatch();

  const handleToggleTodo = id => {
    dispatch(startToggleTodo(id));
  };

  return (
    <Todo
      onClick={() => {
        handleToggleTodo(todoId);
      }}
      isCompleted={isCompleted}
    >
      <StyledSpan>{children}</StyledSpan>
      <Checkbox checked={isCompleted} />
    </Todo>
  );
};

export default TodoItem;
