import PropTypes from 'prop-types';

import { ProfileContainer, Descr, Avatar, Name, StatsList, StatsItem, Quantity } from './Profile.styled';

export const Profile = ({ user: { username, tag, location, avatar, stats } }) => {
    return (
        <ProfileContainer>
            <Descr>
                <Avatar src={avatar} alt="User avatar" />
                <Name>{username}</Name>
                <p>@{tag}</p>
                <p>{location}</p>
            </Descr>
            <StatsList>
                <StatsItem><span>Followers</span><Quantity>{stats.followers}</Quantity></StatsItem>
                <StatsItem><span>Views</span><Quantity>{stats.views}</Quantity></StatsItem>
                <StatsItem><span>Likes</span><Quantity>{stats.likes}</Quantity></StatsItem>
            </StatsList>   
        </ProfileContainer>
    );
};

Profile.propTypes = {
    user: PropTypes.shape({
        username: PropTypes.string.isRequired,
        tag: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        stats: PropTypes.shape({
            followers: PropTypes.number.isRequired,
            views: PropTypes.number.isRequired,
            likes: PropTypes.number.isRequired,
        }).isRequired,
    }).isRequired,
};