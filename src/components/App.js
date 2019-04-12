import React, { Component } from 'react';
import { Button, Card, Row, Col, Input, List } from 'antd';
import { connect } from 'react-redux';
import styled from 'styled-components';
import {
  startAddTodo,
  startGetSession,
  startSetTodos,
  startDeleteSession
} from '../actions';
import TodoItem from './TodoItem';

const StyledCard = styled(Card)`
  border-radius: 6px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18);
  overflow: hidden;
  min-height: 360px;
  min-width: 340px;
  max-width: 340px;

  .ant-card-body {
    padding: 0;
  }

  .ant-card-head-title {
    text-align: center;
    font-size: 18px;
  }

  .ant-spin-container {
    height: 240px;
    overflow-y: auto;
    overflow-x: hidden;

    .ant-list-item {
      word-break: break-all;
      padding-left: 12px;
      padding-right: 12px;
    }
  }
`;

const StyledForm = styled.form`
  padding-left: 12px;
  padding-right: 24px;
`;

const AppWrapper = styled(Row)`
  height: 100vh;
  align-content: center;
`;

class App extends Component {
  state = {
    todoInput: ''
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
              <TodoItem todoId={item.id} isCompleted={item.isCompleted}>
                {item.text}
              </TodoItem>
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
