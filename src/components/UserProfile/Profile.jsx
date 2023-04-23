import PropTypes from 'prop-types';

import { ContainerProfile } from './Profile.styled';
import { DescrProfile } from './Profile.styled';
import { ListStats } from './Profile.styled';


export const Profile = ({ user: { username, tag, location, avatar, stats } }) => {
    return (
        <ContainerProfile>
            <DescrProfile>
                <img src={avatar} alt="User avatar" class="avatar" />
                <p class="name">{username}</p>
                <p class="tag">{tag}</p>
                <p class="location">{location}</p>
            </DescrProfile>
            <ListStats>
                <li><span class="label">Followers</span><span class="quantity">{stats.followers}</span></li>
                <li><span class="label">Views</span><span class="quantity">{stats.views}</span></li>
                <li><span class="label">Likes</span><span class="quantity">{stats.likes}</span></li>
            </ListStats>   
        </ContainerProfile>
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