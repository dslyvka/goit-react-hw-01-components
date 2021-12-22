import FriendListItem from './FriendListItem';
import { FriendListUl } from './FriendList.styled';

// function FriendList({ friendList }) {
//   return (
//     <FriendListUl>
//       <FriendListItem friends={friendList} />
//     </FriendListUl>
//   );
// }

function FriendList({ friendList }) {
  return (
    <FriendListUl>
      {friendList.map(friend => (
        <FriendListItem friend={friend} />
      ))}
    </FriendListUl>
  );
}

export default FriendList;
