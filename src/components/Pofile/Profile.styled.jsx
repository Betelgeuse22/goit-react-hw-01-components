import styled from 'styled-components';

export const ProfifeCard = styled.div`
  margin: 50px auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 400px;
  height: 100%;

  background-color: white;
  border-radius: 20px;
`;

export const ProfileInfo = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ProfileName = styled.p`
  font-size: 40px;
`;

export const ProfileDescription = styled.p`
  color: grey;
`;

export const ProfileFoto = styled.img`
  border: 2px solid black;
  border-radius: 50%;
  width: 250px;
  height: 250px;
`;

export const StatsList = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(241, 241, 241, 0.833);
  border-top: 1px solid #d3d5e3;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 20px;
  font-size: 20px;
  justify-content: center;
  align-items: center;
  background-color: rgba(241, 241, 241, 0.833);

  &:not(:last-child) {
    border-right: 1px solid #d3d5e3;
  }
`;
export const StatsName = styled.span`
  color: grey;
`;

export const StatsCounter = styled.span`
  font-size: 38px;
`;
