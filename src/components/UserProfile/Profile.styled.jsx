import styled from 'styled-components';

export const ProfileContainer = styled.div`
   margin: 0 auto 30px;
   padding: 30px;
   width: 480px;
   border-radius: 4px;
   box-shadow: -1px -2px 4px #c6d4f1, 2px 2px 8px #8c9fe2;
   }
`;

export const Descr = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  font-size: 18px;
`;

export const Avatar = styled.img`
  width: 280px;
  border-radius: 50%;
  box-shadow: -1px -2px 4px #c6d4f1, 2px 2px 8px #8c9fe2;
`;

export const Name = styled.ul`
  font-size: 32px;
`;

export const StatsList = styled.ul`
  display: flex;
  margin-top: 30px;
  background-color: #9c9fe2;
  border-radius: 4px;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: 10px 0;
  width: 140px;
`;

export const Quantity = styled.span`
  font-size: 24px;
`;
