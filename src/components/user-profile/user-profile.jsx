import { Description, Name, Tag, Stats, ListElement } from './Profile.styled';
import PropTypes from 'prop-types'
export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div class="profile">
      <Description>
        <img src={avatar} alt="User avatar" class="avatar" />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <p class="location">{location}</p>
      </Description>

      <Stats>
        <ListElement>
          <span class="label">Followers </span>
          <span class="quantity">{stats.followers}</span>
        </ListElement>
        <ListElement>
          <span class="label">Views </span>
          <span class="quantity">{stats.views}</span>
        </ListElement>
        <ListElement>
          <span class="label">Likes </span>
          <span class="quantity">{stats.likes}</span>
        </ListElement>
      </Stats>
    </div>
  );
};
Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired
};

