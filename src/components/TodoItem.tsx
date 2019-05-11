import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startToggleTodo } from '../actions';
import { List, Checkbox } from 'antd';
import styled from 'styled-components';

const Todo = styled(List.Item)`
  cursor: pointer;
  transition: all 0.3s;
  padding-left: 5px;
  text-decoration-line: ${props => (props.isCompleted ? 'line-through' : 'none')};
  display: flex;
  justify-content: space-between;
`;

const StyledSpan = styled.span`
  padding-right: 6px;
`

interface Props {
  todoId: string;
  isCompleted: boolean;
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
        <Checkbox type="danger" checked={isCompleted} />
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
