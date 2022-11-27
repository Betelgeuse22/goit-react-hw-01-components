import PropTypes from 'prop-types';
import {
  ProfifeCard,
  ProfileInfo,
  ProfileName,
  ProfileDescription,
  ProfileFoto,
  StatsList,
  StatsItem,
  StatsName,
  StatsCounter,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfifeCard>
      <ProfileInfo>
        <ProfileFoto src={avatar} alt="User avatar" />
        <ProfileName>{username}</ProfileName>
        <ProfileDescription>@{tag}</ProfileDescription>
        <ProfileDescription>{location}</ProfileDescription>
      </ProfileInfo>
      <StatsList>
        <StatsItem>
          <StatsName>Followers</StatsName>
          <StatsCounter>{stats.followers}</StatsCounter>
        </StatsItem>
        <StatsItem>
          <StatsName>Views</StatsName>
          <StatsCounter>{stats.views}</StatsCounter>
        </StatsItem>
        <StatsItem>
          <StatsName>Likes</StatsName>
          <StatsCounter>{stats.likes}</StatsCounter>
        </StatsItem>
      </StatsList>
    </ProfifeCard>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};
