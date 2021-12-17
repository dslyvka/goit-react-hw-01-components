import FriendListItem from './FriendListItem';
import { FriendListUl } from './FriendList.styled';

function FriendList({ friendList }) {
  return (
    <FriendListUl>
      <FriendListItem friends={friendList} />
    </FriendListUl>
  );
}

export default FriendList;
