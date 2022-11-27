import PropTypes from 'prop-types';

import { Friend } from './Friend';

import { Friends, FriendItem } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <Friends>
      {friends.map(friend => (
        <FriendItem key={friend.id}>
          <Friend friend={friend} />
        </FriendItem>
      ))}
    </Friends>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
