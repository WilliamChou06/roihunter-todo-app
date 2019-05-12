import styled from 'styled-components';
import {Card, Row} from 'antd';


export const StyledCard = styled(Card)`
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

export const StyledForm = styled.form`
padding-left: 12px;
padding-right: 24px;
`;

export const AppWrapper = styled(Row)`
height: 100vh;
align-content: center;
`;
