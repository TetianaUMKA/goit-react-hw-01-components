import PropTypes from 'prop-types';

export const FriendListItem = ({ friend: { isOnline, avatar, name } }) => {
    return (
        <li>
            <span class="status">{isOnline}</span>
            <img class="avatar" src={avatar} alt="User avatar" width="48" />
            <p class="name">{name}</p>
        </li>
    );
};

FriendListItem.propTypes = {
    friend: PropTypes.shape({
        isOnline: PropTypes.bool.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    }).isRequired,
};