import css from './FriendList.module.css';
import PropTypes from 'prop-types';

export const Item = ({...friend}) => {
  return (
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
  );
};

Item.propTypes = {
  friend: PropTypes.arrayOf({
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired
  }).isRequired
};
