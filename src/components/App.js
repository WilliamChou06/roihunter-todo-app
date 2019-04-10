import React, { Component } from 'react';
import { Button, Card, Row, Col, Input, List } from 'antd';
import { connect } from 'react-redux';
import { addTodo } from '../actions';
import TodoItem from './TodoItem';

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

    this.props.addTodo(this.state.todoInput);
    this.setState({ todoInput: '' });
    console.log(this.state.todos);
  };

  toggleTodo = () => {};

  renderTodos() {
    this.state.todos.map(todo => todo);
  }

  render() {
    return (
      <>
        <Row type="flex" justify="center">
          <Col span={6}>
            <Card title="Todo List">
              <List
                dataSource={this.props.todos}
                renderItem={item => (
                  <TodoItem todoId={item.id} completed={item.completed}>{item.text}</TodoItem>
                )}
              />
              <form onSubmit={this.onSubmit}>
                <Row type="flex" justify="space-between">
                  <Col span={17}>
                    <Input
                      name="todoTitle"
                      type="text"
                      placeholder="Something to do!"
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
              </form>
            </Card>
          </Col>
        </Row>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addTodo: todo => dispatch(addTodo(todo))
});

const mapStateToProps = state => {
  return { todos: state.todos };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
