import { FriendListItem } from './FriendListItem';
import PropTypes from 'prop-types';

export const FriendList = ({ items }) => {
    return (
        <ul>
            {items.map((item) => (
                <FriendListItem
                    key={item.id}
                    isOnline={item.isOnline}
                    avatar={item.avatar}
                    name={item.name}
                />
            ))}
        </ul>
    );
};

FriendList.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
      })  
    ).isRequired,
}