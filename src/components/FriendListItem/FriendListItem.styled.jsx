import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 30px;
  margin: 0 auto;
  padding: 20px;
  width: 480px;
  border-radius: 4px;
  box-shadow: -1px -2px 4px #c6d4f1, 2px 2px 8px #8c9fe2;

  :not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const Status = styled.span`
  color: ${props => (props.isOnline ? 'green' : 'red')};
`;

export const Name = styled.p`
  font-size: 24px;
`;
