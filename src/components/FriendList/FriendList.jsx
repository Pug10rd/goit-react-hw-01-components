import css from './FriendList.module.css';
export const FriendList = ({ friends, avatar, name, isOnline }) => {
  return (
    <ul className="friend-list">
      {friends.map(friend => (
        <li className={css.listItem} key={friend.id}>
          <span
            className={friend.isOnline ? `${css.online}` : `${css.offline}`}
          ></span>
          <img
            className="avatar"
            src={friend.avatar}
            alt="User avatar"
            width="48"
          />
          <p className="name">{friend.name}</p>
        </li>
      ))}
    </ul>
  );
};
