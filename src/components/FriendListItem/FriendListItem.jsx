import PropTypes from 'prop-types';
import { FaCircle } from 'react-icons/fa';

import { Item, Status, Name } from './FriendListItem.styled';

export const FriendListItem = ({ friend: { isOnline, avatar, name } }) => {
    return (
        <Item>
            <Status isOnline={isOnline}><FaCircle/></Status>
            <img src={avatar} alt="User avatar" width="48" />
            <Name>{name}</Name>
        </Item>
    );
};

FriendListItem.propTypes = {
    friend: PropTypes.shape({
        isOnline: PropTypes.bool.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    }).isRequired,
};