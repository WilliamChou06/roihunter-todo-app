import styled from 'styled-components';
import { List } from 'antd';

export const Todo = styled(List.Item)`
  cursor: pointer;
  transition: all 0.3s;
  padding-left: 5px;
  text-decoration-line: ${props =>
    props.isCompleted ? 'line-through' : 'none'};
  display: flex;
  justify-content: space-between;
`;

export const StyledSpan = styled.span`
  padding-right: 6px;
`;
