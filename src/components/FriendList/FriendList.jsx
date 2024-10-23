import s from './FriendList.module.css'
import FriendListItem from '../FriendListItem/FriendListItem.jsx';

const FriendList = ({ friends }) => {
  return (
   <ul className={s.friend_list}>
  {friends.map(friend => (
    <li key={friend.id} className={s.friend_list_item}>
      <FriendListItem
        avatar={friend.avatar}
        name={friend.name}
        isOnline={friend.isOnline}
      />
    </li>
  ))}
</ul>
  );
};

export default FriendList;