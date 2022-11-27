import PropTypes from 'prop-types';

import {
  FriendWrap,
  FriendPhoto,
  FriendName,
  FriendIsOnline,
} from './Friend.styled';

export const Friend = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <FriendWrap>
      <FriendIsOnline isOnline={isOnline}></FriendIsOnline>
      <FriendPhoto src={avatar} alt="User avatar" width="48" />
      <FriendName>{name}</FriendName>
    </FriendWrap>
  );
};

Friend.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};
