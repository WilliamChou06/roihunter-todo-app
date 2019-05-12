import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startToggleTodo } from '../../actions';
import { Checkbox } from 'antd';
import { Todo, StyledSpan } from './style';

interface Props {
  todoId: string;
  isCompleted?: boolean;
  children: any;
  startToggleTodo(id: string): any;
}
class TodoItem extends Component<Props> {
  handleToggleTodo = id => {
    this.props.startToggleTodo(id);
  };

  render() {
    const { todoId, isCompleted, children } = this.props;
    return (
      <Todo
        onClick={() => {
          this.handleToggleTodo(todoId);
        }}
        isCompleted={isCompleted}
      >
        <StyledSpan>{children}</StyledSpan>
        <Checkbox checked={isCompleted} />
      </Todo>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  startToggleTodo: id => dispatch(startToggleTodo(id))
});

export default connect(
  undefined,
  mapDispatchToProps
)(TodoItem);
