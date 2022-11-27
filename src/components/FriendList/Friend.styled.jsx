import styled from 'styled-components';

export const FriendWrap = styled.div`
  display: flex;
  flex-direction: row;
`;

export const FriendPhoto = styled.img`
  margin: 0 10px;
`;

export const FriendName = styled.p`
  font-size: 25px;
  margin-left: 20px;
`;

export const FriendIsOnline = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ isOnline }) => (isOnline ? '#399039' : '#ef3535')};
  border-radius: 50px;

  margin: 10px;
  width: 20px;
  height: 20px;
`;
