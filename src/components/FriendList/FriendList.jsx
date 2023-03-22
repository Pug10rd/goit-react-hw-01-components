import { Item } from './Friend-List-Item';
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(friend => ( 
        <Item {...friend}/>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array.isRequired
};