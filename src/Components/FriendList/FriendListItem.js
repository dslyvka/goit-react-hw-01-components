import PropTypes from 'prop-types';
import { Status } from './FriendList.styled';

// function FriendListItem({ friends }) {
//   return friends.map(friend => (
//     <li key={friend.id}>
//       <Status
//         className={'status ' + friend.isOnline.toString()}
//         status={friend.isOnline ? 'online' : 'offline'}
//       ></Status>
//       <img src={friend.avatar} alt="User avatar" width="48" />
//       <p>{friend.name}</p>
//     </li>
//   ));
// }

function FriendListItem({ friend }) {
  return (
    <li key={friend.id}>
      <Status
        className={'status ' + friend.isOnline.toString()}
        status={friend.isOnline ? 'online' : 'offline'}
      ></Status>
      <img src={friend.avatar} alt="User avatar" width="48" />
      <p>{friend.name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
    }),
  ),
};

export default FriendListItem;
