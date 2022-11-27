import styled from 'styled-components';

export const StatisticCard = styled.section`
  margin: 50px auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 400px;
  height: 100%;

  background-color: white;
  border-radius: 5px;
`;

export const StatisticTitel = styled.h2`
  font-size: 40px;
  color: grey;
`;

export const StatisticList = styled.ul`
  width: 400px;
  display: flex;

  justify-content: center;
  align-items: center;
`;

export const StatisticItem = styled.li`
  width: calc(100% / 5);
  display: flex;
  flex-direction: column;
  padding: 20px;

  box-shadow: 0 0 2px rgb(91, 89, 89);
`;

export const StatisticData = styled.span`
  font-size: 20px;
  color: grey;
`;
