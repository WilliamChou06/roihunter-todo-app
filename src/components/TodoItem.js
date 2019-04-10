import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleTodo } from '../actions';
import { List, Checkbox } from 'antd';
import styled from 'styled-components';

const Todo = styled(List.Item)`
  cursor: pointer;
  transition: all 0.3s;
  padding-left: 5px;
  text-decoration-line: ${props => (props.completed ? 'line-through' : 'none')};
  display: flex;
  justify-content: space-between;
`;

const StyledSpan = styled.span`
  padding-right: 6px;
`

class TodoItem extends Component {
  handleToggleTodo = id => {
    this.props.toggleTodo(id);
  };

  render() {
    const { todoId, completed, children } = this.props;
    return (
      <Todo
        onClick={() => {
          this.handleToggleTodo(todoId);
        }}
        completed={completed}
      >
        <StyledSpan>{children}</StyledSpan>
        <Checkbox type="danger" checked={completed} />
      </Todo>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
});

export default connect(
  undefined,
  mapDispatchToProps
)(TodoItem);
