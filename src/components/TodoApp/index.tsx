import React, { Component, Suspense, lazy } from 'react';
import { Button, Row, Col, Input, List } from 'antd';
import { StyledCard, StyledForm, AppWrapper } from './style';
import { connect } from 'react-redux';
import {
  startAddTodo,
  startGetSession,
  startSetTodos,
  startDeleteSession
} from '../../actions';
import { Todo } from '../../types';

const TodoItem = lazy(() => import('../TodoItem'));

interface Props {
  startGetSession(): any;
  startDeleteSession(): any;
  startSetTodos(): any;
  startAddTodos(): any;
  startAddTodo(todo: object): any;
  todos: Todo[]

}
interface State {
  todoInput: String;
  todos: Array<Object>;
}

class App extends Component<Props, State> {
  state = {
    todoInput: '',
    todos: []
  };

  handleChange = e => {
    const todoInput = e.target.value;
    this.setState({ todoInput });
  };

  onSubmit = e => {
    e.preventDefault();

    this.props.startAddTodo({ text: this.state.todoInput, urgency: 5 });
    this.setState({ todoInput: '' });
    console.log(this.state.todos);
  };

  renderTodos() {
    this.state.todos.map(todo => todo);
  }

  handleGetSession = () => {
    this.props.startGetSession();
  };

  handleDeleteSession = () => {
    this.props.startDeleteSession();
  };

  componentDidMount() {
    this.props.startSetTodos();
  }

  render() {
    return (
      <AppWrapper type="flex" justify="center">
        <StyledCard title="Todo List">
          <Button onClick={this.handleGetSession}>New session</Button>
          <Button onClick={this.handleDeleteSession}>Delete session</Button>
          <List
            dataSource={this.props.todos}
            renderItem={item => (
              <Suspense fallback={<p>Loading...</p>}>
                <TodoItem todoId={item.id} isCompleted={item.isCompleted}>
                  {item.text}
                </TodoItem>
              </Suspense>
            )}
          />
          <br />
          <StyledForm onSubmit={this.onSubmit}>
            <Row type="flex" justify="space-between">
              <Col span={17}>
                <Input
                  name="todoTitle"
                  type="text"
                  placeholder="Add a todo!"
                  onChange={this.handleChange}
                  value={this.state.todoInput}
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
  }
}

const mapDispatchToProps = dispatch => ({
  startAddTodo: todo => dispatch(startAddTodo(todo)),
  startGetSession: () => dispatch(startGetSession()),
  startSetTodos: () => dispatch(startSetTodos()),
  startDeleteSession: () => dispatch(startDeleteSession())
});

const mapStateToProps = state => {
  return { todos: state.todos };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
