import PropTypes from 'prop-types';
import {
  ProfileContainer,
  DescriptionContainer,
  Avatar,
  Description,
  DescriptionText,
  DescriptionStats,
} from './Profile.styled';

function Profile({
  username,
  tag,
  location,
  avatar,
  followers = 0,
  views = 0,
  likes = 0,
}) {
  return (
    <ProfileContainer>
      <DescriptionContainer className="description">
        <Avatar src={avatar} alt="User avatar" className="avatar" width="240" />
        <Description>
          <DescriptionText className="name">{username}</DescriptionText>
          <DescriptionText className="tag">@{tag}</DescriptionText>
          <DescriptionText className="location">{location}</DescriptionText>
        </Description>
      </DescriptionContainer>

      <DescriptionStats className="stats">
        <li>
          <span className="label">Followers</span>
          <span className="quantity"> {followers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="quantity"> {views}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="quantity"> {likes}</span>
        </li>
      </DescriptionStats>
    </ProfileContainer>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string,
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};

export default Profile;
