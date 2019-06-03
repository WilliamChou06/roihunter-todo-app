import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Button, Row, Col, Input, List } from 'antd';
import { StyledCard, StyledForm, AppWrapper } from './style';
import { useDispatch, useSelector } from 'react-redux';
import {
  startAddTodo,
  startGetSession,
  startSetTodos,
  startDeleteSession,
} from '../../actions';

const TodoItem = lazy(() => import('../TodoItem'));

interface State {
  todoInput: String;
  todos: Array<Object>;
}

interface Todo {
  id: string;
  isCompleted: boolean;
  text: string;
}

const TodoApp: React.FC = () => {
  const dispatch = useDispatch();
  const todoData: Todo[] = useSelector(state => state.todos);

  useEffect(() => {
    dispatch(startSetTodos());
  }, []);

  const [todoInput, setTodoInput] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setTodoInput(e.currentTarget.value);
  };

  const onSubmit = (e: Event): void => {
    e.preventDefault();

    dispatch(startAddTodo({ text: todoInput, urgency: 5 }));
    setTodoInput('');
  };

  const handleGetSession = (): void => {
    dispatch(startGetSession());
  };

  const handleDeleteSession = (): void => {
    dispatch(startDeleteSession());
  };

  return (
    <AppWrapper type="flex" justify="center">
      <StyledCard title="Todo List">
        <Button onClick={handleGetSession}>New session</Button>
        <Button onClick={handleDeleteSession}>Delete session</Button>
        <List
          dataSource={todoData}
          renderItem={item => (
            <Suspense fallback={<p>Loading...</p>}>
              <TodoItem todoId={item.id} isCompleted={item.isCompleted}>
                {item.text}
              </TodoItem>
            </Suspense>
          )}
        />
        <br />
        <StyledForm onSubmit={onSubmit}>
          <Row type="flex" justify="space-between">
            <Col span={17}>
              <Input
                name="todoTitle"
                type="text"
                placeholder="Add a todo!"
                onChange={handleChange}
                value={todoInput}
              />
            </Col>
            <Col span={6}>
              <Button htmlType="submit" type="primary" ghost>
                Add Todo
              </Button>
            </Col>
          </Row>
        </StyledForm>
      </StyledCard>
    </AppWrapper>
  );
};

const mapDispatchToProps = dispatch => ({
  startAddTodo: todo => dispatch(startAddTodo(todo)),
  startGetSession: () => dispatch(startGetSession()),
  startSetTodos: () => dispatch(startSetTodos()),
  startDeleteSession: () => dispatch(startDeleteSession()),
});

const mapStateToProps = state => {
  return { todos: state.todos };
};

export default TodoApp;
