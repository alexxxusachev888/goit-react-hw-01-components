import PropTypes from 'prop-types';
import { Wrapper, Descr, Avatar, Name, Tag, Location, Stats, StatsItem, StatsLabel, StatsQty } from './Profile.styled'


export function Profile({ username, tag, location, avatar, stats }) {
    return (<Wrapper>
    <Descr>
      <Avatar src={avatar} alt={username} />
      <Name>{username}</Name>
      <Tag>{tag}</Tag>
      <Location>{location}</Location>
    </Descr>
  
    <Stats>
      <StatsItem>
        <StatsLabel>Followers</StatsLabel>
        <StatsQty>{stats.followers}</StatsQty>
      </StatsItem>
      <StatsItem>
        <StatsLabel>Views</StatsLabel>
        <StatsQty>{stats.views}</StatsQty>
      </StatsItem>
      <StatsItem>
        <StatsLabel>Likes</StatsLabel>
        <StatsQty>{stats.likes}</StatsQty>
      </StatsItem>
    </Stats>
  </Wrapper>)

}

Profile.propTypes = {
    username: PropTypes.string.isRequired, 
    tag: PropTypes.string.isRequired, 
    location: PropTypes.string.isRequired, 
    avatar: PropTypes.string.isRequired, 
    stats:  PropTypes.shape({ 
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    })
}