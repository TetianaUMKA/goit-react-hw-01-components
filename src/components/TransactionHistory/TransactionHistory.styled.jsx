import styled from 'styled-components';

export const Table = styled.table`
  margin: 0 auto;
  padding: 20px;
  width: 480px;
  border-radius: 4px;
  box-shadow: -1px -2px 3px #c6d4f1, 2px 3px 8px #8c9fe2;
`;

export const ColumnTitle = styled.th`
  padding: 10px 0;
  background-color: #8c9fe2;
`;

export const InfoList = styled.tr`
  background-color: ${props => (props.idx % 2 === 0 ? '#EEEEEE' : '#c6d4f1')};
`;

export const InfoItem = styled.td`
  padding: 4px;
  padding-left: 40px;
  width: 160px;
`;
