import styled from 'styled-components';

export const Friends = styled.ul`
  margin: 50px auto;

  display: flex;
  gap: 5px;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 400px;
  height: 100%;

  border-radius: 5px;
`;

export const FriendItem = styled.li`
  padding: 20px;

  background-color: white;
  border: 1px rgba(0, 0, 0, 0.26) solid;
  border-radius: 5px;

  width: 100%;
  height: 80px;
`;
