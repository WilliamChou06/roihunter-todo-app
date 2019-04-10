import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleTodo } from '../actions';
import { List, Checkbox } from 'antd';
import styled from 'styled-components';

const Todo = styled(List.Item)`
  cursor: pointer;
  transition: all 0.3s;
  padding-left: 5px;

  &:hover {
    background: #f1f1f1;
  }
`;

class TodoItem extends Component {

  handleToggleTodo = (id) => {
    this.props.toggleTodo(id)
  }

  render() {
    return (
      <Todo onClick={() => {
        this.handleToggleTodo(this.props.todoId)
      }}>
        {this.props.children}
        <Checkbox type="danger" checked={this.props.completed} />
      </Todo>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
});



export default connect(undefined, mapDispatchToProps)(TodoItem);
